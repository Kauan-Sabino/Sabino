//manipulação DOM
//criar header -> DOM
let header = document.createElement("header");
//style
header.style.backgroundColor = "black";
header.style.height = "8vh";
//adicionar header no body
document.body.appendChild(header);
document.body.style.margin = 0;
//criar uma navBar
let navBar = document.createElement("div");
navBar.classList.add("navBar")
//add navBar no header
header.appendChild(navBar);
//preencher navBar
let menuItens = ["Home","About", "Products", "Contact"]
menuItens.forEach(element =>{
    let a = document.createElement("a");
    a.innerText = element;
    a.classList.add("menuItens");
    navBar.appendChild(a);
});

let footer = document.createElement("footer");

document.body.appendChild(footer);

footer.style.backgroundColor = "blue";
footer.style.height = "5vh";
footer.style.width = 100;
footer.style.position = "absolute";
footer.style.bottom = "0";

let bottomNavBar = document.createElement("div");
bottomNavBar.classList("bottomNavBar");
footer.appendChild(bottomNavBar);

let itensFooter = ["ugarando", "ugaland", "ugassius", "ugavaldo", "ugason"];
itensFooter.forEach(elements =>{
    let a = document.createElement("a");
    a.innertext = element;
    a.classList.add("footerItens");
    bottomNavBar.appendChild(a);
});
