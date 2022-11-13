export class Product {
  uid: number;
  img: Array<string> | string;
  title: string;
  category: string;
  description: string;
  price: number | string;
  currency: string;

  constructor(data: Partial<Product | null> = {}) {
    if(!+data.price) {
      throw new Error(`Price NAN`);
    }

    this.uid = data.uid;
    this.img = data.img;
    this.title = data.title;
    this.category = data.category;
    this.description = data.description;
    this.price = +data.price;
    this.currency = data.currency;
  }
}


