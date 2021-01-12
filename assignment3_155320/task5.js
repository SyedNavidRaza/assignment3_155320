//Remove duplication from aa array\\
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
document.write("Given Array: [" + arr1 + "]" + "<br>");
var mySet = new Set(arr1);
arr1 = [...mySet];
document.write("<br>" + "Output Array: [" + arr1 + "]");
