import ProductService from './services/productService';
const productoService = new ProductService();

class UI {
    async renderProduct(){
        const products = await productoService.getProducts();
        console.log(products);
        const productContainer = document.getElementById('productos');
        productContainer.innerHTML = '';
        products.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('card', 'col-md-2');
            // Body
            const divCardBody = document.createElement('div');
            divCardBody.classList.add('card-body');
            // Imagen
            const divImagen = document.createElement('img');
            divImagen.classList.add('img-fluid');
            divImagen.setAttribute('src', producto.url_image);
            // Titulo
            const divTitle = document.createElement('h5');
            divTitle.classList.add('card-title');
            divTitle.textContent = producto.name;
            // Precio
            const divPrecio = document.createElement('p');
            divPrecio.classList.add('card-text');
            divPrecio.textContent = producto.price - producto.discount;
            // Boton 
            const divBoton = document.createElement('button');
            divBoton.classList.add('btn', 'btn-primary');
            divBoton.textContent = 'carrito';
            // Insertamos
            divCardBody.appendChild(divImagen);
            divCardBody.appendChild(divTitle);
            divCardBody.appendChild(divPrecio);
            divCardBody.appendChild(divBoton);
            div.appendChild(divCardBody);
            productContainer.appendChild(div);
        });
    }
    async buscarProducto(name){
        const products = await productoService.findProducts(name);
        console.log(products);
        this.renderProduct(products);
    }

    async renderProducts(products){
        const productContainer = document.getElementById('productos');
        productContainer.innerHTML = '';
        products.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('card', 'col-md-2');
            // Body
            const divCardBody = document.createElement('div');
            divCardBody.classList.add('card-body');
            // Imagen
            const divImagen = document.createElement('img');
            divImagen.classList.add('img-fluid');
            divImagen.setAttribute('src', producto.url_image);
            // Titulo
            const divTitle = document.createElement('h5');
            divTitle.classList.add('card-title');
            divTitle.textContent = producto.name;
            // Precio
            const divPrecio = document.createElement('p');
            divPrecio.classList.add('card-text');
            divPrecio.textContent = producto.price - producto.discount;
            // Boton 
            const divBoton = document.createElement('button');
            divBoton.classList.add('btn', 'btn-primary');
            divBoton.textContent = 'carrito';
            // Insertamos
            divCardBody.appendChild(divImagen);
            divCardBody.appendChild(divTitle);
            divCardBody.appendChild(divPrecio);
            divCardBody.appendChild(divBoton);
            div.appendChild(divCardBody);
            productContainer.appendChild(div);
        });
    }
    
}
export default UI;