import { Product } from "../interfaces/product.interface";

export class ProductImpl implements Product {
    public id: number;
    public name: string;
    public category: string;
    public price: number;
    public discount: number;
    public image: string;


    constructor(
        id: number,
        name: string,
        category: string,
        price: number,
        discount: number,
        image: string
    ) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.image = image
    }
}