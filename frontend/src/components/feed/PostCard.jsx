import { timeAgo } from "../../lib/time";

export default function PostCard({ post }) {
  return (
    <div className="border border-neutral-800 rounded-xl p-4">
      
      {/* Header */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
        <span className="font-medium text-gray-300">
          p/Persona
        </span>
        <span>•</span>
        <span>{timeAgo(post.createdAt)}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">
        {post.title}
      </h3>

      {/* Content */}
      {post.content && (
        <p className="mt-2 text-gray-300">
          {post.content}
        </p>
      )}
    </div>
  );
}
