(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f6d118b"],{"27ca":function(e,t,l){"use strict";l("c901")},8722:function(e,t,l){e.exports=l.p+"static/img/default_electrical_equipment.4c4a31b1.svg"},c901:function(e,t,l){},f0c9:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"plancxt"},[a("el-steps",{staticStyle:{width:"500px",margin:"0 auto"},attrs:{space:400,active:e.active,"align-center":""}},[a("el-step",{attrs:{title:"添加巡检计划"}}),e._v(" "),a("el-step",{attrs:{title:"选择巡检对象"}})],1),e._v(" "),e.show?a("form",{staticClass:"el-form el-form--label-top",staticStyle:{width:"500px",margin:"0 auto",display:"block","margin-top":"40px","margin-bottom":"52px"}},[a("h4",[e._v("基本信息")]),e._v(" "),a("div",{staticClass:"el-form-item"},[a("div",{staticClass:"form-title"},[e._v("变电站")]),e._v(" "),a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.BDZselect[0].value,callback:function(t){e.$set(e.BDZselect[0],"value",t)},expression:"BDZselect[0].value"}},e._l(e.BDZselect,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("div",{staticClass:"el-form-item"},[a("div",{staticClass:"form-title"},[e._v("巡检类型*")]),e._v(" "),a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.typeSelect[0].value,callback:function(t){e.$set(e.typeSelect[0],"value",t)},expression:"typeSelect[0].value"}},e._l(e.typeSelect,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),a("div",{staticClass:"el-form-item"},[a("div",{staticClass:"form-title"},[e._v("巡检方式*")]),e._v(" "),a("el-radio",{staticClass:"rlabel",attrs:{label:"1"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("智能巡检")]),e._v(" "),a("el-radio",{staticClass:"rlabel",attrs:{label:"2"},model:{value:e.radio1,callback:function(t){e.radio1=t},expression:"radio1"}},[e._v("人工巡检")])],1),e._v(" "),a("div",{staticClass:"el-form-item"},[a("div",{staticClass:"form-title"},[e._v("任务生成方式*")]),e._v(" "),a("el-radio",{staticClass:"rlabel",attrs:{label:"1"},on:{change:function(t){return e.mode()}},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("自动执行")]),e._v(" "),a("el-radio",{staticClass:"rlabel",attrs:{label:"2"},on:{change:function(t){return e.mode()}},model:{value:e.radio2,callback:function(t){e.radio2=t},expression:"radio2"}},[e._v("手动执行")])],1),e._v(" "),a("h4",[e._v("巡检时间配置")]),e._v(" "),"1"==e.radio2?a("div",{staticClass:"el-form-item"},[a("div",{staticClass:"form-title"},[e._v("巡检任务周期*")]),e._v(" "),a("el-radio-group",{staticClass:"el-radio-group",attrs:{size:"medium"},on:{change:e.agreeChange},model:{value:e.timeType,callback:function(t){e.timeType=t},expression:"timeType"}},[a("el-radio-button",{staticClass:"el-radio-button is-simple",attrs:{label:"1"}},[e._v("每周")]),e._v(" "),a("el-radio-button",{staticClass:"el-radio-button is-simple",attrs:{label:"2"}},[e._v("每月")]),e._v(" "),a("el-radio-button",{staticClass:"el-radio-button is-simple",attrs:{label:"3"}},[e._v("每年")]),e._v(" "),a("el-radio-button",{staticClass:"el-radio-button is-simple",attrs:{label:"4"}},[e._v("仅一次")])],1)],1):e._e(),e._v(" "),a("div",{staticClass:"el-form-item"},[a("div",{staticClass:"form-title"},[e._v("计划巡检时间*")]),e._v(" "),"1"==e.radio2?a("div",e._l(e.planTimeConfig,(function(t,l){return a("div",{key:l,staticClass:"time-box"},[1==e.timeType?a("div",{staticClass:"item"},[a("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择日期"},model:{value:t.timeArray,callback:function(l){e.$set(t,"timeArray",l)},expression:"itemd.timeArray"}},e._l(e.week,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-time-picker",{attrs:{"value-format":"HH:mm",format:"HH:mm",placeholder:"请选择时间"},model:{value:t.executeTime,callback:function(l){e.$set(t,"executeTime",l)},expression:"itemd.executeTime"}}),e._v(" "),a("div",{staticClass:"delete"},[a("el-button",{attrs:{type:"info",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.del(l)}}})],1)],1):e._e(),e._v(" "),2==e.timeType?a("div",{staticClass:"item"},[a("el-select",{attrs:{multiple:"","collapse-tags":"",placeholder:"请选择日期"},model:{value:t.timeArray,callback:function(l){e.$set(t,"timeArray",l)},expression:"itemd.timeArray"}},e._l(e.month,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-time-picker",{attrs:{"value-format":"HH:mm",format:"HH:mm",placeholder:"请选择时间"},model:{value:t.executeTime,callback:function(l){e.$set(t,"executeTime",l)},expression:"itemd.executeTime"}}),e._v(" "),a("div",{staticClass:"delete"},[a("el-button",{attrs:{type:"info",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.del(l)}}})],1)],1):e._e(),e._v(" "),3==e.timeType?a("div",{staticClass:"item"},[a("el-select",{staticStyle:{width:"100px"},attrs:{"collapse-tags":"",placeholder:"请选择月"},model:{value:t.month,callback:function(l){e.$set(t,"month",l)},expression:"itemd.month"}},e._l(e.months,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择日"},model:{value:t.day,callback:function(l){e.$set(t,"day",l)},expression:"itemd.day"}},e._l(e.month,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-time-picker",{attrs:{"value-format":"HH:mm",format:"HH:mm",placeholder:"请选择时间"},model:{value:t.executeTime,callback:function(l){e.$set(t,"executeTime",l)},expression:"itemd.executeTime"}}),e._v(" "),a("div",{staticClass:"delete"},[a("el-button",{attrs:{type:"info",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.del(l)}}})],1)],1):e._e(),e._v(" "),4==e.timeType?a("div",{staticClass:"item"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy/MM/dd","picker-options":e.option},on:{change:function(t){return e.qi(l)}},model:{value:t.timeArray,callback:function(l){e.$set(t,"timeArray",l)},expression:"itemd.timeArray"}}),e._v(" "),a("el-time-picker",{attrs:{"value-format":"HH:mm",format:"HH:mm",placeholder:"请选择时间"},model:{value:t.executeTime,callback:function(l){e.$set(t,"executeTime",l)},expression:"itemd.executeTime"}}),e._v(" "),a("div",{staticClass:"delete"},[a("el-button",{attrs:{type:"info",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.del(l)}}})],1)],1):e._e()])})),0):e._e(),e._v(" "),"2"==e.radio2?a("div",e._l(e.planTimeConfig,(function(t,l){return a("div",{key:l,staticClass:"time-box"},[a("div",{staticClass:"item"},[a("el-time-picker",{staticStyle:{width:"90%"},attrs:{"value-format":"HH:mm",format:"HH:mm",placeholder:"请选择时间"},model:{value:t.executeTime,callback:function(l){e.$set(t,"executeTime",l)},expression:"itemd.executeTime"}})],1)])})),0):e._e(),e._v(" "),"1"==e.radio2?a("el-button",{staticClass:"additem",attrs:{type:"info"},on:{click:function(t){return e.additem()}}},[e._v("＋ 添加("+e._s(e.count)+" / 7)")]):e._e()],1)]):a("div",{staticClass:"InsaddObject"},[a("img",{attrs:{src:l("8722"),alt:""}}),e._v(" "),a("span",{staticClass:"span1"},[e._v("暂无巡检对象及内容")]),e._v(" "),a("span",{staticClass:"span2"},[e._v("请先点击下方按钮选择巡检区域")]),e._v(" "),a("el-button",[e._v("➕  选择巡检区域")])],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{ref:"tabinp",staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:function(t){return e.next()}}},[e._v(e._s(e.buttext))])],1)],1)])},i=[],s={name:"AddPlan",components:{},data:function(){return{buttext:"保存，下一步",show:1,count:1,active:1,radio1:"1",radio2:"1",timeType:"1",planTimeConfig:[],time1:{timeArray:[],executeTime:""},time2:{timeArray:[],executeTime:""},time3:{month:"",day:"",executeTime:"",timeArray:[]},time4:{timeArray:"",executeTime:""},time:"",productionModel:"1",BDZselect:[{value:"1",label:"变电站1"},{value:"2",label:"变电站2"}],typeSelect:[{value:"1",label:"全站巡检"},{value:"5",label:"变压器巡检"}],week:[{value:"1",label:"周一"},{value:"2",label:"周二"},{value:"3",label:"周三"},{value:"4",label:"周四"},{value:"5",label:"周五"},{value:"6",label:"周六"},{value:"7",label:"周日"}],month:[{value:"1",label:"1号"},{value:"2",label:"2号"},{value:"3",label:"3号"},{value:"4",label:"4号"},{value:"5",label:"5号"},{value:"6",label:"6号"},{value:"7",label:"7号"},{value:"8",label:"8号"},{value:"9",label:"9号"},{value:"10",label:"10号"},{value:"11",label:"11号"},{value:"12",label:"12号"},{value:"13",label:"13号"},{value:"14",label:"14号"},{value:"15",label:"15号"},{value:"16",label:"16号"},{value:"17",label:"17号"},{value:"18",label:"18号"},{value:"19",label:"19号"},{value:"20",label:"20号"},{value:"21",label:"21号"},{value:"22",label:"22号"},{value:"23",label:"23号"},{value:"24",label:"24号"},{value:"25",label:"25号"},{value:"26",label:"26号"},{value:"27",label:"27号"},{value:"30",label:"30号"},{value:"28",label:"28号"},{value:"29",label:"29号"},{value:"31",label:"31号"}],months:[{value:"01",label:"1月"},{value:"02",label:"2月"},{value:"03",label:"3月"},{value:"04",label:"4月"},{value:"05",label:"5月"},{value:"06",label:"6月"},{value:"07",label:"7月"},{value:"08",label:"8月"},{value:"09",label:"9月"},{value:"10",label:"10月"},{value:"11",label:"11月"},{value:"12",label:"12月"}],option:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},hourvalue:new Date}},mounted:function(){this.planTimeConfig.push(this.time1)},methods:{next:function(){this.active++>1&&(this.active=1),1===this.show?(this.show=0,this.buttext="上一步"):(this.show=1,this.buttext="保存，下一步")},del:function(e){this.planTimeConfig.splice(e,1),this.count--},mode:function(){this.radio2},qi:function(e){},additem:function(){this.count>=7||("1"===this.timeType?(this.time1={timeArray:[],executeTime:""},this.planTimeConfig.push(this.time1)):"2"===this.timeType?(this.time2={timeArray:[],executeTime:""},this.planTimeConfig.push(this.time2)):"3"===this.timeType?(this.time3={month:"",day:"",executeTime:"",timeArray:[]},this.planTimeConfig.push(this.time3)):"4"===this.timeType&&(this.time4={timeArray:"",executeTime:""},this.planTimeConfig.push(this.time4)),this.count++)},agreeChange:function(){this.time1.timeArray=[],this.time2.timeArray=[],this.time3.timeArray=[],this.time4.timeArray="",this.time1.executeTime="",this.time2.executeTime="",this.time3.executeTime="",this.time4.executeTime="",this.time3.month="",this.time3.day="",this.planTimeConfig=[],this.count=1,"1"===this.timeType?this.planTimeConfig.push(this.time1):"2"===this.timeType?this.planTimeConfig.push(this.time2):"3"===this.timeType?this.planTimeConfig.push(this.time3):"4"===this.timeType&&this.planTimeConfig.push(this.time4)}}},o=s,n=(l("27ca"),l("2877")),c=Object(n["a"])(o,a,i,!1,null,"54cf84bd",null);t["default"]=c.exports}}]);