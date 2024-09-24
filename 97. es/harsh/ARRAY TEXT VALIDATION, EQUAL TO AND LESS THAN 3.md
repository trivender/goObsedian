---
keywords: ARRAY TEXT VALIDATION, EQUAL TO AND LESS THAN 3
---


```javascript
(
(is_empty(LGx1xa_SQ001_SQ001.NAOK) OR (strlen(LGx1xa_SQ001_SQ001.NAOK) <=3 AND is_numeric(LGx1xa_SQ001_SQ001.NAOK))) AND
(is_empty(LGx1xa_SQ001_SQ002.NAOK) OR (strlen(LGx1xa_SQ001_SQ002.NAOK) <=3 AND is_numeric(LGx1xa_SQ001_SQ002.NAOK))) AND
(is_empty(LGx1xa_SQ001_SQ003.NAOK) OR (strlen(LGx1xa_SQ001_SQ003.NAOK) <=3 AND is_numeric(LGx1xa_SQ001_SQ003.NAOK))) AND
(is_empty(LGx1xa_SQ002_SQ001.NAOK) OR (strlen(LGx1xa_SQ002_SQ001.NAOK) <=3 AND is_numeric(LGx1xa_SQ002_SQ001.NAOK))) AND
(is_empty(LGx1xa_SQ002_SQ002.NAOK) OR (strlen(LGx1xa_SQ002_SQ002.NAOK) <=3 AND is_numeric(LGx1xa_SQ002_SQ002.NAOK))) AND 
(is_empty(LGx1xa_SQ002_SQ003.NAOK) OR (strlen(LGx1xa_SQ002_SQ003.NAOK) <=3 AND is_numeric(LGx1xa_SQ002_SQ003.NAOK))) AND   
(is_empty(LGx1xa_SQ003_SQ001.NAOK) OR (strlen(LGx1xa_SQ003_SQ001.NAOK) <=3 AND is_numeric(LGx1xa_SQ003_SQ001.NAOK))) AND
(is_empty(LGx1xa_SQ003_SQ002.NAOK) OR (strlen(LGx1xa_SQ003_SQ002.NAOK) <=3 AND is_numeric(LGx1xa_SQ003_SQ002.NAOK))) AND 
(is_empty(LGx1xa_SQ003_SQ003.NAOK) OR (strlen(LGx1xa_SQ003_SQ003.NAOK) <=3 AND is_numeric(LGx1xa_SQ003_SQ003.NAOK))) 
)


```