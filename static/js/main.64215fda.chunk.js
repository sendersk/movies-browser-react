(this["webpackJsonpmovies-browser-react"]=this["webpackJsonpmovies-browser-react"]||[]).push([[0],{21:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o=t(0),s=t.n(o),b=t(8),d=t.n(b),j=t(13),p=t(12),f=t(2),l=t(3),h=l.b.div(r||(r=Object(f.a)(["\n  background-color: #373b69;\n  border-radius: 3px;\n  box-shadow: 3px 3px 5px rgba(0,0,0,0.1);\n  overflow: hidden;\n  margin: 1rem;\n  width: 22%;\n"]))),u=l.b.img(a||(a=Object(f.a)(["\n  max-width: 100%;\n"]))),x=l.b.div(c||(c=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n"]))),O=l.b.h3(i||(i=Object(f.a)(["\n  margin: 0;\n"]))),g=t(1);var m,v=function(e){var n=e.title,t=e.poster_path,r=(e.overview,e.vote_average);return Object(g.jsxs)(h,{children:[Object(g.jsx)(u,{src:"https://image.tmdb.org/t/p/w1280"+t,alt:n}),Object(g.jsxs)(x,{children:[Object(g.jsx)(O,{children:n}),Object(g.jsx)("span",{children:r})]})]})},w=l.b.div(m||(m=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"])));var y,k=function(){var e=Object(o.useState)([]),n=Object(p.a)(e,2),t=n[0],r=n[1];return Object(o.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f271630baa852ad3c9f1b5da3a4d53aa&page=1").then((function(e){return e.json()})).then((function(e){console.log(e),r(e.results)}))}),[]),Object(g.jsx)(w,{children:t.length>0&&t.map((function(e){return Object(g.jsx)(v,Object(j.a)({},e),e.id)}))})},_=Object(l.a)(y||(y=Object(f.a)(['\n    * {\n        box-sizing: border-box;\n    }\n\n    ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        background-color: #22254b;\n        color: #fff;\n        font-family: "Poppins", sans-serif;\n        margin: 0;\n    }\n'])));d.a.render(Object(g.jsxs)(s.a.StrictMode,{children:[Object(g.jsx)(_,{}),Object(g.jsx)(k,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.64215fda.chunk.js.map