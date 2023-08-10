let submit = document.getElementById("btn");
submit.addEventListener( "click",function(e){
    console.log("click called")
    var genders = document.getElementById('gender').value;
var rate_value;
    if(genders == 'Fixed Rate'){
        rate_value = document.getElementById('male').value;

    }else if(rates == 'Variable Rate'){
        rate_value = document.getElementById('female').value;


    let name = document.getElementById("FName").value;
    let name1 = document.getElementById("LName").value;
    let father = document.getElementById("Father").value;
    let mother = document.getElementById("Mother").value;
    if (document.getElementById('age').checked) {
        let rate_value = document.getElementById('age').value;
      }console.log(document.getElementById('age').checked);
    let Address = document.getElementById("Addresses").value;
    let emails = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(name==""){
        document.querySelector(".FName-error").innerHTML = "Please enter a first name*";
        // alert("Name is empty")
    }else if(name1==""){
        document.querySelector(".LName-error").innerHTML="Please enter last name*"
        // alert("Last name is empty")
    }else if(father==""){
        document.querySelector(".FNames").innerHTML = "Please enter father's name*"
        // alert("Father's is empty")
    }else if(mother==""){
        document.querySelector('.mothers').innerHTML = "Please enter mother's name*"
        // alert("Mother's is empty")
    }else if(Address==""){
        document.querySelector('.address').innerHTML ="Please enter address*"
        // alert("Address is empty")
    }else if(emails==""){
        document.querySelector('.email').innerHTML = "Please enter email id*"
        // alert("Email id is empty")
    }else if(password==""){
        document.querySelector('.password').innerHTML = "Please enter password*"
        // alert("Password is empty")
    }
      
    
    let li2 = document.getElementsByClassName('demo')[0];
    li2.textContent = name +" "+ name1;

    let li3 = document.getElementsByClassName('demo1')[0];
    li3.textContent = father

    let li4 = document.getElementsByClassName('demo2')[0];
    li4.textContent = mother

    let li5 = document.getElementsByClassName('demo3')[0];
    li5.textContent = Address

    let li6 = document.getElementsByClassName('demo4')[0];
    li6.textContent = emails

    let li7 = document.getElementsByClassName('demo5')[0];
    li7.textContent = password

})
    
