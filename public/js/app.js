(self.webpackChunk=self.webpackChunk||[]).push([[773],{2849:(e,t,n)=>{"use strict";var o=n(7757),r=n.n(o),a=n(821),l=n(9038),s=n(1966),i={class:"h-screen flex overflow-hidden bg-gray-100"},c={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700"},d={class:"absolute top-0 right-0 -mr-12 pt-2"},u=(0,a.createElementVNode)("span",{class:"sr-only"},"Close sidebar",-1),f=(0,a.createElementVNode)("div",{class:"flex-shrink-0 flex items-center px-4"},[(0,a.createElementVNode)("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg",alt:"Workflow"})],-1),m={class:"mt-5 flex-1 h-0 overflow-y-auto"},p={class:"px-2 space-y-1"},h=(0,a.createElementVNode)("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},null,-1),x={class:"hidden bg-indigo-700 md:flex md:flex-shrink-0"},v={class:"flex flex-col w-64"},g={class:"flex flex-col flex-grow pt-5 pb-4 overflow-y-auto"},w=(0,a.createElementVNode)("div",{class:"flex items-center flex-shrink-0 px-4"},[(0,a.createElementVNode)("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg",alt:"Workflow"})],-1),y={class:"mt-5 flex-1 flex flex-col"},b={class:"flex-1 px-2 space-y-1"},N={class:"flex flex-col w-0 flex-1 overflow-hidden"},V={class:"relative z-10 flex-shrink-0 flex h-16 bg-white shadow"},k=(0,a.createElementVNode)("span",{class:"sr-only"},"Open sidebar",-1),E={class:"flex-1 px-4 flex justify-between items-center"},C={class:"flex-1 flex"},B={class:"w-full flex md:ml-0 mb-0",action:"#",method:"GET"},D=(0,a.createElementVNode)("label",{for:"search-field",class:"sr-only"},"Search",-1),M={class:"relative w-full text-gray-400 focus-within:text-gray-600"},I={class:"absolute inset-y-0 left-0 flex items-center pointer-events-none"},O=(0,a.createElementVNode)("input",{id:"search-field",class:"block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",placeholder:"Search",type:"search",name:"search"},null,-1),S={class:"ml-4 flex items-center md:ml-6"},_={type:"button",class:"bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},L=(0,a.createElementVNode)("span",{class:"sr-only"},"View notifications",-1),T=(0,a.createElementVNode)("span",{class:"sr-only"},"Open user menu",-1),U=(0,a.createElementVNode)("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1637921884274-e12c48d7cd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1),A=["href"],H={class:"flex-1 relative overflow-y-auto focus:outline-none"},F={class:"py-6"},j={class:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"};var P=n(8342),W=n(3686),z=n(2494),G=n(7751),Z=n(3724),$=[{name:"Dashboard",href:"/dashboard",icon:G.tvw},{name:"Users",href:"/dashboard/users",icon:G.oyc},{name:"Settings",href:"/dashboard/settings",icon:G.IEm}],q=[{name:"Your Profile",href:"#"},{name:"Settings",href:"#"},{name:"Sign out",href:"#"}];const R={components:{Dialog:P.Vq,DialogOverlay:P.t9,Menu:W.v2,MenuButton:W.j2,MenuItem:W.sN,MenuItems:W.sd,TransitionChild:z.x,TransitionRoot:z.Q,BellIcon:G.Dkj,MenuAlt2Icon:G.fVG,SearchIcon:Z.W1M,XIcon:G.b0D,Link:l.rU,Head:l.Fb},setup:function(){var e=(0,a.ref)(!1);return{navigation:$,userNavigation:q,sidebarOpen:e}}};const X=(0,n(3744).Z)(R,[["render",function(e,t,n,o,r,l){var s=(0,a.resolveComponent)("Head"),P=(0,a.resolveComponent)("DialogOverlay"),W=(0,a.resolveComponent)("TransitionChild"),z=(0,a.resolveComponent)("XIcon"),G=(0,a.resolveComponent)("Link"),Z=(0,a.resolveComponent)("Dialog"),$=(0,a.resolveComponent)("TransitionRoot"),q=(0,a.resolveComponent)("MenuAlt2Icon"),R=(0,a.resolveComponent)("SearchIcon"),X=(0,a.resolveComponent)("BellIcon"),Y=(0,a.resolveComponent)("MenuButton"),Q=(0,a.resolveComponent)("MenuItem"),J=(0,a.resolveComponent)("MenuItems"),K=(0,a.resolveComponent)("Menu");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(s,{title:"Media"}),(0,a.createElementVNode)("div",i,[(0,a.createVNode)($,{as:"template",show:o.sidebarOpen},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(Z,{as:"div",class:"fixed inset-0 flex z-40 md:hidden",onClose:t[1]||(t[1]=function(e){return o.sidebarOpen=!1})},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(W,{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(P,{class:"fixed inset-0 bg-gray-600 bg-opacity-75"})]})),_:1}),(0,a.createVNode)(W,{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",c,[(0,a.createVNode)(W,{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("button",{type:"button",class:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:t[0]||(t[0]=function(e){return o.sidebarOpen=!1})},[u,(0,a.createVNode)(z,{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]})),_:1}),f,(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("nav",p,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(o.navigation,(function(t){return(0,a.openBlock)(),(0,a.createBlock)(G,{key:t.name,href:t.href,class:(0,a.normalizeClass)([e.$page.url.startsWith(t.href)?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-600","group flex items-center px-2 py-2 text-base font-medium rounded-md"])},{default:(0,a.withCtx)((function(){return[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(t.icon),{class:"mr-4 flex-shrink-0 h-6 w-6 text-indigo-300","aria-hidden":"true"})),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(t.name),1)]})),_:2},1032,["href","class"])})),128))])])])]})),_:1}),h]})),_:1})]})),_:1},8,["show"]),(0,a.createElementVNode)("div",x,[(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("div",g,[w,(0,a.createElementVNode)("div",y,[(0,a.createElementVNode)("nav",b,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(o.navigation,(function(t){return(0,a.openBlock)(),(0,a.createBlock)(G,{key:t.name,href:t.href,class:(0,a.normalizeClass)([e.$page.url===t.href?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-600","group flex items-center px-2 py-2 text-sm font-medium rounded-md"])},{default:(0,a.withCtx)((function(){return[((0,a.openBlock)(),(0,a.createBlock)((0,a.resolveDynamicComponent)(t.icon),{class:"mr-3 flex-shrink-0 h-6 w-6 text-indigo-300","aria-hidden":"true"})),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(t.name),1)]})),_:2},1032,["href","class"])})),128))])])])])]),(0,a.createElementVNode)("div",N,[(0,a.createElementVNode)("div",V,[(0,a.createElementVNode)("button",{type:"button",class:"px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",onClick:t[2]||(t[2]=function(e){return o.sidebarOpen=!0})},[k,(0,a.createVNode)(q,{class:"h-6 w-6","aria-hidden":"true"})]),(0,a.createElementVNode)("div",E,[(0,a.createElementVNode)("div",C,[(0,a.createElementVNode)("form",B,[D,(0,a.createElementVNode)("div",M,[(0,a.createElementVNode)("div",I,[(0,a.createVNode)(R,{class:"h-5 w-5","aria-hidden":"true"})]),O])])]),(0,a.createElementVNode)("div",S,[(0,a.createElementVNode)("button",_,[L,(0,a.createVNode)(X,{class:"h-6 w-6","aria-hidden":"true"})]),(0,a.createVNode)(K,{as:"div",class:"ml-3 relative"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",null,[(0,a.createVNode)(Y,{class:"max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:(0,a.withCtx)((function(){return[T,U]})),_:1})]),(0,a.createVNode)(a.Transition,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(J,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:(0,a.withCtx)((function(){return[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(o.userNavigation,(function(e){return(0,a.openBlock)(),(0,a.createBlock)(Q,{key:e.name},{default:(0,a.withCtx)((function(t){var n=t.active;return[(0,a.createElementVNode)("a",{href:e.href,class:(0,a.normalizeClass)([n?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},(0,a.toDisplayString)(e.name),11,A)]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1})])])]),(0,a.createElementVNode)("main",H,[(0,a.createElementVNode)("div",F,[(0,a.createElementVNode)("div",j,[(0,a.renderSlot)(e.$slots,"default")])])])])])],64)}]]);var Y,Q,J=n(7384);function K(e,t,n,o,r,a,l){try{var s=e[a](l),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(o,r)}(0,l.yP)({resolve:(Y=r().mark((function e(t){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(4985)("./".concat(t));case 2:return(o=e.sent.default).layout=t.startsWith("Auth/")?J.Z:o.layout||X,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})),Q=function(){var e=this,t=arguments;return new Promise((function(n,o){var r=Y.apply(e,t);function a(e){K(r,n,o,a,l,"next",e)}function l(e){K(r,n,o,a,l,"throw",e)}a(void 0)}))},function(e){return Q.apply(this,arguments)}),setup:function(e){var t=e.el,n=e.App,o=e.props,r=e.plugin;(0,a.createApp)({render:function(){return(0,a.h)(n,o)}}).use(r).component("Head",l.Fb).component("Link",l.rU).mount(t)},title:function(e){return"".concat(e," - Media")}}),s.I.init({color:"blue",showSpinner:!0})},2584:()=>{},7384:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(821);const r={},a=(0,n(3744).Z)(r,[["render",function(e,t){return(0,o.renderSlot)(e.$slots,"default")}]])},4985:(e,t,n)=>{var o={"./Auth/Login":[7744,744],"./Auth/Login.vue":[7744,744],"./Dashboard/Home":[1471,471],"./Dashboard/Home.vue":[1471,471],"./Dashboard/Settings":[5421,421],"./Dashboard/Settings.vue":[5421,421],"./Dashboard/Users/Create":[8084,84],"./Dashboard/Users/Create.vue":[8084,84],"./Dashboard/Users/Index":[8255,898,255],"./Dashboard/Users/Index.vue":[8255,898,255],"./Error":[8969,969],"./Error.vue":[8969,969]};function r(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(r)))}r.keys=()=>Object.keys(o),r.id=4985,e.exports=r},4654:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[170,898],(()=>(t(2849),t(2584))));e.O()}]);