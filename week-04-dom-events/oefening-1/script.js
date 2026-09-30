// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
const ul = document.getElementById('list')
const input = document.getElementById('input')
const button = document.querySelector('#add');

button.addEventListener('click', () => {
const inputValue = input.value.trim();
const taak = document.createElement('li')
taak.textContent = inputValue

const deleteButton = document.createElement('button')
deleteButton.textContent = 'delete'

taak.appendChild(deleteButton)

ul.appendChild(taak)

deleteButton.addEventListener ('click', () =>{
taak.remove()
})

input.value = '';


})

