"use client";

import { useEffect, useState } from "react";
import { timeAgo } from "../../lib/time";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";
import { API_BASE } from "@/lib/api";
import { MessageCircle } from "lucide-react";

export default function PostCard({ post }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (!showComments) return;

    async function fetchComments() {
      const res = await fetch(
        `${API_BASE}/api/comments/post/${post.id}`
      );
      const data = await res.json();
      setComments(data);
    }

    fetchComments();
  }, [showComments, post.id]);

  return (
    <div className="border border-neutral-800 rounded-xl p-4">
      
      {/* Header */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
        <span className="font-medium text-gray-300">p/Persona</span>
        <span>•</span>
        <span>{timeAgo(post.createdAt)}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{post.title}</h3>

      {/* Content */}
      {post.content && (
        <p className="mt-2 text-gray-300">{post.content}</p>
      )}

      {/* Action bar */}
      <div className="flex items-center gap-6 mt-4 text-sm text-gray-400">
        <button
          onClick={() => setShowComments((prev) => !prev)}
          className="flex items-center gap-2 hover:text-white">
          <MessageCircle size={16} />
          <span>Comment</span>
        </button>
      </div>

      {/* Comment section (toggle) */}
      {showComments && (
        <div className="mt-4 border-t border-neutral-800 pt-4">
          <CommentForm postId={post.id} parentId={null} />
          <CommentList comments={comments} postId={post.id} />
        </div>
      )}
    </div>
  );
}
