let submit = document.getElementById("btn");
submit.addEventListener( "click",function(e){
    console.log("click called")

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    if(name=="" || password==""){
        alert("User name and user password empty")
    }
    let a = document.getElementsByClassName('name')[0];
    a.textContent ="User Name:-"+ name ;
    let b = document.getElementsByClassName('password')[0];
    b.textContent ="User password:-"+ password ;
    


})