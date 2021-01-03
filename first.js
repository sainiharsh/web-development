function myfunction(){
    // document.getElementById("demo").innerHTML = "Paragraph Changed";
    // var x,y,z;
    // x = 5;
    // y = 6;
    // z = x+y;
    // document.getElementById("demo1").innerHTML = "The value of z is "+ z + ".";
    var pi = 3.14;
    var total = 500000 + 20000 + " 3000";
    var person = "Harsh Saini";
    var answer = 'Yes I am ! ';
    var carname = 'Volvo';
    var carname;
    // create an object of person
    // var person = {
    //     firstName : "Harsh",
    //     lastName : "Saini",
    //     age : 20,
    //     eyeColor : "Blue"
    // };
    var x = "We are the so-called \"Vikings\" from the north.";
    var y = "It's Alright Sam";
    var a = new String("Harsh");
    var b = new String("Harsh");
    // document.getElementById("demo").innerHTML = x;
    document.getElementById("demo").innerHTML = typeof a + "<br>" + typeof b +"<br>"+ (a==b)+ "<br>"+ a.length +"<br>"+ x.indexOf(" @");
//     document.getElementById("demo").innerHTML = pi+"<br>"+ person + "<br>"+ answer+"<br>"+"Your car name is "+carname+"<br>"+"Car price is "+ total ;
 }

function myproduct(p1,p2){
    document.getElementById("demo1").innerHTML = p1*p2;
}

var person = {
    firstName : "Harsh",
    lastName : "Saini",
    age : 20,
    eyeColor : "Blue"
};

// document.getElementById("demo2").innerHTML = person.firstName+" is "+ person.age +" years old.";

function displayDate(){
    document.getElementById("demo4").innerHTML = Date();
}