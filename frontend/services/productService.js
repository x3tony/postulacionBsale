class ProductService {
    constructor(){
        this.URI = '/api/product';
    }

    async getProducts(){
        const res = await fetch(this.URI);
        const productos = res.json();
        return productos;
    }
    async findProducts(name){
        const res = await fetch(`${this.URI}/${name}`);
        const data = await res.json();
        console.log(data);
        return data;
    }
}
module.exports = ProductService;