(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,n){e.exports=n(738)},208:function(e,t,n){},738:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),i=n.n(l),o=n(29),c=n(61),u=n.n(c),s=n(179),d=n.n(s),m=(n(208),Object(o.a)({container:{fontFamily:'"Inter UI", sans-serif'}})),p=u()({typography:{fontFamily:'"Inter UI", "Roboto", sans-serif'},overrides:{MuiButton:{root:{textTransform:"none"}}}}),f=n(6),b=n(22),g=n.n(b),h=n(180),v=n(741),y=n(65),E=n.n(y),O=n(66),j=n.n(O),S=n(67),w=n.n(S),x=n(68),C=n.n(x),k=n(102),N=n.n(k),L=Object(o.a)({editBar:{padding:10,borderBottom:"1px solid #ccc",backgroundColor:"#f8f8f8",display:"flex",alignItems:"center","& .button":{margin:5}},select:{width:240,fontSize:14},contentArea:{padding:10},specificationArea:{padding:10}}),A=function(){try{return JSON.parse(window.localStorage.getItem("nlpCustomInput")||"{}")}catch(e){return{}}},T={SimpleLabelSequence:function(){return{type:"label-sequence",document:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ipsum tristique ligula venenatis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce mollis velit nec tellus sollicitudin aliquam. In velit erat, iaculis id consectetur et, tincidunt sit amet mauris. Quisque ultricies, purus eleifend congue malesuada, ipsum erat molestie dolor, in pellentesque lacus purus vel nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sed vestibulum magna. Quisque ut lorem imperdiet, aliquam velit nec, dictum felis.",labels:[{id:"noun",displayName:"Noun"},{id:"proper-noun",displayName:"Proper Noun"}]}},SimpleLabelDocument:function(){return{type:"label-document",document:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ipsum tristique ligula venenatis placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce mollis velit nec tellus sollicitudin aliquam. In velit erat, iaculis id consectetur et, tincidunt sit amet mauris. Quisque ultricies, purus eleifend congue malesuada, ipsum erat molestie dolor, in pellentesque lacus purus vel nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sed vestibulum magna. Quisque ut lorem imperdiet, aliquam velit nec, dictum felis.",labels:[{id:"latin",displayName:"Latin"},{id:"english",displayName:"English"},{id:"german",displayName:"German"}]}},Custom:function(){return A()}},q=function(e){var t=e.initialAnnotatorProps,n=e.onOpenAnnotator,l=e.lastOutput,i=L(),o=Object(a.useState)(),c=Object(f.a)(o,2),u=c[0],s=c[1],d=Object(a.useState)(window.localStorage.getItem("nlpCustomInput")?"Custom":"SimpleLabelSequence"),m=Object(f.a)(d,2),p=m[0],b=m[1],y=Object(a.useState)(l),O=Object(f.a)(y,2),S=O[0],x=O[1],k=Object(a.useState)(t?JSON.stringify(t,null,"  "):JSON.stringify(T[p](),null,"  ")),q=Object(f.a)(k,2),I=q[0],P=q[1];return r.a.createElement("div",null,r.a.createElement("div",{className:i.editBar},r.a.createElement("h3",null,"React NLP Annotate"),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(h.a,{className:i.select,value:{label:p,value:p},options:Object.keys(T).map(function(e){return{label:e,value:e}}),onChange:function(e){b(e.value),P(JSON.stringify("Custom"===e.value?A():T[e.value](),null,"  "))}})),r.a.createElement(g.a,{className:"button",disabled:!l,onClick:function(){return x(!0)}},"View Output"),r.a.createElement(g.a,{className:"button",variant:"outlined",disabled:Boolean(u),onClick:function(){return n("Custom"===p?JSON.parse(I):T[p]())}},"Open Annotator"))),r.a.createElement("div",{className:i.contentArea,style:u?{border:"2px solid #f00"}:{border:"2px solid #fff"}},r.a.createElement("div",null,r.a.createElement(N.a,{value:I,language:"javascript",onChange:function(e){try{window.localStorage.setItem("nlpCustomInput",JSON.stringify(JSON.parse(e))),s(null)}catch(t){s(t.toString())}P(e)},width:"100%",height:"550px"}))),r.a.createElement("div",{className:i.specificationArea},r.a.createElement("h2",null,"React NLP Annotate Format"),r.a.createElement(v.a,{language:"javascript"},'\n// There are several types of annotators you can use...\n\nexport type LabelDocumentProps = {\n  type: "label-document",\n  labels: Array<Label>,\n  multipleLabels?: boolean,\n  initialLabels?: Array<string>,\n  document: string,\n  onChange: (Array<string> | string | null) => any\n}\n\nexport type SequenceAnnotatorProps = {\n  type: "label-sequence",\n  labels: Array<Label>,\n  initialSequence?: Array<SequenceItem>,\n  document: string,\n  onChange: (sequence: Array<SequenceItem>) => any\n}\n\nexport type TranscriberProps = {\n  type: "transcribe",\n  audio: string,\n  phraseBank?: Array<string>,\n  validator?: string => Array<string>,\n  initialTranscriptionText?: string,\n  onChange: string => any\n}\n\nexport type NLPAnnotatorProps = {\n  ...\n    | $Exact<SequenceAnnotatorProps>\n    | $Exact<LabelDocumentProps>\n    | $Exact<TranscriberProps>,\n  onFinish?: string,\n  onChange?: string\n}\n')),r.a.createElement(E.a,{fullScreen:!0,open:S},r.a.createElement(j.a,null,"React NLP Annotate Output"),r.a.createElement(w.a,{style:{minWidth:400}},r.a.createElement(N.a,{value:JSON.stringify(l,null,"  "),language:"javascript",width:"100%",height:"550px"})),r.a.createElement(C.a,null,r.a.createElement(g.a,{onClick:function(){return x(!1)}},"Close"))))},I=n(24),P=function(e){var t,n=/[a-zA-Z]+/g,a=[0];do{(t=n.exec(e))&&(a.push(t.index),a.push(t.index+t[0].length))}while(t);return(a=a.concat([e.length])).filter(function(e,t){return a[t]!==a[t+1]}).map(function(t,n){return{text:e.slice(a[n],a[n+1])}}).filter(function(e){return e.text.length>0})},R=n(49),B=n.n(R);Object(o.a)({});function M(e){var t=e.sequence,n=e.onHighlightedChanged,l=void 0===n?function(){return null}:n,i=e.onSequenceChange,o=void 0===i?function(){return null}:i,c=e.nothingHighlighted,u=e.colorLabelMap,s=void 0===u?{}:u,d=Object(a.useState)(),m=Object(f.a)(d,2),p=m[0],b=m[1],g=Object(a.useState)([null,null]),h=Object(f.a)(g,2),v=Object(f.a)(h[0],2),y=v[0],E=v[1],O=h[1],j=function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];O([n,a]);for(var r=[],i=Math.min(n,a);i<=Math.max(n,a);i++)r.push(i);l(r)},S=[];if(!c&&null!==y&&null!==E)for(var w=Math.min(y,E);w<=Math.max(y,E);w++)S.push(w);return r.a.createElement("div",{onMouseDown:function(){return b(!0)},onMouseUp:function(){return b(!1)}},t.map(function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onMouseDown:function(){e.label||j([n,n])},onMouseMove:function(){e.label||p&&n!==E&&j([null===y?n:y,n])},style:e.label?{display:"inline-flex",backgroundColor:e.color||s[e.label]||"#333",color:"#fff",padding:4,margin:4,paddingLeft:10,paddingRight:10,borderRadius:4,userSelect:"none"}:{display:"inline-flex",backgroundColor:" "!==e.text&&S.includes(n)?"#ccc":"inherit",color:"#333",marginTop:4,marginBottom:4,paddingTop:4,paddingBottom:4,paddingLeft:2,paddingRight:2,userSelect:"none"},key:n},e.label?r.a.createElement(B.a,{title:e.label,placement:"bottom"},r.a.createElement("div",null,e.text)):r.a.createElement("div",null,e.text),e.label&&r.a.createElement("div",{onClick:function(){o(t.flatMap(function(t){return t!==e?t:P(t.text)}).filter(function(e){return e.text.length>0}))},style:{display:"inline-flex",cursor:"pointer",alignSelf:"center",fontSize:11,width:18,height:18,alignItems:"center",justifyContent:"center",marginLeft:4,borderRadius:9,color:"#fff",backgroundColor:"rgba(0,0,0,0.2)"}},r.a.createElement("span",null,"\u2716"))))}))}var _=n(184),J=n.n(_),D=n(13),F=n.n(D),z=n(39),U=n.n(z),W=U()({label:{display:"inline-flex",cursor:"pointer",padding:8,paddingLeft:12,paddingRight:12,margin:4,borderRadius:4,fontSize:18,color:"#fff",alignItems:"center","&:hover":{opacity:.6},"&.small":{fontSize:12,fontWeight:"bold"}}}),V=function(e){e.parent;var t=e.color,n=e.displayName,a=(e.description,e.id),l=e.small,i=e.hasChildren,o=e.hotkey,c=e.deletable,u=W();return r.a.createElement("div",{onClick:function(){return e.onClick(a)},className:F()(u.label,l&&"small"),style:{backgroundColor:t}},i&&r.a.createElement(J.a,{style:{width:l?12:20,height:l?12:20,marginRight:l?3:6}}),r.a.createElement("div",null,n||a),o&&r.a.createElement("div",{style:{paddingLeft:4}},"(",o,")"),c&&r.a.createElement("div",{style:{display:"inline-flex",cursor:"pointer",alignSelf:"center",fontSize:11,width:18,height:18,alignItems:"center",justifyContent:"center",marginLeft:4,borderRadius:9,color:"#fff",backgroundColor:"rgba(0,0,0,0.2)"}},r.a.createElement("span",null,"\u2716")))},H=Object(o.a)({tooltip:{whiteSpace:"pre-wrap"}}),G=function(e){for(var t=e.labels,n=e.onSelectLabel,l=Object(a.useState)([]),i=Object(f.a)(l,2),o=i[0],c=i[1],u=o.length>0?o[o.length-1]:void 0,s={r:"root"},d={root:"r"},m=0;m<t.length;m++){var p=t[m],b=(p.displayName||p.id).toLowerCase().split(""),g=!0,h=!1,v=void 0;try{for(var y,E=b[Symbol.iterator]();!(g=(y=E.next()).done);g=!0){var O=y.value;if(!s[O]){s[O]=p.id,d[p.id]=O;break}}}catch(S){h=!0,v=S}finally{try{g||null==E.return||E.return()}finally{if(h)throw v}}}Object(a.useLayoutEffect)(function(){var e=function(e){if(s[e.key]){var a=s[e.key];t.some(function(e){return e.parent===a})?c(function e(t,n){if(!t)return[];var a=n.find(function(e){return(e.id||"root")===t})||{};return a?e(a.parent,n).concat([t]):[t]}(a,t)):"root"===a?c([]):n(a)}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}});var j=H();return r.a.createElement("div",null,t.some(function(e){return e.parent})&&r.a.createElement("div",{style:{alignItems:"center",display:"flex",flexWrap:"wrap"}},r.a.createElement(V,{small:!0,color:o.length>0?"#333":"#ccc",displayName:"Root (r)",id:"",onClick:function(){return c([])}}),o.map(function(e){return t.find(function(t){return t.id===e})}).filter(Boolean).map(function(e){return Object(I.a)({},e,{hasChildren:t.some(function(t){return t.parent===e.id})})}).map(function(e,t){return r.a.createElement(B.a,{classes:{tooltip:j.tooltip},key:t,title:e.description||"No Description",placement:"bottom"},r.a.createElement(V,Object.assign({small:!0},e,{hotkey:d[e.id],onClick:function(){c(o.slice(0,o.indexOf(e.id)+1))}})))})),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"}},t.filter(function(e){return e.parent===u}).map(function(e){return Object(I.a)({},e,{hasChildren:t.some(function(t){return t.parent===e.id})})}).map(function(e,t){return r.a.createElement(B.a,{key:t,classes:{tooltip:j.tooltip},title:e.description||"No Description",placement:"bottom"},r.a.createElement("div",null,r.a.createElement(V,Object.assign({},e,{hotkey:d[e.id],onClick:e.hasChildren?function(){c(o.concat([e.id]))}:n}))))})))},Q=function(e){for(var t=[],n=[e[0]],a=1;a<e.length;a++)n[0].label===e[a].label?n.push(e[a]):(t.push({label:n[0].label,text:n.reduce(function(e,t){return e+t.text},"")}),n=[e[a]]);return t.push({label:n[0].label,text:n.reduce(function(e,t){return e+t.text},"")}),t},Y=n(18),$=Object.keys(Y).filter(function(e){return"common"!==e}).map(function(e){return Y[e][700]});function K(e){var t=Object(a.useState)([]),n=Object(f.a)(t,2),l=n[0],i=n[1],o=Object(a.useState)(function(){return e.initialSequence?e.initialSequence.flatMap(function(e){return e.label?[e]:P(e.text)}):P(e.document)}),c=Object(f.a)(o,2),u=c[0],s=c[1],d=Object(a.useMemo)(function(){return e.labels.reduce(function(e,t,n){return e[t.id]=$[n%$.length],e},{})},[e.labels]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(G,{labels:e.labels,onSelectLabel:function(t){for(var n=(e.labels.find(function(e){var n=e.id;return t===n})||{}).color,a="",r=[],o=0;o<u.length;o++){var c=u[o];!l.includes(o)||c.label?(a.length>0&&(r.push({text:a,color:n,label:t}),a=""),r.push(c)):a+=c.text}a.length>0&&r.push({text:a,color:n,label:t}),s(r),e.onChange(Q(r)),i([])}})),r.a.createElement("div",{style:{borderTop:"1px solid #ccc",marginTop:8,paddingTop:5}},r.a.createElement(M,{colorLabelMap:d,nothingHighlighted:0===l.length,onHighlightedChanged:function(e){return i(e)},onSequenceChange:function(t){s(t),e.onChange(Q(t))},sequence:u})))}function Z(e){var t=Object(a.useState)(e.initialLabels||(e.initialLabel?[e.initialLabel]:[])),n=Object(f.a)(t,2),l=n[0],i=n[1],o=Object(a.useMemo)(function(){return P(e.document)},[e.document]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(G,{labels:e.labels,onSelectLabel:function(t){e.multipleLabels?(i(l.concat([t])),e.onChange(l.concat([t]))):(e.onChange(t),i([t]))}})),r.a.createElement("div",{style:{borderTop:"1px solid #ccc",marginTop:8,paddingTop:5}},r.a.createElement("div",null,l.map(function(t){var n=e.labels.find(function(e){return e.id===t});if(n)return r.a.createElement(V,Object.assign({},n,{small:!0,deletable:!0,onClick:function(t){var n=l.filter(function(e){return e!==t});i(n),e.multipleLabels?e.onChange(n):e.onChange(null)}}))})),r.a.createElement(M,{nothingHighlighted:!0,sequence:o})))}var X=n(30),ee=n.n(X),te=n(50),ne=n(40),ae=n(187),re=n.n(ae),le=n(185),ie=n.n(le),oe=n(186),ce=n.n(oe),ue=n(41),se=n.n(ue),de=new ie.a(ce.a),me={},pe=function(e,t){return{label:e,value:e+Math.random().toString(),color:t}},fe={control:function(e){return Object(I.a)({},e,{backgroundColor:"white"})},option:function(e,t){var n=t.data,a=t.isDisabled,r=t.isFocused,l=t.isSelected,i=se()(n.color||Y.yellow[700]);return Object(I.a)({},e,{backgroundColor:a?null:l?n.color:r?i.alpha(.1).css():i.alpha(.05).css(),color:a?"#ccc":l?se.a.contrast(i,"white")>2?"white":"black":i.darken().darken().css(),cursor:a?"not-allowed":"default"})},multiValue:function(e,t){var n=t.data,a=se()(n.color);return Object(I.a)({},e,{backgroundColor:a.alpha(.1).css()})},multiValueLabel:function(e,t){var n=t.data;return Object(I.a)({},e,{color:se()(n.color).darken().darken().css()})},multiValueRemove:function(e,t){var n=t.data;return Object(I.a)({},e,{color:se()(n.color).darken().darken().css(),":hover":{backgroundColor:n.color,color:"white"}})}};function be(e){var t=e.initialText,n=void 0===t?"":t,l=e.onChange,i=e.phraseBank,o=void 0===i?[]:i,c=e.validator,u=void 0===c?function(){return[]}:c,s=Object(a.useState)(),d=Object(f.a)(s,2),m=d[0],p=d[1],b=Object(a.useState)(n?[{value:n,label:n,color:Y.green[500]}]:[]),g=Object(f.a)(b,2),h=g[0],v=g[1],y=Object(a.useState)([]),E=Object(f.a)(y,2),O=E[0],j=E[1],S=function(){var e=Object(ne.a)(ee.a.mark(function e(t){var n,a;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=t.toLowerCase(),!(n=de.lookup(t)).found&&!o.includes(t)){e.next=4;break}return e.abrupt("return",[pe(t,Y.green[500])]);case 4:return a=o.filter(function(e){return e.startsWith(t)}),e.abrupt("return",[pe(t,Y.yellow[700])].concat(a.filter(function(e){return e!==t}).map(function(e){return pe(e,Y.green[500])})).concat(n.suggestions.slice(0,6).map(function(e){var t=e.word;return pe(t,Y.green[500])})));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{fontSize:18}},r.a.createElement(re.a,{components:me,inputValue:m,isClearable:!0,isMulti:!0,onChange:function(e){v(e);var t=e.map(function(e){return e.label}).join(" ");try{j(u(t))}catch(n){j(["Error: Validator had error: "+n.toString()])}l(t)},onInputChange:function(e){return p(e)},onKeyDown:function(e){var t=e.key;m&&("Enter"!==t&&"Tab"!==t||(v([].concat(Object(te.a)(h),[pe(m+" ",Y.yellow[700])])),p("")))},placeholder:"Begin writing...",loadOptions:S,value:h,styles:fe}),r.a.createElement("div",{style:{fontSize:14,height:100,marginTop:8,borderRadius:2,padding:8}},O.map(function(e){return r.a.createElement("div",{style:{marginTop:8,color:e.toLowerCase().includes("error:")?Y.red[800]:Y.yellow[800]}},e)})))}var ge=function(e){var t=e.initialTranscriptionText,n=e.onChange,l=e.audio,i=e.phraseBank,o=e.validator,c=Object(a.useState)("true"===window.localStorage.NLP_ANNOTATOR_AUTOPLAY),u=Object(f.a)(c,2),s=u[0],d=u[1],m=Object(a.useState)(void 0),p=Object(f.a)(m,2),b=p[0],g=p[1];return Object(a.useEffect)(function(){function e(){return(e=Object(ne.a)(ee.a.mark(function e(){var t,n,a,r,l,o,c,u,s,d;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"===typeof i&&(i=[i]),!Array.isArray(i)||!i.every(function(e){return e.startsWith("http")&&(e.endsWith(".txt")||e.endsWith(".csv"))})){e.next=40;break}t=[],n=!0,a=!1,r=void 0,e.prev=6,l=i[Symbol.iterator]();case 8:if(n=(o=l.next()).done){e.next=23;break}if(c=o.value,u=void 0,s="NLP_ANNOTATOR_PHRASE_BANK_".concat(c),window.localStorage[s])try{t.push.apply(t,Object(te.a)(JSON.parse(window.localStorage[s]))),u=!0}catch(m){}if(u){e.next=20;break}return e.next=16,fetch(c).then(function(e){return e.text()});case 16:e.t0=function(e){return e.trim().toLowerCase()},d=e.sent.split("\n").map(e.t0),window.localStorage[s]=JSON.stringify(d),t.push.apply(t,Object(te.a)(d));case 20:n=!0,e.next=8;break;case 23:e.next=29;break;case 25:e.prev=25,e.t1=e.catch(6),a=!0,r=e.t1;case 29:e.prev=29,e.prev=30,n||null==l.return||l.return();case 32:if(e.prev=32,!a){e.next=35;break}throw r;case 35:return e.finish(32);case 36:return e.finish(29);case 37:g(t),e.next=41;break;case 40:Array.isArray(i)&&g(i);case 41:case"end":return e.stop()}},e,null,[[6,25,29,37],[30,,32,36]])}))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}},[i]),r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center",padding:10}},r.a.createElement("audio",{autoPlay:s,loop:!0,controlsList:"nodownload",controls:!0},r.a.createElement("source",{src:l})),r.a.createElement("span",{style:{fontSize:12}},"Autoplay:"," ",r.a.createElement("input",{checked:s,type:"checkbox",onChange:function(){window.localStorage.NLP_ANNOTATOR_AUTOPLAY=JSON.stringify("true"!==window.localStorage.NLP_ANNOTATOR_AUTOPLAY),d(JSON.parse(window.localStorage.NLP_ANNOTATOR_AUTOPLAY))}}))),r.a.createElement("div",{style:{padding:10}},r.a.createElement(be,{phraseBank:b,validator:o,onChange:n,initialText:t})))},he=function(e){var t=e.children;return r.a.createElement("div",{style:{border:"1px solid #ccc",padding:10,borderRadius:4}},t)},ve=U()({finishButton:{"&&":{fontSize:14,textTransform:"none",backgroundColor:Y.green[500],padding:10,color:"#fff",margin:10,fontWeight:"bold","&:hover":{backgroundColor:Y.green[700]}}}});function ye(e){var t=ve(),n=Object(a.useState)(null),l=Object(f.a)(n,2),i=l[0],o=l[1];null===i&&"transcribe"===e.type&&(i=e.initialTranscriptionText),null===i&&"label-sequence"===e.type&&(i=e.initialSequence||[{text:e.document}]),Object(a.useLayoutEffect)(function(){var t=function(t){"Enter"===t.key&&e.onFinish&&e.onFinish(i)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}});var c=function(t){e.onChange&&e.onChange(t),o(t)};e.labels&&e.labels.some(function(e){return!e.color})&&(e=Object(I.a)({},e,{labels:e.labels.map(function(e,t){return Object(I.a)({color:$[t%$.length]},e)})}));var u=null;return e.onFinish&&(u=r.a.createElement(g.a,{disabled:e.validator&&e.validator(i).some(function(e){return e.toLowerCase().includes("error:")}),onClick:function(){e.onFinish(i)},className:t.finishButton},"Complete (enter)")),"label-sequence"===e.type?r.a.createElement(he,null,r.a.createElement(K,Object.assign({},e,{onChange:c})),r.a.createElement("div",{style:{textAlign:"right"}},u)):"label-document"===e.type?r.a.createElement(he,null,r.a.createElement(Z,Object.assign({},e,{onChange:c})),r.a.createElement("div",{style:{textAlign:"right"}},u)):"transcribe"===e.type?r.a.createElement(he,null,r.a.createElement(ge,Object.assign({},e,{onChange:c})),r.a.createElement("div",{style:{textAlign:"right"}},u)):null}var Ee=n(188),Oe=n(189),je=n(195),Se=n(190),we=n(196),xe=function(e){function t(){var e,n;Object(Ee.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(je.a)(this,(e=Object(Se.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,err:""},n}return Object(we.a)(t,e),Object(Oe.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,err:e.toString()+"\n\n"+t.componentStack})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(E.a,{open:this.state.hasError,onClose:this.props.onClose},r.a.createElement(j.a,null,"Error Loading Annotator"),r.a.createElement(w.a,null,r.a.createElement("pre",null,this.state.err)),r.a.createElement(C.a,null,r.a.createElement(g.a,{onClick:this.props.onClose},"Close"))):this.props.children}}]),t}(a.Component),Ce=n(69),ke=n(191);var Ne=n(192),Le=n.n(Ne),Ae=n(103),Te=n.n(Ae),qe=n(104),Ie=n.n(qe),Pe=n(193),Re=n.n(Pe),Be=Object(o.a)({header:{display:"flex",padding:10,backgroundColor:"#f8f8f8",alignItems:"center",borderBottom:"1px solid #ccc"},button:{marginLeft:10,marginRight:10},content:{padding:10},warning:{fontSize:11,color:"#f00",padding:10,textAlign:"center"}});i.a.render(r.a.createElement(function(e){var t=e.children,n=m();return r.a.createElement(d.a,{theme:p},r.a.createElement("div",{className:n.container},t))},null,window.location.search.includes("load_url")?r.a.createElement(function(){var e=Be(),t=Object(a.useState)([]),n=Object(f.a)(t,2),l=n[0],i=n[1],o=Object(a.useState)(0),c=Object(f.a)(o,2),u=c[0],s=c[1],d=Object(a.useState)({}),m=Object(f.a)(d,2),p=m[0],b=p.loadUrl,h=p.outputName,v=void 0===h?"dataset":h,y=m[1];return Object(a.useEffect)(function(){function e(){return(e=Object(ne.a)(ee.a.mark(function e(){var t,n,a,r,l;return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(Ce.parse)(window.location.search)||{},n=t.load_url,a=t.output_name,y({loadUrl:n,outputName:a}),!n){e.next=8;break}return e.next=5,Le.a.get(n);case 5:r=e.sent,l=r.data,i(l);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}},[]),r.a.createElement("div",null,r.a.createElement("div",{className:e.header},r.a.createElement("div",null,r.a.createElement("div",null,"Sample #",u+1," / ",l.length),r.a.createElement("div",null,r.a.createElement("form",{method:"GET"},r.a.createElement("input",{name:"load_url",defaultValue:b}),r.a.createElement("button",null,"load")))),r.a.createElement("div",{style:{flexGrow:1}}),r.a.createElement(g.a,{className:e.button,onClick:function(){Re()(JSON.stringify(l),v+".json","application/json")}},"Download"),r.a.createElement(g.a,{className:e.button,onClick:function(){return s((u-1+l.length)%l.length)}},"Prev Sample"),r.a.createElement(g.a,{className:e.button,variant:"outlined",onClick:function(){return s((u+1)%l.length)}},"Next Sample (enter)")),r.a.createElement("div",{className:e.warning},"This page will not save your progress on refresh."),!b&&r.a.createElement("div",{className:e.warning},"load_url must be specified"),l.length>0&&r.a.createElement("div",{className:e.content},r.a.createElement(ye,Object.assign({key:u},l[u],{onChange:function(e){var t=l[u],n=t.type,a=t.multiple,r="label-document"===n&&a?"initialLabels":"label-document"!==n||a?"label-sequence"===n?"initialSequence":"transcribe"===n?"initialTranscriptionText":null:"initialLabel";console.log(Te()(Ie()(l),[u,r],e)),i(Te()(Ie()(l),[u,r],e))}}))))},null):r.a.createElement(function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(function(){var e=(Object(Ce.parse)(window.location.search)||{}).load;if(e)try{return JSON.parse(ke.Base64.decode(e))}catch(t){console.error("Problem loading from load get parameter. Error parsing.")}return T.Custom()}()),o=Object(f.a)(i,2),c=o[0],u=o[1],s=Object(a.useState)(),d=Object(f.a)(s,2),m=d[0],p=d[1];return r.a.createElement("div",null,n?r.a.createElement(xe,{onClose:function(){l(!1)}},r.a.createElement(ye,Object.assign({},c,{onFinish:function(e){p(e),l(!1)}}))):r.a.createElement(q,{initialAnnotatorProps:c,lastOutput:m,onOpenAnnotator:function(e){u(e),l(!0)}}))},null)),document.getElementById("root"))}},[[203,2,1]]]);
//# sourceMappingURL=main.e7186121.chunk.js.map