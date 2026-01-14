const API_BASE = "http://localhost:4000";

export async function createPost({ title, content }) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    throw new Error("Failed to create post");
  }

  return res.json();
}

export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
