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

// Example static blog data
const blogContent: BlogType[] = [
  {
    author: "admin",
    title: "Behind Great Product Design",
    comment: 1,
    like: 4,
    img: "https://i.ibb.co/Rv6QmBT/ITHelp.png",
    tags: ["tech", "social", "software"],
    desc: "Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.",
  },
  {
    author: "admin",
    title: "On ye great do child sorry ",
    comment: 2,
    like: 5,
    img: "https://i.ibb.co/m8zVfpP/g1.jpg",
    tags: ["tech", "social"],
    desc: "Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.",
  },
  {
    author: "admin",
    title: "Seen you eyes son",
    comment: 3,
    like: 9,
    img: "https://i.ibb.co/sPWsFW0/newBooks.png",
    tags: ["tech", "software"],
    desc: "Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.Sed vehicula ac est quis tempus. Aliquam nec elit a velit dictum gravida. Pellentesque orci odio, imperdiet ac elementum in, pharetra quis nibh.Aliquam nec elit a velit dictum gravida. Pellentesque orci odio.",
  },
];

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

    const validBlogs = [];

    for (const blog of blogContent) {
      const errorMsg = validateBlog(blog);
      if (errorMsg) {
        return NextResponse.json({ error: errorMsg }, { status: 400 });
      }
      validBlogs.push({
        ...blog,
        createdAt: new Date(),
      });
    }

    const result = await db.collection("blogs").insertMany(validBlogs);

    return NextResponse.json(result); // returns info about inserted docs
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
