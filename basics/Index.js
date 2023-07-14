
// javascript console API
// console.log("Hello World",3+5,"another log");
// document.write("This is write");
// console.warn("this is warning");
// console.error("This is an error");
    
// javascript variales
var number1=34;
var number2=23;
//console.log(number1+number2);    

// data types in javascript
var str1="This is a string";
var str2='This is  also a stirng';

//Objects
var marks={
     ravi:1,
     Himank:2,
     Anu:3
}
//console.log(marks);
//Booleans
var a= true;
var b= false;
//console.log(a);
var und;
//var und=undefined;
//console.log(und);
var n;
var n=null;
//console.log(n);

/* At a very high level, there are two types of data types
in javascript
1. Primitive data types:undefined, null, numer, string, boolean,symbol
2. Reference data types:Arrays and Objects
*/
var arr1=[1,2,3,4,5,'anu'];
//console.log(arr1);

//operator in javascript
var a=12;
var b=13;
// console.log('the value of a+b',a+b);
// console.log('the value of a-b',a-b);
// console.log('the value of a*b',a*b);
// console.log('the value of a/b',a/b);

// Assignment operators
var c=b;
c+=2;
c-=2;
//console.log(c);
var x=12;
var y=34;
// console.log(x==y);
// console.log(x<=y);

//Logical operators
// console.log(true&&true);
// console.log(false&&true);
// console.log(true&&false);
// console.log(false&&false);

// console.log(true||true);
// console.log(false||true);
// console.log(true||false);
// console.log(false||false);

// console.log(!true);

function avg(a,b){
    return (a+b)/2;
}
c1= avg(3,5);
c2= avg(7,8);
//console.log(c1,c2);

// conditional in js
var age= 18;
if(age>20){
    //console.log("you are not a kid");
}
else if(age<45){
    //console.log("yor are a kid");
}
else{

}
// loops
var arr=[1,2,3,4,5];
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    //console.log(arr[i])
}

arr.forEach(function(element){
   // console.log(element)
})

let j=0;
//const k=0;
//console.log(k);
// while(j<arr.length){
//    // console.log(arr[j])
//     j++
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

let myArr=['Fan','camera',25,null,true];
//console.log(myArr.length);
// myArr.pop();
// myArr.push('anu');
// myArr.shift();
//console.log(myArr.unshift('Harry'));
// const newLen =myArr.unshift('harry');
// console.log(newLen);
// console.log(myArr);

let myLovelyString="harry is a good boy";
//console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("harry"));
// console.log(myLovelyString.slice(0,12));
// console.log(myLovelyString.replace("harry","rohan"));
let myDate = new Date();
// console.log(myDate);
// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('button');
tn = document.getElementsByTagName('div');
// console.log(tn);
//createdElement=document.createElement('p');
//createdElement.innerText = "This is a created para";
//tn[0].appendChild(createElement);
//tn[0].replaceChild(createdElement);

// selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)
// sel = document.links();
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked')
// }
// document.onload = function(){
//     console.log('The document was loaded')
// }
// Events in JavaScript
//firstContainer.addEventListener('click', function(){
//     console.log("Clicked on Container")
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse on Container')
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log('mouse out of container')
// })
// firstContainer.addEventListener('mouseup', function(){
//     console.log('mouse up when clicked on container')
// })
// firstContainer.addEventListener('mousedown', function(){
//     console.log('mouse down when clicked on container')
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseout', function(){
//     document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//     console.log('mouse up when clicked on container')
// })
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML =
//     "<b> we have clicked </b>"
//     console.log('mouse down whene clicked on container')
// })

// SetTimeout and setInterval
// function summ(a,b){
//     return a+b;
// }


summm=(a,b)=>{
    return a+b;
}
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired</b>"
    //console.log("I am your log")
}
// setTimeout(logKaro,2000);
setInterval(logKaro, 2000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr) / clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name','harry')
// localStorage.getItem('name')
// localStorage
// localStorage.removeItem('name')
// localStorage.clear();

// Json
// obj = {name:'harry',length:1, a:{this:'that'}}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso);
// parsed = JSON.parse('{"name":"harry","length":1, "a":{this:"that"}}');
// console.log(parsed);


