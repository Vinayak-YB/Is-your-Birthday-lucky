const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkNumberButton = document.getElementById("check-number");
const outputBox = document.getElementById("output-box");

function checkBirthDateIsLucky(){
    if(luckyNumber.value>0){
        const dob = dateOfBirth.value;
        const sum = calculateSum(dob);
        if(sum&&dob){
        compareValues(sum, luckyNumber.value);
        }else{
            outputBox.innerText = "Please enter valid input";
        }
    }
    else{
        outputBox.innerText="Enter input greater than 0";
    }
}

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber === 0){
        outputBox.innerText = "Your Birthday is lucky! 😁";
    }
    else{
        outputBox.innerText = "Your Birthday is not lucky.. 🤔";
    }
}

function calculateSum (dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0; index < dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky)