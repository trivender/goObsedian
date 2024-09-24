---
keywords: Email Regex
image: "![[image.png]]"
---
![[image.png]]

This is for multiple short regex email validation.

```javascript

//Question validation equation for multiple short text
(
(is_empty(CIx3_SQ007.NAOK)
OR
regexMatch('/^.+?@.+?\..+$/',CIx3_SQ007.NAOK))
)
//Question validation tip multiple short text
{if(!is_empty(CIx3_SQ007.NAOK)
AND !regexMatch('/^.+?@.+?\..+$/',CIx3_SQ007.NAOK),"Invalid email address!","")}

```