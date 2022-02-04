//console.log("Hello World!");
const passwordLength = document.getElementById('length')
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const special = document.getElementById('symbol');
const number = document.getElementById('number');
const submitBtn = document.getElementById('gen');

submitBtn.addEventListener('click', () => {

    const length = passwordLength.value;
  
    if (length < 0) {
      alert('Please provide Postitve number')
    }

const upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerString = 'abcdefghijklmnopqrstuvwxyz'
const specialString = '@#$'
const numberString = '1234567890'

let finalString = '';

if (upper.checked) {
  finalString = finalString + upperString;
}
if (lower.checked) {
  finalString = finalString + lowerString;
}
if (symbol.checked) {
  finalString = finalString + specialString;
}
if (number.checked) {
  finalString = finalString + numberString;
}

let password = '';

for (let index = 0; index < length; index++) {
  let randomIndex = Math.floor(Math.random() * finalString.length);
  password = password + finalString[randomIndex];
}

document.getElementById('passarea').value = password;
})
console.log(passwordLength);