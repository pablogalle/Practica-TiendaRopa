import { Product } from "./product.interface";

export interface ProductInfo extends Product{
    sizes: boolean[]
}