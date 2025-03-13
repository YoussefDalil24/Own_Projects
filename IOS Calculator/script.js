const $numSigns = [...document.querySelectorAll('.numbers, .sign, .comma')];
const $clearButton = document.querySelector('.clear');
const $negativeButton = document.querySelector('.negative');
const $calculateButton = document.querySelector('.equals');
const $input = document.querySelector('#input');

let result = "";

$clearButton.addEventListener('click', clearResult);
$negativeButton.addEventListener('click', toggleNegative);
$calculateButton.addEventListener('click', calculateResult);

$numSigns.forEach(($numSign) => {
    $numSign.addEventListener('click', handleButtonClick);
});


function clearResult() {
    result = "";
    $input.value = "0";
}


function toggleNegative() {
    if (result !== "" && result !== "0") {
        if (result[0] === '-') {
            result = result.slice(1); 
        } else {
            result = `-${result}`; 
        }
        $input.value = result;
    }
}


function handleButtonClick(event) {
    const value = event.target.textContent; 

    if ($input.value === "0" && value === "0") {
        return;
    }

    if (result === "" || result === "0") {
        $input.value = "";
    }

    const operators = ['/', 'x', '+', '-', '%'];


    if (operators.includes(result[result.length - 1]) && operators.includes(value)) {
        $input.value = $input.value.slice(0, -1) + value;
        result = result.slice(0, -1) + value;
        return;
    }


    if (value === ',') {
        if (result.includes(',')) {
            return; 
        }
        if (result === "" || operators.includes(result[result.length - 1])) {
            result += '0,'; 
            $input.value += '0,';
            return;
        }
    }

    
    result += value;
    $input.value += value;
}


function calculateResult() {
    try {
       
        const expression = result.replace(/x/g, '*').replace(/,/g, '.');

       
        const calculation = new Function(`return ${expression}`)();
        $input.value = calculation.toString().replace(/\./g, ','); 
        result = calculation.toString().replace(/\./g, ','); 
    } catch (e) {
        $input.value = "ERROR";
        setTimeout(() => {
            if (confirm("warak ghlati almklakh, domage!")) {
                clearResult();
            }
        }, 1000);
    }
}