"use server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const blogDataUpdate = async (blogId: string, likes: number) => {
  await fetch(`${baseUrl}/api/blogs/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ like: likes + 1 }),
  });
};
