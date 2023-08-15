function geeks() {
    var node = document.createElement("ul");
    var t = document.createTextNode("GeeksforGeeks");
    node.appendChild(t);
    document.getElementById("uls").appendChild(node);
    console.log(node);
}