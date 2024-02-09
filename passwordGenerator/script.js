lowerCase = "abcdefghijklmnopqrstuvwxyz";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numbers = "0987654321";
symbols = "_-!@#$&*/";
let maxChar = 10; 
const display = document.querySelector(".password__display");
const display2 = document.querySelector(".error-display");

function  Generate(){
    let password = ""; 
        let key = lowerCase + upperCase + numbers + symbols;
        for (let i = 0; i <= maxChar -1; i ++){
            let random = Math.floor(Math.random() * key.length);
            password += key.substring(random, random +1);
        display.innerHTML = password;
    }
}

