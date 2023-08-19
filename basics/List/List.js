import data from './List.json' assert { type: 'json' };
// console.log(data.Prise);
let a = document.getElementById("first");
let b1 = document.createElement("li");
let b2 = document.createElement("li");
let b3 = document.createElement("li");
let b4 = document.createElement("li");
let c1 = a.appendChild(b1);
let c2= a.appendChild(b2);
let c3=a.appendChild(b3);
let c4=a.appendChild(b4);
c1.innerHTML='<img src="'+data.em[0].image+'" />';
c2.innerHTML=data.em[0].Name;
c3.innerHTML ="Prise:-"+ data.em[0].Prise;
c4.innerHTML ="Prise Decount:-"+ data.em[0]['Prise Decount'];
console.log(data.em[0].image);

let a1 = document.getElementById("second");
let b11 = document.createElement("li");
let b21 = document.createElement("li");
let b31 = document.createElement("li");
let b41 = document.createElement("li");
let c11 = a1.appendChild(b11);
let c21= a1.appendChild(b21);
let c31=a1.appendChild(b31);
let c41 = a1.appendChild(b41);
c11.innerHTML='<img src="'+ data.em[1].image+'"/>';
c21.innerHTML = data.em[1].Name;
c31.innerHTML ="Prise:-"+ data.em[1].Prise;
c41.innerHTML ="Prise Decount:-"+ data.em[1]['Prise Decount'];


let a2 = document.getElementById("third");
let b12 = document.createElement("li");
let b22 = document.createElement("li");
let b32 = document.createElement("li");
let b42 = document.createElement("li");
let c12 = a2.appendChild(b12);
let c22= a2.appendChild(b22);
let c32=a2.appendChild(b32);
let c42 = a2.appendChild(b42);
c12.innerHTML = '<img src="'+ data.em[2].image+'"/>';
c22.innerHTML = data.em[2].Name;
c32.innerHTML ="Prise:-"+ data.em[2].Prise;
c42.innerHTML ="Prise Decount:-"+ data.em[2]['Prise Decount'];











