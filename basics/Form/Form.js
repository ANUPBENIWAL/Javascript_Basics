
let submit = document.getElementById("btn");
submit.addEventListener("click", function(e){
    console.log("click called")

    let name = document.getElementById("FName").value;
    let name1 = document.getElementById("LName").value;
    let father = document.getElementById("Father").value;
    let mother = document.getElementById("Mother").value;
    let Address = document.getElementById("Addresses").value;
    let emails = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let li = document.createElement('div');
    li.textContent = name + name1;
    let output = document.getElementsByClassName("output")[0];
    output.appendChild(li);

    let li1 = document.createElement('div');
    li1.textContent = father;
    let output1 = document.getElementsByClassName("output")[0];
    output1.appendChild(li1);
    
    let li2 = document.createElement('div');
    li2.textContent = mother;
    let output2 = document.getElementsByClassName("output")[0];
    output2.appendChild(li2);
    
    let li3 = document.createElement('div');
    li3.textContent = Address;
    let output3 = document.getElementsByClassName("output")[0];
    output3.appendChild(li3);
    
    let li4 = document.createElement('div');
    li4.textContent = emails;
    let output4 = document.getElementsByClassName("output")[0];
    output4.appendChild(li4);
    
    let li5 = document.createElement('div');
    li5.textContent = password;
    let output5 = document.getElementsByClassName("output")[0];
    output5.appendChild(li5);
    
})
