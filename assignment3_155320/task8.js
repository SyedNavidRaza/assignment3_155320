document.write("<br>" + "Counting: ");
for(var i=1; i<=15; i++){
    document.write(i +", " )
}
document.write("<br>" + "Reverse Counting: ");
for(var i=10; i >= 1; i--){
    document.write(i + ", ")
}
document.write("<br>" + "Even: ");
for(var i=0; i<=20; i++){
    if(i===0 || i%2===0)
    document.write(i +", " )
}
document.write("<br>" + "Odd: ");
for(var i = 1; i <= 19; i++){
    if(i===1 || i%2===1)
    document.write(i +", " )
}
document.write("<br>" + "Series: ");
for(var i = 1; i <= 20; i++){
    if(i%2 === 0)
    document.write(i +"k" +", " )
}