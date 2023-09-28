//SECTION 1: FETCH ALL THE ID'S
//the below codes are used to fetch each id from the html 
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseE1 = document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numbersE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generatetBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("copyIcon");


//SECTION 2: VALUES THAT WILL BE USED TO GENERATE PASSWORDS
//the below code is used to store the lowercase and uppercase values that will be used to generate password
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


//SECTION 3: get the slider rang value and update it to current scrolled value
sliderValue.textContent = inputSlider.value; //used to get the current value of the slider
//this code below is used to increase or decrease the rang input type 
inputSlider.addEventListener("input",()=>{
    //this code will update the value of the slider
    sliderValue.textContent = inputSlider.value;
})


//SECTION 4: add eventlistner to the generate button, create a function(generatePasswor)
//this code gives functionality to the generate password button, a fuction is created for it
generatetBtn.addEventListener("click",()=>{
    passBox.value = generatePassword(); //created a function called generatePassword
});



//SECTION 5: Call the function that was created above
function generatePassword(){
    //using loop to get the length and generate the password
    const length = inputSlider.value;
    let characters = "";     //this code below will hold all the inputs values in the checkbox(everything in section 2) of all the uppercase, lowercase, numbers and symbols

    let password = ""; //this will hold the password value

//using the async sentence value to add a string to others if it is checked
    characters += lowercaseE1.checked ? lowercaseLetters : ""; //this code says that if the lowercase checkbox is checked then select all codes in section 2's lowercaseletters string values and put here else leave it empty
    characters += uppercaseE1.checked ? uppercaseLetters : ""; //this code says that if the lowercase checkbox is checked then select all codes in section 2's uppercaseletters string values and put here else leave it empty
    characters += numbersE1.checked ? numbers : ""; //this code says that if the lowercase checkbox is checked then select all codes in section 2's number string values and put here else leave it empty
    characters += symbolsE1.checked ? symbols : ""; //this code says that if the lowercase checkbox is checked then select all codes in section 2's symbols string values and put here else leave it empty

    //use a loop to loop through the values

    for(let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random()* characters.length));
        console.log(password);

        
        
    }
    //this will return the generated password on the input field
    return password

}

copyIcon.addEventListener("click",()=>{
    if(passBox.value !="" || passBox.value.length>=10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";

        setTimeout(()=>{
            copyIcon.innerHTML ="content_copy";
        },3000)
    }
});
