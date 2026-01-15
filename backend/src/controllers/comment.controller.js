import  prisma  from "../lib/prisma.js";

/**
 * Create comment or reply
 */
export async function createComment(req, res) {
  try {
    const { postId, parentId, content } = req.body;

    // TEMP: replace later with auth middleware
    const userId = req.user?.id || "TEMP_USER_ID";

    if (!postId || !content) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        parentId: parentId || null,
        authorId: userId,
      },
    });

    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create comment" });
  }
}

/**
 * Get nested comments for a post
 */
export async function getPostComments(req, res) {
  try {
    const { postId } = req.params;

    const comments = await prisma.comment.findMany({
      where: {
        postId,
        parentId: null, // ⭐ top-level only
      },
      include: {
        author: {
          select: { username: true },
        },
        replies: {
          include: {
            author: {
              select: { username: true },
            },
            replies: true, // recursive depth
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
}

