(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EsjQ:function(e,t,a){"use strict";var r=a("pVnL"),n=a.n(r),o=a("8OQS"),c=a.n(o),l=a("qKvR"),i=a("lSNA"),m=a.n(i),s=a("8hg0"),u=a("CjxU"),f=a("mf32");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var b=function(e){var t,a,r,n,o,c=e.variant,l=e.colorMode;switch(c){case"solid":return(t=e,a=t.theme.colors,r=t.color,n=a[r]&&a[r][500],o=Object(s.a)(n,.6),{light:{bg:Object(s.c)(r,500),color:"white"},dark:{bg:o,color:"whiteAlpha.800"}})[l];case"subtle":return function(e){var t=e.theme.colors,a=e.color,r=t[a]&&t[a][200],n=Object(s.b)(r)[300];return{light:{bg:Object(s.c)(a,100),color:Object(s.c)(a,800)},dark:{bg:n,color:Object(s.c)(a,200)}}}(e)[l];case"outline":return function(e){var t=e.theme.colors,a=e.color,r=t[a]&&t[a][200],n=Object(s.a)(r,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(t[a]&&t[a][500]),color:Object(s.c)(a,500)},dark:{boxShadow:"inset 0 0 0px 1px "+n,color:n}}}(e)[l];default:return{}}},p=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{theme:Object(u.b)(),colorMode:Object(f.b)().colorMode});return b(t)},g=a("BMxC"),E=a("q1tI"),O=a("D7Da"),h=Object(E.forwardRef)((function(e,t){var a=e.variantColor,r=void 0===a?"gray":a,o=e.variant,i=void 0===o?"subtle":o,m=c()(e,["variantColor","variant"]);Object(O.a)("Badge",r);var s=p({color:r,variant:i});return Object(l.d)(g.a,n()({ref:t,display:"inline-block",px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold",whiteSpace:"nowrap",verticalAlign:"middle"},s,m))}));h.displayName="Badge";t.a=h},K392:function(e,t,a){"use strict";a.r(t),a.d(t,"postListQuery",(function(){return E}));var r=a("q1tI"),n=a.n(r),o=a("BMxC"),c=a("eJLp"),l=a("vrFN"),i=a("9Dj+"),m=a("Yn+B"),s=a("Weur"),u=a("bQFp"),f=a("sK1y"),d=a("EsjQ"),b=a("Wbzz"),p=a("Tgqd"),g=function(e){var t=e.data,a=t.frontmatter,r=a.thumbnail,l=a.date,i=a.tags,g=a.author,E=a.title,O=t.fields.slug,h=t.timeToRead,j=t.excerpt;return n.a.createElement(o.a,null,n.a.createElement(m.a,{flexDir:{sm:"column",md:"row"},spacing:6},n.a.createElement(u.a,{src:r,rounded:10,w:{md:"300px",lg:"400px"}}),n.a.createElement(o.a,{ml:[0,0,4,4]},n.a.createElement(o.a,{mb:4},n.a.createElement(b.a,{to:"/post/"+O},n.a.createElement(f.a,{fontSize:{md:"xl",lg:"2xl"},fontWeight:800,mt:3},E)),n.a.createElement(o.a,{fontSize:"sm"},h," min",h>1?"s":""," read")),n.a.createElement(f.a,{fontSize:{sm:"sm",md:"lg"}},j),n.a.createElement(o.a,{d:"flex",alignItems:"center"},n.a.createElement(o.a,{flex:1},null==i?void 0:i.map((function(e){return n.a.createElement(d.a,{key:e,variantColor:"orange",mr:1},n.a.createElement(f.a,null,e))}))),n.a.createElement(m.a,{isInline:!0},n.a.createElement(c.a,{fontWeight:300},"Share ",n.a.createElement(o.a,{ml:2,as:p.g})),n.a.createElement(b.a,{to:"/post/"+O},n.a.createElement(c.a,{fontWeight:300},"Read ",n.a.createElement(o.a,{ml:2,as:p.a}))))),n.a.createElement(s.a,{fontSize:{xs:"xs",sm:"sm"}},n.a.createElement(o.a,{flex:1},n.a.createElement(f.a,null,n.a.createElement("i",null,"written on ",l)," by ",n.a.createElement("b",null,g)))))))},E="2969809120";t.default=function(e){var t=e.data,a=e.pageContext,r=a.currentPage,u=a.totalPages;return n.a.createElement(i.a,null,n.a.createElement(l.a,{title:"Home"}),n.a.createElement(o.a,{mt:16,p:[4,4,0,0]},n.a.createElement(m.a,{spacing:16},t.allMarkdownRemark.edges.map((function(e,t){return n.a.createElement(o.a,{key:t},n.a.createElement(g,{data:e.node}))})),n.a.createElement(s.a,{my:10},r>1&&n.a.createElement(b.a,{to:"/blog/page/"+(r-1)},n.a.createElement(c.a,null,"Newer posts")),n.a.createElement(o.a,{flex:1}),r<u&&n.a.createElement(b.a,{to:"/blog/page/"+(r+1)},n.a.createElement(c.a,null,"Older posts"))))))}},bQFp:function(e,t,a){"use strict";var r=a("pVnL"),n=a.n(r),o=a("8OQS"),c=a.n(o),l=a("qKvR"),i=a("q1tI"),m=a("BMxC"),s=Object(i.forwardRef)((function(e,t){var a=e.htmlWidth,r=e.htmlHeight,o=e.alt,i=c()(e,["htmlWidth","htmlHeight","alt"]);return Object(l.d)("img",n()({width:a,height:r,ref:t,alt:o},i))})),u=Object(i.forwardRef)((function(e,t){var a,r=e.src,o=e.fallbackSrc,u=e.onError,f=e.onLoad,d=e.ignoreFallback,b=c()(e,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),p=function(e){var t=e.src,a=e.onLoad,r=e.onError,n=Object(i.useRef)(!0),o=Object(i.useState)(!1),c=o[0],l=o[1];return Object(i.useEffect)((function(){if(t){var e=new window.Image;e.src=t,e.onload=function(e){n.current&&(l(!0),a&&a(e))},e.onError=function(e){n.current&&(l(!1),r&&r(e))}}}),[t,a,r]),Object(i.useEffect)((function(){return function(){n.current=!1}}),[]),c}({src:r,onLoad:f,onError:u});return a=d?{src:r,onLoad:f,onError:u}:{src:p?r:o},Object(l.d)(m.a,n()({as:s,ref:t},a,b))}));u.displayName="Image",t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-8162e46c6e104ad5772b.js.map