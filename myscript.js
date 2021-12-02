let userInputName = prompt ('Inserisci il nome')
let userInputSurname = prompt ('Inserisci il cognome')
let userInputColor = prompt ('Inserisci il tuo colore preferito')

const currentY = 21

document.getElementById('password').innerHTML =
userInputName + userInputSurname + userInputColor + currentY;