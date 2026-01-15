"use client";

import CommentItem from "./CommentItem";

export default function CommentList({ comments, postId }) {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-xs text-gray-500 mt-2">
        No comments yet.
      </p>
    );
  }

  return (
    <div className="mt-4">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          postId={postId}
        />
      ))}
    </div>
  );
}
