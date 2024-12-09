function my_concat() {
    var sentence_1 = "I have a dream";
    var sentence_2 = " to become a software developer";
    var whole_sentence = sentence_1.concat(sentence_2);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}
//using concat method
function my_slice() {
    var sentence = "Never judge a book by its cover.";
    var part = sentence.slice(10,20);
    document.getElementById("slice").innerHTML = part;
}
//using slice method
function string_method() {
    var y =1989;
    document.getElementById("Numbers_to_string").innerHTML = y.toString();
}
//using tostring method
function precision_method() {
 var z = 1.9892000;
 document.getElementById("precision").innerHTML = z.toPrecision(2);  
}
//using toprecision method