var names=prompt("Enter Your Name")
var ages=prompt("Enter Your Age");
var genders=prompt("Enter Your Gender");

document.getElementById('name').innerHTML=`${names}`;
document.getElementById('age').innerHTML=`${ages}`;
document.getElementById('gender').innerHTML=`${genders}`;