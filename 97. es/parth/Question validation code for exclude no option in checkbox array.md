---
keywords: Question validation code
image: "![[img2.png]]"
---
![[img2.png]]

only equation have to put in Question validation equation and all code have to put in Question validation tip

```js
{if(!(
(
(is_empty(Q28_R1_C3.NAOK) OR (!is_empty(Q28_R1_C3.NAOK) AND is_empty(Q28_R1_C1.NAOK) AND is_empty(Q28_R1_C2.NAOK))) AND
(is_empty(Q28_R2_C3.NAOK) OR (!is_empty(Q28_R2_C3.NAOK) AND is_empty(Q28_R2_C1.NAOK) AND is_empty(Q28_R2_C2.NAOK))) AND 
(is_empty(Q28_R3_C3.NAOK) OR (!is_empty(Q28_R3_C3.NAOK) AND is_empty(Q28_R3_C1.NAOK) AND is_empty(Q28_R3_C2.NAOK)))
)
),"Please do not select last checkbox along with first two checkboxes in each row.","")}

```

