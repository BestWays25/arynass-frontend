"use strict";(self.webpackChunkarynass_front=self.webpackChunkarynass_front||[]).push([[465],{7512:function(e,r,t){t(7313);var n=t(6699),s=t(8831),a=(t(9608),t(6417));r.Z=function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{id:"cardpro",children:(0,a.jsxs)("div",{className:"product-grid",children:[(0,a.jsxs)("div",{className:"product-image",children:[(0,a.jsx)("a",{href:"/products/".concat(e.id),className:"image",children:(0,a.jsx)(s.LazyLoadImage,{effect:"blur",className:"img-1",src:e.image})}),(0,a.jsx)("span",{className:"product-discount-label",children:"New"}),(0,a.jsx)("ul",{className:"product-links",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/products/".concat(e.id),children:(0,a.jsx)("i",{className:"fa fa-heart"})})})}),(0,a.jsx)("a",{href:"/products/".concat(e.id),className:"add-to-cart",children:"Add to Cart"})]}),(0,a.jsxs)("div",{className:"product-content",children:[(0,a.jsx)("h3",{className:"title",children:(0,a.jsx)("a",{href:"#",children:e.name})}),(0,a.jsxs)("div",{className:"price",children:["$",e.price]}),(0,a.jsx)(n.Z,{id:e.id})]})]})})})}},6699:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(885),s=t(7313),a=t(2146),c=t(6417),i=function(e){var r=(0,s.useState)([]),t=(0,n.Z)(r,2),i=t[0],d=t[1];(0,s.useEffect)((function(){a.Z.getOneProductRating(e.id).then((function(e){return d(e[0])})).catch((function(e){return d(e.response.data)}))}),[]),console.log(i);var l=i.avg/5*100,o="".concat(10*Math.round(l/10),"%");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"stars-outer",children:(0,c.jsx)("div",{className:"stars-inner",style:{position:"absolute",top:0,left:0,"white-space":"nowrap",overflow:"hidden",width:"".concat(o)}})}),i?(0,c.jsxs)("span",{className:"number-rating",children:[" ",i.count," reviews"]}):(0,c.jsx)(c.Fragment,{})]})}},8540:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var n=t(885),s=t(7313),a=(t(7512),t(6699)),c=t(8831),i=(t(9608),t(6417)),d=function(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{id:"cardpro",children:(0,i.jsxs)("div",{className:"product-grid",children:[(0,i.jsxs)("div",{className:"product-image",children:[(0,i.jsx)("a",{href:"/products/".concat(e.id),className:"image",children:(0,i.jsx)(c.LazyLoadImage,{effect:"blur",className:"img-1",src:e.image})}),(0,i.jsx)("span",{className:"product-discount-label",children:0===e.quantity?(0,i.jsx)("span",{className:"float-end fw-bold fs-6 text-danger",children:"Out of Stock"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"float-end fw-bold fs-6 text-success",children:"In Stock"})})}),(0,i.jsx)("ul",{className:"product-links",children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/products/".concat(e.id),children:(0,i.jsx)("i",{className:"fa fa-heart"})})})}),(0,i.jsx)("a",{href:"/products/".concat(e.id),className:"add-to-cart",children:"Add to Cart"})]}),(0,i.jsxs)("div",{className:"product-content",children:[(0,i.jsx)("h3",{className:"title",children:(0,i.jsx)("a",{href:"#",children:e.name})}),(0,i.jsxs)("div",{className:"price",children:["$",e.price]}),(0,i.jsx)(a.Z,{id:e.id})]})]})})})},l=t(8450),o=t(6770),u=(t(8193),function(){var e=(0,s.useState)([]),r=(0,n.Z)(e,2),t=r[0],a=r[1],c=(0,s.useState)(""),u=(0,n.Z)(c,2),h=u[0],f=u[1];return(0,s.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,s.useEffect)((function(){o.Z.getProducts().then((function(e){a(e)})).catch((function(e){return console.log("error : fetching data failed",e)}))}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)("div",{id:"searchpage",className:"container py-5 mt-5",children:[(0,i.jsx)("header",{className:"blog-header py-3",children:(0,i.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,i.jsx)("div",{className:"col-4 pt-1",children:(0,i.jsxs)("h4",{className:"brand-title lh-1",children:["ARYNASS",(0,i.jsx)("h6",{className:"fst-italic brand-title-text",children:" COSMITICS"})]})}),(0,i.jsxs)("div",{className:"col-6 text-center d-flex",children:[(0,i.jsx)("input",{className:"form-control form-control-dark w-100 ms-2",placeholder:"Search your product","aria-label":"search",type:"search",name:"search",id:"search-form",value:h,onChange:function(e){return f(e.target.value)}}),(0,i.jsx)("button",{className:"btn bg-trasparent ms-2",href:"#","aria-label":"Search",children:(0,i.jsx)("i",{className:"fa fa-search"})})]})]})}),(0,i.jsxs)("div",{className:"container py-3",children:[(0,i.jsx)("div",{className:"row text-center justify-content-center",children:(0,i.jsx)("hr",{className:""})}),(0,i.jsxs)("div",{className:"d-flex mt-4 justify-content-center py-1 mb-2",children:[(0,i.jsx)("div",{className:"",children:(0,i.jsx)("button",{className:"btn btn-outline-secondary ",href:"#",children:"All Products"})}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)("button",{className:"btn btn-outline-secondary ms-3",href:"#",children:"New Products"})}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)("button",{className:"btn btn-outline-secondary ms-3",href:"#",children:"Most Popular"})})]}),(0,i.jsx)("hr",{className:"lines"})]})]}),(0,i.jsx)("div",{className:"container mb-5",children:(0,i.jsx)("div",{className:"row",children:0!==t.length?t&&t.filter((function(e){return""===h||e.name.toLowerCase().includes(h.toLowerCase())?e:void 0})).map((function(e,r){return(0,i.jsx)("div",{className:"col-md-3 col-sm-6",children:(0,i.jsx)(d,{id:e.id,name:e.name,description:e.description,price:e.price,image:e.image,quantity:e.quantity},r)})})):(0,i.jsx)(i.Fragment,{})})})]})})})},2146:function(e,r,t){var n=t(4165),s=t(5861),a=t(1881),c=t.n(a),i=t(9565),d="https://arynasscosmitics.arynasscos.info",l=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get(d+"/products/rating/avg");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get(d+"/products/".concat(r,"/rating"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(r){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:(0,i.Z)()},e.next=3,c().post(d+"/products/create/rating",r,t);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get(d+"/products/rating/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get(d+"/products/reviews/all");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m={getProductRating:l,getOneProductRating:o,createRating:u,getProductReviews:h,getAllReviews:f};r.Z=m},9608:function(){},8193:function(){}}]);