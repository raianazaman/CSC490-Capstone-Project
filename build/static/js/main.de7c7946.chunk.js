(this["webpackJsonpnc-community"]=this["webpackJsonpnc-community"]||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/brand.e8d492e3.png"},31:function(e,a,t){e.exports=t(61)},36:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(28),r=t.n(c),m=(t(36),t(8)),o=t(7),s=t(29),u=t.n(s);var i=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement(o.b,{className:"navbar-brand d-flex align-items-center",to:"/"},n.a.createElement("img",{src:u.a,alt:"Brand_Image"}),n.a.createElement("p",{className:"m-0 ml-2"},"Community collage course search tool")),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},n.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.c,{className:"nav-link",to:"/",exact:!0},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.c,{className:"nav-link",to:"/about"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.c,{className:"nav-link",to:"/search"},"Search Result"))))))};var d=function(){return n.a.createElement("footer",{className:"py-2 px-3 d-flex flex-column mt-4 mt-sm-0 bg-light"},n.a.createElement(o.b,{to:"/",className:"text-dark text-center"},"Contact information"),n.a.createElement(o.b,{to:"/",className:"text-center text-dark"},"All right reserved by"))},E=t(11),p=t(16);var b=function(e){var a=e.searchQuery,t=e.setSearchQuery,l=e.setResultPage,c=function(e){var a=e.target,l=a.name,n=a.value;t((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(E.a)({},l,n))}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center px-2 px-sm-5"},n.a.createElement("h2",{className:"text-center font-weight-bold"},"Search available course from NC community colleges."),n.a.createElement("h5",{className:"text-center mb-3"},"Please enter the following information to get start"),n.a.createElement("div",{className:"form-group row w-75"},n.a.createElement("label",{htmlFor:"courseId",className:"col-sm-4 col-form-label"},"Course ID"),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("input",{className:"form-control",id:"courseId",name:"id",value:a.id,onChange:c}))),n.a.createElement("div",{className:"form-group row w-75"},n.a.createElement("label",{htmlFor:"academicYear",className:"col-sm-4 col-form-label"},"Academic Year"),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("select",{id:"academicYear",name:"year",className:"form-control",value:a.year,onChange:c},n.a.createElement("option",{value:"2020"},"2020"),n.a.createElement("option",{value:"2019"},"2021"),n.a.createElement("option",{value:"2018"},"2022")))),n.a.createElement("div",{className:"form-group row w-75"},n.a.createElement("label",{htmlFor:"semester",className:"col-sm-4 col-form-label"},"Semester"),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("select",{id:"semester",name:"semester",className:"form-control",value:a.semester,onChange:c},n.a.createElement("option",{value:"Summer"},"Summer"),n.a.createElement("option",{value:"Fall"},"Fall"),n.a.createElement("option",{value:"Winter"},"Winter")))),n.a.createElement("div",{className:"form-group row w-75"},n.a.createElement("label",{htmlFor:"courseType",className:"col-sm-4 col-form-label"},"Type of course"),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("select",{id:"courseType",name:"type",className:"form-control",value:a.type,onChange:c},n.a.createElement("option",{value:"All"},"All"),n.a.createElement("option",{value:"Online"},"Online"),n.a.createElement("option",{value:"Ofline"},"On Campus")))),n.a.createElement("button",{className:"btn mt-3 bg-primary-custom text-light",onClick:function(){a.id&&a.year&&a.semester&&a.type?l(1):l(0)}},"Search")))};var g=function(e){var a=e.selectedCollege;return n.a.createElement(n.a.Fragment,null,a&&n.a.createElement("div",{className:"modal fade",id:"exampleModal",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},a.College),n.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Course Name : ",a.CourseName)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Course Subject : ",a.CourseSubject)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Class ID : ",a.ClassID)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Credits : ",a.Credits)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Instructor : ",a.Instructor)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Section Number : ",a.SectionNumber)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Semester : ",a.Semester)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Year : ",a.Year)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Class Days : ",a.ClassDays)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Course Building : ",a.CourseBuilding)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Course Room : ",a.CourseRoom)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Location : ",a.Location)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Time Of Course : ",a.TimeOfCourse)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Weeks In Semester : ",a.WeeksInSemester)),n.a.createElement("div",{className:"col-md-6 mb-2"},n.a.createElement("p",null,"Dates : ",a.Dates))))))))};var v=function(e){var a=e.searchQuery,t=e.setSearchQuery,c=e.setResultPage,r=e.searchData,o=e.setSearchData,s=Object(l.useState)({College:""}),u=Object(m.a)(s,2),i=u[0],d=u[1],E=Object(l.useRef)(null);return n.a.createElement("div",{className:"container search-query px-2 px-sm-3"},n.a.createElement("h5",{className:"font-weight-bold text-center mb-3"},"Show search result for:"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6 mb-3 mb-md-0 col-md-3"},n.a.createElement("p",{className:"text-center"},"Course ID"),n.a.createElement("input",{type:"text",value:a.id,className:"form-control",readOnly:!0})),n.a.createElement("div",{className:"col-6 mb-3 mb-md-0 col-md-3"},n.a.createElement("p",{className:"text-center"},"Acedemic year"),n.a.createElement("input",{type:"text",value:a.year,className:"form-control",readOnly:!0})),n.a.createElement("div",{className:"col-6 mb-3 mb-md-0 col-md-3"},n.a.createElement("p",{className:"text-center"},"Semester"),n.a.createElement("input",{type:"text",value:a.semester,className:"form-control",readOnly:!0})),n.a.createElement("div",{className:"col-6 mb-3 mb-md-0 col-md-3"},n.a.createElement("p",{className:"text-center"},"Type of course"),n.a.createElement("input",{type:"text",value:a.type,className:"form-control",readOnly:!0}))),n.a.createElement("div",{className:"search-result-table table-responsive-lg my-4",ref:E},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Name of Community college"),n.a.createElement("th",{scope:"col"},"Course ID"),n.a.createElement("th",{scope:"col"},"Credit"),n.a.createElement("th",{scope:"col"},"Course Description"),n.a.createElement("th",{scope:"col"},"Cost"))),n.a.createElement("tbody",null,r&&r.length>0?r.map((function(e){return n.a.createElement("tr",{key:e._id},n.a.createElement("th",null,e.College),n.a.createElement("td",null,"".concat(e.CourseSubject," ").concat(e.ClassID)),n.a.createElement("td",null,e.Credits),n.a.createElement("td",{"data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return d(e)}}," Click here for more information"),n.a.createElement("td",null,"$",76*e.Credits))})):null==r?n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"5",align:"center"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))):n.a.createElement("tr",null,n.a.createElement("td",null,"No Result Found..."))))),n.a.createElement("div",{className:"d-flex mb-5"},n.a.createElement("button",{className:"btn text-light bg-primary-custom mr-2",onClick:function(){t({id:"",year:"2020",semester:"Fall",type:"Online"}),c(0),o(null)}},"Search Again"),n.a.createElement("button",{className:"btn text-light bg-primary-custom mr-2",onClick:function(){var e=localStorage.getItem("saveResult"),a=e?JSON.parse(e).concat(r):r;localStorage.setItem("saveResult",JSON.stringify(a)),window.alert("Search Result Saved")}},"Save Result"),n.a.createElement("button",{className:"btn text-light bg-primary-custom mr-2",onClick:function(){var e=window.open("","","height=700,width=700");e.document.write(E.current.outerHTML),e.document.close(),e.print()}},"Download Pdf")),n.a.createElement(g,{selectedCollege:i}))},N=t(12),h=t.n(N),f=function(){var e=Object(l.useState)({id:"",year:"2020",semester:"Fall",type:"Online"}),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(0),o=Object(m.a)(r,2),s=o[0],u=o[1],E=Object(l.useState)(null),p=Object(m.a)(E,2),g=p[0],N=p[1];return Object(l.useEffect)((function(){if(s){var e=t.id.toUpperCase();h.a.get("http://uncgtransfer.herokuapp/cccourse/find",{params:{CourseSubject:e,classType:t.type,year:t.year,semester:t.semester}}).then((function(e){N(e.data)})).catch((function(e){console.log(e)}))}}),[s]),n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),0===s?n.a.createElement(b,{searchQuery:t,setSearchQuery:c,setResultPage:u}):n.a.createElement(v,{searchQuery:t,searchData:g,setSearchQuery:c,setResultPage:u,setSearchData:N}),n.a.createElement(d,null))},y=t(1),C=function(){var e=Object(l.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){h.a.get("http://uncgtransfer.herokuapp/cccourse/college").then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement("div",{className:"container px-2 px-sm-5 py-5"},n.a.createElement("p",{className:"text-center"},"If you find a couse you need, you can sign up at the NC community college offering it and have the credits transferred to yout community colege or university. Contact your advisor before you register for courses at another college"),n.a.createElement("h5",{className:"text-center mb-3 font-weight-bold"},"List of Community college"),n.a.createElement("div",{className:"community_college_list list-group w-75 mx-auto"},t.length>0?t.map((function(e,a){return n.a.createElement("p",{className:"list-group-item list-group-item-action",key:a},e)})):n.a.createElement("p",null,"No college Found"))),n.a.createElement(d,null))},x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"d-flex justify-content-center align-items-center h-100"},n.a.createElement("h2",{className:"text-dark text-center font-weight-bold"},"404")))},S=function(){var e=Object(l.useState)({College:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(JSON.parse(localStorage.getItem("saveResult"))),o=Object(m.a)(r,2),s=o[0],u=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement("div",{className:"container search-query px-2 px-sm-3"},n.a.createElement("div",{className:"search-result-table table-responsive-lg my-4"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Name of Community college"),n.a.createElement("th",{scope:"col"},"Course ID"),n.a.createElement("th",{scope:"col"},"Credit"),n.a.createElement("th",{scope:"col"},"Course description"),n.a.createElement("th",{scope:"col"},"Cost"))),n.a.createElement("tbody",null,s&&s.length>0?s.map((function(e){return n.a.createElement("tr",{key:e._id},n.a.createElement("th",{"data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return c(e)}},e.College),n.a.createElement("td",null,"".concat(e.CourseSubject," ").concat(e.ClassID)),n.a.createElement("td",null,e.Credits),n.a.createElement("td",null,"Course Description"),n.a.createElement("td",null,"$",76*e.Credits))})):n.a.createElement("tr",null,n.a.createElement("th",null,"No Save Data"))))),n.a.createElement("div",{className:"d-flex mb-5"},n.a.createElement("button",{className:"btn text-light bg-primary-custom mr-2",onClick:function(){localStorage.removeItem("saveResult");var e=JSON.parse(localStorage.getItem("saveResult"));u(e)}},"Clear"))),n.a.createElement(g,{selectedCollege:t}),n.a.createElement(d,null))};var O=function(){return n.a.createElement("div",{className:"app d-flex flex-column justify-content-between"},n.a.createElement(y.c,null,n.a.createElement(y.a,{exact:!0,path:"/"},n.a.createElement(f,null)),n.a.createElement(y.a,{path:"/about"},n.a.createElement(C,null)),n.a.createElement(y.a,{path:"/search"},n.a.createElement(S,null)),n.a.createElement(x,null)))};t(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(59);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,null,n.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.de7c7946.chunk.js.map