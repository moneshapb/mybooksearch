export class BookDetail {
    title: string;
    infoLink: string;
    imageLinks: string;

    constructor(obj?: any) {
        this.title = obj && obj.title || null;
        this.infoLink = obj && obj.infoLink || null;
        this.imageLinks = obj && obj.imageLinks || null;
    }
}
