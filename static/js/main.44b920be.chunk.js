(this["webpackJsonpinjazat-signature"]=this["webpackJsonpinjazat-signature"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),i=a.n(r),c=(a(13),a(3)),s=a(4),m=a(6),h=a(5),g=a(7),d=(a(14),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",address:"",loginScreen:"yes",nameError:"",addressError:""},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onAddressChange=function(e){a.setState({address:e.target.value})},a.onKeyPress=function(e){13===e.which&&a.submitForm()},a.submitForm=function(){""===a.state.name||""===a.state.address?(""===a.state.name?a.setState({nameError:"* Name is required"}):a.setState({nameError:""}),""===a.state.address?a.setState({addressError:"* Address is required"}):a.setState({addressError:""})):a.state.name.length<5||a.state.address.length<5?(a.state.name.length<5?a.setState({nameError:"* Name should have atleast 5 characters"}):a.setState({nameError:""}),a.state.address.length<5?a.setState({addressError:"* Address should have atleast 5 characters"}):a.setState({addressError:""})):a.setState({loginScreen:"no"})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return"yes"===this.state.loginScreen?l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ui raised very padded text container segment",style:{position:"absolute",top:"5%",left:"30%"}},l.a.createElement("img",{src:"https://i.postimg.cc/Hsy5zzSw/1-01.gif",alt:""}),l.a.createElement("form",null,l.a.createElement("div",{className:"ui input",name:"name",style:{width:"100%"}},l.a.createElement("input",{type:"text",placeholder:"Enter Name",onChange:this.onNameChange,onKeyPress:this.onKeyPress})),l.a.createElement("span",null,this.state.nameError),l.a.createElement("div",{className:"ui input",style:{width:"100%",marginTop:"20px"}},l.a.createElement("input",{type:"text",name:"address",placeholder:"Enter Address",onChange:this.onAddressChange,onKeyPress:this.onKeyPress})),l.a.createElement("span",null,this.state.addressError),l.a.createElement("div",{className:"ui animated fade button",tabIndex:"0",style:{width:"100%",marginTop:"20px",backgroundColor:"#99d349",color:"white"},onClick:this.submitForm},l.a.createElement("div",{className:"visible content"},"Make Signature"),l.a.createElement("div",{className:"hidden content"},"Let's Go!"))))):(console.log("hello"),l.a.createElement("div",null,l.a.createElement("table",{id:"Table_01",width:"1612",height:"706",border:"0",cellPadding:"0",cellSpacing:"0"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:"5"},l.a.createElement("img",{src:"https://i.postimg.cc/7Pd93bdB/lattest-injazat-01.gif",width:"579",height:"384",alt:"injazat"})),l.a.createElement("td",{colSpan:"7"},l.a.createElement("img",{src:"https://i.postimg.cc/YqF3bMwt/lattest-injazat-02.gif",width:"1032",height:"26",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"26",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4"},l.a.createElement("img",{src:"https://i.postimg.cc/4dnvtT5k/lattest-injazat-03.gif",width:"224",height:"66",alt:""})),l.a.createElement("td",{colSpan:"3"},l.a.createElement("img",{src:"https://i.postimg.cc/mgNSWjDq/lattest-injazat-04.gif",width:"808",height:"66",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"66",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"7"},l.a.createElement("img",{src:"https://i.postimg.cc/jjMQLjy4/lattest-injazat-05.gif",width:"1032",height:"177",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"177",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:"https://i.postimg.cc/jjx4xfnj/lattest-injazat-06.gif",width:"66",height:"43",alt:""})),l.a.createElement("td",{colSpan:"6"},l.a.createElement("img",{src:"https://i.postimg.cc/9QjBkKWZ/lattest-injazat-07.gif",width:"966",height:"43",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"43",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"7",rowSpan:"2"},l.a.createElement("img",{src:"https://i.postimg.cc/gcXq2mj3/lattest-injazat-08.gif",width:"1032",height:"122",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"72",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{rowSpan:"2"},l.a.createElement("img",{src:"https://i.postimg.cc/6qvdjLgM/lattest-injazat-09.gif",width:"579",height:"192",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"50",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"7"},l.a.createElement("img",{src:"https://i.postimg.cc/y6MhJt3t/lattest-injazat-10.gif",width:"1032",height:"142",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"142",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"8"},l.a.createElement("img",{src:"https://i.postimg.cc/VNZnzVc7/lattest-injazat-11.png",width:"1611",height:"59",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"59",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"3",rowSpan:"2"},l.a.createElement("img",{src:"https://i.postimg.cc/15DGDBpt/lattest-injazat-12.gif",width:"683",height:"70",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"https://i.postimg.cc/GmQv5pgn/lattest-injazat-13.gif",width:"76",height:"57",alt:""})),l.a.createElement("td",{colSpan:"2"},l.a.createElement("img",{src:"https://i.postimg.cc/g023FP1X/lattest-injazat-14.gif",width:"57",height:"57",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"https://i.postimg.cc/NjY1DX4x/lattest-injazat-15.gif",width:"62",height:"57",alt:""})),l.a.createElement("td",{rowSpan:"2"},l.a.createElement("img",{src:"https://i.postimg.cc/tTL6xnJW/lattest-injazat-16.gif",width:"733",height:"70",alt:""})," "),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"57",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"4"},l.a.createElement("img",{src:"https://i.postimg.cc/nzs7rGFn/lattest-injazat-17.gif",width:"195",height:"13",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"1",height:"13",alt:""}))),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"579",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"66",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"38",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"76",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"44",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"13",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"62",height:"1",alt:""})),l.a.createElement("td",null,l.a.createElement("img",{src:"spacer.gif",width:"733",height:"1",alt:""})),l.a.createElement("td",null))))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.44b920be.chunk.js.map