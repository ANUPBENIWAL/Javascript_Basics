
let p = fetch("https://mocki.io/v1/0661065d-cd4c-4775-b412-7736058ef2a0");
p.then((response)=>{
    console.log(response.status)
    console.log(response.text)
    console.log(response.json)
    return response.json()
}).then((value)=>{
    console.log(value)
    console.log(value.ok);
    let key = Object.keys(value.description);
    console.log(key);
    let le = value.description.length;
    console.log(value.description.length);
    console.log(value.description[0].YEAR);


    for(let i=0; i < le; i++){
        var a = document.getElementById("first");
        a.innerHTML+=`     
        <div class="product" ><a href ="LoginForm\LoginPage.html">
        <li>${value.description[i].TITLE}</li>
        <li>${value.description[i].YEAR}</li>
        <li> ${value.description[i].RANK}</li>
        <li><img src="${value.description[i].IMG_POSTER}" /></li>
        </a>
        
    </div>
        `
    }

})

