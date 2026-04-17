export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
}

export class Product implements IProduct {

    constructor(
        public id: string = '',
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public category: string = '',
        public stock: number = 0
    ) {}

}
