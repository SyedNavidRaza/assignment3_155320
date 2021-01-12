var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var txt = "available";
var txt1 = "not avalable";
var found = false;
var input = prompt("Welcome to ABC Bakery. What do yo want to order sir/ma'am ?");
document.write("User Input: " + input + "<br>")
for(var i=0; i<a.length; i++){
    if(a[i]==input){
        document.write(input + " is "+txt.bold() + " at index " + +i + " in our bakery");
        found = true;
        break;
    }
}
if(!found){
    document.write("We are sorry " + input + " is "+txt1.bold() + " in our bakery");
}
