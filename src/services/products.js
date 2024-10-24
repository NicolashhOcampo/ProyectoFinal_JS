import { closeModal, productoActivo } from "../../main.js";
import { handleGetProductLocalStore } from "../persistence/localStorage.js"
import { handleRenderList } from "../view/store.js";

export const handleDeleteProduct=()=>{
    Swal.fire({
        title: "¿Estas seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            const productos=handleGetProductLocalStore();
            const resultado=productos.filter(el=>el.id !== productoActivo.id);
            localStorage.setItem("productos",JSON.stringify(resultado))
            const newProductos=handleGetProductLocalStore();
            handleRenderList(newProductos);
            closeModal();
            handleRenderTotal();
          Swal.fire({
            title: "Eliminado!",
            text: "Tu articulo a sido eliminado",
            icon: "success"
          });
            
        }
      });

      
    
}

export const getTotal = () => {
    const productos = handleGetProductLocalStore();
    let total = 0;
    productos.forEach(el => {
        total += Number(el.precio);
    });
    return total;
}
export const handleRenderTotal=()=>{
    let total=getTotal();
    const totalContainer=document.getElementById("totalContainer");
    totalContainer.innerHTML=`<p>Total:$ ${total}</p>`
    console.log(total)
}
