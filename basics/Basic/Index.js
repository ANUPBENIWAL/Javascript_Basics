
// javascript console API
// console.log("Hello World",3+5,"another log");
// document.write("This is write");
// console.warn("this is warning");
// console.error("This is an error");
    
// javascript variales
// var number1=34;
// var number2=23;
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
// var a=12;
// var b=13;
// // console.log('the value of a+b',a+b);
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


// summm=(a,b)=>{
//     return a+b;
// }
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired</b>"
    //console.log("I am your log")
// }
// setTimeout(logKaro,2000);
// setInterval(logKaro, 2000);
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

// variables:- let and const
// let:-Variables defined with let have Block Scope
// const:-A const variable cannot be reassigned 

// let m=3;
// console.log(m);
// const n = 3; 
// console.log(n);

// JavaScript data types:-
// primitive data types(1. String
//     2. Number
//     3. Bigint
//     4. Boolean
//     5. Undefined
//     6. Null
//     7. Symbol) 
// non primitive data types(object, array)
// let o="Anup";
// let p=3;
// let q=BigInt("45613");
// let r=true;
// let s;
// let t=null;
// console.log(o,p,q,r,s,t);

// const a1 = {
//     name:"Himank",
//     age:3
// }
// a1['name']='anup';
// console.log(typeof a1);

// Arithametic operators-----------
// let a2=2;
// let b2=3;
// console.log("a2+b2:",a2+b2);
// console.log("a2-b2:",a2-b2);
// console.log("a2*b2:",a2*b2);
// console.log("a2/b2:",a2/b2);
// console.log("a2%b2:",a2%b2);
// console.log("a2++:",a2++);
// console.log("++a2:",++a2);
// console.log("a2--:",a2--);


//Assignment operators-----------
// console.log("a2+=b2:",a2+=b2);
// console.log("a2-=b2:",a2-=b2);
// console.log("a2*=b2:",a2*=b2);
// console.log("a2/=b2:",a2/=b2);
// console.log("a2%=b2:",a2%=b2);

// logical operators-----------

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(!true);
// console.log(!false);


// Comparison operators------------
// let comp1=4;
// let comp2="4";
// console.log("comp1==comp2:-",comp1==comp2);
// console.log("comp1===comp2:-",comp1===comp2);
// console.log("comp1!=comp2:-",comp1!=comp2);
// console.log("comp1!==comp2:-",comp1!==comp2);

// let age1=prompt("what is your age?")
// if(age1>10 && age1<20){
//     console.log("Your age lies between 10 and 20");
// }
// else{
//     console.log("Your age doesnt lies between 10 and 20");
// }

// switch case---------      (prompt string value" " || change int)
// let age1=prompt("what is your age?")
// age1 = Number.parseInt(age1);
// switch(age1){
//     case 12:
//         console.log("Your age is 12")
//         break;
//     case 13:
//         console.log("Your age is 13");
//         break;
//     default:
//         console.log("Your age is not special");
// }

// let num = prompt('what is your age?');
// num = Number.parseInt(num);
// if(num % 2 == 0 && num % 3 == 0){
//     console.log('Your number is divisible by 2 and 3');
// }
// else {
//     console.log('Your number is not divisible by 2 and 3');
// }

// Ternary oprerator-----------
// let age2 = prompt('what is your age?');
// let p = age2>18 ? "you can drive":"you cannot drive";
// console.log(p);

// Loops----------
// Program to add first n natural numbers

// let n1 = prompt('Enter the value of n:');
// n1 = Number.parseInt(n1);
// let sum=0;
// for (let i = 0; i < n1; i++){
//     sum += (i+1);
// }
// console.log('Sum of first:'+ n1 + " "+"Natural numbers is" + sum);

// let obj1 = {
//     harry: 85,
//     anu: 57,
//     himank:99
// }
// for in loop
// for (let a in obj1){
//     console.log('Marks of'+' '+ a +' ' + 'are'+' ' + obj1[a]);
// }
// for of loop
// for (let b of 'anu'){
//      console.log(b);
// }

// while loop
// let n2 = prompt('Enter the value of n')
// n2 = Number.parseInt(n2);
// let num1 = 0;
// while(num1<n2){
//     console.log(num1);
//     num1++;
// }

// do while loop
// do{
//     console.log(num1);
//     num1++;
// }while(num1<n2);

// Function -----------------
// function onePlusAvg(x,y){
//     return 1 + (x + y)/2
// } 
// console.log(onePlusAvg(5,8));

// const sum = (x,y)=>{
//     return x+y; 
// }
// console.log(sum(5,8));

// const hello = ()=>{
//     console.log("hi");
// }
// hello();

// let marks1 = {
//     harry: 92,
//     anu:90
// }
// for (let i=0; i<Object.keys(marks1); i++){
//     console.log('The marks of '+ Object.keys(marks1)[i] + 'are'+ marks1[Object.keys(marks1)[i]]);
// }

// let cn = 5;
// let num3;
// while (num3 != cn){
//     num3=prompt('Enter a number')
//     console.log("Try again")
// }
// console.log('You have entered a correct number')

// const mean = (a,b, c, d) =>{
//     return (a + b + c + d)/4
// }
// console.log(mean(4,5,5,6));

// let name1='Anup';
// console.log(name1.length);
// console.log(name1[1]);
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.slice(2,3));
// console.log(name1.replace('An','r'));
// let friends = 'kamal';
// console.log(name1.concat('is a friend of',' ', friends, ' ' , 'ok'));
 
// let str = "Har\"";
// console.log(str.length);

// const sentence = "The quick brown fox jumps over the lazy dog.";
// const word = "foxs";
// console.log(sentence.includes(word));
// console.log(`The word "${word}" ${sentence.includes(word)?"is":"is not"} in the sentence`);

// let str3 = "Please give Rs 1000"
// let amount = str3.slice("Please give Rs ".length);
// console.log(amount);

// Array-------------
// let marks_class_12 = [91, 94,83,false, 'Not Present'];
// console.log(marks_class_12);
// console.log(marks_class_12.length);
// console.log(typeof marks_class_12);
// console.log(marks_class_12[3]);
// marks_class_12[5]=87;
// console.log(marks_class_12[5]);
// for (i=0; i<marks_class_12.length; i++){
//     console.log(marks_class_12[i]);
// }

// Array Methods-----
let num2 = [1,2,3,4,34];
// let b4 = num2.toString();
// console.log(b4);
// let c3=num2.join('_');
// console.log(c3);
// console.log(num2.length);
// let r = num2.pop();
// console.log(r);
// console.log(num2.length);
// console.log(num2,r);
// let r1 = num2.push(26);
// console.log(num2,r1);
// console.log(num2.length);
// let r = num2.shift();
// console.log(num2,r);
// let r1 = num2.unshift(2,'Himank');
// console.log(num2,r1);
// let num2_more = [5,6,7,8];
// let newArray = num2.concat(num2_more,num2);
// console.log(newArray);
// console.log(num2,num2_more);
// let del = delete num2[2];
// console.log(num2.length,num2);
// let compare=(a,b)=>{
//     return a-b;
// }
// num2.sort(compare);
// console.log(num2);

// let deleteValue= num2.splice(2,1,45,46);
// console.log(deleteValue);
// console.log(num2);
// let p1 = num2.slice(1,4);
// console.log(p1);

// Array loop throw--
// for(i=0;i<num2.length;i++){
//     console.log(num2[i]*num2[i]);
// }
// num2.forEach((element)=>{
//     console.log( element*element)
// });

// let name2 = 'Anup';
// let arr2 = Array.from(name2);
// console.log(arr2);

// for(i of num2){
//     console.log(i);
// }

// for(item in num2){
//     console.log(num2[item]);
//     console.log(item);
// }



// const myArr5 = [[1,2],[3,4],[5,6]];

// const newArr = myArr5.flat();
//  console.log(newArr);






// Template literals
// let boy1 = 'Pramod';
// let boy2 = 'Nikhal';
// let sentence = `${boy1} is a friend of ${boy2}`;
// console.log(sentence);

// Escape sequence characters
// let fruits = 'bana\'na';
// console.log(fruits);


// let mapArr = [1,2,3,4,5,6,7,8,9];

// mapArr.forEach((v) => {

//     console.log("For each", v);

// });

// let marr = mapArr.map((v) => {
//      return v + 1;
// })
// console.log(marr);

// let farr = mapArr.filter((v) => {
//     return v > 5;
// });

//reduce
// let rArr = mapArr.reduce((v1, v2) => {
//    return v1 * v2;
// });


// console.log("new Array", rArr);
// console.error("You made a mistake");
// console.table(["Audi", "Volvo", "Ford"]);
// console.time();
// for (let i = 0; i < 100000; i++) {
  
// }
// console.timeEnd();
// console.log("Hello world!");
// console.group();
// console.log("Hello again, this time inside a group!");



// alert('Enter the value of a!')
// let a4 = prompt('enter a here','45')
// a4 = Number.parseInt(a4);
// alert('You entered a4 of type'+(typeof a4));
// let write = confirm('Do you want to write it to the page');
// if(write){
//     document.write(a4);
// }else{
//     document.write('Please allow me to write');
// }
  

 

// console.log(document.body.firstChild);
// a=document.body.firstChild;
// console.log(a.parentNode);
// console.log(a.parentElement);
// // console.log(a.firstChild.nextSibling)

// let b5 =document.body;
// console.log('First child of b is:', b5.firstChild)
// console.log('First Element child of b is:', b5.firstElementChild);

// const changeBgRed = () =>{
//     document.body.firstElementChild.style.background = "red";
// }

// let t = document.body.firstElementChild;
// console.log(t);
// console.log(t.rows);
// console.log(t.caption);
 
// let id1= document.getElementById("id1");
// let sp1 = document.getElementById("sp1");
// console.log(id1);
// console.log(id1.matches(".class"));
// console.log(id1.matches(".box"));
// console.log(sp1.closest('sp1'));
// console.log(sp1.closest('#sp1'));
// console.log(id1.contains(sp1));
// console.log(document.body.getElementsByTagName('span'));
// let html = document.getElementById("myP").innerHTML;
// document.getElementById("demo").innerHTML = html;

// console.log(document.body.textContent);


// let attri = firsts.getAttribute("class")
// console.log(attri);
// console.log(firsts.hasAttribute("class"));
// console.log(firsts.hasAttribute("style"));
// firsts.setAttribute("hidden","true")

// let e1 = document.getElementsByTagName('div')[0]
//e1.innerHTML= e1.innerHTML + '<h1>Hello World!</h1>';
// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello World!</h1>';
// e1.appendChild(div);
// e1.append(div);
// e1.prepend(div);
// e1.before(div);
// e1.after(div);
// e1.replaceWith(div);

// first2.insertAjacentHTML('beforebegin','<div class="test">beforebegin</div>')
// first2.insertAjacentHTML('beforeend','<div class="test">beforeend</div>')
// first2.insertAjacentHTML('afterbegin','<div class="test">afterbegin</div>')
// first2.insertAjacentHTML('afterend','<div class="test">afterend</div>')
// first3.className = "yello1";
// first3.classList.toggle('red')
// first3.classList.toggle('red')
// first3.classList.add('blue')
// console.log(first3.className);
// first3.classList.contains('white')
// first3.classList.remove('blue')
// alert('Hello')
// document.write('Hello world')
// let serTime=setTimeout(function(){
//     alert('I am inside of settimeout')
// },2000)
// clearTimeout(serTime);
// console.log(serTime);
// const sum1 = (a,b)=>{
//     console.log("Yes")
//     a+b
// }
// setTimeout(sum1,1000,1,2)
// setInterval(function(){
//     alert('setInterval');
// },5000)

// let xa =function(e){
//     console.log(e)
    
//     alert('Hello World1!')
// }
// let yb = function(e){
//     console.log(e)
//     alert('Hello World2!')
// }
// btn.addEventListener("click",xa)
// btn.addEventListener("click",yb)
// let ab = prompt("What is your favorite number?")
// if(ab=="2"){
//     btn.removeEventListener('click',xa)
// }


// console.log("hi");
// console.log("hello");
// console.log("hfer");

// function name(callback)  {
//     //code api call response
//     setTimeout(function() {
//         callback("data is available", 0);
//     }, 3000);
// }
// name((returnData, error) => {
//     console.log("error returned"+error);
//     if(error != null){
//         name((d, err) => {
//             console.log("return data first:- "+d) 
//             if(d != null){
//                 name((d, err) => {
//                     console.log("return data second:- "+d) 
//                     if(d != null){
//                         name((d, err) => {
//                             console.log("return data third:- "+d) 
//                             if(d != null){
//                                 name((d, err) => {
//                                   console.log("return data forth:- "+d) 
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
//  });
// console.log("after timeout")

// let promise = new Promise(function(resolve, reject){
//     alert('I am an alert in promise')
//     return(23)
// })
// console.log("Hello")
// setTimeout(function(){
//     console.log('Hello in 2 seconds')
// },2000)
// console.log('My name is '+"john")
// console.log(promise)
// let pr1 = new Promise((resolve, reject)=>{
//     console.log('Promise is pending')
//     setTimeout(()=>{
//         console.log('I am a promise and I am fulfilled')
//         resolve(true)
         
//     },5000)
// })
// let pr2 = new Promise((resolve, reject)=>{
//     console.log('Promise is pending')
//     setTimeout(()=>{
//         console.log('I am a promise and I am fulfilled')
//         reject(new Error('I am an error') )
//     },5000)
// })

// console.log(pr1,pr2)
// pr1.then((value)=>{
//     console.log(value)
// })
// pr2.catch((error)=>{
//     console.log('some errot occurred in pr2')
// })
// let pr3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Resolved after 2 seconds')
//         resolve(56)
//     },2000)
// })
// pr3.then((value)=>{
//     setTimeout(()=>{
//         console.log(value)
//         new Promise((resolve, reject)=>{
//             console.log('value')
//             resolve('Promise 2')

//         })
//     },1000)
// })

// const loadScript = (src)=>{
//     return new Promise(resolve =>{
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = src
//     document.body.appendChild(script)
//     script.onload = (()=>{
//         resolve(1)
//     })
//     script.onerror = () =>{reject(0)}
// })
// }
// let pr4 = loadScript("http://localhost:3000/index.js")
// pr4.then((value)=>{
//     console.log(value)
// }).then((error)=>{
//     console.log('We are sorry but we are having problems loasing this script')
// }).catch((error)=>{
//     console.log('We are sorry but we are having problems loasing this script')
// })

// let p2 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         alert("Hey I am not resolved")
//         resolve(1);
//     }, 2000);
// })
// p2.then(()=>{
//     console.log("Congratulations this promise is now resolved")

// })

// let p3 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('value 3');
//     }, 1000);
// })
// let p4 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('value 4');
//     }, 2000);
// })
// let p5 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('value 5');
//     }, 3000);
// })
// p3.then((value)=>{
//     console.log(value)

// })
// p4.then((value)=>{
//     console.log(value)

// })
// p5.then((value)=>{
//     console.log(value)

// })
// let promise_all = Promise.all([p3,p4,p5])
// promise_all.then((value) =>{
//     console.log(value)
// })


async function harry(){
    let delhiWeather = new Promise((resolve, reject)={
        setTimeout(()=>{
            resolve("27 ")
        },1000)
    })
}

