// Start your code ***HERE*** =========
let chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','X','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'!','@','#','$','%','^','&','(',')','_','+','{','}','|','[',']',':',';','.'];
// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
let pwLength = 15;
// create a global variable called "pwLength" with a number between 10 and 18
function addNewPassword() {
    let password = "";
    for (let i = 0; i < pwLength; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
} return password 
};

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======

//Bonus
/*function customPasswordLength() {
    for (let a = 0; a <= custchar; a++) {
        let custchar = prompt('Pick a # between 10-50 for your password')
        if (custchar > 10 && custchar <=50) {
            pwLength = custchar;
        break;
        } else {
            prompt(`${custchar} is an invalid password length. Choose a password length between 10 and 50 characters.`)
    } alert (txt)
}
};
customPasswordLength();*/