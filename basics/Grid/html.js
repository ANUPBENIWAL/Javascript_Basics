function geeks() {
    var node = document.createElement("li");
    var t = document.createTextNode("GeeksforGeeks");
    node.appendChild(t);
    document.getElementById("uls").appendChild(node);
    console.log(node);
}