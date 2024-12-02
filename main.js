function my_dictionary () {
    var Human = {
        Name: "Jane Doe",
        Age: 35,
        City: "Vaughan",
        Country: "Canada"
    };
    delete Human.Country;// this removes the KVP from the dictionary before it is displayed.
    document.getElementById("Dictionary").innerHTML = Human.Country;
}