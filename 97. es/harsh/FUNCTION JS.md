---
keywords: FUNCTION JS
---
This code help us to give a function in js.

```javascript

/**In template editor**/
function addTopLeftText(qid, txt){
   $("#question"+qid+" .ls-heading td").text(txt);
   $("#question"+qid+" .ls-heading td").css("font-weight", "bold");
   $("#question"+qid+" .ls-heading td").css("vertical-align", "bottom");	
}

/**In question tab**/
<script>
$(function(){
	addTopLeftText("{QID}", "Type of eye care services provider");	
});

</script>

```