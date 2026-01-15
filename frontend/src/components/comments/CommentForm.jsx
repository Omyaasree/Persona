"use client";

import { useState } from "react";
import { API_BASE } from "@/lib/api";

export default function CommentForm({ postId, parentId }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);

    await fetch(`${API_BASE}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            postId,
            parentId,
            content,
        }),
    });

    setContent("");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={parentId ? "Write a reply..." : "Write a comment..."}
        className="w-full rounded-md bg-neutral-900 border border-neutral-800 p-2 text-sm"
        rows={2}
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-2 text-xs px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700"
      >
        {loading ? "Posting..." : "Post"}
      </button>
    </form>
  );
}
