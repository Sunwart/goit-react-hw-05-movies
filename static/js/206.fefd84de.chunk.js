(self.webpackChunkreact_homework_5=self.webpackChunkreact_homework_5||[]).push([[206],{16:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r,i,s,o,a,c,p=t(2007),u=t.n(p),l=t(6871),d=t(5387),f=t(168),h=t(5751),x=t(501),m=h.ZP.div(r||(r=(0,f.Z)(["\n  padding: 16px;\n"]))),g=h.ZP.h1(i||(i=(0,f.Z)(["\n  font-size: 24px;\n  padding: 16px;\n  text-align: center;\n"]))),y=h.ZP.ul(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 32px;\n"]))),v=h.ZP.li(o||(o=(0,f.Z)(["\n  display: flex;\n  width: 280px;\n  height: 440px;\n  transition: transform 300ms linear;\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),_=h.ZP.img(a||(a=(0,f.Z)(["\n  width: 280px;\n  height: 400px;\n  border-radius: 4px;\n"]))),Z=(0,h.ZP)(x.rU)(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  text-align: center;\n  color: #073763;\n"]))),w=t(184);function b(e){var n=e.movies,t=e.title,r=(0,l.TH)();return(0,w.jsxs)(m,{children:[(0,w.jsx)(g,{children:t}),(0,w.jsx)(y,{children:n.map((function(e){var n=e.id,t=e.title,i=e.poster_path,s=e.release_date;return(0,w.jsx)(v,{children:(0,w.jsxs)(Z,{to:"/movies/".concat(n),state:{from:r},children:[(0,w.jsxs)("p",{children:[t," (",s.slice(0,4),")"]}),i?(0,w.jsx)(_,{src:"https://www.themoviedb.org/t/p/w500/".concat(i),alt:t}):(0,w.jsx)(d.r,{width:280})]})},n)}))})]})}v.propTypes={movies:u().arrayOf(u().shape({id:u().string.isRequired,title:u().string.isRequired,poster_path:u().string.isRequired,release_date:u().string.isRequired}).isRequired),title:u().string}},1206:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(2982),i=t(885),s=t(2791),o=t(9357),a=t(16),c=t(184);function p(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),t=n[0],p=n[1];return(0,s.useEffect)((function(){(0,o.Df)().then((function(e){p((0,r.Z)(e.data.results))}))}),[]),(0,c.jsx)("main",{children:(0,c.jsx)(a.Z,{movies:t,title:"Trending today:"})})}},888:function(e,n,t){"use strict";var r=t(9047);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=206.fefd84de.chunk.js.map