var buttons = document.getElementsByClassName("button");
var display = document.getElementsById("display");
var operand1 = 0;
var operand2 = null;
var operand3 = null;
for(var i = 0;i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
        }else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
        }
        else{
            display.innerText += value;
        }
    })
}