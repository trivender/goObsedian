---
keywords: Tokens
---
Helps to generate tokens separately.

```javascript

//id generator:
var c = 1;
for(var i=1;i<=79;i++){
	for(var j=1;j<=60;j++){
		var t = '';
		if(c < 10){
			t = '00'+c+'';
		}else{
			t = '0'+c+'';
		}
		console.log(''+i+''+j+'|'+t+'')
	}
c++;	
}

//name generator:

for(var i=1;i<=79;i++){
	for(var j=1;j<=50;j++){
		console.log(''+i+''+j+'st|'+j+'')
	}	
}


```