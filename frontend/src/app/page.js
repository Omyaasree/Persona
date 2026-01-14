import PostCard from "../components/feed/PostCard";

async function getPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-2xl mx-auto mt-6 px-4 space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
