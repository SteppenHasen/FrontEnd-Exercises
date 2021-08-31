function $(x) {return document.getElementById(x);}

const lets_count = $("n_people")

var tip_input = Number($("input_tip").text)
var tip_value = Number($("tip_button").click(function() {
    this.style.backgroundColor = 'rgb(84, 201, 185)'
    this.style.color = 'hsl(183, 100%, 15%)'
    return $(this).val();
}));

var bill_value = Number($("bill").value);
var humans_value = Number($("n_people").text);

function calculations(tip, bill, humans) {
    var tip_per_person = (bill * tip) / (100 * humans)
    var total_per_person = ((bill * tip / 100) + bill) / humans 
    $("tip").innerHTML = tip_per_person
    $("total").innerHTML = total_per_person
    $("reset").disabled = false
}

if (typeof(bill_value) != number || typeof(humans_value) != number)
    alert('Please, input a number!')
else if (tip_value == undefined && tip_input == NaN)
    alert('Choose tip or write custom tip')
else if (tip_value != undefined)
    lets_count.addEventListener('input', calculations(tip_value, bill_value, humans_value))
else
    lets_count.addEventListener('input', calculations(tip_input, bill_value, humans_value))
