---
keywords: TOP MIDDLE BOTTOM (MERGE)
---

When we want to merge two question to make them one.

```css
.bottomq .question-title-container,
.middleq .question-title-container{
	background-color: #fff;
    color: black;
	border-top: 0px;
}

.topq {
    margin-bottom: 0px !important;
    padding-bottom: 21px !important;
    border-bottom: none !important;
}

.middleq {
    margin-top: -35px !important;
    padding-top: 0px !important;      
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
    border-top: none !important;
    border-bottom: none !important;
    box-shadow: none;
}

.bottomq {
    margin-top: 0px !important;
    padding-top: 0px !important;
    border-top: none !important;
    box-shadow: none;
}


```