"use strict";(self.webpackChunkreact_homework_5=self.webpackChunkreact_homework_5||[]).push([[835],{8835:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var i,s,t=r(6871),o=r(885),c=r(2791),a=r(9357),x=r(168),d=r(5751),l=d.ZP.div(i||(i=(0,x.Z)(["\n  display: flex;\n  gap: 32px;\n  padding: 32px 48px;\n"]))),p=d.ZP.img(s||(s=(0,x.Z)(["\n  max-height: 400px;\n  border-radius: 4px;\n"]))),h=r(5387),j=r(184);function u(n){var e=n.movieID,r=(0,c.useState)({}),i=(0,o.Z)(r,2),s=i[0],t=i[1],x=(0,c.useState)(!0),d=(0,o.Z)(x,2),u=d[0],v=d[1];(0,c.useEffect)((function(){(0,a.vq)(e).then((function(n){t(n.data),v(!1)})).catch((function(n){v(!1),t({})}))}),[e]);var f=s.poster_path,m=s.title,g=s.release_date,Z=s.vote_average,w=s.overview,b=s.genres;return(0,j.jsx)(l,{children:!0===u?(0,j.jsx)("p",{children:"Loading ... .. .."}):(0,j.jsxs)(j.Fragment,{children:[f?(0,j.jsx)(p,{src:"https://www.themoviedb.org/t/p/w500/".concat(f),alt:m}):(0,j.jsx)(h.r,{width:280}),(0,j.jsxs)("div",{children:[m&&g&&(0,j.jsxs)("h1",{children:[m," (",g.slice(0,4),")"]}),Z&&(0,j.jsxs)("p",{children:["User score: ",10*Z,"%"]}),w&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsxs)("p",{children:[" ",w," "]})]}),b&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:b.map((function(n){return n.name})).join(", ")})]})]})]})})}var v,f,m,g,Z,w,b=r(9135),k=r(501),P=d.ZP.div(v||(v=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  background-color: #073763;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),_=d.ZP.ul(f||(f=(0,x.Z)(["\n  display: flex;\n  padding: 16px;\n  gap: 16px;\n  margin: 0;\n"]))),y=(0,d.ZP)(k.OL)(m||(m=(0,x.Z)(["\n  color: inherit;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: color 300ms linear;\n  padding: 16px;\n\n  :hover {\n    color: #3d85c6;\n  }\n\n  &.active {\n    color: #3d85c6;\n  }\n"]))),F=d.ZP.h2(g||(g=(0,x.Z)(["\n  margin: 10px 16px 8px 16px;\n"]))),C=(0,d.ZP)(k.rU)(Z||(Z=(0,x.Z)(["\n  text-decoration: none;\n  text-transform: uppercase;\n  display: flex;\n  margin: 16px 0 0 48px;\n  color: #3d85c6;\n"]))),I=(0,d.ZP)(b.x_l)(w||(w=(0,x.Z)(["\n  fill: #3d85c6;\n  margin-right: 8px;\n  display: inline-block;\n"])));function O(){var n,e=(0,t.UO)().movieId,r=(0,t.TH)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(C,{to:(null===r||void 0===r||null===(n=r.state)||void 0===n?void 0:n.from)||"/",children:[(0,j.jsx)(I,{}),"Go back"]}),(0,j.jsx)(u,{movieID:e}),(0,j.jsxs)(P,{children:[(0,j.jsx)(F,{children:"Additional information:"}),(0,j.jsxs)(_,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(y,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(y,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,j.jsx)(t.j3,{})]})}}}]);
//# sourceMappingURL=835.d5af2b8b.chunk.js.map