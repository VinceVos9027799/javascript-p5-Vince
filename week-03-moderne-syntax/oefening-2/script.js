// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message
<<<<<<< Updated upstream

let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let btn3 = document.getElementById("btn-3")

btn1.addEventListener('click' ,() => {
    message.textContent = "clicked"
})

btn2.addEventListener('click' ,() => {
list.textContent += "ik heb geklikt";

const p = document.createElement('p')
p.textContent = 'ík voeg een paragraaf toe';

section.appendChild(p)
})

btn3.addEventListener('click' ,() => {
    message.textContent = "clicked"
    list.classList.toggle('active');

})

=======
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const message = document.getElementById("message");
const list = document.getElementById('list')

button1.addEventListener("click", () => {
  message.textContent = "micheal jackson";
});

button2.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "mongool"
  list.appendChild(li)

  


});

button3.addEventListener("click", () => {
    message.classList.toggle("active");
});
>>>>>>> Stashed changes
