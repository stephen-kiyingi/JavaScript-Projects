function Ride_function() {
    var Height = document.getElementById("Height").value;
    var can_ride = Height < 52 ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = can_ride + "to ride";
}

function Vehicle(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function phone(Make, Model, Year, Color) {
        this.phone_Make = Make;
        this.phone_Model = Model;
        this.phone_Year = Year;
        this.phone_Color = Color;
    }
var x = new phone("iphone", 11, 2011, "White");

function myphone() {
    document.getElementById("New_and_This").innerHTML = x.phone_Make + " " + x.phone_Model + " " + x.phone_Year + " " + x.phone_Color;
}

function add_Function(){
document.getElementById("Nested_function").innerHTML = add();
function add() {
    var x = 10;
    function plus_one() {x += 2;}
    plus_one();
    return x;
}
}