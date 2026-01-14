"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import CreatePostModal from "./feed/CreatePostModal";

export default function AppShell({ children }) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <>
      <Navbar onCreateClick={() => setIsCreateOpen(true)} />
      {children}

      {isCreateOpen && (
        <CreatePostModal onClose={() => setIsCreateOpen(false)} />
      )}
    </>
  );
}
