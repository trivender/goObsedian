---
keywords: Expression manager limesurvey for punching value, Equation
---


This code helps us to punch automatic value in a question

```javascript

{PRNT002= if ((intval(PRNT012.NAOK) >= 16 AND intval(PRNT012.NAOK) < 18), 'A1',
    if ((intval(PRNT012.NAOK) >= 18 AND intval(PRNT012.NAOK) <= 25), 'A2',
      if ((intval(PRNT012.NAOK) >= 26 AND intval(PRNT012.NAOK) <= 35), 'A3',
        if ((intval(PRNT012.NAOK) >= 36 AND intval(PRNT012.NAOK) <= 45), 'A4',
          if ((intval(PRNT012.NAOK) >= 46 AND intval(PRNT012.NAOK) <= 55), 'A5',
            if ((intval(PRNT012.NAOK) >= 56 AND intval(PRNT012.NAOK) <= 65), 'A6',
              if ((intval(PRNT012.NAOK) >= 66 AND intval(PRNT012.NAOK) < 101), 'A7'
                )))))))}

```