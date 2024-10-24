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