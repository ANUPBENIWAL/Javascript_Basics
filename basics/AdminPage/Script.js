function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function load_home() {
  document.getElementById("mid").innerHTML='<object type="text/html" data="FirstPage.html" ></object>';
}

function load_home1() {
  document.getElementById("mid").innerHTML='<object type="text/html" data="Second.html" ></object>';
}