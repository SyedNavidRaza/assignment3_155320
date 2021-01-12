//Merged, sorted and duplicaton removed Array\\
var a = [10, 20, 4, 40, 60, 70];
document.write("First Array = " + "[" + a + "]" + "<br>")
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("Second Array = " + "[" + b + "]" + "<br>")
var c = a.concat(b);
document.write("Merged Array = " + "[" + c + "]" + "<br>")
c.sort(function(a, b){return a-b});
var mySet = new Set(c);
c = [...mySet];
document.write("Output = " + "[" + c + "]");
