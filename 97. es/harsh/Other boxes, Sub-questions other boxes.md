---
keywords: Other boxes, Sub-questions other boxes
image: "![[image (11).png]]"
---
![[image (11).png]]

|   |
|---|
|If we want to add other specify boxes in front of any sub-question then we can take help from this code. 1. We have to add a CSS class to the sub-question in which we want to add other specify box. 2. Make a separate free text question accordingly just next to the CSS question. 3. Use this code.|
```javascript

<script>
$(function(){
var thisq = $('#question{QID}');
var nextq = thisq.next();
var $othText = $('.other-specify',thisq);
var $othBoxes = $('input:text',nextq);
$othText.each(function(i){
	$(this).after($othBoxes.eq(i));
});
nextq.hide();	
});
</script>

```