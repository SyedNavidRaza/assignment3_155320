var colours = [" violet "," indigo"," yellow"];
document.write("Array of colours:" + colours+ "<br>" +"<br>");
var colour = prompt("Which colour you want to add in the begining of array ? ");
colours.unshift(colour);
document.write("Addition of one colour in the begining of array"+ "<br>" +"<br>");
document.write(colours+ "<br>" +"<br>");
var colour = prompt("Which colour you want to add in the end of array ? ");
colours.push(colour);
document.write("Addition of one colour in the end of array" + "<br>" +"<br>");
document.write(colours+ "<br>" +"<br>");
document.write("Addition of two colours in the begining of array" + "<br>" +"<br>");
colours.unshift ("orange");
colours.unshift ("green");
document.write(colours+ "<br>" +"<br>");
colours.shift();
document.write("Deletion of first colour in array: " + "<br>"+ colours+ "<br>" +"<br>");
colours.pop();
document.write("Deletion of last colour in array" +"<br>");
document.write(colours + "<br>");
var colour1 = prompt("Which colour you want to add ? ");
var colour2 = parseInt(prompt("At which index"));
document.write("<br>"+ "Addition of colour " + colour1 + " at index: " + colour2 +"<br>");
colours.splice(colour2, 0, colour1);
document.write("<br>" + colours + "<br>");
var indexStart = parseInt(prompt("Deletion start from which index"));
var indexEnd = parseInt(prompt("Till which index"));
document.write("<br>" + "Deletion start from index: "+ indexStart + "to " +indexEnd+ "<br>");
colours.splice(indexStart,indexEnd);
document.write("<br>" + colours + "<br>");