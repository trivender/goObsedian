```dataviewjs
let pages = dv.pages('"notesWithImages"');
dv.table(["Name"],pages.map(p => [p.file.link]))