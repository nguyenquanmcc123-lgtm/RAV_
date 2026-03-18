const table = document.getElementById("periodic-table");
const info = document.getElementById("element-info");

elements.forEach(e=>{

const div=document.createElement("div");

div.className="element";
div.innerHTML=`<b>${e.symbol}</b><br>${e.number}`;

div.onclick=()=>{
info.innerHTML=`
<h2>${e.name}</h2>
<p>Số nguyên tử: ${e.number}</p>
<p>Khối lượng: ${e.mass}</p>
<a href="https://vi.wikipedia.org/wiki/${e.name}" target="_blank">Wikipedia</a>
`;
};

table.appendChild(div);

});
