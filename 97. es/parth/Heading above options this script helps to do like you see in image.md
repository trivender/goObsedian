---
keywords: Create Heading above options
image: "![[img1.png]]"
---

![[img1.png]]
```Javascript
$( document ).ready(function() {
	$('#question{QID} .answer-container #ANSWERID').before("<tr><th style='font-size:18px;font-weight:bold;padding-bottom: 10px;'>Universitaire:</th><td></td><td></td></tr>");
	$('#question{QID} .answer-container #ANSWERID').before("<tr><th style='font-size:18px;font-weight:bold;padding-bottom: 10px;'>Autres enseignements:</th><td></td><td></td></tr>");
});



like this 

$( document ).ready(function() {
	$('#question{QID} .answer-container #answer761534X7X1891').before("<tr><th style='font-size:18px;font-weight:bold;padding-bottom: 10px;'>Universitaire:</th><td></td><td></td></tr>");
	$('#question{QID} .answer-container #answer761534X7X1895').before("<tr><th style='font-size:18px;font-weight:bold;padding-bottom: 10px;'>Autres enseignements:</th><td></td><td></td></tr>");
});

```

