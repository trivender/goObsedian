---
keywords: codebook
---


```javascript
//code to extract quetion type
        var $rows = $('tr.LEMquestion,tr.LEMsubq,tr.LEManswer');
        $('span.mandatory').remove();
        $('.logicfileattributetable').remove();



    var qTypeText = '';
    var blank = '';

        $rows.each(function(i){
                var $thisTr = $(this);
                if($thisTr.hasClass('LEMquestion')){
                        var $sqAr  = $thisTr.nextUntil( 'tr.LEMquestion', 'tr.LEMsubq' )
                        var $anAr  = $thisTr.nextUntil( 'tr.LEMquestion', 'tr.LEManswer' )


                        var qid = getQid($thisTr)
                        var qtype = getQtype($thisTr);
                        var qText = getQtext($thisTr).replace(/(\r\n|\n|\r)/gm, "");
                        
            if(qtype == '[S]'){qTypeText = 'Short free text';}
            if(qtype == '[T]'){qTypeText = 'Long free text';}
            if(qtype == '[N]'){qTypeText = 'Numerical input';}
            if(qtype == '[D]'){qTypeText = 'Date/Time';}
            if(qtype == '[|]'){qTypeText = 'File upload';}
            if(qtype == '[L]'){qTypeText = 'List (radio)';}
            if(qtype == '[!]'){qTypeText = 'List (dropdown)';}
            if(qtype == '[M]'){qTypeText = 'Multiple choice';}
            if(qtype == '[K]'){qTypeText = 'Multiple numerical input';}
            if(qtype == '[Q]'){qTypeText = 'Multiple short text';}
            if(qtype == '[F]'){qTypeText = 'Array';}
            if(qtype == '[:]'){qTypeText = 'Array (Numbers)';}                        


                        //[S] -- Short free text
                        //[T] -- Long free text
                        //[N] -- Numerical input
                        //[D] -- Date/Time
                        //[|] -- File upload                
                        if(qtype == '[S]' || qtype == '[T]' || qtype == '[N]' || qtype == '[D]'){
                                console.log(""+qTypeText+"|"+qid+"|"+blank+"|"+qText+"");
                        }
                        if(qtype == '[|]'){
                                console.log(""+qTypeText+"|"+qid+"|"+blank+"|"+qText+"");
                                console.log(""+qTypeText+"|"+qid+"[filecount]|"+blank+"|"+qText+"");
                        }        
                
                        //[L] -- List (radio)
                        //[!] -- List (dropdown)                        
                        if(qtype == '[L]' || qtype == '[!]'){
                                for(var j=0;j<$sqAr.length;j++){
                                        var sqCode = getQid($sqAr.eq(j))
                                        if(isOtherSpecify(sqCode)){
                                                console.log(""+qTypeText+"|"+qid+"[other]|"+sqCode+"|"+qText+"|"+getQtext($sqAr.eq(j))+"");
                                        }else{
                                                console.log(""+qTypeText+"|"+qid+"|"+sqCode+"|"+qText+"|"+getQtext($sqAr.eq(j))+"");
                                        }        
                                }                                
                                for(var j=0;j<$anAr.length;j++){
                                        console.log(""+qTypeText+"|"+qid+"|"+getQid($anAr.eq(j))+"|"+qText+"|"+getQtext($anAr.eq(j))+"");
                                }
                                
                        }
                        
                        //[M] -- Multiple choice
                        //[K] -- Multiple numerical input
                        //[Q] -- Multiple short text                        
                        if(qtype == '[M]' || qtype == '[K]' || qtype == '[Q]'){
                                for(var j=0;j<$sqAr.length;j++){
                                        console.log(""+qTypeText+"|"+qid+"["+getQid($sqAr.eq(j)).split('_')[1]+"]"+blank+"|"+getQid($sqAr.eq(j)).split('_')[1]+"|"+qText+"|"+getQtext($sqAr.eq(j))+"");
                                        //console.log(""+qid+"["+getQid($sqAr.eq(j))+"]|"+qText+"["+getQtext($sqAr.eq(j))+"]");
                                }
                        }
                        
                        //[F] -- Array 
                        if(qtype == '[F]'){
                                for(var j=0;j<$sqAr.length;j++){
                                        for(var k=0;k<$anAr.length;k++){
                        var arr = getQid($sqAr.eq(j)).split('_');
                                                    console.log(""+qTypeText+"|"+(''+arr[0]+'['+arr[1]+']')+"|"+getQid($anAr[k])+"|"+getQtext($sqAr.eq(j))+"|"+getQtext($anAr[k])+"");
                                        }
                                        
                                }                                
                        }
                        
                        //[:] -- Array (Numbers)
                        if(qtype == '[:]'){
                                for(var j=0;j<$sqAr.length;j++){
                                        for(var k=0;k<$anAr.length;k++){
                                                var temp = getQid($sqAr.eq(j)).split('_')
                                                var temp1 = ''+temp[0]+'['+temp[1]+'_'+getQid($anAr[k])+']';
                                                console.log(""+qTypeText+"|"+temp1+"|"+getQid($anAr[k])+"|"+getQtext($sqAr.eq(j))+"|"+getQtext($anAr[k])+"");
                                        }
                                        
                                }
                        }
                                                
                }
        
        });

        function getQtype($tr){
                var regExp = /\[[^\]]*]/g; 
                var text = $('td',$tr).eq(1).text();
                //console.log("text: "+text+"")
                var qtype = text.match(regExp);
                return qtype[1];        
        }

        function getQid($tr){
                return $('td',$tr).eq(1).find('b').text()
        }


        function getQtext($tr){
                var regExp = "^\\s+[A-Za-z,;'\"\\s]+[.?!]$";
                var text = $('td',$tr).eq(3).text();
                return $.trim(text);
        }

        function isOtherSpecify(code){
        if(code.split('_')[1] == 'other'){
                return true;
        }
                return false;
        }

```

