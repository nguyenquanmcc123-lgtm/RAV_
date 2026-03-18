window.onload = () => {

const table = document.getElementById("periodic-table");

if(!table){
console.log("Không tìm thấy bảng!");
return;
}

elements.forEach(e => {

const div = document.createElement("div");

div.className = "element";
div.innerText = e.symbol;

table.appendChild(div);

});

};
