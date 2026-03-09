import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/productRoutes";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello world 12");
});

app.use("/products", productsRoutes);

async function startServer() {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer()
