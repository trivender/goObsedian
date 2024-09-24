---
keywords: Array Numbers Dropdown
---

If we want to make array numbers dropdowns with Yes, No answer items then this code helps us.

```javascript

<script type="text/javascript" charset="utf-8">
 
	$(document).ready(function(){
 
        $('#question400855 .answer_cell_alcohol option[value=0]').text('NON');
        $('#question400855 .answer_cell_alcohol option[value=1]').text('OUI');
      
        $('#question400855 .answer_cell_drugs option[value=0]').text('NON');
        $('#question400855 .answer_cell_drugs option[value=1]').text('OUI');
    
    });
 
</script>

```