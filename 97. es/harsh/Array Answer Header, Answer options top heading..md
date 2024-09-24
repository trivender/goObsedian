---
keywords: Array Answer Header, Answer options top heading.
image: "![[image (8).png]]"
---
![[image (8).png]]

This code helps us to add heading above array answer items.

```javascript
<script>
$( document ).ready(function() {
	$('#question{QID} tr.ls-heading').before("<tr><td></td><th colspan='4'><div class= 'top-head'>Covered fully or in part by government, including government-provided health insurance</div></th><td></td><td></td></tr>");
});
</script>

```