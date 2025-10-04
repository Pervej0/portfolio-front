"use server";

import { headers } from "next/headers";

export const blogDataUpdate = async (blogId: string, likes: number) => {
  const headerList = headers();
  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  await fetch(`${protocol}://${host}/api/blogs/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ like: likes + 1 }),
  });
};
