jQuery(function(){"use strict";jQuery("#ticker").tweet({username:"brodkin",page:1,count:3,loading_text:"Loading recent tweets...",template:"{text}"}).bind("loaded",function(){var e=jQuery(this).find(".tweet_list"),t=function(){setTimeout(function(){e.find("li:first").animate({marginTop:"-4em"},500,function(){jQuery(this).detach().appendTo(e).removeAttr("style")}),t()},5e3)};t()});var e=[];jQuery("#slider_images img").each(function(t,i){var n=jQuery(i).attr("src"),r={image:n};e.push(r)}),jQuery.supersized({slide_interval:1e4,transition:1,transition_speed:700,slide_links:"blank",slides:e});var t;(function(e,i){var n=e.createElement(i),r={userName:"brodkin",formHash:"z7x4m1",autoResize:!0,height:"1086",async:!0,header:"hide"};n.src=("https:"===e.location.protocol?"https://":"http://")+"wufoo.com/scripts/embed/form.js",n.onload=n.onreadystatechange=function(){var e=this.readyState;if(!e||"complete"===e||"loaded"===e)try{t=new WufooForm,t.initialize(r),t.display()}catch(i){}};var a=e.getElementsByTagName(i)[0],o=a.parentNode;o.insertBefore(n,a)})(document,"script")});