import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "../config.js"

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const createSession = async (req, res) =>
{
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: 'Laptop',
            description: "Gaming Laptop"
          },
          currency: 'usd',
          unit_amount: 20000 //200
        },
        quantity: 1
      },
      {
        price_data: {
          product_data: {
            name: 'TV',
            description: "Smart TV"
          },
          currency: 'usd',
          unit_amount: 10000 //200
        },
        quantity: 2
      }
    ],
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  })
  return res.json(session);
}
