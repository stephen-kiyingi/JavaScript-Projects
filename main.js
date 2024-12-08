var x = 20
function g_variable () {
    document.write(10 + x + "<br>");
}
function g_variable1 () {
    document.write(x + 30);
}
//using global variable

function l_variable () {
    var y = 20;
    document.write(30 - y + "<br>");
}
function l_variable1 () {
    document.write(y-10);
}
//using local variable

function c_variable () {
    var z = 10
    console.log(15 + z)
}
function c_variable1 () {
    console.log(z + 10)
}
//using console.log

function get_Date() {
    if(new Date() . getHours() < 18) {
     document.getElementById("greeting").innerHTML = "How are you today?";   
    }
}
// if statement

function bar_opens() {
    if(new Date() . getHours() < 21) {
     document.getElementById("w_hours").innerHTML = "is the bar open for service?";
    }
}
function drink_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else  {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}
// else statement

function Time_function() {
    var Time = new Date() . getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "it is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
// else if statement