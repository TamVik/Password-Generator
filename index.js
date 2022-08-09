const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdOne = document.getElementById("pwdOne");
let pwdTwo = document.getElementById("pwdTwo");
let pwdGenBtn = document.getElementById("pwdGenBtn");

pwdGenBtn.addEventListener("click", function() {
    pwdOne.textContent = "";
    pwdTwo.textContent = "";

    for (let i = 0; i < 15; i++) {
        let randomPwdOne = Math.floor(Math.random() * characters.length);
        let randomPwdTwo = Math.floor(Math.random() * characters.length);
        pwdOne.textContent += characters[randomPwdOne];
        pwdTwo.textContent += characters[randomPwdTwo];
    }
})


