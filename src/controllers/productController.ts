import { Request, Response } from 'express'
import db from '../config/db'

export const listProducts = (req: Request, res: Response) => {
    res.send("listProducts")
}

export const getProductById = (req: Request, res: Response) => {
    res.send("getProductById");
}

export const createProduct = async (req: Request, res: Response) => {
    console.log(req.body)

    await db.query("");

    res.send("createProduct");
}

export const updateProduct = (req: Request, res: Response) => {
    res.send("updateProduct");
}

export const deleteProduct = (req: Request, res: Response) => {
    res.send("deleteProduct");
}