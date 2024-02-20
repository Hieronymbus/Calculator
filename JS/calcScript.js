function clearDisplay() {
    document.getElementById("output_text_container").textContent = "0" ;
}

function inputNumber(number) {
    let input = document.getElementById("output_text_container").textContent ;
    document.getElementById("output_text_container").textContent = input + number
    
}

