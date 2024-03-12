import dotenv from "dotenv";
dotenv.config();
export const PORT = 3000;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
