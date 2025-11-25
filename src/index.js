import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import makananRoutes from "./routes/makananRoutes.js";
import merchandiseRoutes from "./routes/merchandiseRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/makanan", makananRoutes);
app.use("/api/merchandise", merchandiseRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Oleh-Oleh Semarang" });
});

// Untuk local development
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export untuk Vercel
export default app;