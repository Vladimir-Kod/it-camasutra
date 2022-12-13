var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiplay = document.getElementById("buttonMultiplay");
var buttonDevide = document.getElementById("buttonDevide");


function onButtonPlus(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var sum = number1 + number2;
    alert(sum);
};
function onButtonMinus(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var sum = number1 - number2;
    alert(sum);
};
function onButtonMultiplay(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var number1 = Number(input1.value);//функция Number() позволяет из строки чисел сделать числа
    var number2 = Number(input2.value);
    var sum = number1 * number2;
    alert(sum);
};
function onButtonDevide(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var sum = number1 / number2;
    alert(sum);
};

buttonPlus.addEventListener("click", onButtonPlus);
buttonMinus.addEventListener("click", onButtonMinus);
buttonMultiplay.addEventListener("click", onButtonMultiplay);
buttonDevide.addEventListener("click", onButtonDevide);
