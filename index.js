//EIMANN JOSHUA CALDERON
//BSIT - 2R6

const number = document.querySelectorAll('.number');
const symbol = document.querySelectorAll('.symbol');
const dot = document.querySelector('.dot');
const result = document.querySelector('.result span');
const clear = document.querySelector('.signclear');
const equal = document.querySelector('.equal');


let firstInput = "";
let firstFlag = false;
let secondInput = "";
let secondFlag = false;
let sign = "";
let resultOutput = 0;

for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', (e) => {
        let vals = e.target.getAttribute('value');
        if(sign === ""){
            getFirstInput(vals);
        } else {
            getSecondInput(vals);
        }
    })
}

for(let i = 0; i < symbol.length; i++){
    symbol[i].addEventListener('click', (e) => {
        let vals = e.target.getAttribute('value');
        setSign(vals);
    })
}

dot.addEventListener('click', (e) => {
    let vals = e.target.getAttribute('value');
    if(sign === ""){
        if(!firstInput.includes(".")){
            firstInput += vals;
            result.innerHTML = firstInput;
            firstInput = +firstInput;
        }
    } else {
        if(!secondInput.includes(".")){
            secondInput += vals;
            result.innerHTML = secondInput;
            secondInput = +secondInput;
        }
    }
})

clear.addEventListener('click', () => {
    firstInput = "";
    firstFlag = false;
    secondInput = "";
    secondFlag = false;
    sign = "";
    resultOutput = 0;
    result.innerHTML = "0";
})

equal.addEventListener('click', () => {
    getResult();
})


function getFirstInput(paramVals){
    if(firstFlag === false){
        result.innerHTML = "";
        firstInput += paramVals;
        result.innerHTML = firstInput;
        firstInput = +firstInput;
    }
}

function getSecondInput(paramVals){
    if(secondFlag === false){
        result.innerHTML = "";
        secondInput += paramVals;
        result.innerHTML = secondInput;
        secondInput = +secondInput;
    }
}

function setSign(paramVals){
    if(firstFlag === false && firstInput !== ""){
        sign = paramVals;
        firstFlag = true;
        result.innerHTML = sign;
    }
}

function getResult(){
    if(sign !== "" && secondInput !== ""){
        switch(sign){
            case "+":
                resultOutput = firstInput + secondInput;
                break;
            case "-":
                resultOutput = firstInput - secondInput;
                break;
            case "x":
                resultOutput = firstInput * secondInput;
                break;
            case "/":
                resultOutput = firstInput / secondInput;
                break;
            case "%":
                resultOutput = firstInput * (secondInput/100);
                break;
        }
        result.innerHTML = resultOutput;
        firstInput = resultOutput;
        firstFlag = false;
        secondInput = "";
        secondFlag = false;
        sign = "";
    }
}




