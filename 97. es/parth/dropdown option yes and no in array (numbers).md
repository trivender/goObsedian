---
keywords: dropdown option
tags:
  - js
image: "![[img3.png]]"
---
![[img3.png]]

To make dropdown option yes and no in array (numbers) question by using this code in template and by using css class in question setting class = "changethedropdownvalue"

```js
$(document).ready(function() {
        // Loop through each select element with the class "multiflexiselect" within the table
        $(".question-container.changethedropdownvalue table td select.multiflexiselect").each(function() {
            var $options = $(this).find("option");
            // Change the text of the first option to "Yes"
            $options.eq(1).text("Yes");
            // Change the text of the second option to "No"
            $options.eq(2).text("No");
        });
    });

```

