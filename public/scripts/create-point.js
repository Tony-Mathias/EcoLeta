
function populateUfs() {  
   
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then ( res => res.json() )
    .then ( states => {
            
        for( const state of states) {
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }
               
    } )
}


populateUfs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexofSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexofSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML ="<option value Selecione a Cidade></option>"
    citySelect.disabled = true

    fetch (url)
    .then ( res => res.json() )
    .then ( cities => {
            
        for( const city of cities) {
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }
         
        citySelect.disabled = false

    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//itens de coleta
//todos os li
const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itensToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelectedItem(event) {
    const itemLi = event.target
    
    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle ("selected")

    const itemId = itemLi.dataset.id

    

    //verificar se existem items selecionados, se sim
    //pegar os itens selecionados 

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId //isso sera true ou false
        return itemFound
    })

    //se ja estiver selecionado,
    if (alreadySelected >=0 ){
        // tirar da seleção
        const filteredItems = selectedItems.filter ( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        }) 
        
        selectedItems = filteredItems
    } else {
    //se nao estiver selecionado 
    //adicionar a seleção
    selectedItems.push (itemId)
    }
    
    console.log(selectedItems)

    //atualizar campo escondido com os itens selecionados
   collectedItems.value = selectedItems

}
