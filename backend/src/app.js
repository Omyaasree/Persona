import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postsRoutes);

app.use("/api/comments", commentRoutes);

export default app;
