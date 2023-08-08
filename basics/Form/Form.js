let submit = document.getElementById("btn");
submit.addEventListener( "click",function(e){
    console.log("click called")

    let name = document.getElementById("FName").value;
    let name1 = document.getElementById("LName").value;
    let father = document.getElementById("Father").value;
    let mother = document.getElementById("Mother").value;
    let Address = document.getElementById("Addresses").value;
    let emails = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(name==""){
        alert("Name is empty")
    }else if(name1==""){
        alert("Last name is empty")
    }else if(father==""){
        alert("Father's is empty")
    }else if(mother==""){
        alert("Mother's is empty")
    }else if(Address==""){
        alert("Address is empty")
    }else if(emails==""){
        alert("Email id is empty")
    }else if(password==""){
        alert("Password is empty")
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
    
