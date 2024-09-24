---
keywords: Input Box to dropdown
image: "![[image (12).png]]"
---
| ![[image (12).png]]                                       |
| --------------------------------------------------------- |
| To create dropdown manually from input box in limesurvey. |

```javascript

//In template editor//

function createDropDown(pleaseChooseLabel,arr){
var s = '';
	s+='<select class="multiflexiselect form-control">';
		s+='<option value="">'+pleaseChooseLabel+'</option>';
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


//In question text//

<script>
$(function(){
var thisQuestion = $('#question{QID}');
var c3 = ["1|Yes","2|No"];
var c4 = ["1|Yes","2|No"];
var c5 = ["1|Government","2|Private sector","3|NGO","3|Jointly"];
var c6 = ["1|National","2|Regional"];
var c7 = ["1|Yes","2|No"];
var c8 = ["1|Yes","2|No"];
var c9 = ["1|Yes","2|No"];
var pleaseChooseLabel = 'Please choose';
$('tbody > tr',thisQuestion).each(function(){
	var $tbox1 = $(this).find('.answer_cell_3 input[type="text"]');	$tbox1.hide().after(createDropDown(pleaseChooseLabel,c3)); 
	var $tbox2 = $(this).find('.answer_cell_4 input[type="text"]');	$tbox2.hide().after(createDropDown(pleaseChooseLabel,c4)); 
	var $tbox4 = $(this).find('.answer_cell_5 input[type="text"]');	$tbox4.hide().after(createDropDown(pleaseChooseLabel,c5)); 
	var $tbox4 = $(this).find('.answer_cell_6 input[type="text"]');	$tbox4.hide().after(createDropDown(pleaseChooseLabel,c6)); 
	var $tbox4 = $(this).find('.answer_cell_7 input[type="text"]');	$tbox4.hide().after(createDropDown(pleaseChooseLabel,c7)); 
	var $tbox4 = $(this).find('.answer_cell_8 input[type="text"]');	$tbox4.hide().after(createDropDown(pleaseChooseLabel,c8)); 
	var $tbox4 = $(this).find('.answer_cell_9 input[type="text"]');	$tbox4.hide().after(createDropDown(pleaseChooseLabel,c9)); 	
	
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

```