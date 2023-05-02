import { ProductInfo } from "../interfaces/productInfo.interface";

export class ProductInfoImpl implements ProductInfo {
    public id: number;
    public name: string;
    public category: string;
    public price: number;
    public discount: number;
    public image: string;
   
    constructor(
        sizes: boolean[],
        id: number,
        name: string,
        category: string,
        price: number,
        discount: number,
        image: string
    ) {
        this.sizes = sizes
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.image = image
    } sizes: boolean[];

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getDiscount(): number {
        return this.discount;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }
    
}