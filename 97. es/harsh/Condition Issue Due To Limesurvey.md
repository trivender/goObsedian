---
keywords: Condition Issue Due To Limesurvey
---

This code helps to disable checkboxes until the exclusive checkbox click.

```javascript
<script>\r\nrunMyJs();\r\n$(\'body\').on(\'keyup mouseup\',function(){\r\n	runMyJs();\r\n});\r\n\r\nfunction runMyJs(){\r\nsetTimeout(function(){	\r\n	$(\'tr.subquestion-list\').each(function(){\r\n		var $exCb = $(\'td.answer_cell_1 input:checkbox\',$(this));\r\n		var $cb = $(this).find(\'input:checkbox\').not($exCb)\r\n		\r\n		if($exCb.prop(\'checked\') == true){\r\n			$cb.each(function(){\r\n				if($(this).prop(\'checked\') == true){\r\n					$(this).trigger(\'click\').attr(\'disabled\',true)\r\n				}else{\r\n					$(this).attr(\'disabled\',true)\r\n				}\r\n			})\r\n		}else{\r\n			$cb.attr(\'disabled\',false);\r\n		}\r\n		\r\n	});\r\n},100);		\r\n}\r\n</script>


```