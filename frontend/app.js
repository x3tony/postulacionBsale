import ProductService from './services/productService';
import './styles/app.css';
import UI from './UI';
const ui = new UI();

document.addEventListener('DOMContentLoaded', () =>{
    ui.renderProduct();
})

document.getElementById('buscarProducto')
.addEventListener('submit', e =>{
    const producto = document.getElementById('buscar').value;
    ui.buscarProducto(producto);
    e.preventDefault();
});

document.getElementById('categories').addEventListener('click', e => {
    ui.findProductPerCategory(e.target);
});