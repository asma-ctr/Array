
let fruits = ['Apple', 'Banana','Orange','Mango']

//Gör en array fruits med fyra frukter. Skriv ut med console.log en åt gången.

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

//Skriv i konsolen hur många värden arrayn har med length-metoden
console.log(fruits.length)

//Gör en array fruits med fyra fritt valbara frukter. Skriv ut fruits-arrayn med en for-loop.

var array= ['apple','apple','apple','apple'] 
for (index = 0; index < array.length; index++) { 
    console.log(array[index]); 
} 

// map array är för att multiplicera varje element i koden.

const tab1 = [1, 2, 3, 4, 5];

const map1 = tab1.map( x => x*3);

console.log(map1);

//pop array delets the last element

var a = ["Hammad","Ibrahim","Hamza","Kausar"];
document.write(a +"<br><br>");
a.pop();
document.write(a +"<br><br>");
a.pop();
document.write(a +"<br><br>");


//push adds an extra element

var a = ["Hammad","Ibrahim","Hamza"];
document.write(a +"<br><br>");
a.push("Kausar");
document.write(a +"<br><br>");
a.push("Lema");
document.write(a +"<br><br>");

//shift this deletes the first element

var a = ["Hammad","Ibrahim","Hamza"];
document.write(a +"<br><br>");
a.shift();
document.write(a +"<br><br>");

//unshift this adds extra element to start of code
var a = ["Hammad","Ibrahim","Hamza"];
document.write(a +"<br><br>");
a.unshift("Talha")
document.write(a +"<br><br>");

//concat to plus(concat) two arrays togthers
var a = ["Hammad","Ibrahim"];
var b = a.concat("Talha","Hamza");
document.write(b);
//////////////////

var e = ["Hammad","Ibrahim"];
var d = ["talha","Hamza"];
var l= a.concat(e,d);
document.write(l);

//splice












