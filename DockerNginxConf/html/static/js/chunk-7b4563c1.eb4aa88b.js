(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b4563c1"],{"0a27":function(e,t,a){},"28e4":function(e,t,a){"use strict";a.r(t),a.d(t,"cameraList",(function(){return i})),a.d(t,"Tree",(function(){return o})),a.d(t,"initInfo",(function(){return l}));var n=a("b775");function i(e){return Object(n["a"])({url:"/api/resourceCameraUrls",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/api/resource/Tree",method:"get"})}function l(){return Object(n["a"])({url:"/api/Initkey",method:"get"})}t["default"]={cameraList:i,Tree:o,initInfo:l}},"3f53":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"top-header"},[e._v("\n      告警源：\n    "),a("el-select",{attrs:{placeholder:"请选择告警源"},on:{change:e.changeEventType},model:{value:e.query.thermDevice,callback:function(t){e.$set(e.query,"thermDevice",t)},expression:"query.thermDevice"}},e._l(e.thermDevice,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v("\n      预置位\n    "),a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入预置位名称"},model:{value:e.query.pointName,callback:function(t){e.$set(e.query,"pointName",t)},expression:"query.pointName"}}),e._v("\n      测温位\n    "),a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入测温位名称"},model:{value:e.query.ThermoPointName,callback:function(t){e.$set(e.query,"ThermoPointName",t)},expression:"query.ThermoPointName"}}),e._v("\n      所属区域\n    "),a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入所属区域名称"},model:{value:e.query.ThermoPointName,callback:function(t){e.$set(e.query,"ThermoPointName",t)},expression:"query.ThermoPointName"}}),e._v("\n      告警类型：\n    "),a("el-select",{attrs:{placeholder:"请选择类型"},on:{change:e.changeEventType},model:{value:e.query.alarmType,callback:function(t){e.$set(e.query,"alarmType",t)},expression:"query.alarmType"}},e._l(e.AlarmType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v("\n      告警时间：\n    "),a("el-date-picker",{staticStyle:{width:"260px"},attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},on:{change:e.changeTime},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.queryData()}}},[e._v("查询")])],1),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%",margin:"10px auto"},attrs:{data:e.alarmListData,border:"",stripe:"","header-cell-style":{background:"#ebebeb",color:"#1a1a1a"}}},[a("el-table-column",{attrs:{type:"index",align:"center",label:"序号",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"告警源"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"预置位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"测温位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"所属区域"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"所属区域"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"告警类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"告警时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-document",circle:""},on:{click:function(t){return e.handleClick("123456")}}})]}}])})],1)],1),e._v(" "),a("div",{staticClass:"paginatio"},[a("el-pagination",{attrs:{"current-page":e.alarmListData.pageNo,"page-sizes":[8,16,30,50,100],"page-size":e.alarmListData.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.alarmListData.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("pop-thermoalarm",{ref:"child",attrs:{show:e.popShow},on:{returnPop:e.popTableReturn}})],1)},i=[],o=a("71b6"),l={name:"ThermoAlarm",components:{PopThermoalarm:o["default"]},data:function(){return{popShow:0,popCShow:0,alarmListData:[{ruleName:"名称1"}],query:{pointName:"",ThermoPointName:"",alarmType:"0",currentPage:1,pageSize:8,time:[]},thermDevice:[{value:"192514",label:"测温1"},{value:"192513",label:"测温2"}],AlarmType:[{value:"0",label:"全部类型"},{value:"1",label:"温度告警"},{value:"2",label:"最高温告警"},{value:"3",label:"点位3"}]}},created:function(){var e=new Date,t=new Date(e.getTime()-864e5),a=new Date(e.getTime()+864e5);this.query.time.push(t,a),this.queryData()},methods:{handleClick:function(e){this.popShow=1,this.$refs.child.parentMsg(e)},popTableReturn:function(e){this.popShow=0},changeTime:function(e){this.query.time=e,this.queryData()},changeEventType:function(e){this.query.eventType=e,this.queryData()},handleSizeChange:function(e){this.query.pageSize=e,this.queryData()},handleCurrentChange:function(e){this.query.currentPage=e,this.queryData()},changeAlarmType:function(e){this.query.alarmType=e,this.queryData()},queryData:function(){}}},r=l,s=(a("528d"),a("2877")),c=Object(s["a"])(r,n,i,!1,null,"571a1600",null);t["default"]=c.exports},"528d":function(e,t,a){"use strict";a("737e")},"71b6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"pop-div"},[n("div",{staticClass:"pop-bg",class:e.show&&e.animation?"popbg-in":"popbg-out"}),e._v(" "),n("div",{staticClass:"pop-content",class:e.show&&e.animation?"popcontent-in":"popcontent-out"},[n("div",{staticClass:"pop-title"},[n("div",{staticClass:"title-font"},[e._v("告警详情")]),e._v(" "),n("div",{staticClass:"title-img",on:{click:e.close}},[n("svg-icon",{staticStyle:{width:"100%",height:"100%"},attrs:{"icon-class":"close"}})],1)]),e._v(" "),n("div",{staticClass:"pop-table"},[n("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{staticClass:"cont",attrs:{label:"图片",name:"first"}},[n("div",{staticClass:"left"},[n("el-carousel",{attrs:{"indicator-position":"outside",height:"375px",autoplay:!1}},e._l(4,(function(e){return n("el-carousel-item",{key:e},[n("img",{attrs:{src:a("c87d"),alt:""}})])})),1)],1),e._v(" "),n("div",{staticClass:"rigth"},[n("div",{staticClass:"info"},[n("p",[e._v("数据源")]),e._v(" "),n("span",[e._v("摄像机1")])]),e._v(" "),n("div",{staticClass:"info"},[n("p",[e._v("预置位")]),e._v(" "),n("span",[e._v("摄像机1")])]),e._v(" "),n("div",{staticClass:"info"},[n("p",[e._v("测温点")]),e._v(" "),n("span",[e._v("摄像机1")])]),e._v(" "),n("div",{staticClass:"info"},[n("p",[e._v("告警区域")]),e._v(" "),n("span",[e._v("摄像机1")])]),e._v(" "),n("div",{staticClass:"info"},[n("p",[e._v("告警类型")]),e._v(" "),n("span",[e._v("摄像机1")])]),e._v(" "),n("div",{staticClass:"info"},[n("p",[e._v("告警时间")]),e._v(" "),n("span",[e._v("2019-07-18 15:10:22 - 2019 07-18-16:15:20")])]),e._v(" "),n("div",{staticClass:"info"},[n("p",[e._v("告警描述")]),e._v(" "),n("span",[e._v("11111111111111111111111111111111")])])])])],1),e._v(" "),n("el-button",{staticClass:"videoBut",attrs:{type:"primary",icon:"el-icon-video-camera",circle:""},on:{click:function(t){return e.videoOpen()}}})],1)]),e._v(" "),e.videoshow?n("div",{staticClass:"video"},[n("div",{staticClass:"playWnd",staticStyle:{width:"320px",height:"320px"},attrs:{id:"playAlarm"}})]):e._e()]):e._e()},i=[],o=(a("a481"),a("1157")),l=a.n(o),r=a("28e4"),s={name:"PopThermoalarm",components:{},props:["show"],data:function(){return{videoshow:0,animation:1,activeName:"first",initCount:0,initparam:{appKey:"",secret:"",apiIp:"",apiPort:443,layout:"1x1"},wndId:1,pointCode:"62aacc3194064af481d51b50a68f130b",pubKey:"",oWebControl:null,WebControl:null}},watch:{eventLogSrcList:function(e,t){this.total=e.lenght+15,this.pagination(this.currentPpage,this.pageSize,this.evevtlogdata),this.evevtlogdata=e}},methods:{videoOpen:function(){0===this.videoshow?(this.videoshow=1,this.getInitParam(),this.WebControl=WebControl,this.initPlugin()):(this.videoshow=0,this.stopAllPreview(),this.closeWindow())},parentMsg:function(e){},close:function(){this.animation=0,null!==this.oWebControl&&this.stopAllPreview(),this.closeWindow(),this.videoshow=0;var e=this;setTimeout((function(){e.$emit("returnPop",0),e.animation=1}),500)},handleClick:function(e,t){},getInitParam:function(){var e=this;r["default"].initInfo().then((function(t){e.initparam=t.data,e.init()}))},videoPreview:function(){this.startpreview()},initPlugin:function(){var e=this;this.oWebControl=new WebControl({szPluginContainer:"playAlarm",iServicePortStart:15900,iServicePortEnd:15909,szClassId:"23BF3B0A-2C56-4D97-9C03-0CB103AA8F11",cbConnectSuccess:function(){e.initCount=0,e.oWebControl.JS_StartService("window",{dllPath:"./VideoPluginConnect.dll"}).then((function(){e.oWebControl.JS_SetWindowControlCallback({cbIntegrationCallBack:e.cbIntegrationCallBack}),e.oWebControl.JS_CreateWnd("playAlarm",320,320).then((function(){e.init()}))}),(function(){}))},cbConnectError:function(){e.oWebControl=null,l()("#playAlarm").html("<p>&nbsp;插件未启动，正在尝试启动，请稍候...</p>"),e.WebControl.JS_WakeUp("VideoWebPlugin://"),e.initCount++,e.initCount<3?setTimeout((function(){e.initPlugin()}),3e3):l()("#playAlarm").html('<p>&nbsp;插件启动失败，请安装插件!</p><a style="color:#0c5890" href="../VideoWebPlugin.exe" download="VideoWebPlugin.exe" >下载地址</a>')},cbConnectClose:function(t){e.oWebControl=null}})},setCallbacks:function(){this.oWebControl.JS_SetWindowControlCallback({cbIntegrationCallBack:this.cbIntegrationCallBack})},cbIntegrationCallBack:function(e){this.wndId=e.responseMsg.msg.wndId},init:function(){var e=this;this.getPubKey((function(){var t=e.initparam.appKey,a=e.setEncrypt(e.initparam.secret),n=e.initparam.apiIp,i=e.initparam.apiPort;i=parseInt(i);var o=0,l="D:\\SnapDir",r="D:\\VideoDir",s=1,c="secret",u=1,p=0,h="0,16,256,257,258,259,260,512,513,514,515,516,517,768,769";e.oWebControl.JS_RequestInterface({funcName:"init",argument:JSON.stringify({appkey:t,secret:a,ip:n,playMode:o,port:i,snapDir:l,videoDir:r,layout:"1x1",enableHTTPS:s,encryptedFields:c,showToolbar:u,showSmart:p,buttonIDs:h})}).then((function(t){e.oWebControl.JS_Resize(320,320),e.videoPreview()}))}))},getPubKey:function(e){var t=this;this.oWebControl.JS_RequestInterface({funcName:"getRSAPubKey",argument:JSON.stringify({keyLength:1024})}).then((function(a){a.responseMsg.data&&(t.pubKey=a.responseMsg.data,e())}))},setEncrypt:function(e){var t=new JSEncrypt;return t.setPublicKey(this.pubKey),t.encrypt(e)},startpreview:function(){var e=this.pointCode,t=e,a=0,n=1,i=0;this.wndId;t=t.replace(/(^\s*)/g,""),t=t.replace(/(\s*$)/g,""),this.oWebControl.JS_RequestInterface({funcName:"startPreview",argument:JSON.stringify({cameraIndexCode:t,streamMode:a,transMode:n,gpuMode:i})})},stopAllPreview:function(){this.oWebControl.JS_RequestInterface({funcName:"stopAllPreview"})},closeWindow:function(){null!=this.oWebControl&&(this.oWebControl.JS_HideWnd(),this.oWebControl.JS_Disconnect().then((function(){}),(function(){})))}}},c=s,u=(a("9c25"),a("2877")),p=Object(u["a"])(c,n,i,!1,null,"60118e0e",null);t["default"]=p.exports},"737e":function(e,t,a){},"9c25":function(e,t,a){"use strict";a("0a27")},c87d:function(e,t,a){e.exports=a.p+"static/img/cam.b13c81d1.png"}}]);