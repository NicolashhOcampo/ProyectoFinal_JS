import { handleGetProductLocalStore } from "../persistence/localStorage.js";
import { handleRenderList } from "../view/store.js";

export const handleSearchProductByName=()=>{
    const inputHeader=document.getElementById("inputHeader");
    const productos=handleGetProductLocalStore();

    const result=productos.filter(el=>el.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);

}   