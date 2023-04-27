import { Category } from "../interfaces/category.interface";

export class CategoryImpl implements Category {
    name: string;
    amount: number;
    image: string;

    constructor(name: string, amount: number, image: string) {
        this.name = name
        this.amount = amount
        this.image = image
    }
    

}