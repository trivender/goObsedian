---
keywords: code to log file names in limesurey resources page
---


```javascript

$('tr.file.selected').each(function(){
               var td = $('td',$(this));
               console.log(''+td.eq(0).text()+'|'+td.eq(1).text()+'|'+td.eq(2).text()+'')
});

```