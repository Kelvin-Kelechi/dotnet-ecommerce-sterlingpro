import axios from "axios";
import { Product, CartItem } from "../types";

const API_BASE_URL = "http://localhost:5133/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get("/products");
    return response.data;
  },
};

export const cartApi = {
  getCart: async (): Promise<CartItem[]> => {
    const response = await api.get("/cart");
    return response.data;
  },

  addToCart: async (productId: number, quantity: number): Promise<void> => {
    await api.post("/cart/add", { productId, quantity });
  },

  removeFromCart: async (cartItemId: number): Promise<void> => {
    await api.post("/cart/remove", cartItemId);
  },

  updateCart: async (cartItemId: number, quantity: number): Promise<void> => {
    await api.post("/cart/update", { id: cartItemId, quantity });
  },
};
