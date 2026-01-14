import prisma from "../lib/prisma.js";

console.log("posts.controller.js loaded");

export async function createPost(req, res) {
  try {
    const { title, content } = req.body;

    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: "system" },
        },
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create post" });
  }
}

export async function getPosts(req, res) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}
