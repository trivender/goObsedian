function runEs(dv,folder){
const container = dv.el("div");

// Create the search input field
const searchInput = dv.el("input", "", { type: "text", placeholder: "Search..." });
container.appendChild(searchInput);

// Create a div to display the results
const tableDiv = dv.el("div");

container.appendChild(tableDiv);



// Fetch the data (you can modify the query as needed)
var pages = dv.pages('"'+folder+'"');  // Replace with your folder or query	
//console.log(pages)

// Create the initial table and store the rows for filtering
var table = document.createElement("table");
var tableHeader = "<tr><th>Name</th><th>Keyword</th><th>Image</th></tr>";
table.innerHTML = tableHeader;


// Array to store table rows for filtering
var rows = [];


// Populate the table
for (var i = 0; i < pages.length; i++) {
    var p = pages[i];

    // Create a row for each page
    var row = document.createElement("tr");
//=============================================================
	var linkCell = document.createElement("td");
	linkCell.innerHTML = "<a href='"+p.file.link.path+"' class='internal-link' target='_blank'>"+p.file.name+"</a>";
	 row.appendChild(linkCell);
//=============================================================
    var noteCell = document.createElement("td");
    noteCell.innerHTML = p.keywords;
    row.appendChild(noteCell);

//=============================================================
    var imageCell = document.createElement("td");
    //Trivender: image here is custom property name. We can change it
	var imageContent = ''
	if(p.image){
		var imagePath = app.vault.adapter.getResourcePath(p.image.path);
		imageContent = '<img src="'+imagePath+'" alt="Image" width=200>'		
	}else{
		imageContent = 'x'	
	}

    imageCell.innerHTML = imageContent;
    row.appendChild(imageCell);

    // Append the row to the table
    table.appendChild(row);

    // Store the row for filtering
    rows.push(row);
}

// Append the compvared table to the tableDiv
tableDiv.appendChild(table);

// Function to filter the table rows based on the search keyword
function filterTable(keyword) {
    // Convert the keyword to lowercase for case-insensitive matching
    keyword = keyword.toLowerCase();

    // Iterate over all the rows and toggle visibility
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var noteText = row.querySelectorAll("td")[1].innerText.toLowerCase();  // Get the note name
        if (noteText.includes(keyword)) {
            row.style.display = "";  // Show the row
        } else {
            row.style.display = "none";  // Hide the row
        }
    }
}

// Add an event listener to the search input field
searchInput.addEventListener("input", (e) => {
    filterTable(e.target.value);
});

// Initial display of the data
filterTable("");	
}

exports.runEs = runEs;