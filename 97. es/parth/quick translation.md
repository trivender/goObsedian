---
keywords: quick translation
---

this code is used for quick translation use this code in the console of the browser

```java
/********** inject code **********/
var arr = ["paste translation here"]
$('textarea').each(function(i){
$(this).val(arr[i])
});

// eject labels
$('textarea').each(function(){
                var qid = $(this).closest('td').prev().prev().html();
                var text = $.trim($(this).val());
                console.log(''+$(this).attr('id')+'|'+$.trim(qid).split(' ')[0]+'|'+text+'')
});

// Textarea Element Count
var numberOfTextareas = $('textarea').length;
console.log(numberOfTextareas);

```

