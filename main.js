import { renderCategory } from "./src/services/category.js";
import{saveInLocalStore} from "./src/persistence/localStorage.js";
import { handleGetProductsToStore } from "./src/view/store.js";

handleGetProductsToStore();
renderCategory();

export let categoriaActive=null;


export const setCategoriaActiva=(categoria)=>{
    categoriaActive=categoria;
}
export let productoActive=null;


export const setProductoActiva=(producto)=>{
    productoActive=producto;
}
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
const openModal=()=>{
    const modal=document.getElementById("modalPopUP");
    modal.style.display="flex";
}

const closeModal=()=>{
    const modal=document.getElementById("modalPopUP");
    modal.style.display="none";
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
const form = document.getElementById("productForm");

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado (envío del formulario)
    handleSaveOrModify();
  });


const handleSaveOrModify= ()=>{
    const nombre=document.getElementById("nombre").value;
    const img=document.getElementById("img").value;
    const precio=document.getElementById("precio").value;
    const categoria=document.getElementById("categoria").value;
    
    let object=null;
    if(productoActive){
        object={
            ...productoActive,
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
    console.log(object);
    handleGetProductsToStore();
    closeModal();
}
