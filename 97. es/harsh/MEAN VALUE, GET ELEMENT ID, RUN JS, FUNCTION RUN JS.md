---
keywords: MEAN VALUE, GET ELEMENT ID, RUN JS, FUNCTION RUN JS
---

MEAN VALUE, GET ELEMENT ID, RUN JS, FUNCTION RUN JS
```javascript
<script>
$(function(){
	runjs();
	$('body').on('keyup mouseup',function(){
		runjs();	
	});	
})

function runjs(){
var val1string = $('#answer{SGQ}R1_C1').val()
var val1 = Number(val1string);
var val2string = $('#answer{SGQ}R2_C1').val()
var val2 = Number(val2string);
if(val1string != '' && val2string != ''){
	$('#answer{SGQ}R3_C1').attr('readonly',true).css('pointer-events','none').val(Math.round((val1 + val2)/2));
}else{
	$('#answer{SGQ}R3_C1').attr('readonly',true).css('pointer-events','none').val('');
}
}
</script>
```