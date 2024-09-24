---
keywords: Email validation code
---


```Javascript
Question validation equation 
(
(is_empty(Question code)
OR
regexMatch('/^.+?@.+?\..+$/',S1x1_8.NAOK))
)

Question validation tip
{if(!is_empty(Question code)
AND !regexMatch('/^.+?@.+?\..+$/',S1x1_8.NAOK),"Invalid email address!","")}

```

