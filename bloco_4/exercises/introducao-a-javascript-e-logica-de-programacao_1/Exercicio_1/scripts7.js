let nota = 55 ;
let percent = ((nota/100)*100);

if (percent>=90 && percent<100){
    console.log("A");
}
else if (percent>=80 && percent<90){
    console.log ("B");
}
else if (percent>=70 && percent<80){
    console.log ("C");
}
else if (percent>=60 && percent<70){
    console.log ("D");
}
else if (percent>=50 && percent<60){
    console.log ("E")
}
else if (percent<50){
    console.log ("F")
}
else {
    console.log("erro");
}