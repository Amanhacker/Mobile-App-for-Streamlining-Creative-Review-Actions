"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[973],{973:(D,f,s)=>{s.r(f),s.d(f,{ViewDetailsModule:()=>O});var h=s(6895),v=s(433),a=s(6114),u=s(2598),_=s(8387),e=s(8256);function Z(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-button",15),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.approve())}),e._uU(1," Approve "),e.qZA()}}function b(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"ion-button",16),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.reject())}),e._uU(1," Reject "),e.qZA()}}function T(i,l){1&i&&e._UZ(0,"ion-icon",27)}function w(i,l){1&i&&e._UZ(0,"ion-icon",28)}function A(i,l){1&i&&(e.TgZ(0,"div",29),e._uU(1,"Rejected!"),e.qZA())}function x(i,l){1&i&&(e.TgZ(0,"div",30),e._uU(1,"Approved!"),e.qZA())}function q(i,l){if(1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"div",17)(3,"div",18),e._uU(4,"Other"),e.qZA(),e.TgZ(5,"div",19),e._uU(6,"Creative Review"),e.qZA(),e._UZ(7,"ion-icon",20),e.qZA()()(),e.TgZ(8,"ion-content",21)(9,"div",22),e.YNc(10,T,1,0,"ion-icon",23),e.YNc(11,w,1,0,"ion-icon",24),e.YNc(12,A,2,0,"div",25),e.YNc(13,x,2,0,"div",26),e.qZA()()),2&i){const n=e.oxw();e.xp6(10),e.Q6J("ngIf",n.isreject),e.xp6(1),e.Q6J("ngIf",!n.isreject),e.xp6(1),e.Q6J("ngIf",n.isreject),e.xp6(1),e.Q6J("ngIf",!n.isreject)}}const U=[{path:"",component:(()=>{class i{constructor(n,t){this.route=n,this.router=t,this.isAlertOpen=!1,this.isreject=!1,this.tabMap={tab1:"pending",tab2:"approved",tab3:"rejected"},this.currentTab=""}ngOnInit(){this.route.queryParams.subscribe(t=>{var o,c,r;if(null!==(o=this.router)&&void 0!==o&&null!==(c=o.getCurrentNavigation())&&void 0!==c&&null!==(r=c.extras)&&void 0!==r&&r.state){var p,g,m;let d=null===(p=this.router)||void 0===p||null===(g=p.getCurrentNavigation())||void 0===g||null===(m=g.extras)||void 0===m?void 0:m.state;this.data=d?d.creative:null,this.currentTab=d?d.tab:""}});let n=localStorage.getItem("creativeList");this.creativeList=n?JSON.parse(n):_.QG}approve(){var n;let t="pending";"tab1"===this.currentTab?t="pending":"tab2"===this.currentTab?t="approved":"tab3"===this.currentTab&&(t="rejected"),console.log("tabName",t);let o=this.creativeList[t].findIndex(c=>{var r;return c.id===(null===(r=this.data)||void 0===r?void 0:r.id)});console.log("creativeIndex",o),-1!==o&&this.creativeList[t].splice(o,1),this.data.status=1,this.creativeList.approved=[this.data,...null===(n=this.creativeList)||void 0===n?void 0:n.approved],localStorage.setItem("creativeList",JSON.stringify(this.creativeList)),this.setTimer()}reject(){var n;let t="pending";"tab1"===this.currentTab?t="pending":"tab2"===this.currentTab?t="approved":"tab3"===this.currentTab&&(t="rejected"),console.log("tabName",t);let o=this.creativeList[t].findIndex(c=>{var r;return c.id===(null===(r=this.data)||void 0===r?void 0:r.id)});console.log("creativeIndex",o),-1!==o&&this.creativeList[t].splice(o,1),this.data.status=2,this.creativeList.rejected=[this.data,...null===(n=this.creativeList)||void 0===n?void 0:n.rejected],localStorage.setItem("creativeList",JSON.stringify(this.creativeList)),this.setTimer(!0)}setTimer(n=!1){this.isreject=n,this.isAlertOpen=!0,setTimeout(()=>{this.isAlertOpen=!1,this.isreject=!1,setTimeout(()=>{this.router.navigate(n?["tabs/tab3"]:["tabs/tab2"])},1)},1500)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(u.gz),e.Y36(u.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-view-details"]],decls:75,vars:15,consts:[["color","light"],["slot","start"],["color","dark","defaultHref","/tabs/tab1"],[1,"comments-list"],[1,"comment-item"],[1,"ion-justify-content-center"],["alt","No Preview Available",3,"src"],[2,"margin-left","10px"],[2,"max-width","120px"],[1,"ion-text-left"],[2,"word-break","break-all",3,"href"],[1,"action-section"],["size","medium","color","success","fill","outline","shape","round",3,"click",4,"ngIf"],["size","medium","color","danger","fill","outline","shape","round",3,"click",4,"ngIf"],[3,"isOpen"],["size","medium","color","success","fill","outline","shape","round",3,"click"],["size","medium","color","danger","fill","outline","shape","round",3,"click"],[1,"header-section"],[1,"iteminvisible"],[1,"itemcenter"],["slot","icon-only","name","power",1,"itemright","ion-padding-end",2,"height","30px","width","25px"],[1,"ion-padding"],[2,"flex-direction","column","display","flex","align-items","center","justify-content","center","height","100%"],["aria-hidden","true","style","width: 60px; height: 60px; color: red;","name","close-circle",4,"ngIf"],["aria-hidden","true","style","width: 60px; height: 60px; color: green;","name","checkmark-circle",4,"ngIf"],["style","color: red; font-size: 30px; font-family: monospace;",4,"ngIf"],["style","color: green; font-size: 30px; font-family: monospace;",4,"ngIf"],["aria-hidden","true","name","close-circle",2,"width","60px","height","60px","color","red"],["aria-hidden","true","name","checkmark-circle",2,"width","60px","height","60px","color","green"],[2,"color","red","font-size","30px","font-family","monospace"],[2,"color","green","font-size","30px","font-family","monospace"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-content")(7,"div",3)(8,"div",4)(9,"ion-row",5)(10,"ion-col"),e._UZ(11,"img",6),e.qZA()(),e.TgZ(12,"ion-row",7)(13,"ion-col",8),e._uU(14,"Landing Page"),e.qZA(),e.TgZ(15,"ion-col",9)(16,"a",10),e._uU(17),e.qZA()()(),e.TgZ(18,"ion-row",7)(19,"ion-col",8),e._uU(20,"CRID"),e.qZA(),e.TgZ(21,"ion-col"),e._uU(22),e.qZA()(),e.TgZ(23,"ion-row",7)(24,"ion-col",8),e._uU(25,"Description"),e.qZA(),e.TgZ(26,"ion-col"),e._uU(27),e.qZA()(),e.TgZ(28,"ion-row",7)(29,"ion-col",8),e._uU(30,"Country"),e.qZA(),e.TgZ(31,"ion-col"),e._uU(32),e.qZA()(),e.TgZ(33,"ion-row",7)(34,"ion-col",8),e._uU(35,"DSP"),e.qZA(),e.TgZ(36,"ion-col"),e._uU(37),e.qZA()(),e.TgZ(38,"ion-row",7)(39,"ion-col",8),e._uU(40,"App"),e.qZA(),e.TgZ(41,"ion-col"),e._uU(42),e.qZA()(),e.TgZ(43,"ion-row",7)(44,"ion-col",8),e._uU(45,"Revenue"),e.qZA(),e.TgZ(46,"ion-col"),e._uU(47),e.qZA()(),e.TgZ(48,"ion-row",7)(49,"ion-col",8),e._uU(50,"Submitted Date"),e.qZA(),e.TgZ(51,"ion-col"),e._uU(52),e.qZA()(),e.TgZ(53,"ion-row",7)(54,"ion-col",8),e._uU(55,"Format"),e.qZA(),e.TgZ(56,"ion-col"),e._uU(57,"JPEG"),e.qZA()(),e.TgZ(58,"ion-row",7)(59,"ion-col",8),e._uU(60,"Aspect Ratio"),e.qZA(),e.TgZ(61,"ion-col"),e._uU(62,"16:9"),e.qZA()(),e.TgZ(63,"ion-row",7)(64,"ion-col",8),e._uU(65,"Resolution"),e.qZA(),e.TgZ(66,"ion-col"),e._uU(67,"1280 x 720"),e.qZA()()()()(),e.TgZ(68,"ion-footer")(69,"ion-toolbar")(70,"div",11),e.YNc(71,Z,2,0,"ion-button",12),e.YNc(72,b,2,0,"ion-button",13),e.qZA()()(),e.TgZ(73,"ion-modal",14),e.YNc(74,q,14,4,"ng-template"),e.qZA()),2&n&&(e.xp6(5),e.AsE("",null==t.data?null:t.data.title," (",null==t.data?null:t.data.adType,")"),e.xp6(6),e.s9C("src",null==t.data?null:t.data.thumbnailUrl,e.LSH),e.xp6(5),e.s9C("href",null==t.data?null:t.data.appLink,e.LSH),e.xp6(1),e.hij(" ",null==t.data?null:t.data.appLink,""),e.xp6(5),e.Oqu(null==t.data?null:t.data.crid),e.xp6(5),e.Oqu(null!=t.data&&t.data.imageText?null==t.data?null:t.data.imageText:"-"),e.xp6(5),e.Oqu(null==t.data?null:t.data.country),e.xp6(5),e.Oqu(null==t.data?null:t.data.dsp),e.xp6(5),e.Oqu(null==t.data?null:t.data.inventory),e.xp6(5),e.Oqu(null==t.data?null:t.data.lossRevenue),e.xp6(5),e.Oqu(null==t.data?null:t.data.submittedDate),e.xp6(19),e.Q6J("ngIf","tab1"===t.currentTab||"tab3"===t.currentTab),e.xp6(1),e.Q6J("ngIf","tab1"===t.currentTab||"tab2"===t.currentTab),e.xp6(1),e.Q6J("isOpen",t.isAlertOpen))},dependencies:[h.O5,a.oU,a.YG,a.Sm,a.wI,a.W2,a.fr,a.Gu,a.gu,a.Nd,a.wd,a.sr,a.ki,a.cs],styles:[".comment-item[_ngcontent-%COMP%]{padding:8px;border-bottom:1px solid var(--ion-color-light);line-height:1.4;font-family:system-ui}ion-toolbar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-right:8px}ion-input[_ngcontent-%COMP%]{--background: var(--ion-color-light);--padding-start: 12px;--padding-end: 12px;border-radius:20px}.color-green[_ngcontent-%COMP%]{color:green!important}.color-red[_ngcontent-%COMP%]{color:red!important}.action-section[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.header-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.iteminvisible[_ngcontent-%COMP%]{flex:0 1 auto;visibility:hidden}.itemcenter[_ngcontent-%COMP%]{flex:0 1 auto;font-family:system-ui;font-size:20px}"]}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.Bz.forChild(U),u.Bz]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.ez,v.u5,a.Pc,y]}),i})()}}]);