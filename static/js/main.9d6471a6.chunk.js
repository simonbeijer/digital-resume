(this["webpackJsonpdigital-resume"]=this["webpackJsonpdigital-resume"]||[]).push([[0],[,,,,function(e,i,t){},function(e,i,t){},,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var s=t(1),c=t.n(s),n=t(6),r=t.n(n),a=(t(11),t(2));t(12);function l(){var e=window;return{width:e.innerWidth,height:e.innerHeight,scroll:e.scrollY}}function d(){var e=Object(s.useState)(l()),i=Object(a.a)(e,2),t=i[0],c=i[1];return Object(s.useEffect)((function(){function e(){c(l())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}function o(){return{scroll:window.scrollY}}t(13);var j=t(0),m=function(e){var i=e.allHeightRefs,t=function(){var e=Object(s.useState)(o()),i=Object(a.a)(e,2),t=i[0],c=i[1];return Object(s.useEffect)((function(){function e(){c(o())}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),t}().scroll,c=d(),n=c.width,r=c.height,l=Object(s.useState)(""),m=Object(a.a)(l,2),b=m[0],h=m[1],g=Object(s.useState)(""),u=Object(a.a)(g,2),x=u[0],p=u[1];return Object(s.useEffect)((function(){console.log("SIDEBAR",i),t<r-r/4?h(r-t-16):t>r/2&&h(r/4),t>0&&t<r+i.profile/2?p("profile"):t>r+i.profile/2&&t<r+i.profile+i.education/2?p("education"):t>r+i.profile+i.education/2&&t<r+i.profile+i.education+i.abilitie/2?p("abilitie"):t>r+i.profile+i.education+i.abilitie/2&&t<r+i.profile+i.education+ +i.abilitie+i.project/2?p("project"):t>r+i.profile+i.education+ +i.abilitie+i.project/2&&p("contact")}),[r,b,t,h,i]),Object(j.jsx)(j.Fragment,{children:n>800&&Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"sideBar",style:{marginTop:b},children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"nav-1",children:Object(j.jsx)("a",{style:"profile"===x?{background:"rgb(112 175 142)"}:{background:"rgb(87, 88, 88)"},href:"#profile",children:"About"})}),Object(j.jsx)("li",{className:"nav-2",children:Object(j.jsx)("a",{style:"education"===x?{background:"rgb(112 175 142)"}:{background:"rgb(87, 88, 88)"},href:"#education",children:"Education"})}),Object(j.jsx)("li",{className:"nav-3",children:Object(j.jsx)("a",{style:"abilitie"===x?{background:"rgb(112 175 142)"}:{background:"rgb(87, 88, 88)"},href:"#abilities",children:"Abilities"})}),Object(j.jsx)("li",{className:"nav-4",children:Object(j.jsx)("a",{style:"project"===x?{background:"rgb(112 175 142)"}:{background:"rgb(87, 88, 88)"},href:"#projects",children:"Projects"})}),Object(j.jsx)("li",{className:"nav-5",children:Object(j.jsx)("a",{style:"contact"===x?{background:"rgb(112 175 142)"}:{background:"rgb(87, 88, 88)"},href:"#contact",children:"Contact"})})]})})})})},b=(t(15),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4nO1bTU8UQRAtXMEzWUVNOBBg/RcC/4FsAvqfzGoCnIlCDIk/gYQEPHkQwlEOHMAf4QXrxZ5kXap2vvproF7yLpPq7npvenp6Z6uJDIaqeMIcMNeYw0y55nKc8Sn8DXOP+Zt51xHeupwHbYQ/Y35i/slAUFMi95HTUgsvmN8zEOCLZ8znVcXPMk8ySNo3cUMrzYSPGSQbiqMy8VjwtGf+J3OL+bKKi4nwirnNvCBZA7RNXRj3lIZf6N+j0RXMMQ9I1rKrNcJ7XnrV4c53SXwBmCDNhBtS9gkDIRjcipBsKLwjWdOKFLyhBC9ESDQUsCZImtal4E0l2Ou2MjKQu6RpUwoeKsFdh6RpKAWaAUpwCGAvsTzBUPuLLA04EsY5CjSWGSDQDJACzQAlOATMAGEcMyDQWGaAQDNACjQDlOAQMAOEccyAQGOZAQLNACkwhAGLzG/M/sT1Kgb0XdvFljkkMwCJ/3J9nNP//82VGTDP/OGuXzOXWuSRxIBx8QXHTZhmwLj4gtfU3IToBuAz+pXSF/5kwdTWDOi7GKntFTX7RB/dgB7zs9JXYcKxcP2YdPF3rs9eg3ySPAJIdF/prwm/Mp82zCXZIujLhDbiSekz2muwrQltxZPSb9SNUFMTfIgnpe/oO8G6JvgST0r/SbbCVU3wKZ6UMZL9Figzwbd4UsZJ+mNIMyGEeBLGSW4AMGlCKPFEmRoAFCaEFA9kawDQo2bb2zrI2oAYMAMEigY8+iKpdSU459LYMtQqk9MKJbdjZBoI70nWJBZKYrrcCsEoN52LkKxvoDT+ku7rUUtlAa1YGoXHXTIB4g9J1rIzrSEeA61cHjMBtbevQ2XtAcgN01668yC0rZZ1MlIaPwR+qOLioz8yA+D7/VkGSfviKdU4NFUAbuFx6PqxOUz7Vgs4FkYcM7nJQFBVIles9qULXh3MuA5zPjr71uXY5e27ISr+AquyImGnCqN4AAAAAElFTkSuQmCC"),h=function(){var e=d(),i=e.width;e.height;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"HeroImg",children:[Object(j.jsxs)("div",{className:"col-pic-text",children:[Object(j.jsx)("h1",{className:"name",children:"Simon Beijer"}),Object(j.jsx)("div",{className:"name-border"}),Object(j.jsx)("h4",{children:"Digital resume"})]}),i>800?Object(j.jsx)("div",{className:"sideButton",children:Object(j.jsx)("a",{href:"#profile",children:Object(j.jsx)("img",{alt:"arrow",className:"arrow",src:b})})}):Object(j.jsx)("div",{className:"mobileSideButton",children:Object(j.jsx)("a",{href:"#profile",children:Object(j.jsx)("img",{alt:"arrow",className:"mobileArrow",src:b})})})]})})},g=(t(16),t.p+"static/media/sb2.4de3079e.png"),u=function(){var e=d().width;return Object(j.jsx)("div",{id:"profile",className:"padding-content",children:Object(j.jsxs)("div",{className:e<600?"col-1-div display-flex":"col-1-div display-flex max-width",children:[Object(j.jsx)("div",{style:{padding:"1rem"},children:Object(j.jsx)("h2",{children:"About"})}),Object(j.jsxs)("div",{className:"h\xf6na",children:[Object(j.jsx)("img",{alt:"simon",src:g}),Object(j.jsxs)("div",{style:{paddingLeft:"3rem"},children:[Object(j.jsx)("h3",{children:"Details"}),Object(j.jsx)("h4",{children:"Name:"}),Object(j.jsx)("p",{children:" Simon Beijer"}),Object(j.jsx)("h4",{children:"Age:"}),Object(j.jsx)("p",{children:"30"}),Object(j.jsx)("h4",{children:"Location:"}),Object(j.jsxs)("p",{children:["Gothenburg,",Object(j.jsx)("br",{})," Sweden, ",Object(j.jsx)("br",{}),"Earth"]})]})]}),Object(j.jsx)("div",{className:"about-div display-flex",style:{padding:"2rem"},children:Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("h3",{children:"What i do \ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb"}),Object(j.jsx)("p",{children:"Hi! I'm a Front-End Web Developer."}),Object(j.jsx)("p",{children:"My name is Simon I\u2019m 30 year old."}),Object(j.jsx)("p",{children:"Right now i'm studying at Medieinstitutet in Gothenburg."}),Object(j.jsx)("p",{children:"I also have 30 hp credits at Blekinge Institute of Technology."}),Object(j.jsx)("p",{children:"In my spare time i like to work out, sit at my computer and create music"}),Object(j.jsx)("p",{}),Object(j.jsx)("p",{children:"I enjoy creating alluring websites, and i'm always looking to improve."})]})})]})})},x=(t(4),function(e){var i=e.name,t=e.size,s=e.title,c=e.svg;return s?Object(j.jsx)("div",{className:"display-flex stripes",style:{flex:1,backgroundColor:"whitesmoke"},children:Object(j.jsx)("p",{style:{fontSize:"1.2rem",margin:"0.6rem 0rem ",fontWeight:"600",color:"#babbba"},children:i})}):Object(j.jsxs)("div",{className:"abilityDiv ",style:{width:"100%",margin:"1rem 0 1rem 0"},children:[Object(j.jsxs)("div",{style:{width:t,backgroundColor:"whitesmoke",display:"flex",alignItems:"center"},className:"skill-all ",children:[Object(j.jsx)("img",{style:{height:"18px",width:"18px",paddingLeft:"1rem"},alt:i,src:c}),Object(j.jsx)("p",{children:i})]}),Object(j.jsx)("div",{style:"100%"==t?{backgroundColor:"whitesmoke",flex:1}:{backgroundColor:"none"},children:Object(j.jsx)("p",{children:t})})]})}),p=t.p+"static/media/html5.c28bc668.svg",f=t.p+"static/media/css3.ee63f658.svg",A=t.p+"static/media/javascript.0015ae73.svg",O=t.p+"static/media/react.29c2058e.svg",v=t.p+"static/media/node.03a234e1.svg",w=t.p+"static/media/typescript.130a9110.svg",y=t.p+"static/media/php.0c5b2b55.svg",I=t.p+"static/media/sql.ec712bc9.svg",N=t.p+"static/media/mongo.c9d6ed2a.svg",k=t.p+"static/media/vue.5b80a4da.svg",S=t.p+"static/media/angular.95deeda9.svg",z=t.p+"static/media/redux.81a445bc.svg",E=t.p+"static/media/windows.e80da31f.svg",D=[{name:"SKILLS",size:"100%",title:!0},{name:"HTML5",svg:p,size:"100%"},{name:"CSS3",svg:f,size:"90%"},{name:"JavaScript",svg:A,size:"80%"},{name:"React",svg:O,size:"70%"},{name:"Node",svg:v,size:"70%"},{name:"TypeScript",svg:w,size:"70%"},{name:"ReactNative",svg:O,size:"60%"},{name:"PHP",svg:y,size:"60%"},{name:"SQL",svg:I,size:"60%"},{name:"MongoDB",svg:N,size:"60%"},{name:"Vue",svg:k,size:"50%"},{name:"Redux",svg:z,size:"50%"},{name:"Angular",svg:S,size:"40%"},{name:"TOOLS",size:"100%",title:!0},{name:"Mac",svg:t.p+"static/media/mac.84882c91.svg",size:"100%"},{name:"Windows",svg:E,size:"100%"},{name:"Github",svg:t.p+"static/media/github.30437b48.svg",size:"80%"},{name:"VScode",svg:t.p+"static/media/vscode.10bbb0e8.svg",size:"80%"},{name:"LANGUAGES & METHODS",size:"100%",title:!0},{name:"Swedish",svg:t.p+"static/media/svenska.34559b63.svg",size:"100%"},{name:"English",svg:t.p+"static/media/engelska.8c3d2102.svg",size:"90%"},{name:"Scrum",svg:t.p+"static/media/scrum.a19c1269.svg",size:"80%"}],B=function(){var e=d().width;return Object(j.jsx)("div",{id:"abilities",style:{width:"100%",backgroundColor:"grey"},children:Object(j.jsxs)("div",{style:{padding:"4rem 23%"},className:e<600?"col-3-div":"col-3-div max-width",children:[Object(j.jsx)("h2",{style:{textAlign:"center"},children:"Abilities"}),D.map((function(e){return Object(j.jsx)(x,{svg:e.svg,name:e.name,size:e.size,title:e.title})}))]})})},K=(t(17),function(){var e=d().width;return Object(j.jsx)("div",{id:"education",className:"padding-content",children:Object(j.jsx)("div",{className:e<600?" ":"max-width",children:Object(j.jsxs)("div",{style:{padding:"0 10% 2rem 10%"},className:"col-2-div display-flex",children:[Object(j.jsx)("h2",{children:"Education\u200d"}),Object(j.jsx)("div",{className:"bth",style:{padding:"2rem 1rem",maxWidth:"80%"},children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{style:{margin:"0 0 1rem 1rem",fontWeight:"600"},children:"2018 - 2019"}),Object(j.jsx)("li",{children:"Blekinge Institute of Technology, course package web programming and database"}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"This was a course with a mixture between Front-End and Back-End programming. The first two courses was Front-End with CSS3, HTML5, PHP, and SQL. Subjects including design and UX."})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:"The other two courses where Back-End with PHP, JavaScript, Node and SQL. Subjects including Object-Oriented-Programming, API's, frameworks and databases."}),Object(j.jsx)("li",{style:{padding:"1rem 0  0 0.6rem"},children:Object(j.jsx)("a",{without:!0,rel:"noreferrer",target:"_blank",href:"https://dbwebb.se/utbildning/webbprogrammering-och-databaser-30hp",children:"BTH.se"})})]})]})}),Object(j.jsx)("div",{className:"medieinstitutet",style:{padding:"3rem 1rem",maxWidth:"80%"},children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{style:{margin:"0 0 1rem 1rem",fontWeight:"600"},children:"2019-2021"}),Object(j.jsx)("li",{children:"Medieinstitutet Gothenburg, Front-End developing"}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"This is a two-year program with main focus on Front-End development. It also include LIA when you get to use your skill on a real workplace"})}),Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"The first course starts of with HTML5, CSS3 and JavaScript. Then on to more programming with TypeScript, Node.js, React. Also includes Back-End,UX, dynamic and agile web development."})}),Object(j.jsx)("li",{style:{padding:"1rem 0  0 0.6rem"},children:Object(j.jsx)("a",{without:!0,rel:"noreferrer",target:"_blank",href:"https://medieinstitutet.se/utbildningar/front-end-developer",children:"Medieinstitutet.se"})})]})})]})})})}),q=t.p+"static/media/FizzBuzz.8422cc3e.png",C=t.p+"static/media/harmoni.def67a7e.png",M=(t(5),function(e){var i=e.alt,t=e.text,s=e.link,c=e.img,n=e.visit;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"project",style:{paddingBottom:"2rem",textDecoration:"none"},children:[Object(j.jsx)("img",{src:c,alt:i}),Object(j.jsx)("p",{children:t}),Object(j.jsx)("a",{style:{textDecoration:"none",color:"rgb(137 184 138)"},rel:"noreferrer",target:"_blank",href:s,children:n})]})})}),T=t.p+"static/media/mli.7c800ee3.png",F=t.p+"static/media/scorify.0f385bec.png",Q=function(){var e=d().width;return Object(j.jsx)("div",{id:"projects",className:e<600?"grid-col-4":"grid-col-4 padding-content",children:Object(j.jsxs)("div",{className:"col-4-div display-flex max-width",style:{padding:"3rem 0 2rem 0"},children:[Object(j.jsx)("h2",{children:"Projects"}),Object(j.jsxs)("div",{className:"display-flex",style:e>1e3?{flexDirection:"row",justifyContent:"space-around",width:"100%"}:{flexDirection:"column"},children:[Object(j.jsx)(M,{visit:"Live link",className:"projektDiv",alt:"Mlilures",text:"MLI lures project made for a friend.",link:"https://mlilures.se/",img:T}),Object(j.jsx)(M,{visit:"Live link",className:"projektDiv",alt:"Sj\xe4lsharmoni",text:"Sj\xe4lsharmoni project for a healing business",link:"https://www.xn--sjlsharmoni-m8a.se/",img:C})]}),Object(j.jsxs)("div",{className:"display-flex",style:e>1e3?{flexDirection:"row",justifyContent:"space-around",width:"100%"}:{flexDirection:"column",width:"100%"},children:[Object(j.jsx)(M,{visit:"GitHub link",className:"projektDiv",alt:"Scorify",text:"Scorify is a final project with ReactNative",link:"https://github.com/FThelin/mitt-lag---frontend",img:F}),Object(j.jsx)(M,{visit:"Live link",className:"projektDiv",alt:"Fizzbuzz",text:"Fizzbuzz work test made in about 5 hours",link:"https://simonbeijer.github.io/fizzbuzz/",img:q})]})]})})},G=(t(18),function(){var e=d().width;return Object(j.jsx)("div",{id:"contact",className:"grid-col-5 ",children:Object(j.jsxs)("div",{className:e<900?"col-5-div display-flex":"col-5-div display-flex max-width",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"Contact"})}),Object(j.jsxs)("div",{className:"footer-div",style:e>900?{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}:{flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se",rel:"noreferrer",target:"_blank",className:"display-flex footer-divs linkedin",style:e>900?{marginRight:"3rem",marginBottom:"0rem",flexDirection:"column",width:"33.3%"}:{width:"60%",marginBottom:"1rem",marginRight:"0rem"},children:Object(j.jsx)("p",{style:{textAlign:"center"},children:"Add me on LinkedIn"})}),Object(j.jsx)("a",{className:"display-flex footer-divs gmail",href:"mailto:simon.beijer@gmail.com",rel:"noreferrer",target:"_blank",style:e>900?{flexDirection:"column",width:"33.3%"}:{width:"60%",flexDirection:"column",marginRight:"0rem"},children:Object(j.jsx)("p",{style:{textAlign:"center"},children:"Send me an email"})}),Object(j.jsx)("a",{href:"https://github.com/simonbeijer",rel:"noreferrer",target:"_blank",className:"display-flex footer-divs github",style:e>900?{marginLeft:"3rem",marginTop:"0rem",width:"33.3%",flexDirection:"column"}:{width:"60%",marginTop:"1rem",flexDirection:"column",marginLeft:"0rem"},children:Object(j.jsx)("p",{style:{textAlign:"center"},children:"Visit my Github"})})]}),Object(j.jsxs)("p",{style:{margin:"5rem 0 2rem 0",flexDirection:"column"},className:"display-flex",children:["\xa9 Simon Beijer 2021",Object(j.jsx)("img",{alt:"hooli",style:{height:"2rem"},src:"data:image/png;base64,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"})]})]})})});var L=function(){var e=Object(s.useRef)(),i=Object(s.useState)({profile:0,education:0,abilitie:0,project:0,contact:0}),t=Object(a.a)(i,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){e&&n({profile:e.current.childNodes[2].offsetHeight,education:e.current.childNodes[3].offsetHeight,abilitie:e.current.childNodes[4].offsetHeight,project:e.current.childNodes[5].offsetHeight,contact:e.current.childNodes[6].offsetHeight})}),[]),Object(j.jsxs)("div",{ref:e,className:"App",children:[Object(j.jsx)(m,{allHeightRefs:c}),Object(j.jsx)(h,{}),Object(j.jsx)(u,{}),Object(j.jsx)(K,{}),Object(j.jsx)(B,{}),Object(j.jsx)(Q,{}),Object(j.jsx)(G,{})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(i){var t=i.getCLS,s=i.getFID,c=i.getFCP,n=i.getLCP,r=i.getTTFB;t(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),W()}],[[19,1,2]]]);
//# sourceMappingURL=main.9d6471a6.chunk.js.map