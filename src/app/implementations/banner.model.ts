import { Banner } from "../interfaces/banner.interface";

export class BannerImpl implements Banner{
    title: string
    image: string

    constructor(title: string, image: string) {
        this.title = title
        this.image = image
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

}