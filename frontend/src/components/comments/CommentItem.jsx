"use client";

import { useState } from "react";
import { timeAgo } from "../../lib/time";
import CommentForm from "./CommentForm";

export default function CommentItem({ comment, postId }) {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="mt-3 ml-4 border-l border-neutral-800 pl-4">
      <div className="text-sm text-gray-300">
        <span className="font-medium">{comment.author.username}</span>
        <span className="mx-2 text-xs text-gray-500">
          {timeAgo(comment.createdAt)}
        </span>
      </div>

      <p className="text-sm mt-1">{comment.content}</p>

      <button
        onClick={() => setShowReply(!showReply)}
        className="text-xs text-gray-400 mt-1 hover:underline"
      >
        Reply
      </button>

      {showReply && (
        <CommentForm postId={postId} parentId={comment.id} />
      )}

      {comment.replies?.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          postId={postId}
        />
      ))}
    </div>
  );
}
