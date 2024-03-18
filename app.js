function clearCalculator() {
    document.getElementById("sentence_calculator").value = "";
    document.getElementById("display_calculator").value = "";
}

function addParamCalculator(element) {
    let display_calculator = document.getElementById("display_calculator").value;
    console.log(display_calculator);
    switch(element){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            display_calculator+= element;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            display_calculator = "";
            break;
        case 'a/c':
            display_calculator = "";
            break;
    }
    document.getElementById("display_calculator").value = display_calculator;
    document.getElementById("sentence_calculator").value+= element;
}

function executeCalculator() {
    let sentence = document.getElementById("sentence_calculator").value;
    let sentence_one = "";
    let operator = "";
    let sentence_two = "";
    let array = sentence.split('');
    for(var i=0; i < array.length; i++){
        switch(array[i]) {
            case '+':
                operator = array[i];
                break;
            case '-':
                operator = array[i];
                break;
            case '*':
                operator = array[i];
                break;
            case '/':
                operator = array[i];
                break;
        }
    }
    let explode = sentence.split(operator);
    sentence_one = explode[0];
    sentence_two = explode[1];
    let result = 0;
    switch(operator) {
        case '+':
            result = (parseFloat(sentence_one)) + (parseFloat(sentence_two));
            break;
        case '-':
            result = Math.abs((parseFloat(sentence_one)) - (parseFloat(sentence_two)));
            break;
        case '*':
            result = (parseFloat(sentence_one)) * (parseFloat(sentence_two));
            break;
        case '/':
            result = (parseFloat(sentence_one)) / (parseFloat(sentence_two));
            break;
    }
    let strCalculator = new String(result);
    strCalculator = strCalculator.replace(".",",");
    result = strCalculator;
    document.getElementById("display_calculator").value = result;
}

const button = document.querySelectorAll('.btn-keyboard');
button.forEach(element => {
    element.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':    
            case '9':    
            case '0':    
            case '+':    
            case '-':    
            case '/':    
            case '*':   
            case 'x':
                addParamCalculator(e.target.innerText);
                break;    
            case ',':   
                addParamCalculator('.');
                break;
            case '=': 
                executeCalculator();
                break;
            case 'A/C': 
                clearCalculator();
                break;
        }
    });
});

window.addEventListener('keypress', (e) => {
    console.log(e.keyCode);
    let key = null;
    switch(e.keyCode) {
        case 42:
            key = "*";
            addParamCalculator(key);
            break;
        case 43:
            key = "+";
            addParamCalculator(key);
            break;
        case 45:
            key = "-";
            addParamCalculator(key);
            break;
        case 47:
            key = "/";
            addParamCalculator(key);
            break;
        case 48:
            key = "0";
            addParamCalculator(key);
            break;
        case 49:
            key = "1";
            addParamCalculator(key);
            break;
        case 50:
            key = "2";
            addParamCalculator(key);
            break;
        case 51:
            key = "3";
            addParamCalculator(key);
            break;
        case 52:
            key = "4";
            addParamCalculator(key);
            break;
        case 53:
            key = "5";
            addParamCalculator(key);
            break;
        case 54:
            key = "6";
            addParamCalculator(key);
            break;  
        case 55:
            key = "7";
            addParamCalculator(key);
            break;  
        case 56:
            key = "8";
            addParamCalculator(key);
            break;  
        case 57:
            key = "9";
            addParamCalculator(key);
            break;  
        case 44:
            key = ".";
            addParamCalculator(key);
            break;  
        case 13:
        case 61:
            executeCalculator();
            break;  
    }
});

