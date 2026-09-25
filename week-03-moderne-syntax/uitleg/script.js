let getname = document.getElementById('showname')

// function showname(name){
//     return "mijn naam is:" + name


const showname = (name) => {
    return `mijn naam is: + ${name} `
}

getname.textContent = showname("Vince")


let fruits = ['<br><br>',"Osama bin laden", "tripple T", "foreskin"]


for (let fruit of fruits)
    getname.innerHTML += fruit + "<br>";

let title = document.getElementById('title')
let button = document.getElementById('btn')
let section = document.getElementById('section')

button.addEventListener('click', () => {
title.textContent = "ik heb geklikt";
title.classList.toggle('active');

const p = document.createElement('p')
p.textContent = 'ík voeg een paragraaf toe';

section.appendChild(p)
});
