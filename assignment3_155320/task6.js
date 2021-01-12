var aCities = ["Karachi", "Lahore", "Islamabad", "Faislabad"];
var o =["th", "st", "nd", "rd"];
for(var i =1; i<aCities.length; i++){
    document.write("<br>" + i + o[i] + " choice is " + aCities[i-1]);
}
