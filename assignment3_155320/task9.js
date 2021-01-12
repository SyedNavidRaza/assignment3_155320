//Sort the numbers in the array in descending order ang get highest Number\\
var numbers = [24, 53, 78, 91, 12];
document.write("Array items: "+ numbers + "<br>");
numbers.sort(function(a, b){return b-a});
document.write("The largest number is " + numbers[0]);