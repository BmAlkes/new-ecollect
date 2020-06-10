

function cities(){

    const citiesSelect=document.querySelector("form select")
    fetch("script/cities.json")
.then(function(res){return res.json()})
.then(cities =>{
    for(city of cities){
        citiesSelect.innerHTML +=  `<option value="${city.id}">${city.eng_name}</option>`
    }
    
})
}

cities()



// itens de coleta

const itens = document.querySelectorAll(".item-grid li")

for(const item of itens){
    item.addEventListener("click",handleSelectedItem)
}
const collectedItens = document.querySelector('input[name="item"]')
let selectedItems =[]

function handleSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    const ItemId=event.target.dataset.id

    // verificar se existe itens selecionados
    //Pegar itens selecionados
    const alreadySelected= selectedItems.findIndex(function(item){
        const itemFound = item == ItemId
        return itemFound
    })
    
//    se ja estiver selecionado, tirar da selecao
   
if(alreadySelected >=0){
    const filteredItem = selectedItems.filter(item=>{
        const itemIsDiferent= item != ItemId
        return itemIsDiferent
    })
    selectedItems= filteredItem
    // se nao estiver selecionado, adicionar a selecao
}else{
    selectedItems.push(ItemId)
}
// atualizar campo escondido com iten selecionados
collectedItens.value = selectedItems

}

