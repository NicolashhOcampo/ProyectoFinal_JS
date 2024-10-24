import { renderCategory } from "./src/services/category.js";
import{saveInLocalStore} from "./src/persistence/localStorage.js";
import { handleGetProductsToStore } from "./src/view/store.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { getTotal, handleDeleteProduct } from "./src/services/products.js";
//import Swal from "sweetalert2";


export let categoriaActiva=null;

export const setCategoriaActiva=(categoria)=>{
    categoriaActiva=categoria;
}

export let productoActivo=null;

export const setProductoActiva=(producto)=>{
    productoActivo=producto;
}

handleGetProductsToStore();
renderCategory();


//PopUP
const buttonAdd=document.getElementById("buttonAdd");
const buttonCancel=document.getElementById("cancelButton");

buttonCancel.addEventListener('click',()=>{
    closeModal();
})

buttonAdd.addEventListener('click',()=>{
    openModal();
})

//Abrir y cerrar modal
export const openModal=()=>{
    const modal=document.getElementById("modalPopUP");
    modal.style.display="flex";
    const buttonDelete=document.getElementById("deleteButton");
    
    if(productoActivo){
        const nombre=document.getElementById("nombre");
        const img=document.getElementById("img");
        const precio=document.getElementById("precio");
        const categoria=document.getElementById("categoria");
        nombre.value=productoActivo.nombre;
        img.value=productoActivo.img;
        precio.value=productoActivo.precio;
        categoria.value=productoActivo.categoria;
    }
    if(productoActivo){
        buttonDelete.style.display="block";
        
    }else{
        buttonDelete.style.display="none";
    }

    
}

 export const closeModal=()=>{
    const modal=document.getElementById("modalPopUP");
    modal.style.display="none";
    setProductoActiva(null);
    resetModal();
}
const resetModal=()=>{
    const nombre=document.getElementById("nombre");
    const img=document.getElementById("img");
    const precio=document.getElementById("precio");
    const categoria=document.getElementById("categoria");
    nombre.value="";
    img.value="";
    precio.value=0;
    categoria.value="none";
}

const buttonAccept = document.getElementById("acceptButton");

buttonAccept.addEventListener('click', () => {
    handleSaveOrModify();
    Swal.fire({
        title: "Correcto!",
        text: "Tu articulo a sido guardado",
        icon: "success"
    });
    getTotal();
});


const handleSaveOrModify= ()=>{
    const nombre=document.getElementById("nombre").value;
    const img=document.getElementById("img").value;
    const precio=document.getElementById("precio").value;
    const categoria=document.getElementById("categoria").value;
    
    let object=null;
    if(productoActivo){
        object={
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria
        }
    }else{
        object ={
            id: new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria
        }
    }
   
    saveInLocalStore(object);
    handleGetProductsToStore();
    closeModal();
}

//Search
const buttonSearch=document.getElementById("buttonSearch");
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName();
})

//Delete
const buttonDelete=document.getElementById("deleteButton");
buttonDelete.addEventListener('click',()=>{
   
    handleDeleteProduct();
    
})