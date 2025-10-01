"use client";

import { ThumbsUp } from "lucide-react";
import React, { useState, useEffect } from "react";

interface ThumbsUpBoxProps {
  like: number;
  blogId: string;
}

const ThumbsUpBox: React.FC<ThumbsUpBoxProps> = ({ like, blogId }) => {
  const [likes, setLikes] = useState(like);
  const [clicked, setClicked] = useState(false);

  // Check on mount if this blog was already liked on this device
  useEffect(() => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
    if (likedBlogs.includes(blogId)) {
      setClicked(true);
    }
  }, [blogId]);

  const handleClick = async () => {
    if (clicked) return;

    try {
      // Optimistic update
      setLikes((prev) => prev + 1);
      setClicked(true);

      // Save blogId in localStorage to prevent multiple likes
      const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
      likedBlogs.push(blogId);
      localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));

      // Send PUT request
      await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ like: likes + 1 }),
      });
    } catch (error) {
      console.error("Failed to update like:", error);
      // rollback if failed
      setLikes((prev) => prev - 1);
      setClicked(false);

      // remove from localStorage if rollback
      const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
      const updated = likedBlogs.filter((id: string) => id !== blogId);
      localStorage.setItem("likedBlogs", JSON.stringify(updated));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={clicked}
        className={`p-1 rounded-md ${
          clicked ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
        }`}
      >
        <ThumbsUp className="h-4 w-4" />
      </button>
      <h5 className="text-lg">: {likes}</h5>
    </div>
  );
};

export default ThumbsUpBox;
