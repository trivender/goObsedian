---
keywords: Array Validation, Array Numbers, Checkbox
image: "![[image (6).png]]"
---
![[image (6).png]]

This equation helps us to - "Please do not select last four checkboxes along with first checkbox in each row."

```javascript
{if(!(
(
(is_empty(Q57xA_1_1.NAOK) OR (!is_empty(Q57xA_1_1.NAOK) AND is_empty(Q57xA_1_2.NAOK) AND is_empty(Q57xA_1_3.NAOK) AND is_empty(Q57xA_1_4.NAOK) AND is_empty(Q57xA_1_5.NAOK))) AND
(is_empty(Q57xA_2_1.NAOK) OR (!is_empty(Q57xA_2_1.NAOK) AND is_empty(Q57xA_2_2.NAOK) AND is_empty(Q57xA_2_3.NAOK) AND is_empty(Q57xA_2_4.NAOK) AND is_empty(Q57xA_2_5.NAOK))) AND 
(is_empty(Q57xA_3_1.NAOK) OR (!is_empty(Q57xA_3_1.NAOK) AND is_empty(Q57xA_3_2.NAOK) AND is_empty(Q57xA_3_3.NAOK) AND is_empty(Q57xA_3_4.NAOK) AND is_empty(Q57xA_3_5.NAOK)))
)
),"Please do not select last four checkboxes along with first checkbox in each row.","")}


```