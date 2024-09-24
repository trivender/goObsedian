
```dataviewjs
// Create a container for the search input and the results

```
```dataviewjs
const container = dv.el("div");

// Create the search input field
const searchInput = dv.el("input", "", { type: "text", placeholder: "Search..." });
container.appendChild(searchInput);

// Create a div to display the results
const tableDiv = dv.el("div");

container.appendChild(tableDiv);

// Fetch the data (you can modify the query as needed)
let pages = dv.pages('"notesWithImages"');  // Replace with your folder or query

// Create the initial table and store the rows for filtering
let table = document.createElement("table");
let tableHeader = "<tr><th>Note</th><th>Image</th></tr>";
table.innerHTML = tableHeader;

// Array to store table rows for filtering
let rows = [];

// Populate the table
for (let i = 0; i < pages.length; i++) {
    let p = pages[i];

    // Create a row for each page
    let row = document.createElement("tr");

    // Create the note link
    let noteCell = document.createElement("td");
    let noteLink = '<a href="' + p.file.path + '">' + p.file.name + '</a>';
    noteCell.innerHTML = noteLink;
    row.appendChild(noteCell);
    // Create the image cell

    let imageCell = document.createElement("td");
	let imagePath = app.vault.adapter.getResourcePath(p.testimagepropery.path);
    let imageContent = p.testimagepropery ? '<img src="'+imagePath+'" alt="Image" width="100">' : 'No Image';
    imageCell.innerHTML = imageContent;
    row.appendChild(imageCell);

    // Append the row to the table
    table.appendChild(row);

    // Store the row for filtering
    rows.push(row);
}

// Append the completed table to the tableDiv
tableDiv.appendChild(table);

// Function to filter the table rows based on the search keyword
function filterTable(keyword) {
    // Convert the keyword to lowercase for case-insensitive matching
    keyword = keyword.toLowerCase();

    // Iterate over all the rows and toggle visibility
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let noteText = row.querySelector("td").innerText.toLowerCase();  // Get the note name
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

