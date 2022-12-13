var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiplay = document.getElementById("buttonMultiplay");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");


function makeOperation(operationCode){
    var number1 = Number(input1.value);//функция Number() позволяет из строки чисел сделать числа
    var number2 = Number(input2.value);

    if (operationCode === "+"){
        alert(number1 + number2);
    } else if (operationCode === "-"){
        alert(number1 - number2);
    } else if (operationCode === "*"){
        alert(number1 * number2);
    } else if (operationCode === "/"){
        alert(number1 / number2);
    }
}



function onOperationButtonClick(eventObject){
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

buttonPlus.addEventListener("click", onOperationButtonClick);
buttonMinus.addEventListener("click", onOperationButtonClick);
buttonMultiplay.addEventListener("click", onOperationButtonClick);
buttonDevide.addEventListener("click", onOperationButtonClick);
