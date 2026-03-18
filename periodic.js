window.onload = () => {

const table = document.getElementById("periodic-table");

elements.forEach(e => {

const div = document.createElement("div");

div.className = "element";
div.innerText = e.symbol;

table.appendChild(div);

});

};
