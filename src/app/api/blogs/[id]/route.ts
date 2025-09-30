import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type BlogType = {
  author: string;
  title: string;
  comment: number;
  like: number;
  img: string;
  tags: string[];
  desc: string;
};

// Validation function for update
function validateBlog(blog: BlogType) {
  if (!blog.author || typeof blog.author !== "string")
    return "Author is required.";
  if (!blog.title || typeof blog.title !== "string" || blog.title.length < 5)
    return "Title must be at least 5 characters.";
  if (typeof blog.comment !== "number" || blog.comment < 0)
    return "Comment must be a non-negative number.";
  if (typeof blog.like !== "number" || blog.like < 0)
    return "Like must be a non-negative number.";
  if (!blog.img || typeof blog.img !== "string")
    return "Image URL is required.";
  if (!blog.desc || typeof blog.desc !== "string" || blog.desc.length < 20)
    return "Description must be at least 20 characters.";
  return null;
}

// GET single blog by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("my_profile");

    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(params.id) });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT update single blog
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body: BlogType = await req.json();
    console.log(body, params.id, "xxxxxxx");
    // const errorMsg = validateBlog(body);
    // if (errorMsg)
    //   return NextResponse.json({ error: errorMsg }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("my_profile");

    const result = await db
      .collection("blogs")
      .updateOne(
        { _id: new ObjectId(params.id) },
        { $set: { ...body, updatedAt: new Date() } }
      );

    if (result.matchedCount === 0)
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json({ message: "Blog updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}
