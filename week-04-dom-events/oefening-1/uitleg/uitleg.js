const button = document.getElementById('btn')
let songlist = document.getElementById('songlist')
const songInput = document.getElementById('songInput');

btn.addEventListener('click', () => {
const inputValue = songInput.value.trim();

const lijst = document.createElement('li');
lijst.textContent = inputValue;
const deleteButton = document.createElement('button'); 
deleteButton.textContent = 'delete';
lijst.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        lijst.remove();
    })
songlist.appendChild(lijst);
songInput.value = '';

})