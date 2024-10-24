import { categoriaActiva } from "../../main.js";
import { handleGetProductLocalStore } from "../persistence/localStorage.js";
import { handleRenderList } from "../view/store.js";

const handleFilterProductsByCategory=(categoria)=>{
    const productos=handleGetProductLocalStore();

    switch(categoria){
        case categoriaActiva :
            handleRenderList(productos);
            break;
        case "Todo":
            handleRenderList(productos);
        break;
        case "Hamburgesas":
        case "Papas":
        case "Gaseosas":
            const result=productos.filter(el=>el.categoria===categoria);
            handleRenderList(result);
        break;
        case "MayorPrecio":
            const resultMayor=productos.sort((a,b)=>b.precio - a.precio);
            handleRenderList(resultMayor);
        break;
        case "MenorPrecio":
            const resultMenor=productos.sort((a,b)=>a.precio - b.precio);
            handleRenderList(resultMenor);
        break;
        default:
            break;
    }
}


//render de la vista de categorias
export const renderCategory = ()=>{
    const ulList=document.getElementById("listFilter");
    ulList.innerHTML=`
    <li class="liActive" id="Todo">Todos los productos</li>
    <li id="Hamburgesas">Hamburgesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MenorPrecio">MenorPrecio</li>
    <li id="MayorPrecio">MayorPrecio</li>
    `;

    const liElements=ulList.querySelectorAll("li");
    liElements.forEach(liElement=>{
        liElement.addEventListener('click',()=>{
            handleClick(liElement);
        });
    });

    const handleClick=(elem)=>{
        handleFilterProductsByCategory(elem.id);
        liElements.forEach(el=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            }else{
                if(elem === el){
                    el.classList.add('liActive');
                }
            }
        })
    }
}