import { Request, Response } from "express";
import { db } from "../db/index.js";
import { productsTable } from "../db/productsSchema.js";
import { eq } from "drizzle-orm";
import { createProductInsertSchema } from "../validations/productValidations.js";
import _ from 'lodash'

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.select().from(productsTable);
    res.json(products);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    // const data = _.pick(req.body, Object.keys(createProductInsertSchema.shape))
    console.log('req.userId :::', req.userId)
    const [product] = await db.insert(productsTable).values(req.body);
    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    // Remove id from body if present
    const { id: _, ...data } = req.body;
    // const updatedFileds = req.body;
    // const product = await db
    //   .select()
    //   .from(productsTable)
    //   .where(eq(productsTable.id, id));
    // if (product.length === 0) {
    //   return res.status(404).send({ message: "Product not found." });
    // }
    const result = await db
      .update(productsTable)
      .set(data)
      .where(eq(productsTable.id, id));

    // MySQL returns affectedRows
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Fetch updated product
    const product = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id));

    res.json(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const product = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id))
      .limit(1);
    if (product.length === 0) {
      return res.status(404).send({ message: "Product not found." });
    }
    await db.delete(productsTable).where(eq(productsTable.id, id));
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e);
  }
};
