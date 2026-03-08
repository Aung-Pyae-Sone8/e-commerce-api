import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/productRoutes";
import pool from "./config/db.js";
import { initTables } from "./config/initTables";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world 12");
});

app.use("/products", productsRoutes);

async function testDB() {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("Database connected ✅");
  } catch (error) {
    console.error("Database connection failed ❌", error);
  }
}

testDB();

async function startServer() {
  testDB();
  await initTables(); // create tables automatically

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer()
