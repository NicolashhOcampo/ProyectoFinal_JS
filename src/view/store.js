import { handleGetProductLocalStore } from "../persistence/localStorage.js"


export const handleGetProductsToStore=()=>{
    const productos=handleGetProductLocalStore();
    handleRenderList(productos);

}

export const handleRenderList=(productos)=>{
    const hamburgesas=productos.filter((el)=>el.categoria==="Hamburgesas");
    const papas=productos.filter((el)=>el.categoria==="Papas");
    const gaseosas=productos.filter((el)=>el.categoria==="Gaseosas");

    const renderProductosGrup=(productos,title)=>{
        if(productos.length>0){
            const productosHtml=productos.map((producto,index)=>{
                return`<div id=product-${producto.categoria}-${index}>
                    <div class="containerItem">
                        <img src="${producto.img}"/>
                        <div class="containerTitleItem">
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class="containerPropsItem">
                            <p><b>Precio: </b>$ ${producto.precio}</p>
                            <p><b>Categoria: </b> ${producto.categoria}</p>
                        </div>
                    </div>
                    
                </div>`;
            });

            return `
                <section class="sectionStore">
                <h3>${title}</h3>

                <div class="containerProductStore">
                ${productosHtml.join("")}
                </div>
                </section>
            `
        }else{
            return ""
        }
    }

    const appContainer=document.getElementById("storeContainer");
    appContainer.innerHTML=`
        ${renderProductosGrup(hamburgesas,"Hamburgesas")}
        ${renderProductosGrup(papas,"Papas")}
        ${renderProductosGrup(gaseosas,"Gaseosas")}
    `;

    const addEvent=(productos)=>{
        productos.forEach((element,index) => {
            const productContainer=document.getElementById(`product-${element.categoria}-${index}`);
            productContainer.addEventListener('click',()=>{
                console.log("Producto activo",element)
            })

        });
    }

    addEvent(hamburgesas);
    addEvent(papas);
    addEvent(gaseosas);
}