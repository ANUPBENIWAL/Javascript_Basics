import data from './List.json' assert { type: 'json' };
let le = data.em.length;

// for(let i = 0 ; i < le; i++){
//     let a = document.getElementById("first");
//     let b = document.createElement("div");
//     b.setAttribute("id", "div1");
//     let b1 = document.createElement("li");
//     let b2 = document.createElement("li");
//     let b3 = document.createElement("li");
//     b3.setAttribute("class", "price");
//     let b4 = document.createElement("li");
//     a.appendChild(b);
//     console.log(le);
//     console.log(a.appendChild(b));
//     let c1 = b.appendChild(b1);
//     let c2= b.appendChild(b2);
//     let c3=b.appendChild(b3);
//     let c4=b.appendChild(b4);
//     c1.innerHTML='<img src="'+data.em[i].image+'" />';
//     c2.innerHTML=data.em[i].Name;
//     c3.innerHTML ="M.R.P.:-"+ data.em[i].Prise;
//     c4.innerHTML ="Price:-"+" "+ data.em[i].Prise_Decount;
//     console.log(data.em[i].image);
// }

// var a = document.getElementById("first");
//     a.innerHTML+=`<div>    
//     <li><img src="${data.em[0].image}" /></li>
//     <li>${data.em[0].Name}</li>
//     <li><p>MRP</p><p>${data.em[0].Price}</p></li>
//     <li>${data.em[0].Prise_Decount}</li>
// </div>`;  
 
for(let i=0; i < le; i++){
    var a = document.getElementById("first");
    a.innerHTML+=`     
    <div class="product">    
    <li><img src="${data.em[i].image}" /></li>
    <li>${data.em[i].Name}</li>
    <li><p>MRP:- <a>${data.em[i].Price}</a></p></li>
    <li>Price:- ${data.em[i].Price_Decount}</li>
</div>
    `
}