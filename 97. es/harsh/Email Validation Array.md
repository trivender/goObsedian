---
keywords: Email Validation Array
---

This is a regex email validation for array question

```javascript

//at subquestions
((is_empty(eHlthSAEntity_1_email.NAOK)
OR
regexMatch('/^.+?@.+?\..+$/',eHlthSAEntity_1_email.NAOK))

AND

(is_empty(eHlthSAEntity_2_email.NAOK)
OR
regexMatch('/^.+?@.+?\..+$/',eHlthSAEntity_2_email.NAOK)))

//Question validation tip
{if(!is_empty(eHlthSAEntity_1_email.NAOK)
AND !regexMatch('/^.+?@.+?\..+$/',eHlthSAEntity_1_email.NAOK),"Invalid email address at first entity!","")}
<br />
{if(!is_empty(eHlthSAEntity_2_email.NAOK)
AND !regexMatch('/^.+?@.+?\..+$/',eHlthSAEntity_2_email.NAOK),"Invalid email address at second entity!","")}

```