---
keywords: Dropdown With Text
image: "![[image (2).png]]"
---
![[image (2).png]]

This code is for making dropdown with textbox.

```javascript
//---------------------this will in question text-------
<script>
$(function(){
var thisQuestion = $('#question{QID}');
var c1 = ["1|promotion of new and more efficient or more environmentally sustainable steelmaking processes","2|promotion of less carbon emitting steelmaking processes and related breakthrough technologie ","3|assistance for upgrading equipment","4|tax incentives for upgrading such as tax credits or reductions for investment in machinery and equipment or other inputs","OE99|other"];
var c2 = ["1|implemented","2|issued but not yet implemented","3|being planned"];
var c4 = ["1|central","2|regional/state/province","3|local","4|central and regional/state/province and local"];

$('tbody > tr',thisQuestion).each(function(){
	var $tbox1 = $(this).find('.answer_cell_SQ001 input[type="text"]');	$tbox1.hide().after(createDropDown(c1)); 
	var $tbox2 = $(this).find('.answer_cell_SQ002 input[type="text"]');	$tbox2.hide().after(createDropDown(c2)); 
	var $tbox4 = $(this).find('.answer_cell_SQ004 input[type="text"]');	$tbox4.hide().after(createDropDown(c4)); 	
	
});
var $select = $('.multiflexiselect');

$select.each(function(){
	var selectDD = $(this);
	var preCodeBox = selectDD.prev();
	var othTextBox = selectDD.next();
	var preCode = preCodeBox.val();
	var precodeAndText = preCode.split('|');
	if(precodeAndText[0] == 'OE99'){
		othTextBox.val(precodeAndText[1]).show();
		selectDD.val('OE99');	
	}else{
		selectDD.val(preCode);
	}
});


$('body').on('keyup mouseup',function(){
runjsSelectJs($select);
});

});
</script>

//-------this will go in template
function runjsSelectJs($select){
	$select.each(function(){
		var val = $(this).val();
		var precodeBox = $(this).prev();
		var othTextBox = $(this).next();
			
		if(val == 'OE99'){
			othTextBox.show();
			precodeBox.val("OE99|"+othTextBox.val()+"")
		}else{
			othTextBox.hide();	
			precodeBox.val(val);
		}
		
	});
}

function createDropDown(arr){
var s = '';
	s+='<select class="multiflexiselect form-control">';
		s+='<option value="">Please choose...</option>';
		var len = arr.length;
		for(var i=0;i<len;i++){
			var thiselm = arr[i];
			var split = thiselm.split('|');
			s+='<option value="'+split[0]+'">'+split[1]+'</option>';
		}
	s+='</select>';
	s+='<input class="form-control custom-otherspecify-boxes" type="text" name="select-other-inputbox" style="display:none;" placeholder="Please specify.">';		
	return s;	
}


```