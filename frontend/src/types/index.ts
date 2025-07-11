export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  userId: string;
  product?: Product;
}
