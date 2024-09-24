---
keywords: Tokens
---


```java
//id generator:
var m = []
var r = []
var x = []
var ids = []

//name generator:

for(var i=0;i<ids.length;i++){
                var thisID = ids[i];
                var thisM = m[i];
                for(var j=1;j<=thisM;j++){
                                console.log('|m|St'+j+'|'+thisID+'')
                }
}
for(var i=0;i<ids.length;i++){
                var thisID = ids[i];
                var thisR = r[i];
                for(var j=1;j<=thisR;j++){
                                console.log('|r|St'+j+'|'+thisID+'')
                }
}
for(var i=0;i<ids.length;i++){
                var thisID = ids[i];
                var thisX = x[i];
                for(var j=1;j<=thisX;j++){
                                console.log('|x|St'+j+'|'+thisID+'')
                }
}

```

