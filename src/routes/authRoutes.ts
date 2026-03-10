import { Router } from "express";
import bcrypt from "bcryptjs";
import { validateData } from "../middlewares/validationMiddleware";
import {
  createUserSchema,
  loginUserSchema,
} from "../validations/userValidations";
import { db } from "../db/index";
import { usersTable } from "../db/usersSchema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register", validateData(createUserSchema), async (req, res) => {
  try {
    const result = createUserSchema.safeParse(req.body);
    // console.log("Zod Result:", result.success ? "Success" : "Failed");
    if (result.success) {
      req.cleanBody = result.data;
    }
    const data = req.cleanBody;
    data.password = await bcrypt.hash(data.password, 10);
    const [user] = await db.insert(usersTable).values(data);

    // @ts-ignore
    delete user.password;

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
});

router.post("/login", validateData(loginUserSchema), async (req, res) => {
  try {
    const result = createUserSchema.safeParse(req.body);
    // console.log("Zod Result:", result.success ? "Success" : "Failed");
    if (result.success) {
      req.cleanBody = result.data;
    }
    const { email, password } = req.cleanBody;
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, String(email)));

    if (!user) {
      res.status(401).json({ error: "Authentication failed" });
      return;
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      res.status(401).json({ error: "Authentication failed" });
      return;
    }

    // create a jwt token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      "your-secret",
      { expiresIn: "30h" },
    );

    // @ts-ignore
    delete user.password;

    res.status(200).json({token, user})
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
});

export default router;
