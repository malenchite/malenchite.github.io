(this["webpackJsonpmalenchite.github.io"]=this["webpackJsonpmalenchite.github.io"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(41),c=n.n(r),o=(n(51),n(17)),s=n(8),l=n(4),d=(n(52),n(2));var h=function(){var e=Object(l.f)(),t=Object(a.useState)(!0),n=Object(s.a)(t,2),i=n[0],r=n[1],c=function(){return r(!0)};return Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top",children:[Object(d.jsx)(o.b,{to:"/",className:"title-name",onClick:c,replace:!0,children:"S Israel"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","aria-expanded":!i,"aria-label":"Toggle navigation",onClick:function(){return r(!i)},children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"".concat(i?"collapse":""," navbar-collapse justify-content-end"),children:Object(d.jsxs)("div",{className:"navbar-nav",children:[Object(d.jsxs)(o.b,{to:"/contact",className:"/contact"===e.pathname?"nav-link active":"nav-link",onClick:c,replace:!0,children:["Contact ","/contact"===e.pathname?Object(d.jsx)("span",{className:"sr-only",children:"(current)"}):""]}),Object(d.jsxs)(o.b,{to:"/portfolio",className:"/portfolio"===e.pathname?"nav-link active":"nav-link",onClick:c,replace:!0,children:["Portfolio ","/portfolio"===e.pathname?Object(d.jsx)("span",{className:"sr-only",children:"(current)"}):""]}),Object(d.jsxs)(o.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link",onClick:c,replace:!0,children:["About ","/"===e.pathname?Object(d.jsx)("span",{className:"sr-only",children:"(current)"}):""]})]})})]})})};n(59);var b=function(){return Object(d.jsx)("footer",{className:"footer mt-auto py-3 fixed-bottom",children:Object(d.jsxs)("div",{className:"container text-center",children:[Object(d.jsx)("span",{className:"text-muted",children:"Copyright \xa92020-2022 S Israel "}),Object(d.jsx)("button",{className:"gh-button",children:Object(d.jsxs)("a",{href:"https://github.com/malenchite/malenchite.github.io",target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("i",{className:"fab fa-github gh-icon"}),Object(d.jsx)("span",{className:"sr-only",children:" GitHub Repo"})]})})]})})},A=n(103),u=(n(60),{type:"tween",ease:"linear",duration:.25});var m=function(e){return Object(d.jsx)(A.a.main,{initial:{x:"-100vw"},animate:{x:0},exit:{x:"100vw"},transition:u,className:"container pt-4 pl-5 pr-5 clearfix",children:e.children})},j=n(29);n(61);var g=function(){return document.title="S Israel | About",Object(d.jsx)(m,{children:Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{className:"section-header",children:"About Me"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-6 col-lg-5 text-center",children:[Object(d.jsx)("img",{className:"img-fluid portrait",src:j.default,alt:"Portrait of Me"}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("button",{className:"icon-button mr-3",children:Object(d.jsxs)("a",{href:"https://www.linkedin.com/in/scisrael/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:[Object(d.jsx)("i",{className:"fab fa-linkedin about-icon"})," ",Object(d.jsx)("span",{className:"sr-only",children:"LinkedIn"})]})}),Object(d.jsx)("button",{className:"icon-button",children:Object(d.jsxs)("a",{href:"https://github.com/malenchite",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:[Object(d.jsx)("i",{className:"fab fa-github about-icon"})," ",Object(d.jsx)("span",{className:"sr-only",children:"GitHub"})]})})]})]}),Object(d.jsxs)("div",{className:"col-md-6 col-lg-7",children:[Object(d.jsx)("p",{children:"I am a back-end web developer with expertise in complex technology projects, leveraging experience in engineering and embedded software development. I have excellent skills in problem-solving and debugging with years of experience inresolving problems in code, as well as learning new technologies and languages. I have a proven track record working both in multi-disciplinary teams and as an individual contributor."}),Object(d.jsx)("p",{children:"My journey has taken me from biomedical engineering through maritime robotics research, UI and behavioral software for pharmacy automation, and embedded development for personal navigation devices. I am excited to take the next step on my path into web development, applying my unique background, creativity, and life-long interest in programming to creating the future of the web."}),Object(d.jsx)("p",{children:"Completed a certificate in full stack development from UNC Chapel Hill in May of 2021."}),Object(d.jsx)("p",{children:"For more information, my resume is available on request."}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{children:"Skills"})})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"HTML/CSS"}),Object(d.jsx)("li",{children:"JavaScript"}),Object(d.jsx)("li",{children:"node.js"})]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Express"}),Object(d.jsx)("li",{children:"MySQL"}),Object(d.jsx)("li",{children:"MongoDB"})]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"React"}),Object(d.jsx)("li",{children:"MERN"}),Object(d.jsx)("li",{style:{visibility:"hidden"}})]})})]})})]})]})]})]})})},p=n(26),f=n(45),x=n(43),v=n.n(x),O=n(44),k=n.n(O);var N={submitForm:function(e){return k.a.post("https://malenchite-contact.herokuapp.com/contact",e)}};n(81);var U=function(){var e,t,n,i=Object(a.useState)({text:"Submit",disabled:!1}),r=Object(s.a)(i,2),c=r[0],o=r[1],l=Object(a.useState)(""),h=Object(s.a)(l,2),b=h[0],A=h[1],u=Object(f.a)(),m=u.register,j=u.formState.errors,g=u.handleSubmit;return Object(d.jsxs)("form",{id:"contact-form",onSubmit:g((function(e,t){A(""),o({text:"Sending...",disabled:!0}),N.submitForm(e).then((function(){A("Message sent!"),t.target.reset()})).catch((function(){return A("Error in sending")})).finally((function(){return o({text:"Submit",disabled:!1})}))})),noValidate:!0,children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{id:"name-field",children:"Name"}),Object(d.jsx)("span",{className:"ml-5 error",children:null===(e=j.name)||void 0===e?void 0:e.message}),Object(d.jsx)("input",Object(p.a)({id:"name-input",name:"name",type:"text",className:"form-control",placeholder:"Name","aria-label":"Name","aria-describedby":"name-field"},m("name",{required:"Required"})))]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{id:"email-field",children:"Email"}),Object(d.jsx)("span",{className:"ml-5 error",children:null===(t=j.email)||void 0===t?void 0:t.message}),Object(d.jsx)("input",Object(p.a)({id:"email-input",name:"email",type:"email",className:"form-control",placeholder:"Email","aria-label":"Email","aria-describedby":"email-field"},m("email",{required:"Required",validate:function(e){return!!v.a.validate(e)||"Invalid Address"}})))]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{id:"message-field",children:"Message"}),Object(d.jsx)("span",{className:"ml-5 error",children:null===(n=j.message)||void 0===n?void 0:n.message}),Object(d.jsx)("textarea",Object(p.a)({id:"message-input",name:"message",rows:5,className:"form-control",placeholder:"Message of at least 10 characters","aria-label":"Message","aria-describedby":"message-field"},m("message",{required:"Required",minLength:{value:10,message:"10 character minimum"}})))]}),Object(d.jsx)("button",{id:"contact-submit",className:"btn contact-submit",type:"submit",disabled:c.disabled,children:c.text}),Object(d.jsx)("span",{id:"contact-status",className:"ml-3",children:b})]})};var y=function(){return document.title="S Israel | Contact",Object(d.jsx)(m,{children:Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{className:"section-header",children:"Contact"}),Object(d.jsx)("hr",{}),Object(d.jsx)(U,{}),Object(d.jsxs)("div",{className:"pb-3",children:["Alternatively, you can email me at ",Object(d.jsx)("a",{href:"mailto:malenchite@gmail.com",children:"malenchite@gmail.com"})]})]})})},E=[{id:1,name:"The Web Dev Game",thumbnail:"the-web-dev-game-thumbnail.png",technologies:"React, Tailwind, Express, Mongoose, Socket.io",description:"A two-player interactive strategy game with a web development trivia component so you can challenge your friends while refining your web dev knowledge.",githubLink:"https://github.com/malenchite/web-dev-game",deployLink:"https://the-web-dev-game.herokuapp.com/"},{id:2,name:"RPG Manager",thumbnail:"rpg-manager-thumbnail.png",technologies:"Sequelize, Express, Handlebars",description:"An application for the avid tabletop gamer to keep track of all of their characters in one place",githubLink:"https://github.com/malenchite/rpg-manager",deployLink:"https://p2-rpg-manager.herokuapp.com/"},{id:3,name:"Trivia Trainer",thumbnail:"trivia-trainer-thumbnail.png",technologies:"API, Bootstrap, jQuery",description:"A trivia application with history tracking for training your brain",githubLink:"https://github.com/malenchite/trivia-trainer",deployLink:"https://malenchite.github.io/trivia-trainer"},{id:4,name:"Workout Tracker",thumbnail:"workout-tracker-thumbnail.png",technologies:"node.js, Express, Mongoose",description:"A web application for tracking daily workouts and exercises",githubLink:"https://github.com/malenchite/workout-tracker",deployLink:"https://malenchite-workout.herokuapp.com/"},{id:5,name:"Note Taker",thumbnail:"note-taker-thumbnail.png",technologies:"node.js, Express",description:"A simple server allowing notes to be saved and loaded",githubLink:"https://github.com/malenchite/note-taker",deployLink:"http://malenchite-note-taker.herokuapp.com"},{id:6,name:"Burger Logger",thumbnail:"burger-logger-thumbnail.png",technologies:"node.js, Express, Handlebars, MySQL",description:"A web application for tracking burger consumption",githubLink:"https://github.com/malenchite/burger-logger",deployLink:"https://malenchite-burger.herokuapp.com/"}];n(82);var q=function(e){return e.info?Object(d.jsx)("div",{className:"col-lg",children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("a",{href:e.info.githubLink,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"figure-img img-fluid portfolio-image",src:n(83)("./".concat(e.info.thumbnail)).default,alt:"".concat(e.info.name," Thumbnail")})}),Object(d.jsxs)("figcaption",{className:"figure-caption",children:[e.info.name," - ",e.info.technologies,Object(d.jsx)("br",{}),e.info.description,Object(d.jsx)("br",{}),e.info.deployLink?Object(d.jsx)("a",{href:e.info.deployLink,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{type:"button",className:"btn btn-link",children:"Deployed"})}):""]})]})}):""};var L=function(e){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(q,{info:e.project1}),Object(d.jsx)(q,{info:e.project2})]})};var T=function(){return document.title="S Israel | Portfolio",Object(d.jsx)(m,{children:Object(d.jsxs)("section",{className:"pb-2",children:[Object(d.jsx)("h1",{className:"section-header",children:"Portfolio"}),Object(d.jsx)("hr",{}),function(){for(var e=[],t=0;t<E.length;t+=2)e.push(Object(d.jsx)(L,{project1:E[t],project2:E[t+1]},E[t].id));return e}()]})})},I=n(104);n(100);var R=function(){var e=Object(l.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)(I.a,{exitBeforeEnter:!0,initial:!1,children:Object(d.jsxs)(l.c,{location:e,children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:g},"about"),Object(d.jsx)(l.a,{path:"/contact",component:y},"contact"),Object(d.jsx)(l.a,{path:"/portfolio",component:T},"portfolio")]},e.pathname)}),Object(d.jsx)(b,{})]})};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(R,{})})}),document.getElementById("root"))},29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/portrait.a07bb880.png"},52:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){var a={"./background-tile.png":84,"./burger-logger-thumbnail.png":85,"./code-quiz-thumbnail.png":86,"./code-refactor-thumbnail.png":87,"./coming-soon.png":88,"./employee-tracker-thumbnail.png":89,"./note-taker-thumbnail.png":90,"./password-generator-thumbnail.png":91,"./portrait.png":29,"./readme-generator-thumbnail.png":92,"./rpg-manager-thumbnail.png":93,"./team-profile-generator-thumbnail.png":94,"./the-web-dev-game-thumbnail.png":95,"./trivia-trainer-thumbnail.png":96,"./weather-dashboard-thumbnail.png":97,"./work-day-scheduler-thumbnail.png":98,"./workout-tracker-thumbnail.png":99};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=83},84:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/background-tile.5f736ed9.png"},85:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/burger-logger-thumbnail.4d6fd879.png"},86:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/code-quiz-thumbnail.599d9b8e.png"},87:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/code-refactor-thumbnail.70dcc7a5.png"},88:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/coming-soon.afe2d499.png"},89:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},90:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/note-taker-thumbnail.1ff341d7.png"},91:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/password-generator-thumbnail.e4caf58a.png"},92:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/readme-generator-thumbnail.223c56b0.png"},93:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rpg-manager-thumbnail.094ea6d0.png"},94:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/team-profile-generator-thumbnail.c8af8d3d.png"},95:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/the-web-dev-game-thumbnail.4c608b1d.png"},96:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/trivia-trainer-thumbnail.a30fd438.png"},97:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/weather-dashboard-thumbnail.6f983832.png"},98:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/work-day-scheduler-thumbnail.290b09ae.png"},99:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/workout-tracker-thumbnail.d5c0851d.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.c115f427.chunk.js.map