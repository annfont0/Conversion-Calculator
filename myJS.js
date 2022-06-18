//Inches to Centimeter
function clickA() {
    var myVar = document.getElementById("value").value;
    let x = myVar * 2.54;
    quotient=x.toFixed(3);
    let text = "The value " + myVar + " inches is converted to " + quotient + " centimeters."
    document.getElementById("text").innerHTML = text;

    if(myVar == '') {
        document.getElementById("text").innerHTML = "Enter Number!";
    }
}

//Centimeters to Inches
function clickB() {
    var myVar = document.getElementById("value").value;
    let x = myVar/2.54;
    quotient=x.toFixed(3);
    let text = "The value " + myVar + " centimeters is converted to " + quotient + " inches."
    document.getElementById("text").innerHTML = text;

    if(myVar == '') {
        document.getElementById("text").innerHTML = "Enter Number!";
    }
}

//Kilometers to Miles
function clickC() {
    var myVar = document.getElementById("value").value;
    let x = myVar/1.609344;
    quotient=x.toFixed(3);
    let text = "The value " + myVar + " kilometers is converted to " + quotient + " miles."
    document.getElementById("text").innerHTML = text;

    if(myVar == '') {
        document.getElementById("text").innerHTML = "Enter Number!";
    }
}

//Miles to Kilometers
function clickD() {
    var myVar = document.getElementById("value").value;
    let x = myVar * 1.609344;
    quotient=x.toFixed(3);
    let text = "The value " + myVar + " miles is converted to " + quotient + " kilometers."
    document.getElementById("text").innerHTML = text;

    if(myVar == '') {
        document.getElementById("text").innerHTML = "Enter Number!";
    }
}

//The value ___ is converted to ___ centimeters