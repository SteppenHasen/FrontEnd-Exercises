const lets_count = document.getElementById("n_people")
var tip_value = 0

function func(value) {
    tip_value = value
}

function calculate() {
    var tip_input = Number(document.getElementById("input_tip").value)
    var bill_value = Number(document.getElementById("bill").value);
    var humans_value = Number(document.getElementById("n_people").value);
    
    var temp = bill_value / (100 * humans_value)
    
    if (bill_value == 0 || bill_value == NaN) {
        document.getElementById("bill_alert").innerHTML = 'Enter bill'
    }
    if (humans_value == 0 || humans_value == NaN) {
        document.getElementById("humans_alert").innerHTML = 'Enter number of people'
    }
    if ((tip_input == 0 || tip_input == NaN) && tip_value == 0) {
        document.getElementById("tip_alert").innerHTML = 'Choose your tip'
    }

    if (tip_input != 0) {
        document.getElementById("tip").innerHTML = (temp * tip_input).toFixed(2)
        document.getElementById("total").innerHTML = ((temp * tip_input) + (bill_value / humans_value)).toFixed(2)
        document.getElementById("reset").disabled = false
    }
    else {
        document.getElementById("tip").innerHTML = (temp * tip_value).toFixed(2)
        document.getElementById("total").innerHTML = ((temp * tip_value) + (bill_value / humans_value)).toFixed(2)
        document.getElementById("reset").disabled = false
    }
}

lets_count.addEventListener('keyup', calculate)