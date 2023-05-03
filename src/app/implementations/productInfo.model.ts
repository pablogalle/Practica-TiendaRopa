import { ProductInfo } from "../interfaces/productInfo.interface";

export class ProductInfoImpl implements ProductInfo {
    public id: number;
    public name: string;
    public category: string;
    public price: number;
    public discount: number;
    public image: string;
    public sizes: boolean[];
    public wishlist: boolean;
   
    constructor(
        sizes: boolean[],
        id: number,
        name: string,
        category: string,
        price: number,
        discount: number,
        image: string,
        wishlist: boolean
    ) {
        this.sizes = sizes
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.discount = discount
        this.image = image
        this.wishlist = wishlist
    }
 ;
    
}