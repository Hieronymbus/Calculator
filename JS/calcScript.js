

function clearDisplay() {
    document.getElementById("output_text_container").textContent = "0" ;
}

function inputButton(input) {
    if (document.getElementById("output_text_container").textContent == 0) {
       document.getElementById("output_text_container").textContent = input
    } else {
        document.getElementById("output_text_container").textContent += input
    }
}

function calculate() {
    document.getElementById("output_text_container").textContent = eval(document.getElementById("output_text_container").textContent).toFixed(2)
}

