import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import makananRoutes from "./routes/makananRoutes.js";
import merchandiseRoutes from "./routes/merchandiseRoutes.js";
import ulasanRoutes from "./routes/ulasanRoutes.js"; // ← Tambah ini

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/makanan", makananRoutes);
app.use("/api/merchandise", merchandiseRoutes);
app.use("/api/ulasan", ulasanRoutes); // ← Tambah ini

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "API Oleh-Oleh Semar",
    status: "running"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;