---
keywords: Table Header JQUERY
image: "![[image (3).png]]"
---
![[image (3).png]]

This code is for making additional heading above any table row,.

```javascript
<script>
$( document ).ready(function() {
	$('#question{QID} tbody tr:nth-child(1)').before("<tr><th style='font-size:18px;font-weight:bold;'>Advertising:</th><td></td><td></td></tr>");
	$('#question{QID} tbody tr:nth-child(13)').before("<tr><th style='font-size:18px;font-weight:bold;'>Product placement:</th><td></td><td></td></tr>");
});
</script>


```