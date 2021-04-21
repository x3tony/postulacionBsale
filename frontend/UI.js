import ProductService from './services/productService';
import CategoryService from './services/categoryService';
const productoService = new ProductService();
const categoryService = new CategoryService();

class UI {
    async renderProduct(){
        const products = await productoService.getProducts();
        const category = await categoryService.getCategories();
        products.forEach(this.productsRender);
        category.forEach(this.categoryRender);
    }
    productsRender(products){
        const productContainer = document.getElementById('products');
        const producto = document.createElement('div');
        producto.innerHTML= `
        <div class="product-item">
            <img src=${products.url_image} alt="" onerror="this.src='https://aqt.cl/wp-content/uploads/2020/09/sin_imagen.jpg';" width="100%">
            <div class="txt">
                <a><small>${products.name}</small></a>
            </div>
            <div class="footer">
                <p class="left">${products.price - products.discount}</p>
                <button class="btn"><i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
        `;
        productContainer.appendChild(producto);
    }
    categoryRender(categories){
        const categoryContainer = document.getElementById('categories');
        const category = document.createElement('a');
        category.innerHTML = `
            <a href="#" class="btn category_item form-control" name="${categories.id}"><strong>${categories.name}</strong></a>
        `;
        categoryContainer.appendChild(category);
    }
    async buscarProducto(name){
        const products = await productoService.findProducts(name);
        this.vaciarHTML();
        this.vaciarBusqueda();
        products.forEach(this.productsRender);

    }
    async findProductPerCategory(e){
        const id = e.name;
        const res = await categoryService.findProductPerCategory(id);
        console.log(res);
        this.vaciarHTML();
        res.forEach(this.productsRender);
    }
    vaciarHTML(){
        const productContainer = document.getElementById('products');
        productContainer.innerHTML = '';
    }
    vaciarBusqueda(){
        const busqueda = document.getElementsByClassName('buscar');
        
    }
    errorProduct(){
        window.alert('No existe un producto con ese nombre');
    }
    
}
export default UI;