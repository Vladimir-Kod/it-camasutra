var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiplay = document.getElementById("buttonMultiplay");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

function number1(){
    return Number(input1.value);//функция Number() позволяет из строки чисел сделать числа
}
function number2(){
    return Number(input2.value);
}

function makeOperation(operationCode){
    if (operationCode === "+"){
        alert(number1() + number2());
    } else if (operationCode === "-"){
        alert(number1() - number2());
    } else if (operationCode === "*"){
        alert(number1() * number2());
    } else if (operationCode === "/"){
        alert(number1() / number2());
    }
}

function onButtonPlus(){ 
    makeOperation("+")
};
function onButtonMinus(){
    makeOperation("-")
};
function onButtonMultiplay(){
    makeOperation("*")
};
function onButtonDevide(){
    makeOperation("/")
};

buttonPlus.addEventListener("click", onButtonPlus);
buttonMinus.addEventListener("click", onButtonMinus);
buttonMultiplay.addEventListener("click", onButtonMultiplay);
buttonDevide.addEventListener("click", onButtonDevide);
