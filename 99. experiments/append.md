```dataviewjs



let p = dv.pages('"notesWithImages"')[0]
console.log(p)

//var imagePath = p.ImageProperty.path
var imagePath = p.TestImagePropery.path
console.log(imagePath)

//var imgName = "notesWithImages/img159.png"
var imgName = imagePath
var imageSpan = dv.span('![['+imgName+']]');

const tableDiv = dv.el("div");

let table = document.createElement("table");
let tableHeader = "<tr><th>Note</th><th>Image</th></tr>";
table.innerHTML = tableHeader;
tableDiv.appendChild(table);

//tableDiv.appendChild(imageSpan);