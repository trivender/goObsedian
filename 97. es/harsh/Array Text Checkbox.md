---
keywords: Array Text Checkbox
image: "![[image (1).png]]"
---
![[image (1).png]]

This code is for making checkboxes with text boxes.

```javascript

var thisQuestion = $('#question9334'); //q2x3x7
//var thisQuestion = $('#question528');	


$('tbody > tr',thisQuestion).each(function(){
	$('td.answer_cell_SQ003 .form-control',$(this)).addClass('custom-hidden-cb').hide().after(createCheckBox());	
	$('td.answer_cell_SQ004 .form-control',$(this)).addClass('custom-hidden-cb').hide().after(createCheckBox());	
});

var $cb = $('.custom-checbox');

$cb.each(function(){
	var val = $(this).prev().val();
	if(val == '1'){
		$(this).prop('checked',true);	
	}else if(val == '0'){
		$(this).prop('checked',false);	
	}
	
});

var $rows = $('tbody > tr',thisQuestion);

$('body').on('keyup mouseup',function(){
	runjsCB($rows);
});

function runjsCB($rows){
	setTimeout(function(){
		$rows.each(function(){
			//console.log($(this))
			var checkedbox = $('.custom-checbox:checked',$(this));
			//console.log(checkedbox)
			var checkedtb = checkedbox.prev();
			var allTbWithCB =  $('.custom-checbox',$(this)).prev();
			var othercb = $('.custom-checbox',$(this)).not(checkedbox)
			var othertb = $('input.form-control',$(this)).not(checkedtb)
			if(checkedbox.length > 0){
				checkedtb.val('1')
				othertb.val('').attr('disabled',true);
				othercb.prop('checked',false).attr('disabled',true);
			}else{
				allTbWithCB.val('0')
				othertb.attr('disabled',false);
				othercb.attr('disabled',false);
			}
				
		});
	},100);	
}

			var prevTb = $(this).prev();
			var otherTB = $(this).closest('tr').find('input.form-control').not(prevTb)
			if($(this).prop('checked')){
				prevTb.val('1');
				otherTB.attr('disabled',true).val('');
			}else{
				prevTb.val('0');
				otherTB.attr('disabled',false);				
			}	


function createCheckBox(){
var s = '';
	s+='<input type="checkbox" class="custom-checbox">';
	s+='</input>';	
	return s;	
}


//To set value in checkbox when it checked//
<script>
  $(document).ready(function() {
    // Bind click event to checkboxes with class 'custom-checbox'
    $('.custom-checbox').on('click', function() {
      // Set the value to 1 when checkbox is checked, otherwise set it to 0
      $(this).val(this.checked ? 1 : 0);
    });
  });
</script>

```