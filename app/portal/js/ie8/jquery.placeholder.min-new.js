/*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(i,k,f){var b=Object.prototype.toString.call(i.operamini)=="[object OperaMini]";var a="placeholder" in k.createElement("input")&&!b;var g="placeholder" in k.createElement("textarea")&&!b;var l=f.fn;var e=f.valHooks;var c=f.propHooks;var n;var m;if(a&&g){m=l.placeholder=function(){return this};m.input=m.textarea=true}else{m=l.placeholder=function(){var p=this;p.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":d,"blur.placeholder":h}).data("placeholder-enabled",true).trigger("blur.placeholder");return p};m.input=a;m.textarea=g;n={get:function(q){var p=f(q);var r=p.data("placeholder-password");if(r){return r[0].value}return p.data("placeholder-enabled")&&p.hasClass("placeholder")?"":q.value},set:function(q,s){var p=f(q);var r=p.data("placeholder-password");if(r){return r[0].value=s}if(!p.data("placeholder-enabled")){return q.value=s}if(s==""){q.value=s;if(q!=o()){h.call(q)}}else{if(p.hasClass("placeholder")){d.call(q,true,s)||(q.value=s)}else{q.value=s}}return p}};if(!a){e.input=n;c.value=n}if(!g){e.textarea=n;c.value=n}f(function(){f(k).delegate("form","submit.placeholder",function(){var p=f(".placeholder",this).each(d);setTimeout(function(){p.each(h)},10)})});f(i).bind("beforeunload.placeholder",function(){f(".placeholder").each(function(){this.value=""})})}function j(q){var p={};var r=/^jQuery\d+$/;f.each(q.attributes,function(t,s){if(s.specified&&!r.test(s.name)){p[s.name]=s.value}});return p}function d(q,r){var p=this;var s=f(p);if(p.value==s.attr("placeholder")&&s.hasClass("placeholder")){if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(q===true){return s[0].value=r}s.focus()}else{p.value="";s.removeClass("placeholder");p==o()&&p.select()}}}function h(){var t;var p=this;var s=f(p);var r=this.id;if(p.value==""){if(p.type=="password"){if(!s.data("placeholder-textinput")){try{t=s.clone().attr({type:"text"})}catch(q){t=f("<input>").attr(f.extend(j(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":s,"placeholder-id":r}).bind("focus.placeholder",d);s.data({"placeholder-textinput":t,"placeholder-id":r}).before(t)}s=s.removeAttr("id").hide().prev().attr("id",r).show()}s.addClass("placeholder");s[0].value=s.attr("placeholder")}else{s.removeClass("placeholder")}}function o(){try{return k.activeElement}catch(p){}}}(this,document,jQuery));