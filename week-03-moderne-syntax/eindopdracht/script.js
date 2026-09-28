// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

let form = document.getElementById('profile-form')
let profileList = document.getElementById('profiles-list')
let name = document.getElementById('name')
let role = document.getElementById('role')
let department = document.getElementById('department')

form.addEventListener('submit', function(e){
    console.log('geklikt')
    e.preventDefault()

    profileList.textContent = `ik begin javascript te begrijpen`

})

