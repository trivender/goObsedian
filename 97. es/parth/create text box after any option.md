---
keywords: create text box after any option
image: "![[img4.png]]"
tags:
  - js
---
![[img4.png]]

https://who.my-survey.host/index.php/admin/questions/sa/view/surveyid/154876/gid/3381/qid/75085

```HTML
firstly, you have to create another short free text question then you have to put this code in question and then you have to put this <span class= "other-specify">text you want to do</span>.

```

```js

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

```