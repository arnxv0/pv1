(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(A,e,t){},39:function(A,e,t){},43:function(A,e,t){},51:function(A,e,t){},54:function(A,e,t){},55:function(A,e,t){},56:function(A,e,t){"use strict";t.r(e);var i=t(2),r=t(19),o=t.n(r),n=(t(38),t(39),t(23)),a=t(1);var s=function(A){let{timing:e=80,children:t}=A;const[r,o]=Object(i.useState)(!1),s=Object(n.useSpring)({display:"inline-block",backfaceVisibility:"hidden",transform:r?"scale(1.5, 0.7)":"scale(1, 1)",transition:`transform ${e}ms`,config:{tension:300,friction:10}});return Object(i.useEffect)((()=>{if(!r)return;const A=window.setTimeout((()=>{o(!1)}),e);return()=>{window.clearTimeout(A)}}),[r,e]),Object(a.jsx)(n.animated.span,{onMouseEnter:()=>{o(!0)},style:s,children:t})},g=t(3);const c=g.c.span`
  color: ${A=>A.theme.primaryFontColor};
  display: inline-block;
  margin-right: 20px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`;var d=function(A){function e(A){window.open(A,"_blank")}return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"footer-container",children:[Object(a.jsx)(c,{onClick:()=>e("https://github.com/arnxv0"),children:Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"fab fa-github fa-2x"})})}),Object(a.jsx)(c,{onClick:()=>e("https://www.linkedin.com/in/arnavdewan"),children:Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"fab fa-linkedin fa-2x"})})}),Object(a.jsx)(c,{onClick:()=>e("mailto:contact@arnavdewan.dev"),children:Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"far fa-envelope fa-2x"})})})]})})},p=(t(43),t.p+"static/media/arnav.5b38bf77.jpg");const l=g.c.span`
  font-size: 1.3rem;
  font-family: "Montserrat";
  color: ${A=>A.theme.secondaryFontColor};
  opacity: 100%;
`,m=A=>{let{words:e=[]}=A;const[t,r]=Object(i.useState)(0),[o,n]=Object(i.useState)(0),[s,g]=Object(i.useState)(!0),[c,d]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{if(t===e.length)return;if(o===e[t].length+1&&t!==e.length-1&&!c)return void d(!0);if(0===o&&c)return d(!1),void r((A=>A+1));const A=setTimeout((()=>{n((A=>A+(c?-1:1)))}),Math.max(c?75:o===e[t].length?200:100,parseInt(350*Math.random())));return()=>clearTimeout(A)}),[o,t,c]),Object(i.useEffect)((()=>{const A=setTimeout((()=>{g((A=>!A))}),500);return()=>clearTimeout(A)}),[s]),Object(a.jsxs)(l,{children:[`${e[t].substring(0,o)}${s?"|":" "}`," "]})};function h(){const{innerWidth:A,innerHeight:e}=window;return{width:A,height:e}}function x(){const[A,e]=Object(i.useState)(h());return Object(i.useEffect)((()=>{function A(){e(h())}return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)}),[]),A}var B=t(10);const b=g.c.div`
  position: relative;
`,C=g.c.span`
  color: ${A=>A.theme.highEmFc};
  font-style: italic;
  position: absolute;
  width: 100%;
  margin-top: 130px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  z-index: 5;
  transition: transform 0.4s;

  @media (max-width: 950px) {
    margin-top: 85px;
    font-size: 1.5rem;
  }
`,w=g.c.span`
  text-align: center;
  color: white;
  position: absolute;
  margin-top: 140px;
  margin-left: 50px;
  width: 300px;
  font-size: 1rem;
  z-index: 5;
  transition: opacity 0.4s;

  @media (max-width: 950px) {
    visibility: hidden;
    z-index: -999;
  }
`,u=g.c.img`
  height: 300px;
  width: 400px;
  border-radius: 20px;
  filter: brightness(75%);
  transition-property: scale box-shadow filter;
  transition-duration: 0.3s;

  @media (max-width: 950px) {
    height: 200px;
    width: 280px;
  }
`,E=g.c.span`
  text-align: center;
  color: white;
  position: absolute;
  bottom: 10px;
  width: 100%;
  font-size: 0.8rem;
  z-index: 5;
  transition: opacity 0.4s;

  @media (max-width: 950px) {
    visibility: hidden;
    z-index: -999;
  }
`;var f=function(A){let{title:e,imgUrl:t,cardDescription:r,pageUrl:o="/"}=A;const n=x().width,[s,g]=Object(i.useState)(!1),c={opacity:s?"100%":"0%"},d={transform:s&&n>950?"translateY(-2rem)":"none"},p={opacity:s?"100%":"0%"},l={filter:s&&n>950?"brightness(65%)":"brightness(60%)",position:s&&n>950?"relative":"static",transform:s&&n>950?"scale(1.05)":"",boxShadow:s&&n>950?"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px":"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"};return Object(a.jsx)(B.b,{to:o,children:Object(a.jsxs)(b,{onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1)},children:[Object(a.jsx)(C,{style:d,children:e}),Object(a.jsx)(w,{style:c,children:r}),Object(a.jsx)(E,{style:p,children:"(Click to read more)"}),Object(a.jsx)(u,{style:l,src:t,alt:""})]})})},Q=t.p+"static/media/libraryCardImage.19f1aa02.jpg",v=(t.p,t.p+"static/media/hacktoberFest.a0ded661.jpg"),I=t.p+"static/media/googleCloud.de9d8f64.png",j=(t.p,t.p+"static/media/dscWowImg.d909a4e9.jpg"),k=t.p+"static/media/dscWebathon.0e697bd1.jpg",O=t.p+"static/media/aightMicroblogging.11fc4203.jpg",F=t.p+"static/media/aightEventsImg.dbc8d91c.jpg";const U=g.d`
    0% {
        margin: 5px 0 5px 0;
        transform: scaleX(0);
        -moz-transform: scaleX(0);
        -webkit-transform: scaleX(0);
        transform-origin: bottom left;
    } 
    50%{
        margin: 0 0 0 0;
        transform: scaleX(1);
        -moz-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom left;
    }
    51%{
        margin: 0 0 0 0;
        transform: scaleX(1);
        -moz-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom right;
    }
    65% {
        margin: 0 0 0 0;
    }

    100% {
        margin: 10px 0 10px 0;
        transform: scaleX(0);
        -moz-transform: scaleX(0);
        -webkit-transform: scaleX(0);
        transform-origin: bottom right;
    }
`,V=g.c.div`
  position: relative;
  height: 365px;
  width: 310px;
  background-color: rgba(256, 256, 256, 0.05);
  border-radius: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  /* backdrop-filter: blur(5px); */

  &:hover::before {
    animation-name: ${U};
    animation-duration: 0.4s;
    animation-iteration-count: 1;
  }

  &::before {
    border-radius: 20px;
    transform: scaleX(0);
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: rgb(255, 255, 255, 0.1);
    z-index: -1;
  }

  @media (max-width: 950px) {
    width: 280px;
    height: 370px;
  }
`,Y=g.c.p`
  width: 270px;
  margin: 10px auto 0 auto;
  text-align: left;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${A=>A.theme.highEmFc};

  @media (max-width: 950px) {
    width: 240px;
  }
`,J=g.c.p`
  text-align: left;
  width: 270px;
  margin: 7px auto 0 auto;
  font-size: 0.95rem;
  color: ${A=>A.theme.mediumEmFc};

  @media (max-width: 950px) {
    width: 240px;
  }
`,X=g.c.img`
  width: 280px;
  height: 180px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;

  @media (max-width: 950px) {
    margin-top: 20px;
    width: 240px;
    height: 180px;
  }
`;var S=function(A){let{title:e,imgUrl:t,cardDescription:i}=A;return x().width,Object(a.jsxs)(V,{children:[Object(a.jsx)(X,{style:{},src:t,alt:""}),Object(a.jsx)(Y,{style:{},children:e}),Object(a.jsx)(J,{style:{},children:i})]})},T=t.p+"static/media/appSprint.fc957e4a.png",K=(t.p,t(13));const D=g.c.div`
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: ${A=>A.theme.projectsBackground};
  /* background-color: ${A=>Object(K.a)(A.theme.secondaryFontColor,.25)}; */
  /* backdrop-filter: blur(9px); */
  transition: 0.3s;
  overflow-y: auto;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${A=>A.theme.projectsBackground};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${A=>A.theme.scrollBar};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${A=>A.theme.scrollBarHover};
  }

  @media (max-width: 950px) {
    overflow-x: hidden;
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`,N=g.c.div`
  position: absolute;
  top: 5%;
  right: 4%;
  height: 200%;

  @media (max-width: 950px) {
    top: 3%;
    right: 20px;
  }
`,y=g.c.button`
  position: sticky;
  position: -webkit-sticky;
  top: 5%;
  color: ${A=>A.theme.secondaryFontColor};
  background-color: ${A=>A.theme.lowEmFc};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  border-style: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    position: static;
    height: 50px;
    width: 50px;
  }
`,M=g.c.p`
  margin: 5% 0 0 19%;
  font-family: "Montserrat";
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  font-weight: bolder;

  @media (max-width: 950px) {
    margin: 7% 0 30px 10%;
    font-size: 2rem;
  }
`,W=g.c.div`
  margin-right: 10%;
  margin-left: 19%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */

  @media (max-width: 950px) {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
  }
`,z=g.c.div`
  margin: 20px 40px 30px 0;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
    margin: 0 10px 20px 0;
  }
`,q=[{title:"Library App",imgUrl:Q,cardDescription:"Librarians and students can lend/borrow book with just a click.",pageUrl:"/library-app"},{title:"Events website",imgUrl:F,cardDescription:"Helping students discover events in colleges around them.",pageUrl:"/events-website"},{title:"Microblogging App",imgUrl:O,cardDescription:"Users can post micro-blogs and look at other people's blogs.",pageUrl:"/microblogging-app"}],P=[{title:"Hacktober Fest 2020",imgUrl:v,cardDescription:"Participated and received t-shit and stickers for contributing to 4 open source projects"},{title:"Google Cloud",imgUrl:I,cardDescription:"Took various training session on Google Cloud Platform and received t-shirt and stickers"},{title:"DSC WoW Top 20",imgUrl:j,cardDescription:"Placed Top 20 in Googles DSC Wow and received t-shirt and stickers"},{title:"Webathon'20 winner",imgUrl:k,cardDescription:"Won first place in a web development contest held by Developer Students Club by Google from PES University"},{title:"AppSprint'20 winner",imgUrl:T,cardDescription:"Won the best development award in a microblogging app making contest held by PES University"}],L=g.c.p`
  margin: 4% 0 10px 19%;
  font-family: "Montserrat";
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  font-weight: bolder;

  @media (max-width: 950px) {
    margin: 7% 0 30px 15%;
    font-size: 2rem;
  }
`,R=g.c.div`
  margin-right: 10%;
  margin-left: 19%;
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
  }
`,G=g.c.div`
  margin: 20px 40px 30px 0;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    font-size: 1rem;
    justify-content: center;
    margin: 0 10px 30px 0;
  }
`,H=g.c.button`
  margin: 20px 0 0 19%;
  color: ${A=>A.theme.secondaryFontColor};
  background-color: ${A=>A.theme.resumeButtonBackground};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${A=>A.theme.secondaryFontColor};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`;var Z=function(A){let e,{peakProjects:t,showProjects:i,hideShowProjects:r}=A,o=x().width;return e=o<950?{transform:i?"translateX(100%)":t?"translateX(3.2em)":"none"}:{transform:i?"translateX(85%)":t?"translateX(3.2em)":"none"},Object(a.jsxs)(D,{style:e,children:[Object(a.jsx)(M,{children:o>950?"What I have been working on":"Projects"}),Object(a.jsxs)(W,{children:[" ",q.map((function(A,e){return Object(a.jsx)(z,{children:Object(a.jsx)(f,{title:A.title,imgUrl:A.imgUrl,cardDescription:A.cardDescription,pageUrl:A.pageUrl},e)},e)}))]}),Object(a.jsx)(B.b,{style:{textDecoration:"none"},to:"/more-projects",children:Object(a.jsxs)(H,{children:["More projects \xa0",Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"fas fa-chevron-right"})})]})}),Object(a.jsx)(N,{children:Object(a.jsx)(y,{onClick:r,children:Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:o>950?"fas fa-chevron-left fa-3x":"fas fa-chevron-left fa-2x"})})})}),Object(a.jsx)(L,{children:o>950?"Some achievements worth mentioning":"Achievements"}),Object(a.jsx)(R,{children:P.map((function(A,e){return Object(a.jsx)(G,{children:Object(a.jsx)(S,{title:A.title,imgUrl:A.imgUrl,cardDescription:A.cardDescription},e)},e)}))})]})};const $=g.d`
    0% {
        transform: scaleX(0);
        -moz-transform: scaleX(0);
        -webkit-transform: scaleX(0);
        transform-origin: bottom left;
    } 
    50%{
        transform: scaleX(1);
        -moz-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom left;
    }
    51%{
        transform: scaleX(1);
        -moz-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom right;
    }
    100% {
        transform: scaleX(0);
        -moz-transform: scaleX(0);
        -webkit-transform: scaleX(0);
        transform-origin: bottom right;
    }
`,_=g.c.div`
  position: relative;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;

  &:hover::before {
    animation-name: ${$};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
  }

  &::before {
    border-radius: 10px;
    transform: scaleX(0);
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: rgb(255, 255, 255, 0.1);
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    height: 30px;
    padding: 5px;
  }
`,AA=g.c.img`
  height: 30px;
  width: 30px;
  object-fit: cover;

  @media (max-width: 950px) {
    height: 30px;
    width: 30px;
  }
`,eA=g.c.span`
  color: ${A=>A.theme.resumeTabMediumEmFc};
  font-size: 1.1rem;
  font-weight: bold;
  margin: auto 10px auto 10px;

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;var tA=function(A){let{name:e,icon:t}=A;return Object(a.jsxs)(_,{children:[Object(a.jsx)(s,{children:Object(a.jsx)(AA,{src:t,alt:e+" Icon"})}),Object(a.jsx)(eA,{children:e})]})},iA=(t(48),t.p+"static/media/androidIcon.30963519.png"),rA=t.p+"static/media/mongodbIcon.41634622.png",oA=t.p+"static/media/nodeIcon.57f1722a.png",nA=t.p+"static/media/cIcon.2f704f90.png",aA=t.p+"static/media/firebaseIcon.8896e25c.png",sA=t.p+"static/media/googelCloudIcon.fcf50521.png",gA=t.p+"static/media/flaskIcon.2d927f4b.png";const cA=g.c.div`
  position: absolute;
  top: 0;
  right: -100%;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: ${A=>A.theme.resumeBackground};
  transition: 0.3s;
  overflow-y: auto;
  overflow-x: hidden;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${A=>A.theme.resumeBackground};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${A=>A.theme.scrollBar};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${A=>A.theme.scrollBarHover};
  }

  @media (max-width: 950px) {
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`,dA=g.c.div`
  position: absolute;
  top: 5%;
  left: 4%;
  height: 80%;

  @media (max-width: 950px) {
    top: 3%;
    left: 20px;
    height: 0;
  }
`,pA=g.c.button`
  position: sticky;
  position: -webkit-sticky;
  top: 5%;
  color: ${A=>A.theme.primaryFontColor};
  background-color: ${A=>A.theme.lowEmFc};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  border-style: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    position: static;
    height: 50px;
    width: 50px;
  }
`,lA=g.c.p`
  margin: 5% 0 0 15%;
  font-family: "Montserrat";
  color: ${A=>A.theme.resumeTabHighEmFc};
  font-size: 2rem;
  font-weight: bolder;

  @media (max-width: 950px) {
    margin: 7% 0 0 0;
    font-size: 2rem;
    text-align: center;
  }
`,mA=g.c.div`
  margin: 10px 0 0 15%;
  width: 65%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    margin: 30px 0 0 30px;
    font-size: 1rem;
    width: 90%;
    justify-content: center;
  }
`,hA=g.c.div`
  margin: 20px 30px 20px 0;

  @media (max-width: 950px) {
    margin: 10px 30px 10px 0;
  }
`,xA=[{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAFYCAYAAAAWbORAAAAABmJLR0QA/wD/AP+gvaeTAAAV7ElEQVR4nO3dfZxWc/7H8fd3KmoqlCKWVNp0J+UufsSOKKEI5XapB5V1t1gi8ZO1NqtalH6rJGJDblK0Cku5CdVSSvc3IpWKSvd3M9/fH2c9IjPNdc2czznXueb1fDx67G478z2fYl5zzfec6xwJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAzF/cA6fBz5OOeAUC8XOPkdCsn7gEAIFsRWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjJSPewCUPd9+J33yhd36DepIxxxlt76VnbukZSuldRukTVuC/71ug7RfZalSRalyJWn/qlJuRalmdakCX70Zj39EiNwnX0idb3Vm69/WRRrQ05utX1reSwu/lqbOkqbOdJoxT/rqW2nFGqmgILU1KpSX6h0uNawrHVVXalDHq2UzqUl9ydn91SJNBBaIwI6d0sQp0ph3nV6fKK1YXbr1du6S5n8V/AoEVa1RTWp9knRRG692raQquaU7DkqHwAKGFi+ThoxyGj5a+mG9/fG+XyeNGi+NGu9UuZJ02bnSdZd4HdfE/tj4NU5yAQa+XCidf4NTg3ZO/YZHE9c9bd4qDXtFOr6T09ndnT6eHv0MZR2BBUK0fJXU5W6nYzoGWwGp7qlae+sj6ZQrnC79k9Oy7+KepuwgsEBInnlNatrBacSYzAnrnkaNlxqf5/Tky3FPUjYQWKCU1m+UOtzg1LW30/qNcU9TvE1bpO73OXW8yWnDprinyW4EFiiFRd9IJ1/m9MbEuCdJ35h3g9kXL4t7kuxFYIESmjpLOulSp3lL4p6k5OYslk653Gnm/LgnyU4EFiiBz2ZLba91sVwdELZVP0h5XZw+mx33JNmHwAJpmrNYanNtMvZbU7X2R+mcHk4Lv457kuxCYIE0/LhR6niT09of454kfKvXSm27Oa1ZG/ck2YPAAinyXrq6l9OCpXFPYuerb6XLbnfalR/3JNmBwAIpemaMNPa9uKew9+6n0j2PcceYMBBYIAXfr5N69i870ek3XJo0Ne4pko/AAim4c4DT9+viniI6BQVS195OGzfHPUmyEVigGF+vkJ57Pe4pord0udRncNl51W6BwALFeHCI085dcU8Rj4HPSTPmxT1FchFYYC/Wbyybr15/0vKY4BE1KBluuA3sxajx0rbt0R+32n7SQQdK+1eRduUHoV+xOrpZ9qsi9b3V67pLpBxehpUYgQX24rnXo9uDPPVY6eoLvM5oGTxva0+78qV5S6QPP5OeH+c0eXpwbW7YOuRJg+/1OqxW+GuXNQQWKMLaH6VPZtgfp1E9aeifvU49du8fV76c1PS3wa8/XOo1c77Uc4DTWx+FM0etGtLA3l6d2oazHtiDBYr0/jT7G2d3aitNe7n4uBam2VHShKFeI/r6Uu2TOiddc5E0ZxxxDRuBBYowaart9kCbU6SR/bwqVyrdOledL01+3qtm9fQ/t35t6d3hXsMe8Kq2X+nmwK8RWKAIMxfYrX1AVen5fl4VQtqka95QentY6pEsX066q5s0c4xXXstwZsCvEVigCJY3dbmrm9eBB4S7ZvOG0quPeZUrt/ePO75psC3R91avSlyCZYrAAoXYtEVaucZm7Zyc4Md6C3ktpfuuL/zSgsqVpAE9vT59wat5Q5vj45cILFCI1T/YXAIlSS0aSYfUtFlbknr3kE5u/svfa3OKNGus121dVOwrXISHwAKF2LjFbu0jC7nGNUw5OdKQPsH+brX9gv8+YahX3cNsj4tf4zpYoBCbDQNbo5rd2j85uoE0oq/XmSerRFcXIBwEFihEvuH1r5sM4/1zl50bzXFQNLYIgEJU2tdubZ55VXYQWKAQuaW8+H9vZi6wO4GGzEJggUJUybVbe/kqafpcu/WROQgsUIhDatpezvTEKJ4UUBYQWKAQFcpLh9SwW3/4aJ4UUBYQWKAIdX5jt3Z+vnTJbY4TXlmOwAJFaN7Idv0FS6V2PYhsNiOwQBFOPNr+VP9ns6VjL3L6eLr5oRADAgsUoWWzaI7z7Sopr4tTr0ecNm+N5piIBoEFitCgTnBD6ijs2Ck99KTU6FynF/5l/yQFRIPAAntxQetoj7fsO+nyO5yadnB6dmxwMgzJRWCBvbi4bTxvuZq7RLq6l1Pj9k5PjJK2bItlDJQSgQX2omWz4P6tcVmwVPrD/U5HtHa6d6DTitXxzYL0EVigGDdcHv+NA75fJ/3lCal2a6f21zv9+5O4J0IqCCxQjN93kOoZ3yQ7Vfn50rhJ0lnXOB17kdPQl9g+yGQEFijGPhWKfs5VnKbPlXr0capzptP9g7kNYiYisEAKrmwfPI01E61ZK/UZ7HTEmU7X/9lp4ddxT4SfEFggBTk50rMPeVU0vBF3aW3dJv3jRanhuezTZgoCC6SoUT2pzw2Zt1Wwp4KC3fu0ra50em9K3BOVXQQWSEPPa6QLz4p7itR99LnUuqtTXhenyZ/HPU3ZQ2CBNDgXPK212VFxT5KeSVOlU690uvgWp8XL4p6m7CCwQJqq5EpvPenVoE7ck6Tv1belJu2d7hzAjWWiQGCBEqhVQ3p3uNeRGXJ9bDq275Aefkpq2sFpwkdxT5PdCCxQQofVkiY/73VChl6+VZyly6V23Z2u7uW0cXPc02QnAguUwsEHShNHeJ1/RtyTlNyzY6UWFzpNnRX3JNmHwAKlVLmS9Nogr7/9yau84ZNoLS1eJp16hdOQl+KeJLsQWCAEzgWXcE0c4TPmvgXp2rlLuq6P0x//6rgPbUgILBCiU4+VZo7xuvGKILpJNPCfUufbnHbsjHuS5COwQMgqV5IG9faaOsrr9BPinqZkRr8jdbzJadv2uCdJNgILGDm+qTRphNerj/nInu0Vpjc/kK66y/F8sFIgsICxC8+S5ozzGtLHq2b1uKdJz8tvSfcMTOheRwYgsEAEKpSXuneWFo4PrjY49KC4J0pd36HSqPFxT5FMBBaI0P5Vg6sNvnrHa0Rfryb1454oNdf1cfpmZdxTJA+BBWKwTwXpqvOlWWO9Xh/s1eq4uCfau/UbpWvvZasgXQQWiJFzUvs86YPnvKaP9ureWcqtGPdUhXvnY2nse3FPkSwEFsgQzRtKQ/p4rXjf69FeXkccGvdEv9azv9POXXFPkRwEFsgw+1eV/vh7adFbXi8/6nVy87gn2m3BUk54pYPAAhmqfDnp4jbSx897ffKCV6e2UrkMuNfBwOfYi00VgQUS4KRjpJce8Zo7zqtLx+Cyr7hM+1KaMjO+4ycJgQUS5LdHSE8/6DX/zSC0OTF9Bb80gVexqSCwQALVPSwI7bSX4rnEa/Q70R8ziQgskGDHNpbefza46mDffaI77tLl0pzF0R0vqQgskHDOBVcdTB7pVfuQ6I77yYzojpVUBBbIEsc1kd57Jrr7HEydxT5scQgsIud93BNkryMPl955yqtSBO8G+2y2/TGSjsAicpu2xD1Bdmt8pNSrm/13sa++NT9E4hFYRI5HRNvreY3MtwrW/sg/y+IQ2DLuu++jP2Y2flEuWSZd2dNlzKvzffeROp5pf5xl39kfI8kIbBm1fqN0wwNOdc9ykV9us26D7cmRnAjPvRQUSINGSs0ucBo5Tro3g+7+f/4Z9tsE6zeYHyLRCGwZ9PJbUsNznP7vBWnb9uBmylGeePpyoe36lXOj+cN89a105jVONz/otHlr8HsD/yl9+kUkhy9W4yPtj7GVhyLuFYEtQ+YukfK6OHW+1WnVD7t//8PPgldhUZk533b9isYX3BcUSI89JzXt4DRxyq//vx59nLbvsJ0hFTWr2z86fMtW2/WTjsCWAVu2SXc/6tS8o9OkqYV/zB39nKZ9aT/LyjX2+765lezWXvi1dPpVTrf0ddqyrfCPmTk/M7YK9qkgVcm1PcaufNv1k47AZrk3JkpN2jv1HSrt2Fn0x+3YKXW6xWn5Ktt5Xnnbdn1JqmwQ2IIC6ZERUvOOTh99XvzHD3hGen9a+HOkY/sO+0viqla2XT/pCGyW+maldMGNTh1ucFq6PLXP+XqF1OZapx/W2801/FX7V3a/OTjc9RYslU67yum2vxX9qnVPBQXSFT2dVq4Jd5Z0fPe9/Zs6rF8hJx2BzTI7d0kPPyU1Ps+V6PlJcxZLrbs6k8tvJk6RZswLf909hfV+/Px8acDTUvMLnSan8Kp1T8tXSRfeHN9+bElmThevYPeOwGaRD/4jtbjQ6c4Bu89ql8QX86WWl7hQb6q8aYt0/QPR7EuGEdh5S6RWv3e6vZ/T1hRftRbm0y+Ck15xvD149L/t/76juu9BUhHYLLB6rdTlbqffXe00e1E4a65cI7W60umuv6f+Y3FRtmwL9nfnLQlntr058IDS/diany/1Gy61uMiFdreoEWOk6+6PNrKLvpHGTbI9Rq0aUrX9bI+RdAQ2wQoKpCEvBde0jhgT/n7bzl3S34YFJ8keH1myd2BN/lw66VKnCR+FO1tRWjQq+efOXSKdcoVTz/5O20K+vnPoS1L3+5wKCsJdtyg3P2i/NdGwnu362SDGJ/ugNKbPlf5wf7g/xhdl6XLppgedej8mXXiWlHei1+knqNDHSu/KD95IMGWm9MxrLvKL7k84Ov3P2fXfvdY+g8MP688Ne0VasdppRF+vGtXsjvPAP6TxH9qt/5Mo3siQdPFfrJcGP0fc6E5BEGqfEe8Zail48F6NasGv7TukDZuCt+BaRqo4owf6tN+DP26S1P766L4UfnOwNPLh4JtUmLyX/jpUuuexaP4sLz/qdXGbSA71C65xcrqVmEElAvtz/Z8O3hyA3ZyTVrzvVatGep/nfXBSL4o3WvwkJ0fqcoH055t8KJeVLfpG6va/Rb+RJGzlyklrJvtY9mCTFFj2YBPq+svCv94z6U5oqrTjKgVhfvj2aL93FxRIw0dL9do4Xd0rCGN+Cd4V9f604Hrbph2ii6sU/F1zgqt47MEmVG5Fqd/tXpffkZhv5ubOb13ySP7uROnSc6QX3wxxoBTs2Ck9O1Z6dqxTzepSq+Okk47xql9bOqxWELEcJ23eGmy/rNsgzVkkTZnpNHWWtGJ1tPP+5LJz+WEyFYn66mSL4Je8l87oGu0rl0w2+w1fqhMvK9dIjc5z+nFjeDNlo0oVpeWT4tkekNgiQESck556wPN2RUknHVP6s9qH1JT638H38OJ0asv2QKoIbMLVO1zq35Mo3HxlOH8H114stc8LZamsVK6c1PMa/n1LFYHNAj06S5e0i3uK+Bx6kHRx2/DWG/ZAdI++TpquHaUm9eOeIjkIbJYY9oBXozL6zppe3bwqhHi69qDq0iuPeu1TIbw1s0HlStL9N/LqNR0ENktUyZXe+IdXzepxTxKtRvWk6y4Nf92Tm0uDehOTn+vfk1f26SKwWeTIw6U3/s8rt2Lck0RnwJ1e5cvZrN29s3R3d5u1k6ZDnnTdJXFPkTwENsu0bCa9Nsir4r5xT2KvS0epXSvbY/zlj17XXGR7jExX+5BgCwrpI7BZqM0p0pgsj2zDetLj99h/0TsnDb3fq1sn80NlpAMPkCY8Wfa2nsJCYLNU21OlCUO9Dqga9yThq1pZenGAN3n2VmFycqQhfbxuuSqa42WK3IrBllNZPXkaBgKbxU4/Qfrwn16H14p7kvBU3Fca87jXMUdFe1znpEfu8hrU227PN5MceID07+FeJzePe5JkI7BZrulvpf+84nVGy7gnKb0K5aUX+sf7Z7nxCulfT9jezzVudQ+TJo8krmEgsGXAQdWlt4d59eoevBMniartJ40f6nVB67gnCfa4v3jN68yT454kfB3ypCkveh1VN+5JskNibpogcbOXMHw8Xera22nB0rgnSV2DOtLrgzPvi76gQBr8gnTvwOTfICa3ovT3u7x6dI57kuJxsxdkrP9pIc0Y7dW7hzL+KoOcHOmmK6TPX828uEq755s7zuvy84J92qRxLrhN49x/JSOuSZOofyV4BRuupculOwc4vfK2InsYX6qObhBchnXa8XFPkroZ86T7Bjm9MSn8B1BaOO146aHbkrfXmqRXsIkZVCKwVmYvkh560unFN4PnfcWpQZ3g/e6dzw5eISbR9LnS4yOdXnhT2lrKR56HrXw56aI20p+6ep3QNO5pSobAGiGwtr5ZGTzG5OnRTt+sjO645ctJ55wmdevk1a5Vck/E7WndBum516WXJzh9PCPenxKObypddo7XJe2S/6ghAmuEwEajoECaNE0aN8npjYnBA/XCViVXan2SdHYrrw55yvqbiKxcI419T3rvU6cP/iOt+sH2eNX3Dx6Dk3ei19mtpPq1bY8XJQJrhMDGY8ky6dMvpKmznD6bLS1eprQeGX7wgdLhh0jNG0otGnm1aCQd10Rl+naA85YEWwmzFjrNWSTNXyp9+520aUt661TJDZ7dVb92cM1zswZeRzcInu6Q1C2W4hBYIwQ2c2zbHpwk27BZ2rBJ2rJN2r7jvw/py5H2rxK8ijr0IGnffeKeNjk2b90d2nUbgt9btyE4239A1d3/+VNYo3q7cCYhsEYILIAkBTZLf4gAgPgRWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABwAiBBQAjBBYAjBBYADBCYAHACIEFACMEFgCMEFgAMEJgAcAIgQUAIwQWAIwQWAAwQmABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQrf4fPX1FJfKB808AAAAASUVORK5CYII=",name:"Javacript"},{icon:"data:image/png;base64,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",name:"HTML"},{icon:"data:image/png;base64,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",name:"CSS"},{icon:"data:image/png;base64,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",name:"React js"},{icon:"data:image/png;base64,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",name:"Flutter"},{icon:iA,name:"Android java"},{icon:rA,name:"MongoDB"},{icon:oA,name:"Node js"},{icon:"data:image/png;base64,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",name:"Python"},{icon:nA,name:"C / C++"},{icon:aA,name:"Firebase"},{icon:gA,name:"Flask"},{icon:sA,name:"Google Cloud"}],BA=g.c.button`
  margin: 20px 0 0 15%;
  color: ${A=>A.theme.secondaryFontColor};
  background-color: ${A=>A.theme.resumeButtonBackground};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${A=>A.theme.secondaryFontColor};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`,bA=g.c.p`
  margin: 4% 0 0 15%;
  font-family: "Montserrat";
  color: ${A=>A.theme.resumeTabHighEmFc};
  font-size: 2rem;
  font-weight: bolder;

  @media (max-width: 950px) {
    margin: 15% 0 0 0;
    font-size: 2rem;
    text-align: center;
  }
`,CA=g.c.div`
  margin: 20px 0 5% 15%;
  width: 40%;

  @media (max-width: 950px) {
    margin: 30px auto 5% auto;
    width: 75%;
    justify-content: center;
  }
`,wA=g.c.input`
  box-sizing: border-box;
  font-size: 1.3rem;
  padding: 15px 20px;
  border-style: none;
  border-radius: 10px;
  background: none;
  font-family: "Montserrat";
  width: 100%;
  color: ${A=>A.theme.resumeTabMediumEmFc};
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  border: solid 1px transparent;
  transition: border 0.3s ease-out;

  &:focus {
    outline: none;
    border: solid 1px ${A=>Object(K.a)(A.theme.secondaryFontColor,.6)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out,
      border 0.3s ease-out;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`,uA=g.c.input`
  box-sizing: border-box;
  font-family: "Montserrat";
  margin-top: 20px;
  font-size: 1.3rem;
  padding: 15px 20px;
  border-style: none;
  border-radius: 10px;
  background: none;
  width: 100%;
  color: ${A=>A.theme.resumeTabMediumEmFc};
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  border: solid 1px transparent;
  transition: border 0.3s ease-out;

  &:focus {
    outline: none;
    border: solid 1px ${A=>Object(K.a)(A.theme.secondaryFontColor,.6)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out,
      border 0.3s ease-out;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`,EA=g.c.textarea`
  box-sizing: border-box;
  font-family: "Montserrat";
  margin-top: 20px;
  font-size: 1.3rem;
  padding: 15px 20px;
  border-style: none;
  border-radius: 10px;
  background: none;
  width: 100%;
  height: 200px;
  resize: none;
  color: ${A=>A.theme.resumeTabMediumEmFc};
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  border: solid 1px transparent;
  transition: border 0.3s ease-out;

  &:focus {
    outline: none;
    border: solid 1px ${A=>Object(K.a)(A.theme.secondaryFontColor,.6)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out,
      border 0.3s ease-out;
  }

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`,fA=g.c.button`
  margin: 10px auto 0 auto;
  color: ${A=>A.theme.secondaryFontColor};
  background-color: ${A=>A.theme.resumeButtonBackground};
  padding: 15px 15px;
  width: 200px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${A=>A.theme.secondaryFontColor};
  display: block;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 10px auto 0 auto;
    padding: 10px 10px;
    width: 150px;
    font-size: 1.1rem;
  }
`;g.c.div`
  margin: 10px 0 0 15%;
  width: 65%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    margin: 30px 0 0 30px;
    font-size: 1rem;
    width: 90%;
    justify-content: center;
  }
`,g.c.img``,g.c.p`
  color: white;
`;function QA(A,e){return Object(a.jsx)(hA,{children:Object(a.jsx)(tA,{name:A.name,icon:A.icon},e)},e)}var vA=function(A){let{peakResume:e,showResume:t,hideShowResume:r}=A,o=x().width;const[n,g]=Object(i.useState)({name:"",email:"",message:""}),[c,d]=Object(i.useState)(o>950?"Let's brainstorm together":"Contact me");function p(A){const{value:e,name:t}=A.target;g((A=>({...A,[t]:e})))}let l;return l=o<950?{transform:t?"translateX(-100%)":e?"translateX(-3.2em)":"none"}:{transform:t?"translateX(-85%)":e?"translateX(-3.2em)":"none"},Object(a.jsxs)(cA,{style:l,children:[Object(a.jsx)(dA,{children:Object(a.jsx)(pA,{onClick:r,children:Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:o>950?"fas fa-chevron-right fa-3x":"fas fa-chevron-right fa-2x"})})})}),Object(a.jsx)(lA,{children:"My skills"}),Object(a.jsx)(mA,{children:xA.map(QA)}),Object(a.jsx)(BA,{onClick:function(){window.open("https://www.linkedin.com/in/arnavdewan","_blank")},children:"Show Resume"}),Object(a.jsx)(bA,{children:c}),Object(a.jsxs)(CA,{children:[Object(a.jsx)(wA,{placeholder:"Name",name:"name",type:"text",value:n.name,onChange:p}),Object(a.jsx)(uA,{placeholder:"Email",name:"email",type:"email",value:n.email,onChange:p}),Object(a.jsx)(EA,{placeholder:"Message",name:"message",type:"text",value:n.message,onChange:p}),Object(a.jsx)(fA,{onClick:function(){if(""===n.message||""===n.email||""===n.name)d(o>950?"Can't leave any field empty!":"Fill all fields");else{const A="contact@arnavdewan.dev",e=`Message from ${n.name}`,t=`Name: ${n.name}\nEmail: ${n.email}\nMessage: ${n.message}`,i=`mailto:${A}?subject=${encodeURIComponent(e)}&body=${encodeURIComponent(t)}`;window.open(i,"_blank"),d(o>950?"I'll get back to you soon :)":"Message sent"),g({name:"",email:"",message:""})}},children:"Send"})]})]})},IA=t(20);const jA=g.c.span`
  font-family: "Montserrat";
  color: ${A=>A.theme.primaryFontColor};
  font-size: 6rem;
  font-weight: bolder;
`,kA=g.c.span`
  font-family: "Montserrat";
  color: ${A=>A.theme.secondaryFontColor};
  font-size: 5rem;
  font-weight: bolder;
`,OA=g.c.p`
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
  color: ${A=>A.theme.secondaryFontColor};
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  top: 35px;
`,FA=g.c.p`
  text-align: left;
  color: ${A=>A.theme.primaryFontColor};
  width: 400px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  top: 200px;
  margin-left: 0;
  word-spacing: 0.1rem;

  @media (max-width: 950px) {
    top: 150px;
    width: 300px;
  }
`,UA=g.c.div`
  width: 280px;
  height: 280px;
  border: 2px solid ${A=>A.theme.primaryFontColor};
  border-radius: 50%;
  display: flex;

  @media (max-width: 950px) {
    visibility: collapse;
    position: absolute;
  }
`,VA=g.c.button`
  color: ${A=>A.theme.projectsButtonFc};
  background-color: ${A=>A.theme.projectsButtonBackground};
  height: 70px;
  padding: 0 20px;
  border-radius: 0 2em 2em 0;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  position: absolute;
  bottom: 10%;
  outline: none;
  transition: 0.3s;
  border-style: none;
  /* border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  border-image-slice: 1; */

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    bottom: 18%;
  }
`,YA=g.c.button`
  color: ${A=>A.theme.resumeButtonFc};
  background-color: ${A=>A.theme.resumeButtonBackground};
  height: 70px;
  padding: 0 20px;
  border-radius: 2em 0 0 2em;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  position: absolute;
  bottom: 15%;
  right: 0;
  outline: none;
  border-style: none;
  transition: 0.3s;
  /* box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12); */

  &:hover {
    cursor: pointer;
  }

  &:active {
    /* box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12); */
  }

  @media (max-width: 950px) {
    bottom: 18%;
  }
`,JA=["programmer","mad scientist","student","developer","programmer","mad scientist","student","developer"];var XA=function(A){const[e,t]=Object(i.useState)(!0);Object(i.useEffect)((()=>{IA.a.event({category:"User",action:"Visited Home Page"})}),[]);const[r,o]=Object(i.useState)(!1),[n,g]=Object(i.useState)(!1),c=()=>{g(!1)},l={transform:r?"translateX(2.5em)":"none",visibility:n?"collapse":"visible"},[h,x]=Object(i.useState)(!1),[B,b]=Object(i.useState)(!1),C=()=>{b(!1)},w={transform:h?"translateX(-2.5em)":"none",visibility:B?"collapse":"visible"};return Object(a.jsxs)("div",{className:"landing-page-container",children:[Object(a.jsx)(Z,{peakProjects:r,showProjects:n,hideShowProjects:c}),Object(a.jsx)(vA,{peakResume:h,showResume:B,hideShowResume:C}),Object(a.jsxs)("div",{className:"name-and-photo-container",children:[Object(a.jsxs)("div",{className:"name-container noselect",children:[Object(a.jsx)(OA,{className:"text-fade-in",children:"Hello world, I am"}),Object(a.jsx)(jA,{className:"text-fade-in",children:"arnav"}),Object(a.jsx)(kA,{className:"text-fade-in",children:"."}),Object(a.jsxs)(FA,{children:[Object(a.jsxs)("span",{style:{opacity:"85%"},className:"text-fade-in",children:["I am a"," "]}),Object(a.jsx)(m,{words:JA}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{style:{opacity:"85%"},className:"text-fade-in",children:"Experimenting with code like a mad scientist. If you need an extra hand in building something exciting, let me know. (i use vim btw)"})]})]}),Object(a.jsx)(UA,{children:Object(a.jsx)("img",{src:p,alt:"Arnav's photo",className:"my-picture noselect"})})]}),Object(a.jsxs)(VA,{className:"noselect",onMouseOver:()=>{o(!0)},onMouseLeave:()=>{o(!1)},onClick:()=>{g(!0),C()},style:l,children:[Object(a.jsx)("span",{style:{marginRight:10},children:"projects"}),Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(a.jsxs)(YA,{className:"noselect",onMouseOver:()=>{x(!0)},onMouseLeave:()=>{x(!1)},onClick:()=>{b(!0),c()},style:w,children:[Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"fas fa-chevron-left"})}),Object(a.jsx)("span",{style:{marginLeft:10},children:"resume"})]}),Object(a.jsx)(d,{})]})};let SA,TA;const KA=g.c.div`
  position: absolute;
  top: 3rem;
  right: 4rem;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    top: 1.3rem;
    right: 1.3rem;
    width: 30;
    height: 30;
  }
`;SA=TA=g.c.svg`
  transition: all 0.5s linear;
`;var DA=function(A){let{theme:e,toggleTheme:t}=A;const i=x().width;return Object(a.jsx)(KA,{onClick:t,children:"light"===e?Object(a.jsx)(s,{children:Object(a.jsx)(TA,{xmlns:"http://www.w3.org/2000/svg",width:i>950?"40":"30",height:i>950?"40":"30",viewBox:"0 0 24 24",fill:"none",stroke:"#212121",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-moon",children:Object(a.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})}):Object(a.jsx)(s,{children:Object(a.jsxs)(SA,{xmlns:"http://www.w3.org/2000/svg",width:i>950?"40":"30",height:i>950?"40":"30",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-sun",children:[Object(a.jsx)("circle",{cx:"12",cy:"12",r:"5"}),Object(a.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Object(a.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Object(a.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(a.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(a.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Object(a.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Object(a.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(a.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})})})},NA=t.p+"static/media/darkRain.d513613c.svg",yA=t.p+"static/media/lightRain.eb9964c3.svg";const MA=g.b`
  body {
   background-image: ${function(A){return A.theme===RA?`url(${yA})`:`url(${NA})`}};  
    ${""}
    ${""}
    transition: background-color 0.5s linear;
    transition: background-image 0.5s linear;
  }
`,WA="#0a0d12",zA="#1B99D4",qA="white",PA="black",LA="#ffae42",RA={body:qA,primaryFontColor:WA,secondaryFontColor:zA,fontColorOnSecondary:qA,fontColorOnPrimary:qA,iconColor:PA,highEmFc:"#fff",mediumEmFc:"rgba(255, 255, 255, 0.9)",lowEmFc:"#fff",projectsBackground:zA,projectsButtonFc:qA,projectsButtonBackground:zA,resumeBackground:"#1d2025",resumeButtonFc:qA,resumeButtonBackground:"#1d2025",resumeTabHighEmFc:"rgba(255, 255, 255, 0.9)",resumeTabMediumEmFc:"rgba(255, 255, 255, 0.8)",resumeTabLowEmFc:"rgba(255, 255, 255, 0.1)",scrollBar:"rgba(255, 255, 255, 0.4)",scrollBarHover:"rgba(255, 255, 255, 0.8)"},GA={body:WA,primaryFontColor:qA,secondaryFontColor:LA,fontColorOnSecondary:PA,fontColorOnPrimary:PA,iconColor:qA,highEmFc:"rgba(255, 255, 255, 0.9)",mediumEmFc:"rgba(255, 255, 255, 0.75)",lowEmFc:"rgba(255, 255, 255, 0.1)",projectsBackground:"#1d2025",projectsButtonFc:LA,projectsButtonBackground:"#1d2025",resumeBackground:"#1d2025",resumeButtonFc:qA,resumeButtonBackground:"#1d2025",resumeTabHighEmFc:"rgba(255, 255, 255, 0.9)",resumeTabMediumEmFc:"rgba(255, 255, 255, 0.75)",resumeTabLowEmFc:"rgba(255, 255, 255, 0.1)",scrollBar:"rgba(255, 255, 255, 0.4)",scrollBarHover:"rgba(255, 255, 255, 0.8)"};var HA=t(6);const ZA=g.d`
    0% {
        transform: scaleX(0);
        -moz-transform: scaleX(0);
        -webkit-transform: scaleX(0);
        transform-origin: bottom left;
    } 
    50%{
        transform: scaleX(1);
        -moz-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom left;
    }
    51%{
        transform: scaleX(1);
        -moz-transform: scaleX(1);
        -webkit-transform: scaleX(1);
        transform-origin: bottom right;
    }
    100% {
        transform: scaleX(0);
        -moz-transform: scaleX(0);
        -webkit-transform: scaleX(0);
        transform-origin: bottom right;
    }
`,$A=g.c.div`
  position: relative;
  display: flex;
  background-color: rgba(256, 256, 256, 0.05);
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;

  &:hover::before {
    animation-name: ${ZA};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
  }

  &::before {
    border-radius: 10px;
    transform: scaleX(0);
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: rgb(255, 255, 255, 0.1);
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    height: 30px;
    padding: 5px;
  }
`,_A=g.c.img`
  height: 30px;
  width: 30px;
  object-fit: cover;

  @media (max-width: 950px) {
    height: 30px;
    width: 30px;
  }
`,Ae=g.c.span`
  color: ${A=>A.theme.resumeTabMediumEmFc};
  font-size: 1.1rem;
  font-weight: bold;
  margin: auto 10px auto 10px;

  @media (max-width: 950px) {
    font-size: 0.8rem;
  }
`;var ee=function(A){let{name:e,icon:t}=A;return Object(a.jsxs)($A,{children:[Object(a.jsx)(s,{children:Object(a.jsx)(_A,{src:t,alt:e+" Icon"})}),Object(a.jsx)(Ae,{children:e})]})},te=t.p+"static/media/libraryCardImageYellowBG.ed76edfc.jpg",ie=t.p+"static/media/libraryAppMockupGifComp.f154240d.gif",re=t.p+"static/media/firebaseIcon.8896e25c.png",oe=t.p+"static/media/androidIcon.30963519.png",ne=t.p+"static/media/libraryAppStudentHome.f3af2263.jpg",ae=t.p+"static/media/aightMicroblogging.11fc4203.jpg",se=t.p+"static/media/aightEventsImg.dbc8d91c.jpg";t(51);const ge=g.c.div`
  width: 450px;
  padding: 30px 20px 30px 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  display: flex;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    padding: 20px 20px 20px 20px;
    width: 300px;
  }
`,ce=g.c.img`
  height: 400px;

  @media (max-width: 950px) {
    height: 200px;
  }
`,de=g.c.div`
  width: 100%;
  height: 400px;
  margin: 0 0 0 20px;
  display: inline-block;

  @media (max-width: 950px) {
    margin: 0 0 0 10px;
    height: 200px;
  }
`,pe=g.c.p`
  margin: 0 0 0 0;
  color: ${A=>A.theme.highEmFc};
  font-size: 1.4rem;
  font-weight: bold;

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`,le=g.c.p`
  margin: 20px 0 0 0;
  color: ${A=>A.theme.mediumEmFc};

  @media (max-width: 950px) {
    margin: 10px 0 0 0;
    font-size: 0.8rem;
  }
`;var me=function(A){let{img:e,title:t,description:i}=A;return Object(a.jsxs)(ge,{children:[Object(a.jsx)(ce,{src:e,alt:""}),Object(a.jsxs)(de,{children:[Object(a.jsx)(pe,{children:t}),Object(a.jsx)(le,{children:i})]})]})},he=t(12),xe=t.n(he);const Be="#1d2025",be="#ffae42",Ce=g.c.div`
  background-color: ${Be};
  width: 100%;
  transition: 0.3s;
  padding: 5% 0 5% 0;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${A=>A.theme.resumeBackground};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${A=>A.theme.scrollBar};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${A=>A.theme.scrollBarHover};
  }

  @media (max-width: 950px) {
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`,we=g.c.div`
  background-color: yellow;
  height: 140px;
  width: 8px;
  display: inline-block;
`,ue=g.c.span`
  font-size: 3.6rem;
  width: 200px;
  height: 140px;
  display: inline-block;
  color: ${A=>A.theme.highEmFc};
  margin-left: 15px;
`,Ee=g.c.img`
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
`,fe=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin-top: 7%;
`,Qe=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 3% 0 10px 0;

  @media (max-width: 950px) {
    margin: 55px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,ve=g.c.div`
  margin: 10px 30px 10px 0;
`,Ie=g.c.div`
  margin: 10px 30px 10px 0;

  @media (max-width: 950px) {
    margin: 10px 0 10px 0;
  }
`,je=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,ke=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin: 20px 30% 0 10%;

  @media (max-width: 950px) {
    margin: 10px 10% 0 10%;
  }
`,Oe=(g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0 10%;
  margin: 5% 0 10px 0;
`,g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 50px 0 0 0;
    padding: 0 10% 0px 10%;
  }
`),Fe=[{icon:oe,name:"Android java"},{icon:re,name:"Firebase"}];function Ue(A,e){return Object(a.jsx)(ve,{children:Object(a.jsx)(ee,{name:A.name,icon:A.icon},e)},e)}const Ve=[{img:ne,title:"Borrow/return a book with a click",description:"Students choose a book that they want to borrow or return. The app generates a unique QR code which is then scanned by the librarian, who chooses a return date for the book, and everything else is taken care of and automatically recorded."},{img:ne,title:"Add and modify books",description:"Librarians can modify an existing book (its description, total count, author, etc) and also add new books that are available for the students to borrow."},{img:ne,title:"Check book availability",description:"Students can search and find out if the desired book is available in the library"}];function Ye(A,e){return Object(a.jsx)(Ie,{children:Object(a.jsx)(me,{img:A.img,title:A.title,description:A.description},e)},e)}const Je=g.c.button`
  margin: 10px 0 0 10%;
  color: ${be};
  background-color: ${Be};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${be};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`,Xe=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 0 0;
    padding: 0 10% 0px 10%;
  }
`,Se=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin: 20px 30% 0 10%;

  @media (max-width: 950px) {
    margin: 10px 10% 0 10%;
  }
`,Te=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,Ke=g.c.div`
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */

  @media (max-width: 950px) {
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
  }
`,De=g.c.div`
  margin: 20px 40px 30px 0;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
    margin: 0 10px 20px 0;
  }
`,Ne=[{title:"Events website",imgUrl:se,cardDescription:"Helping students discover events in colleges around them.",pageUrl:"/events-website"},{title:"Microblogging App",imgUrl:ae,cardDescription:"Users can post micro-blogs and look at other people's blogs.",pageUrl:"/microblogging-app"}],ye=g.c.button`
  margin: 10px 0 0 10%;
  color: ${be};
  background-color: ${Be};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${be};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`;var Me=function(A){const[e,t]=Object(i.useState)(!1);return Object(a.jsxs)(Ce,{children:[Object(a.jsxs)("div",{className:"library-app-page-head",children:[Object(a.jsx)("div",{className:"library-app-page-heading-container",children:Object(a.jsxs)(xe.a,{left:!0,children:[Object(a.jsxs)("div",{className:"library-app-page-title-container",children:[Object(a.jsx)(we,{}),Object(a.jsx)(ue,{children:"Library App"})]}),Object(a.jsx)(fe,{children:"This was for a class project. We decided to create an app that would help librarians manage borrowed/returned books and also make the process more simpler. This would also help the students know what books are available (info about them) without visiting the library."})]})}),Object(a.jsx)(xe.a,{right:!0,children:Object(a.jsx)("div",{className:"library-app-page-mockup-conatiner",children:Object(a.jsx)(Ee,{src:ie,alt:"Library app mockup"})})})]}),Object(a.jsxs)(xe.a,{left:!0,children:[Object(a.jsx)(Qe,{children:"Tech Stack"}),Object(a.jsx)("div",{className:"library-app-tech-stack-container",children:Fe.map(Ue)}),Object(a.jsx)(je,{children:"Project Goal"}),Object(a.jsx)(ke,{children:"As students ourselves we found it tedious to visit the library to find out what books were available and so the idea for our class project clicked. The goal was to solve this problem in the given timeframe of over 3 weeks."}),Object(a.jsx)(Oe,{children:"Features"}),Object(a.jsx)("div",{className:"library-app-features-container",children:e?Ve.map(Ye):Ve.slice(0,2).map(Ye)}),Object(a.jsx)(Je,{onClick:function(){t(0==e)},children:e?"Hide extra":"Show More"}),Object(a.jsx)(Xe,{children:"Lessons Learnt"}),Object(a.jsxs)(Se,{children:["There were a few challenges we ran into, but in the end, we figured it out. Our understanding of fragments and how the back stack works deepened. Our design skills were improved. We also worked on making custom list views and custom components so that we would be able to customize the components to our liking.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"It was a challenging (but interesting) task to make 2 UI's in a single app and display each one based on who logged in. And we managed to make it way better than we first hoped."]}),Object(a.jsx)(Te,{children:"Other Projects"}),Object(a.jsx)(Ke,{children:Ne.map((function(A,e){return Object(a.jsx)(De,{children:Object(a.jsx)(f,{title:A.title,imgUrl:A.imgUrl,cardDescription:A.cardDescription,pageUrl:A.pageUrl},e)},e)}))}),Object(a.jsx)(B.b,{style:{textDecoration:"none"},to:"/",children:Object(a.jsxs)(ye,{children:[Object(a.jsx)("i",{class:"fas fa-arrow-left"})," ","   ","Back to homepage"]})})]})]})},We=(t(54),t.p+"static/media/aightMicrobloggingLogin.68171950.jpg"),ze=t.p+"static/media/microbloggingAppMockupGifComp.0c602429.gif";const qe="#1d2025",Pe="#adebff",Le=g.c.div`
  background-color: ${qe};
  width: 100%;
  transition: 0.3s;
  padding: 5% 0 5% 0;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${A=>A.theme.resumeBackground};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${A=>A.theme.scrollBar};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${A=>A.theme.scrollBarHover};
  }

  @media (max-width: 950px) {
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`,Re=g.c.div`
  background-color: ${Pe};
  height: 140px;
  width: 8px;
  display: inline-block;

  @media (max-width: 950px) {
    height: 130px;
  }
`,Ge=g.c.span`
  font-size: 3.6rem;
  width: 200px;
  height: 140px;
  display: inline-block;
  color: ${A=>A.theme.highEmFc};
  margin-left: 15px;

  @media (max-width: 950px) {
    font-size: 2.2rem;
  }
`,He=g.c.img`
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
`,Ze=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin-top: 7%;
`,$e=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 3% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,_e=g.c.div`
  margin: 10px 30px 10px 0;
`,At=g.c.div`
  margin: 10px 30px 10px 0;

  @media (max-width: 950px) {
    margin: 10px 0 10px 0;
  }
`,et=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,tt=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin: 20px 30% 0 10%;

  @media (max-width: 950px) {
    margin: 10px 10% 0 10%;
  }
`,it=(g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0 10%;
  margin: 5% 0 10px 0;
`,g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 50px 0 0 0;
    padding: 0 10% 0px 10%;
  }
`),rt=[{icon:oe,name:"Android java"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAZ9klEQVR4nOzdCXQUVb4G8K96T2chhCSEJAQQQocAspgENBlhJOCCgQCjZxxHUQf3ceY9HQQFnfcUHYLjm8V1gBFxcBkXICyKgAoa1gQBwZCENUAWyJ7u9N5V71STzDAY2qqm+97qzv2dw5kz58i5/6Tux61bdeteFRiGuSwWEIbxgQWEYXxgAWEYH1hAGMYHFhCG8YEFhGF8YAFhGB9YQBjGBxYQhvGBBYRhfGABYRgfWEAYxgcWEIbxgQWEYXxgAWEYH1hAGMYHFhCG8YEFhGF8YAFhGB9YQBjGBxYQhvGBBYRhfGABYRgfWEAYxgcWEIbxQUO7gHA34OpxqnpdvwQOQqIAJBuyZyRB4GMBLhZAlABEcxC0AqAFoOv8a04OcAngXBxgBmABhFZwqlZ76Zp6DqgVwJ1PctY1VH+3h6f8I4Y1jnYB4SQhMxPW9IIhEDA6IrtwnKqf6VoAYwAYg9SkFcB+vq5yl6107R5wOGA8uv5YQ3l5kJrreVhA/BQRlwrhqqwB6pSM0ep+pnGRWTNHe+ARw5BEubR6NdT7O8pWH/DUVe7x1FQc4E6UVduaz1IuKzSxgMikzyrsZ5w0515t+nW/ADCcdj0Sfe86uvM96xfLVzjK1tbRLiaUsIBIoEk2afVZhVMjp8+/DYIwQxxAaNfkJxs4bk1H8eKPHGVrN7prK120C1I6FpDL0KdmqtTDJk6MmjB7FpLSpwNIoV1TgNWg/mixZfvKTzxHtm1znC1nk/1usIBcQpOcYYi+c8lDWlPebwEMpF0PIadclSV/Mb/75Jvu2go77WKUhAWkU0zBY+mJk3/5QLsx/Y4wHC2kqomxHn3//JZVS9vXv3KUdjFK0OMDkjJzQZJ21rz5Vpv74YveQ/R0TmOE5g3XJ0WLa1a/UE+7GJp6dEBiHlpxnyFr+itBfE8R6qz2suLH2t+89y3ahdDSIwMS/fMXC4z5Dz8tQBhPu5ZQwIHbbd36xovmD55eT7sW0npUQFJmLOjvmvrEGwCm0q4lRG3Ubnz54Zo1L5yhXQgpatoFkKBJNhljf/PBM8iZ9T6ATNr1hLCh/NDrHtKPzNe7ju/dw5ubwv49StiPILG3Pz1MN+V3nwEYQLuWMFPt3PzHm1s/fPEI7UKCKaxHkMhp88dE3DJXDEd/2rWEoVj14OsKAe4rV2VJ2D7pCsuAXDVxVgJ3399fNWRNf1W8kLTrCWMxOlPur/RZ0wf1E1p3tpw6YqVdUKCF3S2WzpSXEDt3/ZeAMIJ2LT0Ld7j1pYIbnJUlDbQrCaSwCkjSo/+Yyo+Z+jaAeNq19FCNqv0b76l/7a6NtAsJlLAJSO8n19+hHZq7Ehe+zGPocbmqdsxuWVLwPu1CAiEs5iCxc9c/pTPlvhYuP0+IU6v7pM3UmvKc9p3vl9Au5kqFdIcyDshE1l++LmqPG/ZsOI2GYYBTx6dNunrmPcbm/V9tdbWF7rQkZDuVpn8ml/DC7mUep/tXtGthLk+t0/y9YcH4+91nygXatfgjJEcQceSI+a9PXhU0xgdp18L4Jnj4sYaxU+NR8dWnoTiShFxAJkyYgKgXv/yzxWV8jHYtjDScPipn4M8f6G2q2bmpurqadjmyhFxA2m5/ZZFVnzqXdh2MPGYLP77WkKq173z/S9q1yBFSAen10IpH9FdPWUy7DsY/6vi06zXJGQ2OsuJS2rVIFTKT9Lj5m/I0Q3K+ZO85Qp7LfWzvDc2LbwqJR8AhMYIkFD6arR5/1+YQ3m6H+Te1Ki7lNqPKstVaUVpLu5gfo/gRJMI0QR395Jr9EDCSdi1MAHE4ZF4yY4ytcruHdim+KH53d8O0373AwhGGBIz0XluFU/QI0mfRroXqJNPztOtQIo0KiNVxiNBc+CP+f4dHgN0NWN0CWh0CQuHNnKe+8pmmhdcuol3H5Sg2IFHT5k0wTpu3jXYdSjE2QYPJaVqM7KPGsN5qJEeqoPJx9SwuAVWtHpxq57GjzoWtZ9yotypz80TruqKJlnVF22nX0R1FBkSTnBGR+OLuHW43P4Z2LTSIHX9UHzXy07SYmKLF0Fg1YnRXfqmqzR6U1LpRdt6Nr866UaeQwGjUqv3nF4zPdddW2GjXcilFBiRpeftSHu77addBQ35/LX6fE+ENRTC5eeCjY04s+daG2g76QVFBs6x+TswDtOu4lOIe86bOfmqYe8C1f1dqeIMlp68G/5gShYdGGNDHEPxnJ+IoJd6u3TFUD7cAHGx0g6c4aRHAj+3dW/Vh+8GSRnpV/JDiOmH8S4fWqnqnTKddBynpsSo8PjoCBYN00FJ8pnjOyuOvB+14+4jDGxga+Jaa4sa5IwvptN49RQUkfuFn01QDxxXTroOU24bo8MfcSBgUdFLkoSYP7txsxjkrnZTwp/ZMb1x08zoqjXdDMbdYEVmFaYb8R9cCiKZdS7BdFaPC0p9G4uGRBu/jWSXpa1R5R7NqM4/jbeTnJlxs6kS+tvIjd21FG/HGu6GYEaTv8uYtApBPu45gS4lU4bNp0d6OqHRLv7fj2d024u9TOGDLuTlxUwg32y1FjCD9Zz81xj0gt4h2HcGWGMFhQ0GM9x1GKLgmUQOzS0DZeeKrQQbH9Vataz9If0M6RVwpz8hfhv3HT3F6Du9OiUL/KEX8yiV7OsuIO4aSPzZFKX2C+i1Wwu0L+nFTnjgVzofXRGk5rL81GplxVz5gd7gElNS5caTZg4oWj/cdRrvzwrISowaIj1B536GMild7XzIG4gWjaPYWCzadJrpXtVPY/PLAhg9foHoqL9WApKamQlj8/RqX3aOoR3uBJI4cH94chZF9/H9UdaLNg3UnXdhyxoVDTW44JN7xiBd3QLQKP03V4qY0LfKStX4/FDhr4TF1fTvqCT7d0hrUa7n5w2ecPUvvjHeqAdFnTR/R66EVh2jWEGzPjYvAgyMMfv3dY60ezNtl9S4PCYQRcWr8+fpI7wtCf3zf7MHN69olBzQQ2t68d6SjrPgwuRb/E9UbYkNW4a002w+2vhEc7jTp/fq7m6pdKNhoDlg4RIebPZhS3I75O63eVb9yDY9T479H+xd2f9HuI9QCoumfyemzCu+i1X6w6dXAqinR3vmHHFYX8ERJB2ZvtaDZHvjbGV4AVhxxoPDTdu88Rq5fXx2BzN7kHn6KfUTsK8QavAS1gOjHFNwECGF72tO0QTpcHS+vI5238bh5fTtWVTqDVleX/Q0eTC5ul/0IV6sCHhvl36joHyHzQl+hg0pADFdlInLavAU02iZBzQEPy5x3iPf3+WvN3idTpLh44L6tZm/bctwyQE/0cbXYV8Q+QwOVgKhHFNwAIJdG2yTMGqzDcBkTYTcP/Hpbh3fBIGnnbAKmbTB7HwhIZdAAT2UR3T8jt7PPEEclIFGFT91Do11SfpUp7xak6FsbygmOHJeyuAQ8sq3DG1Sppg/SoVeA3rFIQavPEA+I9qqsWIHnZ5Ful5SpA7UYnSD9nceOOjde/c4e1JqkONjkwcoK6XVoVMANqeS2KBP7jNh3iDXYiXhAdCMm/RSAkXS7pDw5Vt6tx8v7bVQ/VLrYKwft8MgYRUgGROwzuhGTJpJsEFQCMnySIlZpBsPgGBUyZDwC/eKMCzvrAvee40rVWQUsK5c+iuQlk/2QRTd80o1EG6RyizU4awLpNkn5SYr0f1HFQWPhbqvitub547d2yW/KkyNVGBRDrgvR6DtEA5L+4IIYAENJtknSmATpo8c3tS6caKe/WcKlzC4Bhxqlj2rj+hIdRYZ29iFiiAakQT3kNqV8gxIMV8tYkPjXg/Qn5pfzda30VbvXpxANiLqzDxFDNCC6sdNvJ9keSTo1JG/V02QX8E0A11gF2oFG6Y+cR8QRnocQ7kPEAqIfMs4g3qaTao+065KkLyXfXU/0uwrZ5LxZH9RLDR3ZmexPOvsSEeR+tNikzHA+vuCaROl3jnKXdpBWY+G9y1CkEMMxkOBE3duHLvQlIoj9ZFfnzzKRaouGNBlrk04pcHJ+MQHAGYv0EEcTHkJI9iViP1lVq2cEqbZoGCJjq9AT7coeQdC5kZxU0YTP/CLZl4gFRJuckU6qLRrSZQSExqJEucwypknRBNdkgXBfIhYQVbIpbN9/qDlIXrgnRqPBprTXgz8kCNJrlLM8JRBUyabwC4h4F0KwLaL0Mt7sWF2QPAGmKUbGvMLsJB748ApI5Iyn+oj/Q6ItGnRq6bcYdjlryinqJWMTJgv53a4jO/tU0JEZQTx8BpF2KDHIGEE6lPt+8F/EvF/VS/oLQCq3jIT6FKlbrLAOiIqTPoJ4lD/9QL9ITnLoLc4Le2ZRED4BMWQXhvUTrHAjZ01ZeQudIZFUnyISEE0/UzKJdpjAGJsoPSAHZazbCiRSfYpIQASAyISKCYwcGQHZXU9nBCHVp0jNQfoSaoe5QgOjVZJHEKcH2FYT/D28LoNInyIVkERC7TBX6Jkco+SzEsub3bDQW5hMpE+RCgjZDV0Zv4yOV3t3ZZHqyxqqy/aJ9CkWEOZfHh9jkLXd/2ay54VcKqwCEraH44SLsQka5PeXfplaHAIOUXqC1YlInyL1vaSCDjoOPEGA5OMEHAp8U5idqMbKyZGQsWIG/7PXSu089U5E+hSpjusI583i6qw8BqxsoV2GXzJiVfjklhhZCy6Pt3nwQRW1p1ddHCQaIXWLpdwtPHqw4XFqvJUfJSscouXfE+mbP4ZInyI1grCAKMyEFA3emxIt+8xCcfR4p7LnBITUCGIl1A4jwS0DtHhrUpRfB3rO22mVtQt8EBHpU6RGkPpw/mAqVNyYpsVvRxlwjYylJF14AXh6l1VJ+3nVk2iEVEDOEWqH6cakVC1+nxMB0xWcLfjxMYf3bEMFCZ+AcBxXL+cbZ8Y/HIC+Rg6DYtTeo56zEjXI7qvxbjJ9JQ42uvHcXlvA6gwEsU+RaIdIQLLadp0qjRlPoqmAEe/PcxI13sNwhvRSIcmoQoSG8x4/RvVw+W4YNRxidBz6GFTeLVADqaLZg4INZqJno0thKV58ikQ7RAKybdv2U5HTlB8QFQfcOlCHO006jO+r9YahJxMn40/s6FBcODpVk2iEVBeoINSOXwZGq3Bfph4zB+uQEEHtZGxF2VHnwsLdNpQrd5tUIn2KSEDykrVV+y9sCaWo3hepAYpyI3HbELZU7GIfH3Pi0e0dtMvwhRf71OcEGiJ2O524vPmk+I81qfZ+zDWJavwpL/KKnuyEm9oOHov32bwBUeCSsYudOj8nbhCJhojdZXPgqgQIigjIlP5avDMlSnGTbZo+P+3C70o6cD4Edn0U+xKptojd8tjK1p4h1ZYv8QYOL+UaWTg6nbHwmPWZGXdvsYREOEC4LxF8TiNUkmure+JkfNWUKCRd4XuBUCfGYPtZFz485sSm0050KPs8n26Q60vEAhJjPfodzQXSGhXw3o1RGNyr5845TrR7sKrCiXUnnd6RI1SJfamdUFvEAtJ0pPxA9PWkWvuh2Rn6HhMOp0eccHtQbeZxrI3HoSa3d/+qihaPd01VqGsqrzhAqi2it+KJy5sraR0DvetnMbjKj4B0uARsPePCsTYPmu2C4nZm573bfwqwuAR0uAXv8Wmnzbzizl8PoKrzc+KInTBF9l0xx30NQSAekOxEtexw2N3A4n1WLCt3KGV5N4POPkQQ0dlqR/Hi90m21+WRkfLODn230oFrP27DG4dZOJSGdB8iOoJoq3d/BaAVQCypNiPUwI0DpO/1tOGkE4+XsO+7FKq1sw8RQ3QEaT24XfC01JSQbHNkvEbybh3iaPGHfcpa1s38m9h3xD5Esk3iLwTcx0u3kmxvkIwzvDdWO71PfRhlIt13QCMg9rLi3STbS4yQ/qBuG92tNJkfQbrvgMaGbu7jpfsAnAaQRqK9KK30gBxo8G9pt0514VZOinYnj6OtbJTyw+nOvkMU8YB4Wmrd7qodr2uG5i4m0Z5BIz0g523+ddz0WDU+LYiW9N+uP+nEnC8VvZRckcQ+I/Yd0u1SWZRk3bbibwAaSLRll7E/Zpzev/emadHSf431VjZ6+KHB9qW3zxBHJSD2vatbXZUlr5Foy+KSHpDREm+TLnVNgvS/V8lur2QT+4qtbHUrjbapLWv1VO5Y0blSIqjkLOGe1F/6+5KLjU+SHpCqFsV+wqpUvOeYt69QQS0g7euKTvMttZuC3c6JNukdsmCgDqZYeb+SWwZokdVXWkCs7gtb6DDSiX2kfU3RaVrtU/0wwvbNOyuD3cbhJo/kz0fVKuC58dI3oR/XV4OlN0j/MvFwkxt2NoDIQqKP+EI1IHzF9g0Agvp1mM1z4cmRVBNTtPjgxijk+BgVdCrggeF6fHRztOTz/MDes/jjTGcfoYbqBxLuphqXPnNCnSou9WfBbOe0mcfdGXrJ//2gGDV+MVTvnVu4hQv7ZfXWq5DRW+3dM+vViZEoGKSTvfnzwl02NNjDeCF6gLmP7X7QXLyE2Lcf3aH+abbBNEEVM3fNKQD9g9nOVzOikRlHbye47xo9mFxM6ju4sHCm/aUZA+2V26k+9qP+cbb4CxCqv3092O387TC9jZctLgFPlLCXg3KIfYJ2OKCEgIg0u15/E4A5mG3886gTpefpPEF6epcN3zWx2bkM5s4+QZ0iAlK3dXWrY1/xnGC+FxHv/O/abMGuerIT5ferHPjnUUUdG6B0vNgXxD5BuxAoYQ5yseTl7W+54b43mG1oOGDjtBjvofnBtvecGz/7THk7oyuZBpoVtXNi7qNdRxdFjCBdhpcWLQj20VpuAXhkmwVN9uDe3oqT8js+t7BwyGPt7AOKoah9cE7s+8YSMTJfy/VOnhjMdlocgndOkmhUeU96DSRxQr6ywoEnSqxoc7JHunLwJ/e9cPhP91N973EpRd1iiTTJJmPcc7uOindcJNrL6avBszkRyPbj3L5LrT3h9B5y2epgwfBDbfOz16a7aysVtSGAokYQEW9ucqlU+EY7NO8OAEE/l6Cmg8d7VU7vW26xYxvU8J7UpJLwT8d5G+99Mraqyon5O614p8LJlpL4x2LbUHSzvbSYyKE4cihuBOkSv2jP/6qS0p+l0bYYkhF9NN4352nRKu9XieIvyu4R0GjjcbKd9+5UKIaLuXJ8/dHnGheO+z3tOrqj2ID0y5/Zx/Pz5cdIbhHEUNGq/mDOkLqtq5toF9Idxd1idbGcOGLjwH2jNeVOByB9iS0TShqt65YUNH+2jNh5H3IpdgTpMuipTdkdg3N2APDvayZGqVyRx/fmnvzDTaW0C/FFsSNIl9aSVbXq5AynJjkjn3YtTODYy4oXnPvzbR/SruPHKOpF4eXYP31pCcdxH9OugwkM8VqK15R2HVIo/hari96UF9Fr7roDtI5PYAKmqu2laaMdlSUhscdrSIwgIvEX2vbmvb8A0EK7FsZvLeI1DJVwIJQCInKUFe8b4CzLA9BIuxZGtkbx2onXkHYhcih+kn6p2o3/aFAbtB9rh+TeCAjxtOthfhzHqSrsm1+eeHLJ/Udp1yJXyAVE5Pj+61aVBl9o03PvFqcntOthfGq3fVqUb/74xWO0C/FHSN1iXcy8enGFcGrfZAAW2rUwl2URr5F4rWgX4q+QDYioYdHkvcbjnxayibsitYjXRrxGtAu5EiHzmNcXrSk3rffcDRsBYQTtWhgRd7jlpVunuip3UNsRMVBCegTpIl6I5mfHj+Nba1fRrqWnE6+BeC3CIRwI1Ul6d3hzk8t1eNtaTfJQTh2fdn24jI4hRHBVljxvXvrgb921FWGzhWRYdqK453ct1PQzPU+7jp7EXVf5TPMz1y6iXUeghc0I8h8Ofv6129Z+QJeRl07q090ei8O+jnVFj7g+fGaZ2xZ+O0eGZUDEC+Wq3FGZ0LZ7qS1hdIIqOj6Hdk3hyF1b8VrU2vsLGza/WxmO4UC4BqRLa3U1HN99/plgaz+gN+WNApBAu6ZwwHEo71hX9IDlo2f/1HLkEO1ygios5yDd0SSbjAlFpf/ncbjvD5endxTwar1mWcO87MeVtvtIsPSYjiJe0Lq7Yh5KaNszsfMYakae0+LvTvwd9pRwoCeNIBfTDc6JNU5++AFd1vTfAEihXY/C1TjLiv9q3fLGUufxvYrYL5ekHhmQLv3yZ8aq7nx7kcvjnsMWPf6AQ6vWLOffvWehUjaSpqFHB6RLRNbMPoYbH31QO2jMwwBSaddD2VnXyf1v2D9/7W+2MmVuxUMSC8hFYkdN4IRrZ9+vzyp8AUBP+9ak0VG2dgG3a+Wy1oPb2d6pnVhAuqHLyIuInvbk3eqhefMADKJdT5Cd9FSVFJnXLXnHWRE6n8KSwgLig6p3stY4YfZPtMMmztIOzr4VQBrtmgLktOt46QbXkW2fWLev/IZvqQ2btVOBxgIiQ9S0+cP0WdMfUSeb7hH/L+16ZLJ4aivfdpQVv25Zt/gI7WJCBQuIH9QpGVrj6EnZqv7X5KlTho3S9DONAzCYdl2XOO6uq9zjqTlykD+zr8R64ItST034rLIlhQUkQGJmzkuITMq8ib+m4CZBwGgAJoJLeTwAKjkOB1T71m/qqC/f1L66qIFQ22GNBSRIDNkzYtX9hmaPmjwr+1hEeiYgDOwMzZU+HWsUwwBwp4bYjpYf3PJJqaeuqtReuqbHvqsIJhYQglJTU9HQL9sIgY/tPNYhunMuo+3803VgkBOAq/OPpfOI7FZwqtaEulLr2bNnKf8kDMMwPWmxIsP4gwWEYXxgAWEYH1hAGMYHFhCG8YEFhGF8YAFhGB9YQBjGBxYQhvGBBYRhfGABYRgfWEAYxgcWEIbxgQWEYXxgAWEYH1hAGMYHFhCG8YEFhGF8YAFhGB9YQBjGBxYQhvGBBYRhfPj/AAAA///JQ2qsIzIF7wAAAABJRU5ErkJggg==",name:"Parse Server"}];function ot(A,e){return Object(a.jsx)(_e,{children:Object(a.jsx)(ee,{name:A.name,icon:A.icon},e)},e)}const nt=[{img:We,title:"Post blogs",description:"Users can create and post short blogs with a title and description. These blogs can be about daily diaries, workout routines, short stories/poems, and a lot of other content."},{img:We,title:"View other blogs / your own blogs",description:"Users can view all the blogs of the other users in the home tab and they can also view all of their posted blogs on the profile page."},{img:We,title:"Sign in or sign up easily",description:"Users can sign in or sign up easily by entering their details. The passwords are handled by the parse server auth and are safe and secure."}];function at(A,e){return Object(a.jsx)(At,{children:Object(a.jsx)(me,{img:A.img,title:A.title,description:A.description},e)},e)}const st=g.c.button`
  margin: 10px 0 0 10%;
  color: ${Pe};
  background-color: ${qe};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${Pe};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`,gt=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 0 0;
    padding: 0 10% 0px 10%;
  }
`,ct=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin: 20px 30% 0 10%;

  @media (max-width: 950px) {
    margin: 10px 10% 0 10%;
  }
`,dt=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,pt=g.c.div`
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */

  @media (max-width: 950px) {
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
  }
`,lt=g.c.div`
  margin: 20px 40px 30px 0;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
    margin: 0 10px 20px 0;
  }
`,mt=[{title:"Library App",imgUrl:te,cardDescription:"Librarians and students can lend/borrow book with just a click.",pageUrl:"/library-app"},{title:"Events website",imgUrl:se,cardDescription:"Helping students discover events in colleges around them.",pageUrl:"/events-website"}],ht=g.c.button`
  margin: 10px 0 0 10%;
  color: ${Pe};
  background-color: ${qe};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${Pe};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`;var xt=function(A){const[e,t]=Object(i.useState)(!1);return Object(a.jsxs)(Le,{children:[Object(a.jsxs)("div",{className:"microblogging-app-page-head",children:[Object(a.jsx)("div",{className:"microblogging-app-page-heading-container",children:Object(a.jsxs)(xe.a,{left:!0,children:[Object(a.jsxs)("div",{className:"microblogging-app-page-title-container",children:[Object(a.jsx)(Re,{}),Object(a.jsx)(Ge,{children:"Microblogging App"})]}),Object(a.jsx)(Ze,{children:"This app was for a microblogging app hackathon. It is an app that allows users to post microblogs for other users to view. Can be used by people who like writing short stories or daily diaries or post recipes online."})]})}),Object(a.jsx)(xe.a,{right:!0,children:Object(a.jsx)("div",{className:"microblogging-app-page-mockup-conatiner",children:Object(a.jsx)(He,{src:ze,alt:"microblogging app mockup"})})})]}),Object(a.jsxs)(xe.a,{left:!0,children:[Object(a.jsx)($e,{children:"Tech Stack"}),Object(a.jsx)("div",{className:"microblogging-app-tech-stack-container",children:rt.map(ot)}),Object(a.jsx)(et,{children:"Project Goal"}),Object(a.jsx)(tt,{children:"The goal of this project was to build a fully functioning microblogging app in the given timeframe of 3 days. (I may have forgotten to eat my lunch on one of the days because this was an interesting project to build ^_^ )"}),Object(a.jsx)(it,{children:"Features"}),Object(a.jsx)("div",{className:"microblogging-app-features-container",children:e?nt.map(at):nt.slice(0,2).map(at)}),Object(a.jsx)(st,{onClick:function(){t(0==e)},children:e?"Hide extra":"Show More"}),Object(a.jsx)(gt,{children:"Lessons Learnt"}),Object(a.jsxs)(ct,{children:["As this was our first app development project, we had to learn how to structure the project in a production environment. We learned how to use the parse server API to store data and authenticate users. We also learned how to create custom-looking buttons and complex listviews.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Overall, this project came out better than we expected and also won the best development award in the hackathon which booted our motivation for developing better apps with cleaner code."]}),Object(a.jsx)(dt,{children:"Other Projects"}),Object(a.jsx)(pt,{children:mt.map((function(A,e){return Object(a.jsx)(lt,{children:Object(a.jsx)(f,{title:A.title,imgUrl:A.imgUrl,cardDescription:A.cardDescription,pageUrl:A.pageUrl},e)},e)}))}),Object(a.jsx)(B.b,{style:{textDecoration:"none"},to:"/",children:Object(a.jsxs)(ht,{children:[Object(a.jsx)("i",{class:"fas fa-arrow-left"})," ","   ","Back to homepage"]})})]})]})},Bt=t.p+"static/media/mongodbIcon.41634622.png",bt=t.p+"static/media/nodeIcon.57f1722a.png",Ct=(t.p,t.p+"static/media/aightEventsFeatureImg.2d2e9e09.png");t(55);const wt=g.c.div`
  width: 400px;
  padding: 30px 20px 30px 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    padding: 20px 20px 20px 20px;
    width: auto;
  }
`,ut=g.c.img`
  width: 400px;

  @media (max-width: 950px) {
    margin: auto;
    width: 100%;
  }
`,Et=g.c.div`
  width: 100%;
  height: 270px;
  padding: 10px 20px 10px 20px;
  display: inline-block;
  box-sizing: border-box;

  @media (max-width: 950px) {
    padding: 10px 10px 10px 10px;
    height: auto;
  }
`,ft=g.c.p`
  margin: 0 0 0 0;
  color: ${A=>A.theme.highEmFc};
  font-size: 1.4rem;
  font-weight: bold;

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }
`,Qt=g.c.p`
  margin: 20px 0 0 0;
  color: ${A=>A.theme.mediumEmFc};

  @media (max-width: 950px) {
    margin: 10px 0 0 0;
    font-size: 0.8rem;
  }
`;var vt=function(A){let{img:e,title:t,description:i}=A;return Object(a.jsxs)(wt,{children:[Object(a.jsx)(ut,{src:e,alt:""}),Object(a.jsxs)(Et,{children:[Object(a.jsx)(ft,{children:t}),Object(a.jsx)(Qt,{children:i})]})]})};const It=g.c.div`
  background-color: ${A=>A.theme.projectsBackground};
  width: 100%;
  transition: 0.3s;
  padding: 5% 0 5% 0;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${A=>A.theme.resumeBackground};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${A=>A.theme.scrollBar};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${A=>A.theme.scrollBarHover};
  }

  @media (max-width: 950px) {
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`,jt=g.c.div`
  background-color: #ee6360;
  height: 140px;
  width: 8px;
  display: inline-block;
`,kt=g.c.span`
  font-size: 3.6rem;
  width: 200px;
  height: 140px;
  display: inline-block;
  color: ${A=>A.theme.highEmFc};
  margin-left: 15px;
`,Ot=g.c.img`
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
`,Ft=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin-top: 7%;
`,Ut=(g.c.div`
  margin: 10px 0;
  padding: 0 0 0 10%;
  width: 200px;
`,g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 3% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`),Vt=g.c.div`
  margin: 10px 30px 10px 0;
`,Yt=g.c.div`
  margin: 10px 30px 10px 0;

  @media (max-width: 950px) {
    margin: 10px 0 10px 0;
  }
`,Jt=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,Xt=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin: 20px 30% 0 10%;

  @media (max-width: 950px) {
    margin: 10px 10% 0 10%;
  }
`,St=(g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0 10%;
  margin: 5% 0 10px 0;
`,g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 50px 0 0 0;
    padding: 0 10% 0px 10%;
  }
`),Tt=[{icon:"data:image/png;base64,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",name:"Javacript"},{icon:"data:image/png;base64,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",name:"HTML"},{icon:"data:image/png;base64,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",name:"CSS"},{icon:"data:image/png;base64,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",name:"React js"},{icon:Bt,name:"MongoDB"},{icon:bt,name:"Node js"}];function Kt(A,e){return Object(a.jsx)(Vt,{children:Object(a.jsx)(ee,{name:A.name,icon:A.icon},e)},e)}const Dt=[{img:Ct,title:"Students can view info about events",description:"The student dashboard contains flters to filter events by date, College, and category. Students can view info about events, and register for them. Future scope would be to add a callender feature."},{img:Ct,title:"Organisers can add events",description:"Organisers can add events that are happening in their college.The event details can include date, college, name, etc. future scope is to have an edit feature."},{img:Ct,title:"Login with Google",description:"Students are allowed to login with Google. This would help in implementing the callender feature."}];function Nt(A,e){return Object(a.jsx)(Yt,{children:Object(a.jsx)(vt,{img:A.img,title:A.title,description:A.description},e)},e)}const yt=g.c.button`
  margin: 10px 0 0 10%;
  color: ${A=>A.theme.secondaryFontColor};
  background-color: ${A=>A.theme.resumeButtonBackground};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${A=>A.theme.secondaryFontColor};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`,Mt=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 0 0;
    padding: 0 10% 0px 10%;
  }
`,Wt=g.c.p`
  color: ${A=>A.theme.mediumEmFc};
  margin: 20px 30% 0 10%;

  @media (max-width: 950px) {
    margin: 10px 10% 0 10%;
  }
`,zt=g.c.p`
  color: ${A=>A.theme.highEmFc};
  font-size: 2rem;
  padding: 0 55% 0px 10%;
  margin: 5% 0 10px 0;

  @media (max-width: 950px) {
    margin: 40px 0 10px 0;
    padding: 0 10% 0px 10%;
  }
`,qt=g.c.div`
  margin-right: 10%;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */

  @media (max-width: 950px) {
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
  }
`,Pt=g.c.div`
  margin: 20px 40px 30px 0;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 950px) {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1rem;
    justify-content: center;
    margin: 0 10px 20px 0;
  }
`,Lt=[{title:"Library App",imgUrl:te,cardDescription:"Librarians and students can lend/borrow book with just a click.",pageUrl:"/library-app"},{title:"Microblogging App",imgUrl:ae,cardDescription:"Users can post micro-blogs and look at other people's blogs.",pageUrl:"/microblogging-app"}],Rt=g.c.button`
  margin: 10px 0 0 10%;
  color: ${A=>A.theme.secondaryFontColor};
  background-color: ${A=>A.theme.resumeButtonBackground};
  height: 70px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  outline: none;
  border: solid 1px ${A=>A.theme.secondaryFontColor};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 950px) {
    margin: 20px auto 0 auto;
    font-size: 1rem;
    display: block;
  }
`;var Gt=function(A){const[e,t]=Object(i.useState)(!1);return Object(a.jsxs)(It,{children:[Object(a.jsxs)("div",{className:"events-website-page-head",children:[Object(a.jsx)("div",{className:"events-website-page-heading-container",children:Object(a.jsxs)(xe.a,{left:!0,children:[Object(a.jsxs)("div",{className:"events-website-page-title-container",children:[Object(a.jsx)(jt,{}),Object(a.jsx)(kt,{children:"Events Website"})]}),Object(a.jsx)(Ft,{children:"This was for a class project and was used to win a hackathon. We decided to make a website for all the events conducted by various universities. This would help students discover more opportunities that are happening around them."})]})}),Object(a.jsx)(xe.a,{right:!0,children:Object(a.jsx)("div",{className:"events-website-page-mockup-conatiner",children:Object(a.jsx)(Ot,{src:se,alt:"Events Website mockup"})})})]}),Object(a.jsxs)(xe.a,{left:!0,children:[Object(a.jsx)(Ut,{children:"Tech Stack"}),Object(a.jsx)("div",{className:"events-website-tech-stack-container",children:Tt.map(Kt)}),Object(a.jsx)(Jt,{children:"Project Goal"}),Object(a.jsx)(Xt,{children:"As hackathon/event participants ourselves, we often missed out on events just because we didn't know they existed unless we had a friend who participated in it. To overcome this problem we decided to make a website for all the events conducted by various universities. The goal was to solve this problem in the given timeframe of 1 month."}),Object(a.jsx)(St,{children:"Features"}),Object(a.jsx)("div",{className:"events-website-features-container",children:e?Dt.map(Nt):Dt.slice(0,2).map(Nt)}),Object(a.jsx)(yt,{onClick:function(){t(0==e)},children:e?"Hide extra":"Show More"}),Object(a.jsx)(Mt,{children:"Lessons Learnt"}),Object(a.jsxs)(Wt,{children:["A few lessons learnt were:",Object(a.jsx)("br",{}),"- The CORS policy was a little tricky in the begining but we managed to sort it out.",Object(a.jsx)("br",{}),"- Having 2 dashboards at the same time was a good challenge.",Object(a.jsx)("br",{}),"- Implementation of user data persistance taught us a lot about how websites manage states.",Object(a.jsx)("br",{}),"- Google OAuth login was interesting to implement."]}),Object(a.jsx)(zt,{children:"Other Projects"}),Object(a.jsx)(qt,{children:Lt.map((function(A,e){return Object(a.jsx)(Pt,{children:Object(a.jsx)(f,{title:A.title,imgUrl:A.imgUrl,cardDescription:A.cardDescription,pageUrl:A.pageUrl},e)},e)}))}),Object(a.jsx)(B.b,{style:{textDecoration:"none"},to:"/",children:Object(a.jsxs)(Rt,{children:[Object(a.jsx)("i",{class:"fas fa-arrow-left"})," ","   ","Back to homepage"]})})]})]})};const Ht=g.c.div`
  background-color: ${A=>A.theme.projectsBackground};
  width: 100%;
  transition: 0.3s;
  padding: 5% 10%;
  box-sizing: border-box;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    background-color: ${A=>A.theme.resumeBackground};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${A=>A.theme.scrollBar};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${A=>A.theme.scrollBarHover};
  }

  @media (max-width: 950px) {
    /* width */
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
`,Zt=g.c.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 0;
  padding-bottom: 40px;

  @media (max-width: 950px) {
    font-size: 2rem;
    margin: 20px 0 40px 0;
    padding-bottom: 0;
  }
`,$t=g.c.p`
  color: white;
  font-size: 1.8rem;
  margin: 20px 0 0 0;

  @media (max-width: 950px) {
    font-size: 1.4rem;
  }
`,_t=g.c.div`
  padding-bottom: 40px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    margin: 10px 0 0 0;
    font-size: 1rem;
    justify-content: center;
  }
`,Ai=g.c.div`
  margin: 15px 25px 0 0;

  @media (max-width: 950px) {
    margin: 10px 0 0 0;
  }
`,ei=g.c.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 0px 3px 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
`,ti=g.c.p`
  color: white;
  font-size: 1.2rem;
  margin: 0 20px;

  @media (max-width: 950px) {
    font-size: 0%.8rem;
    margin: 0 15px;
  }
`,ii=g.c.img`
  height: 50px;
  @media (max-width: 950px) {
    height: 40px;
  }
`,ri=g.c.div`
  color: white;
  &:hover {
    cursor: pointer;
  }
`;var oi=function(A){let{icon:e,name:t,githubLink:i}=A;return Object(a.jsxs)(ei,{children:[Object(a.jsx)(ii,{src:e,alt:t}),Object(a.jsx)(ti,{children:t}),Object(a.jsx)(ri,{onClick:()=>{return A=i,void window.open(A,"_blank");var A},children:Object(a.jsx)(s,{children:Object(a.jsx)("i",{className:"fab fa-github fa-2x"})})})]})},ni=t.p+"static/media/defaultProjectIcon.dfcb75e6.svg";const ai=[["Python",[{icon:"data:image/png;base64,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AAA9TzoAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAICU6AAAAFKiAwAASIkOAAAgJToAAIDUZG1tbX268tRTT812AAAALMrRo0c/jQ4AAICC6VUAAEBKdAAAAKEx/h+E9+/znH3F4QAAAABJRU5ErkJggg==",name:"Pong Game",link:"https://github.com/arnxv0/python-projects/tree/main/pong-game"},{icon:"data:image/png;base64,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",name:"Hirst Painting",link:"https://github.com/arnxv0/python-projects/tree/main/hirst-painting"},{icon:"data:image/png;base64,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",name:"Turtle Crossing",link:"https://github.com/arnxv0/python-projects/tree/main/turtle-crossing"}]],["Flutter",[{icon:ni,name:"Under Development",link:"https://www.github.com"}]],["Android Java",[{icon:ni,name:"Under Development",link:"https://www.github.com"}]],["Go",[{icon:ni,name:"Under Development",link:"https://www.github.com"}]]];function si(A,e){return Object(a.jsx)(Ai,{children:Object(a.jsx)(oi,{name:A.name,icon:A.icon,githubLink:A.link})},e)}var gi=function(){return Object(a.jsxs)(Ht,{children:[Object(a.jsx)(Zt,{children:"More Projects"}),Object(a.jsx)($t,{children:ai[0][0]}),Object(a.jsx)(_t,{children:ai[0][1].map(si)}),Object(a.jsx)($t,{children:ai[1][0]}),Object(a.jsx)(_t,{children:ai[1][1].map(si)}),Object(a.jsx)($t,{children:ai[2][0]}),Object(a.jsx)(_t,{children:ai[2][1].map(si)}),Object(a.jsx)($t,{children:ai[3][0]}),Object(a.jsx)(_t,{children:ai[3][1].map(si)})]})};g.c.h1`
  color: white;
  text-align: center;
`;function ci(){const{pathname:A}=Object(HA.f)();return Object(i.useEffect)((()=>{window.scrollTo(0,0)}),[A]),null}IA.a.initialize("G-XSW03KKW7K");var di=function(){const[A,e]=(()=>{(new Date).getHours();const[A,e]=Object(i.useState)("dark"),t=A=>{window.localStorage.setItem("theme",A),e(A)};return Object(i.useEffect)((()=>{const A=window.localStorage.getItem("theme");e(A||"dark")}),[]),[A,()=>{t("dark"===A?"light":"dark")}]})(),t="light"===A?RA:GA;return Object(a.jsx)(B.a,{children:Object(a.jsxs)(g.a,{theme:t,children:[Object(a.jsx)(MA,{}),Object(a.jsx)(ci,{}),Object(a.jsxs)(HA.c,{children:[Object(a.jsxs)(HA.a,{exact:!0,path:"/",children:[Object(a.jsx)(DA,{theme:A,toggleTheme:e}),Object(a.jsx)(XA,{})]}),Object(a.jsx)(HA.a,{exact:!0,path:"/library-app",component:Me}),Object(a.jsx)(HA.a,{exact:!0,path:"/microblogging-app",component:xt}),Object(a.jsx)(HA.a,{exact:!0,path:"/events-website",component:Gt}),Object(a.jsx)(HA.a,{exact:!0,path:"/more-projects",component:gi})]})]})})};console.log("\n##     ## ######## ##    ##          ######## ######## ##       ##        #######  ##      ##          \n##     ## ##        ##  ##           ##       ##       ##       ##       ##     ## ##  ##  ##          \n##     ## ##         ####            ##       ##       ##       ##       ##     ## ##  ##  ##          \n######### ######      ##             ######   ######   ##       ##       ##     ## ##  ##  ##          \n##     ## ##          ##             ##       ##       ##       ##       ##     ## ##  ##  ##          \n##     ## ##          ##             ##       ##       ##       ##       ##     ## ##  ##  ##          \n##     ## ########    ##             ##       ######## ######## ########  #######   ###  ###           \n\n\n\n########  ######## ##     ## ######## ##        #######  ########  ######## ########         ##   ###   \n##     ## ##       ##     ## ##       ##       ##     ## ##     ## ##       ##     ##       ####    ##  \n##     ## ##       ##     ## ##       ##       ##     ## ##     ## ##       ##     ##        ##      ## \n##     ## ######   ##     ## ######   ##       ##     ## ########  ######   ########                 ## \n##     ## ##        ##   ##  ##       ##       ##     ## ##        ##       ##   ##          ##      ## \n##     ## ##         ## ##   ##       ##       ##     ## ##        ##       ##    ##        ####    ##  \n########  ########    ###    ######## ########  #######  ##        ######## ##     ##        ##   ###   \n\n"),console.log("This website was made by Arnav Dewan"),o.a.render(Object(a.jsx)(di,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.22fb5473.chunk.js.map