"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreatePostModal({ onClose }) {
  const router = useRouter();

  // form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!title) return;

    setLoading(true);

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            content,
          }),
        }
      );

      onClose();
      router.refresh(); // refresh home feed
    } catch (err) {
      console.error("Failed to create post", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-neutral-900 rounded-xl border border-neutral-800 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Create post</h2>
          <button onClick={onClose}>
            <X size={20} className="hover:text-gray-300" />
          </button>
        </div>

        {/* Community selector (UI only for now) */}
        <button className="mb-4 px-4 py-2 rounded-full bg-neutral-800 text-sm">
          Select a community
        </button>

        {/* Tabs (UI only for now) */}
        <div className="flex gap-6 border-b border-neutral-800 mb-4 text-sm">
          <button className="pb-2 border-b-2 border-blue-500">Text</button>
          <button className="pb-2 text-gray-400">Images & Video</button>
          <button className="pb-2 text-gray-400">Link</button>
          <button className="pb-2 text-gray-400">Poll</button>
        </div>

        {/* Title */}
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-neutral-800 rounded-md px-4 py-2 mb-4 outline-none"
        />

        {/* Body */}
        <textarea
          placeholder="Body text (optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 bg-neutral-800 rounded-md px-4 py-2 outline-none resize-none"
        />

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => submit("DRAFT")}
            disabled={loading}
            className="px-4 py-2 rounded-full bg-neutral-800 disabled:opacity-50"
          >
            Save Draft
          </button>

          <button
            onClick={submit}
            disabled={loading || !title}
            className="px-4 py-2 rounded-full bg-blue-600 disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
