"use strict";(self.webpackChunkarynass_front=self.webpackChunkarynass_front||[]).push([[207],{745:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var l=a(7313),r=a(8450),n=a(6417),i=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"panel ",children:(0,n.jsxs)("div",{className:"bio-graph-heading",children:[(0,n.jsx)("h1",{className:"text-center justify-content-center ",children:"Your Information"}),"                                "]})})})},c=a(3709),t=a(8923),d=function(){var e=(0,c.v9)((function(e){return e.auth})).user;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"profile-nav col-md-3",children:(0,n.jsxs)("div",{className:"panel",children:[(0,n.jsxs)("div",{className:"user-heading round",children:[(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{src:t,alt:""})}),(0,n.jsx)("h1",{children:e.username}),(0,n.jsx)("p",{children:e.email})]}),(0,n.jsx)("div",{className:"card mt-3",children:(0,n.jsxs)("div",{className:"nav flex-column nav-pills justify-content-center text-center",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical",children:[(0,n.jsxs)("button",{className:"nav-link mb-2 active",id:"v-pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-home",type:"button",role:"tab","aria-controls":"v-pills-home","aria-selected":"true",children:[(0,n.jsx)("i",{className:"fa fa-user"}),"\xa0 Profile"]}),(0,n.jsxs)("button",{className:"nav-link mb-2",id:"v-pills-profile-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-profile",type:"button",role:"tab","aria-controls":"v-pills-profile","aria-selected":"false",children:[(0,n.jsx)("i",{className:"fa fa-edit"}),"\xa0 Edit Profile"]}),(0,n.jsxs)("button",{className:"nav-link",id:"v-pills-messages-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-messages",type:"button",role:"tab","aria-controls":"v-pills-messages","aria-selected":"false",children:[(0,n.jsx)("i",{className:"fa fa-calendar"}),"\xa0 Orders"]})]})})]})})})},o=a(885),m=a(3321),h=function(){var e=(0,l.useState)(null),s=(0,o.Z)(e,2),a=s[0],r=s[1],i=(0,c.v9)((function(e){return e.auth})).user;return(0,l.useEffect)((function(){m.Z.getUserById(i.id).then((function(e){return r(e)}))}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"tab-pane fade show active",id:"v-pills-home",role:"tabpanel","aria-labelledby":"v-pills-home-tab",tabindex:"0",children:(0,n.jsxs)("div",{className:"container py-3",children:[(0,n.jsxs)("div",{className:"row ",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Full Name"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.username})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Email"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.email})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Phone"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.user_infos[0].phone})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Country"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.user_infos[0].country})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Address"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.user_infos[0].address})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Ctity"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.user_infos[0].city})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-3",children:(0,n.jsx)("h6",{className:"mb-0",children:"Zip"})}),a&&(0,n.jsx)("div",{className:"col-sm-9 text-secondary",children:a.user_infos[0].zip_code})]}),(0,n.jsx)("hr",{})]})})})},u=a(4942),x=a(1413),j=a(7890),f=a(3560),p=a(4285),v=a(3287),N=a(5766),b=function(){(0,j.UO)().id;var e,s,a=(0,l.useState)(null),r=(0,o.Z)(a,2),i=(r[0],r[1],(0,p.Z)().setAuth),t=(0,j.s0)(),d=(0,c.I0)(),m=(null===(e=(0,j.TH)().state)||void 0===e||null===(s=e.from)||void 0===s?void 0:s.pathname)||"/profile",h=(0,c.v9)((function(e){return e.auth})),b=h.user,y=(h.isLoading,h.isError),g=h.isSuccess,w=h.message,Z=(0,l.useState)({username:b.username,email:b.email,fullname:b.fullname,phone:b.phone,country:b.country,city:b.city,address:b.address,zip:b.zip}),q=(0,o.Z)(Z,2),k=q[0],C=q[1],E=k.username,P=k.email,A=k.fullname,F=k.phone,_=k.country,z=k.city,U=k.address,V=k.zip;(0,l.useEffect)((function(){y&&(console.log("error ",y),f.Am.error(w)),g&&(i({user:b}),t(m,{replace:!0}),f.Am.success("user Update successufully")),d((0,v.mc)())}),[b,y,g,w,t,d]);var S=function(e){C((function(s){return(0,x.Z)((0,x.Z)({},s),{},(0,u.Z)({},e.target.name,e.target.value))}))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"tab-pane mt-3 fade",id:"v-pills-profile",role:"tabpanel","aria-labelledby":"v-pills-profile-tab",tabindex:"0",children:(0,n.jsxs)("form",{className:"needs-validation",children:[(0,n.jsxs)("div",{className:"row g-3",children:[(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"firstName ",className:"form-label fw-bolder",children:["Full Name",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"",required:!0,name:"fullname",value:A,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid first name is required."})]}),(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"lastName",className:"form-label fw-bolder",children:["Username",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",placeholder:"enter username",name:"username",value:E,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid last name is required."})]}),(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"email",className:"form-label fw-bolder",children:["Email",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter Your Email",name:"email",value:P,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid first name is required."})]}),(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"lastName",className:"form-label fw-bolder",children:["Country",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"",required:!0,name:"country",value:_,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid last name is required."})]}),(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"lastName",className:"form-label fw-bolder",children:["City",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"",required:!0,name:"city",value:z,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid last name is required."})]}),(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"lastName",className:"form-label fw-bolder",children:["zip",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"",required:!0,name:"zip",value:V,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid last name is required."})]}),(0,n.jsxs)("div",{className:"col-12",children:[(0,n.jsxs)("label",{for:"address",className:"form-label fw-bolder",children:["Address ",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",id:"address",placeholder:"1234 Main St",required:!0,name:"address",value:U,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Please enter your shipping address."})]}),(0,n.jsxs)("div",{className:"col-sm-6",children:[(0,n.jsxs)("label",{for:"lastName",className:"form-label fw-bolder",children:["Phone",(0,n.jsx)("span",{className:"require",children:"\xa0*"})]}),(0,n.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"",required:!0,name:"phone",value:F,onChange:S}),(0,n.jsx)("div",{className:"invalid-feedback",children:"Valid last name is required."})]})]}),(0,n.jsx)("hr",{className:"my-4"}),(0,n.jsx)("button",{className:"w-100 btn btn-outline-dark btn-lg",type:"submit",onClick:function(e){e.preventDefault();var s={username:E,email:P,fullname:A,phone:F,country:_,city:z,address:U,zip:V};N.Z.update(s,b.id)},children:"Continue"})]})})})},y=a(1624),g=function(){var e=(0,l.useState)(null),s=(0,o.Z)(e,2),a=s[0],r=s[1],i=(0,c.v9)((function(e){return e.auth})).user;return(0,l.useEffect)((function(){y.Z.getOrdersByUserId(i.id).then((function(e){r(e)}))}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"tab-pane fade",id:"v-pills-messages",role:"tabpanel","aria-labelledby":"v-pills-messages-tab",tabindex:"0",children:(0,n.jsx)("div",{className:"bd-example",children:(0,n.jsxs)("table",{className:"table table-sm table-bordered",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"#"}),(0,n.jsx)("th",{scope:"col",children:"Total"}),(0,n.jsx)("th",{scope:"col",children:"Paided"}),(0,n.jsx)("th",{scope:"col",children:"Delivered"}),(0,n.jsx)("th",{scope:"col",children:"Created At"})]})}),a&&0!==a.length?a.map((function(e,s){return(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.id}),(0,n.jsx)("td",{children:e.total}),e.isPaid?(0,n.jsx)("td",{className:"px-3 text-success",children:"Paid"}):(0,n.jsx)("td",{className:" px-3 text-danger",children:"Not Paid"}),e.isDelivered?(0,n.jsx)("td",{className:"px-3 text-success",children:"Delivered"}):(0,n.jsx)("td",{className:"px-3 text-danger",children:"Not Delivered"}),(0,n.jsx)("td",{children:e.createdAt}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"/arynass-frontend/#/cart/order/".concat(e.id),className:"text-danger",children:"Check it"})})]},s)})})):(0,n.jsx)("h3",{children:"You have no order yet"})]})})})})},w=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{children:(0,n.jsx)("section",{id:"profile",children:(0,n.jsx)("div",{className:"container bootstrap snippets bootdey mt-5 py-5",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(d,{}),(0,n.jsx)("div",{className:"profile-info col-md-9",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(i,{}),(0,n.jsxs)("div",{className:"tab-content",id:"v-pills-tabContent",children:[(0,n.jsx)(h,{}),(0,n.jsx)(b,{}),(0,n.jsx)(g,{})]})]})})]})})})})})}},3321:function(e,s,a){var l=a(4165),r=a(5861),n=a(1881),i=a.n(n),c="https://arynasscosmitics.arynasscos.info",t=function(){var e=(0,r.Z)((0,l.Z)().mark((function e(s){var a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(c+"/users/".concat(s));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,l.Z)().mark((function e(s,a){var r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().post(c+"/address/create/".concat(s),a);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}(),o={getUserById:t,createUserAddress:d};s.Z=o},4285:function(e,s,a){var l=a(7313),r=a(6422);s.Z=function(){return(0,l.useContext)(r.Z)}}}]);