function Call_Loop() {
var loop = 1;
var output = ''; // string to accumulate the loop output

while (loop <= 6) {
    output += loop + "<br>";  // concatenate the current loop value and a line break
    loop++; // increment the loop counter
}
document.getElementById("Loop").innerHTML = output;
}
// a function using a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// a function with an array
function array_function() {
    var array_f = [];
    array_f[0] = "sleeping";
    array_f[1] = "playing";
    array_f[2] = "eating";
    document.getElementById ("Array").innerHTML = "Array_f is displaying " + array_f[1] + " ";

}
// a function using constant
function constant_function() {
    const vehicle = {type:"honda", brand:"civic", color:"silver"};
    vehicle.color = "silver";
    vehicle.price = "$30000";
    document.getElementById("constant").innerHTML = "The cost of the " + 
     vehicle.type  +  " was "  +  vehicle.price;
} 
// using let keyword
function let_function() {
var z = 24;
document.write(z);
{
    let z = 36;
    document.write("<br>" + z);
}
}
// creating an object with the let keyword 
let watch = {
    make: " apple ",
    model: " series 8 ",
    year: " 2024 ",
    description: function() {
        return " The watch is a " + this.year + this.color + this.model;
    }
    };
document.getElementById("watch_object").innerHTML = watch.description();