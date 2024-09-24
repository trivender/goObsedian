---
keywords: Table Header CSS
image: "![[image (4).png]]"
---
![[image (4).png]]

This is a CSS code to add text before any table in array type question.

```css
<style>
   #question{QID} table .ls-heading td:first-child:before {
     content: 'Industry sponsorship of…';
     text-align: center;
     display: block;
     font-weight: bold;
}
</style>


```