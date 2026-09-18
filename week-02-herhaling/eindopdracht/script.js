// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij


const priceInput = document.querySelector('#amount');
const discountInput = document.querySelector('#discount');
const form = document.querySelector('#discount-form');
const result = document.querySelector('#result');

function calculateTotal(price, discount) {
    return price - (price * discount / 100);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (priceInput.value === "" || discountInput.value === "") {
        result.textContent = "Empty";
        result.style.color = "red";
        return;
    }

    const price = Number(priceInput.value);
    const discount = Number(discountInput.value);

    result.style.color = "black";
    result.textContent = `value is ${calculateTotal(price, discount).toFixed(2)}`; 
});

