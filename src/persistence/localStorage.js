export const handleGetProductLocalStore=()=>{
    const productos=JSON.parse(localStorage.getItem("productos"))
    if(productos){
        return productos;
    }else{
        return [];
    }
}

export const saveInLocalStore=(producto)=>{
    let productosInlocal=handleGetProductLocalStore();

    const existProducto = productosInlocal.findIndex(productoslocal=>productoslocal.id=== producto.id)
    if(existProducto !==-1){
        productosInlocal[existProducto]=producto;
    }else{
        productosInlocal.push(producto);
    }
    localStorage.setItem("productos",JSON.stringify(productosInlocal))
}