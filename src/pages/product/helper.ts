import { IProduct } from "../../interfaces";

export const transformProducts = (products: any): IProduct[] =>
  products.map((product: any) => ({
    id: product.id,
    imageUrl: product.image_url,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    ingredients: Object.keys(product.ingredients),
  }));
