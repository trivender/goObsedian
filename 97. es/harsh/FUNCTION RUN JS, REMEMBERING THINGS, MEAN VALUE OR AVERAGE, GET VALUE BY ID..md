---
keywords: FUNCTION RUN JS, REMEMBERING THINGS, MEAN VALUE OR AVERAGE, GET VALUE BY ID.
image: "![[image (13).png]]"
---
| ![[image (13).png]]                                                          |
|---|
| FUNCTION RUN JS, REMEMBERING THINGS, MEAN VALUE OR AVERAGE, GET VALUE BY ID. |

```javascript

REMEMBERING THINGS:
ALWAYS USE {SGQ} IN PLACE OF ANSWER IDS IN JS CODES OR CSS.
"readonly" IS AN ATTRIBUTE WHILE "pointer-events: none;" IS CSS.
EVERYTIME YOU USE JS USE IT IN A PATTERN IN THESE THREE STEPS:

//function
<script>
$(function(){
	runjs();
	})
	
</script>

//runjs
$('body').on('keyup mouseup',function(){
		runjs();	
	});

//function runjs ---- code only run when runjs is enter
function runjs(){
	}
	
//at last code
var val1string = $('#answer{SGQ}R1_C1').val()
var val1 = Number(val1string);
var val2string = $('#answer{SGQ}R2_C1').val()
var val2 = Number(val2string);
if(val1string != '' && val2string != ''){
	$('#answer{SGQ}R3_C1').attr('readonly',true).css('pointer-events','none').val(Math.round((val1 + val2)/2));
}else{
	$('#answer{SGQ}R3_C1').attr('readonly',true).css('pointer-events','none').val('');
}

```