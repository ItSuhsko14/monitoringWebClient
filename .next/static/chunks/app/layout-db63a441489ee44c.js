(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8924:function(e,n,t){Promise.resolve().then(t.bind(t,9424))},3385:function(){},7844:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},9424:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(7437),a=t(7844);t(3385);var c=t(5972),i=t(4725);let l=(0,c.xC)({reducer:{devices:i.Z}});var s=t(828);function o(e){let{children:n}=e;return(0,r.jsx)(s.zt,{store:l,children:n})}function d(e){let{children:n}=e;return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:a.className,children:(0,r.jsx)(o,{store:l,children:n})})})}},4725:function(e,n,t){"use strict";t.d(n,{e:function(){return a}});let r=(0,t(5972).oM)({name:"devices",initialState:[],reducers:{addOrUpdateDevice(e,n){let t=n.payload,r=e.findIndex(e=>e.id===t.id);return -1!==r?(console.log("update device"),console.log(t.id),e.map((e,n)=>n===r?t:e)):(console.log("add device"),[...e,t])}}}),{addOrUpdateDevice:a}=r.actions;n.Z=r.reducer}},function(e){e.O(0,[181,971,69,744],function(){return e(e.s=8924)}),_N_E=e.O()}]);