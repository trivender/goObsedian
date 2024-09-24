---
keywords: randamize question elements
---
firstly you have to create a short free text question with code hRand100 and then you have to paste above provided code inside of it.

```js

/********Code to paste in hRand100 question*********/
<script>
$(function(){
function generateRandomArray(length) {
    var randomArray = [];
    for (var i = 1; i <= length; i++) {
        randomArray.push(i);
    }
    return randomiseAarray ( randomArray );
}



function randomiseAarray ( mytempArray ) {
  var myArray = mytempArray;
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
 return myArray;
}

$('#question{QID} input.form-control').val(generateRandomArray(100))	
});
</script>
<style>
#question{QID}{
	display: none;
}
</style>



/*************Code to paste in questions which want to randomize**********/

<script>
$(function(){
var arr = "{hRand100.NAOK}".split(',')

$('#question{QID} table.ls-answers tbody').each(function(){
	var $thisTbody = $(this);
	var $tr = $('tr',$thisTbody);
	var $trRepeatHead =  $('tr.ls-heading-repeat',$thisTbody);
	
	var codeArr = [];
	$tr.each(function(){
		var id = $(this).attr('id');
		if(!!id){
			var code = id.replace(/javatbd{SGQ}/g, "");
			codeArr.push(Number(code))
		}
	});
	if($trRepeatHead.length > 0){
		for(var i=0;i<arr.length;i++){
			var tc = arr[i]
			if(codeArr.indexOf(Number(tc)) != -1){
				$trRepeatHead.after($('#javatbd{SGQ}'+tc+''));
			}	
		}		
	}else{
		for(var i=0;i<arr.length;i++){
			var tc = arr[i]
			if(codeArr.indexOf(Number(tc)) != -1){
				$thisTbody.append($('#javatbd{SGQ}'+tc+''));
			}	
		}			
	}

});
	
});
</script>

```

