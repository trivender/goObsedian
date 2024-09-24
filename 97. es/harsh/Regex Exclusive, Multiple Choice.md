---
keywords: Regex Exclusive Multiple Choice
image: "![[image (9).png]]"
---

![[image (9).png]]

This code helps us to make exclusive multiple choice random answer items

```javascript
//Question validation equation 
(
(is_empty(Q19_2.NAOK) OR (!is_empty(Q19_2.NAOK) AND is_empty(Q19_3.NAOK))) 
)
//Question validation tip 
{if(!(
(
(is_empty(Q19_2.NAOK) OR (!is_empty(Q19_2.NAOK) AND is_empty(Q19_3.NAOK))) 
)
),"Please do not select neurological disorders in general along with specific neurological disorders","")}


```