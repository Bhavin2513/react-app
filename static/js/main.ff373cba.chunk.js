(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),l=a.n(r),i=a(21),c=a(6),d=a(7),s=a(9),p=a(8),u=a(11),m=a(10),f=a(5),h=a.n(f),b=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getstyle=function(){return{background:"#f4f4f4",padding:"5px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.isCompleted?"line-through":"none"}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.task;return o.a.createElement("div",{style:this.getstyle()},o.a.createElement("p",{style:{fontSize:"20px",margin:"10px"}},o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),"   ",a,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:y},"X")))}}]),a}(n.Component);b.proptype={todo:h.a.object.isRequired};var y={background:"#ff0000",color:"white",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},v=b,E=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement("div",null,o.a.createElement(v,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo}))}))}}]),a}(n.Component);E.proptype={todos:h.a.array.isRequired};var g=E;var x={background:"#333",color:"#fff",textAlign:"center",padding:"4px"},k=function(){return o.a.createElement("header",{style:x},o.a.createElement("h1",null,"To-Do List."),o.a.createElement(u.b,{style:{color:"white"},to:"/"},"Home")," | ",o.a.createElement(u.b,{style:{color:"white"},to:"/about"},"About"))},C={title:"",fill:""},j=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state=C,e.onChange=function(t){e.setState({title:t.target.value})},e.validate=function(){if(""===e.state.title){return e.setState({fill:"Fill the todo space..."}),!1}return!0},e.onSubmit=function(t){t.preventDefault(),e.validate()&&(e.setState(C),e.props.addTodo(e.state.title),e.setState({title:""}))},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",padding:"5px"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add todo-item ...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"7px",marginRight:"8px"}}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}),o.a.createElement("br",null)),o.a.createElement("div",{style:{padding:"6px"}},this.state.fill))}}]),a}(n.Component);var O={background:"#333",color:"#fff",textAlign:"center",padding:"15px",fontSize:"33px"},S=function(){return o.a.createElement("div",null,o.a.createElement("header",{style:O},"About Section ",o.a.createElement("div",{style:{textAlign:"left",fontSize:"18px"}},o.a.createElement(u.b,{to:"/",style:{color:"white"}},"Home"))),o.a.createElement("p",{style:{fontSize:"25px",padding:"10px"}},"This is a Todo-List App v1.0.1."))},T=(a(32),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).markComplete=function(e){n.setState({todos:n.state.todos.map((function(t){return t.id===e&&(t.isCompleted=!t.isCompleted,console.log(e)),t}))})},n.delTodo=function(e){n.setState({todos:n.state.todos.filter((function(t){return t.id!==e}))})},n.addTodo=function(e){var t={id:n.keycount,task:e,isCompleted:!1};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[t])}),n.keycount++},n.state={todos:[]},n.keycount=1,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(u.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null),o.a.createElement(j,{addTodo:e.addTodo}),o.a.createElement(g,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:S}))))}}]),a}(o.a.Component));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ff373cba.chunk.js.map