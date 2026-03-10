import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes"

const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world 12");
});

app.use("/products", productsRoutes);
app.use("/auth", authRoutes)

async function startServer() {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer()
