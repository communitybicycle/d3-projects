(this["webpackJsonpfcc-data-projects"]=this["webpackJsonpfcc-data-projects"]||[]).push([[0],{59:function(e,t,a){e.exports=a(73)},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(41),l=a.n(i),c=(a(64),a(13)),o=a(88),s=a(90),u=a(92),m=a(93),d=a(91),p=Object(o.a)((function(e){return{root:{flexGrow:1},container:{width:"1000px",padding:0},title:{flexGrow:1,display:"flex",justifyContent:"flex-start","& a":{color:"white",textDecoration:"none"}},menuItem:{marginLeft:e.spacing(2),"& a":{color:"white",textDecoration:"none"}}}})),f={color:"silver"};function h(){var e=p();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static",color:"primary"},r.a.createElement(d.a,{maxWidth:"lg",disableGutters:!0,className:e.container},r.a.createElement(u.a,{disableGutters:!0},r.a.createElement(m.a,{variant:"h6",className:e.title},r.a.createElement(c.b,{exact:!0,to:"/"},"Data Projects")),r.a.createElement("div",{className:e.menuItem},r.a.createElement(m.a,{variant:"body1"},r.a.createElement(c.c,{exact:!0,to:"/",activeStyle:f},"Home"))),r.a.createElement("div",{className:e.menuItem},r.a.createElement(m.a,{variant:"body1"},r.a.createElement(c.c,{exact:!0,to:"/bar-chart",activeStyle:f},"Bar Chart"))),r.a.createElement("div",{className:e.menuItem},r.a.createElement(m.a,{variant:"body1"},r.a.createElement(c.c,{exact:!0,to:"/scatterplot-graph",activeStyle:f},"Scatterplot Graph"))),r.a.createElement("div",{className:e.menuItem},r.a.createElement(m.a,{variant:"body1"},r.a.createElement(c.c,{exact:!0,to:"/heat-map",activeStyle:f},"Heat Map")))))))}var g=a(15),x=Object(o.a)((function(){return{document:{backgroundColor:"#fff",width:"1000px",height:"800px",padding:"0",display:"flex",flexDirection:"column"},title:{height:"10%",display:"flex",justifyContent:"center",alignItems:"flex-end","& h1":{margin:"0",padding:"0"}},chart:{height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},footer:{height:"10%",display:"flex",justifyContent:"center",fontWeight:"400",alignItems:"center",color:"#333","& a":{textDecoration:"none",color:"#333","&:hover":{color:"#888"}}},tooltip:{position:"absolute",textAlign:"center",width:"auto",height:"auto",padding:"15px",fontSize:"16px",background:"lightsteelblue",border:"0px",pointerEvents:"none",opacity:0}}})),E=a(19),v=a.n(E),b=a(18),y=a(27),w=a(3);function j(){return(j=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then((function(e){return e.json()})).then((function(e){var t=Object(b.a)(e.data),a=640,n=w.k("%Y-%m-%d"),r=w.h().domain([new Date(n(e.from_date)),new Date(n(e.to_date))]).range([100,900]),i=w.g().domain([0,w.e(t,(function(e){return e[1]}))]).range([540,0]),l=w.a(r),c=w.b(i),o=w.i("#bar-chart-tooltip"),s=w.i("#chart").append("svg").attr("width",1e3).attr("height",a).append("g").attr("transform","translate(".concat(50,", ").concat(50,")"));s.append("g").attr("id","x-axis").attr("transform","translate(".concat(-50,", ").concat(540,")")).call(l),s.append("g").attr("id","y-axis").attr("transform","translate(".concat(50,", 0)")).call(c.ticks(10)),s.selectAll("rect").data(t).enter().append("rect").style("fill","steelblue").attr("data-date",(function(e){return e[0]})).attr("data-gdp",(function(e){return e[1]})).attr("x",(function(e,t){return r(n(e[0]))-50})).attr("y",(function(e){return i(e[1])})).attr("width",3).attr("height",(function(e){return 540-i(e[1])})).on("mouseover",(function(e){w.i(this).style("fill","rgb(107, 152, 189)"),o.transition().duration(100).style("opacity",.9),o.html(e[0]+"<br/>"+"$".concat(e[1]," billion")).style("left",w.c.pageX+15+"px").style("top",w.c.pageY-80+"px"),o.attr("data-date",e[0]).attr("data-gdp",e[1])})).on("mouseout",(function(e){w.i(this).style("fill","steelblue"),o.transition().duration(100).style("opacity",0)}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(75);var D=function(e){var t=x();return Object(n.useEffect)((function(){!function(){j.apply(this,arguments)}()})),r.a.createElement("div",null,r.a.createElement("div",{className:t.tooltip,id:"bar-chart-tooltip"}),r.a.createElement(N.a,{elevation:3,className:t.document},r.a.createElement("div",{className:t.title},r.a.createElement("h1",null,"United States GDP")),r.a.createElement("div",{className:t.chart,id:"chart"}),r.a.createElement("div",{className:t.footer},r.a.createElement("p",null,"More Information:\xa0",r.a.createElement("a",{href:"http://www.bea.gov/national/pdf/nipaguid.pdf",target:"_blank"},"http://www.bea.gov/national/pdf/nipaguid.pdf")))))},C=Object(o.a)((function(){return{document:{backgroundColor:"#fff",width:"1000px",height:"800px",padding:"0",display:"flex",flexDirection:"column",position:"relative"},title:{height:"15%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column","& h1":{margin:"0",padding:"0"},"& p":{margin:"0",padding:"0"}},chart:{height:"85%",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"50px"},tooltip:{position:"absolute",textAlign:"center",width:"auto",height:"auto",padding:"15px",fontSize:"16px",background:"lightsteelblue",border:"0px",pointerEvents:"none",opacity:0,zIndex:10},legendDiv:{display:"flex",alignItems:"center","& p":{marginRight:"10px",fontSize:"14px"}},legend:{position:"absolute",right:"100px",bottom:"350px",display:"flex",flexDirection:"column",alignItems:"flex-end"},orangeSquare:{width:"30px",height:"30px",backgroundColor:"rgba(255, 165, 0, 0.7)"},blueSquare:{width:"30px",height:"30px",backgroundColor:"rgba(70, 130, 180, 0.7)"}}}));function k(){return(k=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json").then((function(e){return e.json()})).then((function(e){var t=Object(b.a)(e),a=w.k("%M:%S"),n=w.j("%M:%S"),r=w.g().domain([w.f(t,(function(e){return e.Year-1})),w.e(t,(function(e){return e.Year+1}))]).range([50,850]),i=w.h().domain([w.e(t,(function(e){return new Date(a(e.Time))})),w.f(t,(function(e){return new Date(a(e.Time))}))]).range([540,0]),l=w.a(r).tickFormat(w.d("")),c=w.b(i).tickFormat(n),o=w.i("#scatterplot-tooltip"),s=w.i("#scatterchart").append("svg").attr("width",1e3).attr("height",640).append("g").attr("transform","translate(".concat(50,", ").concat(50,")"));s.append("g").attr("id","x-axis").attr("transform","translate(0, ".concat(540,")")).call(l),s.append("g").attr("id","y-axis").attr("transform","translate(".concat(50,", 0)")).call(c.ticks(12)),s.selectAll("circle").data(t).enter().append("circle").attr("class","dot").style("fill",(function(e){return e.Doping?"rgba(70, 130, 180, 0.7)":"rgba(255,165,0, 0.7)"})).attr("data-xvalue",(function(e){return e.Year})).attr("data-yvalue",(function(e){return a(e.Time)})).attr("cx",(function(e,t){return r(e.Year)})).attr("cy",(function(e){return i(a(e.Time))})).attr("r",8).on("mouseover",(function(e){o.transition().duration(100).style("opacity",.9),o.html("".concat(e.Name,": ").concat(e.Nationality,"<br/>Year: ").concat(e.Year," | Time: ").concat(e.Time).concat(e.Doping&&"<br/>"+e.Doping)).style("left",w.c.pageX+25+"px").style("top",w.c.pageY-100+"px"),o.attr("data-year",e.Year)})).on("mouseout",(function(e){o.transition().duration(100).style("opacity",0)}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){var t=C();return Object(n.useEffect)((function(){!function(){k.apply(this,arguments)}()})),r.a.createElement("div",null,r.a.createElement("div",{className:t.tooltip,id:"scatterplot-tooltip"}),r.a.createElement(N.a,{elevation:3,className:t.document},r.a.createElement("div",{className:t.title,id:"title"},r.a.createElement("h1",null,"Doping in Professional Bicycle Racing"),r.a.createElement("p",null,"35 Fastest times up Alpe d'Huez")),r.a.createElement("div",{className:t.chart,id:"scatterchart"}),r.a.createElement("div",{className:t.legend,id:"legend"},r.a.createElement("div",{className:t.legendDiv},r.a.createElement("div",null,r.a.createElement("p",null,"No doping allegations")),r.a.createElement("div",{className:t.orangeSquare,id:"orange-square"})),r.a.createElement("div",{className:t.legendDiv},r.a.createElement("div",null,r.a.createElement("p",null,"Riders with doping allegations")),r.a.createElement("div",{className:t.blueSquare,id:"blue-square"})))))},S=Object(o.a)((function(){return{document:{backgroundColor:"#fff",width:"1000px",height:"800px",padding:"0",display:"flex",flexDirection:"column"},title:{height:"10%",display:"flex",justifyContent:"center",alignItems:"flex-end","& h1":{margin:"0",padding:"0"}},chart:{height:"80%",display:"flex",justifyContent:"center",alignItems:"center"},footer:{height:"10%",display:"flex",justifyContent:"center",fontWeight:"400",alignItems:"center",color:"#333","& a":{textDecoration:"none",color:"#333","&:hover":{color:"#888"}}},tooltip:{position:"absolute",textAlign:"center",width:"auto",height:"auto",padding:"15px",fontSize:"16px",background:"lightsteelblue",border:"0px",pointerEvents:"none",opacity:0}}}));var O=function(e){var t=S();return Object(n.useEffect)((function(){})),r.a.createElement("div",null,r.a.createElement("div",{className:t.tooltip,id:"bar-chart-tooltip"}),r.a.createElement(N.a,{elevation:3,className:t.document},r.a.createElement("div",{className:t.title},r.a.createElement("h1",null,"This page is under construction")),r.a.createElement("div",{className:t.chart,id:"chart"}),r.a.createElement("div",{className:t.footer})))},T=a(44),Y=a.n(T),z=Object(o.a)((function(){return{document:{backgroundColor:"#fff",width:"1000px",height:"800px",padding:"0",display:"flex",flexDirection:"column"},title:{height:"14%",display:"flex",justifyContent:"center",alignItems:"center","& h1":{margin:"0",padding:"0"}},main:{margin:"0 50px",display:"flex",flex:1},leftColumn:{width:"60%"},rightColumn:{width:"40%"},footer:{height:"10%",display:"flex",justifyContent:"center",alignItems:"center","& svg":{fontSize:"18px",color:"green"}}}}));var R=function(e){var t=z();return r.a.createElement(N.a,{elevation:3,className:t.document},r.a.createElement("div",{className:t.title},r.a.createElement("h1",null,"Welcome to the Data Graph Site!")),r.a.createElement("main",{className:t.main},r.a.createElement("div",{className:t.leftColumn},r.a.createElement(m.a,{variant:"body1"},"This website showcases the freeCodeCamp projects on data visualization using D3.js. The charts work by making an API to gather the data and generates the visualization using D3.js."),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"body1"},"This app also uses client-side rendering for the navigation between pages.")),r.a.createElement("div",{className:t.rightColumn},r.a.createElement(m.a,{variant:"h6"},"Tools Used in This App:"),r.a.createElement("ul",null,r.a.createElement("li",null,"D3.js"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"React Router DOM"),r.a.createElement("li",null,"Material UI"),r.a.createElement("li",null,"NPM")))),r.a.createElement("footer",{className:t.footer},r.a.createElement(m.a,{variant:"subtitle1"},"Made with ",r.a.createElement(Y.a,null)," by Hal S.")))},A=Object(o.a)((function(){return{root:{backgroundColor:"lightgrey",height:"calc(100vh - 64px)",display:"flex",justifyContent:"center",alignItems:"center"}}}));var G=function(){var e=A();return r.a.createElement("div",{className:"Root"},r.a.createElement(h,null),r.a.createElement("div",{className:e.root},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(g.a,{exact:!0,path:"/bar-chart"},r.a.createElement(D,null)),r.a.createElement(g.a,{exact:!0,path:"/scatterplot-graph"},r.a.createElement(I,null)),r.a.createElement(g.a,{exact:!0,path:"/heat-map"},r.a.createElement(O,null)))))};l.a.render(r.a.createElement(c.a,{basename:"/d3-projects"},r.a.createElement(G,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.24653898.chunk.js.map