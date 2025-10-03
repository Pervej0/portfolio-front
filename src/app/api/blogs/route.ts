import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type BlogType = {
  author: string;
  title: string;
  comment: number;
  like: number;
  img: string;
  tags: string[];
  desc: string;
};

// Simple validation function
function validateBlog(blog: BlogType) {
  if (!blog.author || typeof blog.author !== "string") {
    return "Author is required and must be a string.";
  }
  if (!blog.title || typeof blog.title !== "string" || blog.title.length < 5) {
    return "Title is required and must be at least 5 characters.";
  }
  if (typeof blog.comment !== "number" || blog.comment < 0) {
    return "Comment must be a non-negative number.";
  }
  if (typeof blog.like !== "number" || blog.like < 0) {
    return "Like must be a non-negative number.";
  }
  if (!blog.img || typeof blog.img !== "string") {
    return "Image URL is required and must be a string.";
  }
  if (!blog.desc || typeof blog.desc !== "string" || blog.desc.length < 20) {
    return "Description is required and must be at least 20 characters.";
  }
  return null; // valid
}

// GET all blogs
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("my_profile");
    const blogs = await db.collection("blogs").find({}).toArray();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST a new blog
export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("my_profile");
    const blog: BlogType = await req.json();

    const errorMsg = validateBlog(blog);
    if (errorMsg) {
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const result = await db.collection("blogs").insertOne({
      ...blog,
      createdAt: new Date(),
    });

    // Return inserted document
    const insertedBlog = {
      _id: result.insertedId,
      ...blog,
    };

    return NextResponse.json(insertedBlog);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
