document.write("ten" + 5);
document.write("<br>"); // type of coercion.

//using infinity
function my_function() {
    var x = (1E310);
    document.getElementById("infinity").innerHTML = x;
}

//using negative infinity
function infinity() {
    var Y = (-1E310);
    document.getElementById("-infinity").innerHTML = Y;
}

function greater() {
    var z = (20>2);
    document.getElementById("boolean").innerHTML = z;
}

function less() {
    var a = (20<2);
    document.getElementById("lean").innerHTML = a;
}
//math operation using console 
console.log(4 + 4);

//using == operator
function equal_sign() {
    var b = (4 == 2);
document.getElementById("equal").innerHTML = b;
}

function my_equal() {
    var c = (4 == 4);
    document.getElementById("equation").innerHTML = c;
}

//using the  === operator
function tripple_equal() {
    var d1 = 2;
    var d2 = 2;
    var result = (d1 === d2);
    document.getElementById("t_equal").innerHTML = result;    
}

function triple_equal() {
    var e = 3;
    var f = 4;
    var result = (e === f);
    document.getElementById("triple").innerHTML = result;
}
function my_function1() {
    var g = 3;
    var h = "3";
    var result = (g === h);
    document.getElementById("demo").innerHTML = result;
}

function my_function2() {
    var c1 = 3;
    var c2 = 4;
    var result = (c1 === c2);
    document.getElementById("demo1").innerHTML = result;
}
//using AND operator
function add() {
    var c3 = (10>4 && 4>10);
    document.getElementById("demo2").innerHTML= c3;
} 

function add1() {
    var c4 = (4<10 && 10<20);
    document.getElementById("demo3").innerHTML = c4;
}
//using OR operator
function or() {
    var c5 = (2>4 || 10>4);
    document.getElementById("demo4").innerHTML = c5;
}

function or1() {
    var c6 = (5>10 || 10>20);
    document.getElementById("demo5").innerHTML = c6;
}
//using NOT operator
function not() {
    var n = !(30 > 20);
    document.getElementById("demo6").innerHTML = n;
}

function not1() {  
    var n1 = !(20 > 30);
    document.getElementById("demo7").innerHTML = n1;
}

//variable with a boolean data type

var m = true;
document.write(typeof m);
document.write("<br>");
