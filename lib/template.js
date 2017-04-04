/*! art-template@4.0.0 | https://github.com/aui/art-template */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.template=e():t.template=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=20)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(13),i=n(1),u=n(14),c=n(16),a=n(6),s=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===e?"undefined":r(e))?n=e:n.source=e;var s=n.filename,f=void 0!==n.cache?n.cache:i.cache;if(f&&s){var l=f.get(s);if(l)return l}if(n=u(n,i),!(e=n.source))try{var p=a(s,n.root);e=c(p),n.filename=p,n.source=e}catch(t){var y={path:s,name:"Compile Error",message:"template not found: "+t.message,stack:t.stack};if(n.onerror)return n.onerror(y);throw y}var m=new o(n),d=function e(r){try{return e.source(r)}catch(e){if(!n.compileDebug)return n.cache=null,n.compileDebug=!0,t(n)(r);if(n.onerror)return n.onerror(e)();throw e}};try{d.source=m.build(),f&&s&&f.set(s,d)}catch(t){if(n.onerror)return n.onerror(t);throw t}return d.toString=function(){return d.source.toString()},d};t.exports=s},function(t,e,n){"use strict";var r=n(12),o=n(7),i=n(11),u={filename:null,source:null,openTag:"<%",closeTag:"%>",escapeSymbol:"=",rawSymbol:"-",escape:!0,cache:i,parser:null,compressor:null,imports:o,onerror:r,compileDebug:!1,root:"/",extension:".html"};t.exports=u},function(t,e,n){"use strict";(function(e){t.exports=!1;try{t.exports="[object process]"===Object.prototype.toString.call(e.process)}catch(t){}}).call(e,n(10))},function(t,e,n){"use strict"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,e.matchToToken=function(t){var e={type:"invalid",value:t[0]};return t[1]?(e.type="string",e.closed=!(!t[3]&&!t[4])):t[5]?e.type="comment":t[6]?(e.type="comment",e.closed=!!t[7]):t[8]?e.type="regex":t[9]?e.type="number":t[10]?e.type="name":t[11]?e.type="punctuator":t[12]&&(e.type="whitespace"),e}},function(t,e,n){"use strict";var r={abstract:!0,await:!0,boolean:!0,break:!0,byte:!0,case:!0,catch:!0,char:!0,class:!0,const:!0,continue:!0,debugger:!0,default:!0,delete:!0,do:!0,double:!0,else:!0,enum:!0,export:!0,extends:!0,false:!0,final:!0,finally:!0,float:!0,for:!0,function:!0,goto:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,int:!0,interface:!0,let:!0,long:!0,native:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,short:!0,static:!0,super:!0,switch:!0,synchronized:!0,this:!0,throw:!0,transient:!0,true:!0,try:!0,typeof:!0,var:!0,void:!0,volatile:!0,while:!0,with:!0,yield:!0};t.exports=function(t){return r.hasOwnProperty(t)}},function(t,e,n){"use strict";var r=n(3),o=n(2),i=function(t,e,n){if(o){var i=n?r.dirname(n):"";return r.resolve(e,i,t)}return t};t.exports=i},function(t,e,n){"use strict";var r={$include:function(t,e,r,o){var i=n(0);return t=n(6)(t,o,r),i({filename:t})(e)},$escape:function(t){var e={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"};return function t(e){return"string"!=typeof e&&(e="function"==typeof e?t(e.call(e)):null===e?"":JSON.stringify(e)||""),e}(t).replace(/&(?![\w#]+;)|[<>"']/g,function(t){return e[t]})}};t.exports=r},function(t,e,n){"use strict";var r=n(0),o=function(t,e,n){return r(t,n)(e)};t.exports=o},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(8),i=n(0),u=n(1),c=function(t,e){return"object"===(void 0===e?"undefined":r(e))?o({filename:t},e):i({filename:t,source:e})};c.render=o,c.compile=i,c.defaults=u,t.exports=c},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";var r={__data:Object.create(null),set:function(t,e){this.__data[t]=e},get:function(t){return this.__data[t]},reset:function(){this.__data={}}};t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t){var e=JSON.stringify(t,null,2);return"object"===("undefined"==typeof console?"undefined":r(console))&&console.error("Template Error:",e),function(){return"{Template Error}"}};t.exports=o},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(15),u=n(17),c=n(5),a="$data",s=function(t,e){return t.hasOwnProperty(e)},f=JSON.stringify,l=function(){function t(e){var n=this;r(this,t);var o=e.openTag,i=e.closeTag,c=e.filename,s=e.root,l=e.source;this.source=l,this.options=e,this.scripts=[],this.context={$out:'""'},this.embedded={print:"function(){var text=''.concat.apply('',arguments);return $out+=text}",include:"function(src,data){return $out+=$imports.$include(src,data||"+a+","+f(c)+","+f(s)+")}"},e.compileDebug&&(this.context.$line='[0,""]'),u.parser(l,o,i).forEach(function(t){var e=t.type,r=t.value,o=t.line;"string"===e?n.addString(r,o):"expression"===e&&n.addExpression(r,o)})}return o(t,[{key:"addContext",value:function(t){var e="",n=this.embedded,r=this.context,o=this.options,i=o.imports;s(r,t)||t===a||"$imports"===t||c(t)||(e=s(n,t)?n[t]:s(i,t)?"$imports."+t:a+"."+t,r[t]=e)}},{key:"addString",value:function(t){var e=this.options,n=e.compressor;n&&(t=n(t));var r="$out+="+f(t);this.scripts.push(r)}},{key:"addExpression",value:function(t,e){var n=this,r=this.options,o=r.openTag,u=r.closeTag,c=r.parser,a=r.compileDebug,s=r.escape,l=r.escapeSymbol,p=r.rawSymbol,y=t.replace(o,"").replace(u,""),m=y.replace(/^=[=#]/,p).replace(/^=/,l),d=i.trim(i.parser(m)),h=function(t){return n.addContext(t)};i.namespaces(d).forEach(h),c&&(m=c(m,r,d,h));var v=d[0],b=v&&v.value===p,g=v&&v.value===l;(b||g)&&(d.shift(),m=i.toString(d),!1===s||b?m="$out+="+m:(m="$out+=$escape("+m+")",this.addContext("$escape"))),a&&this.scripts.push("$line=["+e+","+f(t)+"]"),this.scripts.push(m)}},{key:"build",value:function(){var t=this.options,e=this.context,n=this.source,r=t.filename,o=t.imports,i="var "+Object.keys(e).map(function(t){return t+"="+e[t]}).join(","),u=this.scripts.join(";\n"),c=['"use strict"',i,u,"return $out"].join(";\n");if(t.compileDebug){var s="{"+["path:"+f(r),'name:"Runtime Error"',"message:e.message","line:$line[0]","source:$line[1]"].join(",")+"}";c="try{"+c+"}catch(e){throw "+s+"}"}c="function ("+a+") {"+c+"}";try{return new Function("$imports","return "+c)(o)}catch(t){throw{path:r,name:"Compile Error",message:t.message,source:n,script:c,stack:t.stack}}}}]),t}();t.exports=l},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){var n=i(e);for(var r in t)n[r]=i(t[r]);return n},i=function t(e){if("object"===(void 0===e?"undefined":r(e))&&null!==e){if(Array.isArray(e)){var n=[];return e.forEach(function(e,r){n[r]=t(e)}),n}var o={};for(var i in e)o[i]=t(e[i]);return o}return e};t.exports=o},function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=n(4).default,i=n(4).matchToToken,u=n(5),c=function(t){return t.match(o).map(function(t){return o.lastIndex=0,i(o.exec(t))}).map(function(t){return"name"===t.type&&u(t.value)&&(t.type="keyword"),t})},a=function(t){var e=!1;return t.filter(function(t){return"whitespace"!==t.type&&"comment"!==t.type}).filter(function(t){return"name"===t.type&&!e||(e="punctuator"===t.type&&"."===t.value,!1)}).map(function(t){return t.value})},s=function(t){var e=p(t),n=e[e.length-1];return!!n&&"{"!==n.value&&"}"!==n.value},f=function(t,e){var n=t[e],r=!!n&&("whitespace"===n.type||"comment"===n.type);return r&&t.splice(e,1),r},l=function(t){var e;for(t=(e=[]).concat.apply(e,r(t));f(t,0););return t},p=function(t){var e;for(t=(e=[]).concat.apply(e,r(t));f(t,t.length-1););return t},y=function(t){return t=l(t),p(t)},m=function(t){return t.map(function(t){return t.value}).join("")};t.exports={parser:c,namespaces:a,isOutputExpression:s,trimLeft:l,trimRight:p,trim:y,toString:m}},function(t,e,n){"use strict";var r=n(2),o=function(t){if(r){return n(3).readFileSync(t,"utf8")}var e=document.getElementById(t);return e.value||e.innerHTML};t.exports=o},function(t,e,n){"use strict";var r=function(t,e,n){var r=[],o=1;return t.split(e).forEach(function(t){if(t=t.split(n),t.length>1){var i=e+t.shift()+n;r.push({type:"expression",value:i,line:o}),o+=i.split(/\n/).length-1}if(t[0]){var u=t[0];r.push({type:"string",value:u,line:o}),o+=u.split(/\n/).length-1}}),r};t.exports={parser:r}},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(2),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.extname;i&&(t.extensions[e]=function(t,e){var n=e||t.filename,o=r({filename:n}),i="var $imports=require("+JSON.stringify(7)+")";t._compile(i+";module.exports = "+o.toString()+";",n)})};t.exports=u},function(t,e,n){"use strict";var r=n(1),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return t.openTag="{{",t.closeTag="}}",t.rawSymbol="@",t.imports.$each=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)e(t[n],n,t);else for(var o in t)e(t[o],o)},t.parser=function(t,e,n,r){var o=function(t,n){console.warn("Template Upgrade:","{{"+t+"}}",">>>","{{"+n+"}}","\n",e.filename||"")},i=e.escapeSymbol,u=e.rawSymbol,c=n.map(function(t){return t.value}).filter(function(t){return/^\S+$/.test(t)});"#"===c[0]&&(o("#value","@value"),c[0]=c[0].replace(/^#/,u));var a=c[0]===u?c.shift():i,s="/"===c[0]?c.shift():"",f=s+c.shift();switch(f){case"%":n.shift(),n[n.length-1]===f&&n.pop(),t=n.join("");break;case"set":t="var "+c.join("")+";";break;case"if":t="if("+c.join("")+"){";break;case"else":"if"===c[0]?(c.shift(),t="}else if("+c.join("")+"){"):t="}else{";break;case"/if":t="}";break;case"each":"as"===c[1]&&(o("each object 'as' value index","each object value index"),c.splice(1,1));var l=c[0]||"$data",p=c[1]||"$value",y=c[2]||"$index";t="$each("+l+",function("+p+","+y+"){",r("$each");break;case"/each":t="});";break;case"echo":t="print("+c.join(",")+");";break;case"print":case"include":t=f+"("+c.join(",")+");";break;default:if(-1!==c.indexOf("|")){for(var m=f,d=[];"|"!==c[0];)m+=c.shift();c.filter(function(t){return":"!==t}).forEach(function(t){"|"===t?d.push([]):d[d.length-1].push(t)}),d.reduce(function(e,n){var r=n.shift();return n.unshift(e),t="$imports."+r+"("+n.join(",")+")"},m)}else e.imports[f]&&(o("filterName value","value | filterName"),t=f+"("+c.join(",")+")",a=u);t=a+t}return t},t};t.exports=o},function(t,e,n){"use strict";var r=n(9),o=n(19),i=n(18);r.bindExtname=i,r.bindSyntax=o,t.exports=r}])});