class CategoryService {
    constructor(){
        this.URI = '/api/category';
    }

    async getCategories(){
        const res = await fetch(this.URI);
        const productos = res.json();
        return productos;
    }
    async findProductPerCategory(id){
        const res = await fetch(`${this.URI}/${id}`);
        const data = await res.json();
        console.log(data);
        return data;
    }
}
module.exports = CategoryService;