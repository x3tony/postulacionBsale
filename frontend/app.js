import ProductService from './services/productService';
import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderProduct();
})

document.getElementById('buscarProducto')
.addEventListener('submit', e =>{
    const producto = document.getElementById('buscar').value;
    const productoEnviado = new ProductService();
    productoEnviado.findProducts(producto);
    e.preventDefault();
})
