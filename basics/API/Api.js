
let p = fetch("https://dog.ceo/api/breeds/image/random");
p.then((response)=>{
    console.log(response.status)
    console.log(response.text)
    console.log(response.json)
    return response.json()
}).then((value)=>{
    console.log(value)
})
