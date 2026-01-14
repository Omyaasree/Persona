"use client";

import { Bell, MessageCircle, User, SquarePlus } from "lucide-react";

export default function Navbar({ onCreateClick }) {
  return (
    <nav className="sticky top-0 z-50 h-14 border-b border-neutral-800 bg-black flex items-center px-6 relative">

      {/* Left */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">Persona</span>
      </div>

      {/* Center */}
      <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-xl px-4">
        <input
          type="text"
          placeholder="Search Persona"
          className="w-full bg-neutral-900 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-neutral-700"
        />
      </div>

      {/* Right */}
      <div className="ml-auto flex items-center gap-4">
        <button
          onClick={onCreateClick}
          className="flex items-center gap-2 hover:text-gray-300"
        >
          <SquarePlus size={20} />
          <span>Create</span>
        </button>

        <Bell size={20} className="hover:text-gray-300" />
        <MessageCircle size={20} className="hover:text-gray-300" />
        <User size={20} className="hover:text-gray-300" />
      </div>
    </nav>
  );
}
