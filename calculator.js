console.log("Calculator!");

const savedValues = [];

function getValues() {
    const x = parseFloat(document.getElementById("txtNum1").value);
    const y = parseFloat(document.getElementById("txtNum2").value);

    if (isNaN(x) || isNaN(y)) {
        alert("Please enter valid numbers!");
        return null;
    }
    return { x, y };
}

function sum() {
    const values = getValues();
    if (values === null) return;
    
    const { x, y } = values;
    document.getElementById("textResult").innerText = x + y;
}

function mult() {
    const values = getValues();
    if (values === null) return;
    
    const { x, y } = values;
    document.getElementById("textResult").innerText = x * y;
}

function div() {
    const values = getValues();
    if (values === null) return;
    
    const { x, y } = values;
    document.getElementById("textResult").innerText = x / y;
}

function sub() {
    const values = getValues();
    if (values === null) return;
    
    const { x, y } = values;
    document.getElementById("textResult").innerText = x - y;
}

function clearFields() {
    document.getElementById("txtNum1").value = "0";
    document.getElementById("txtNum2").value = "0";
    document.getElementById("textResult").innerText = "0";
}
    
function saveNumber() {   
    savedValues.push(parseFloat(document.getElementById("textResult").innerText));
    console.log(savedValues);
}


