function getTime(){var t=new Date;return[t.getHours()/24,t.getMinutes()/60,t.getSeconds()/60]}function tick(t){hands=svg.selectAll("circle").data(t).transition().attr("cx",function(t,e){return xScale(e)}).attr("cy",200).attr("r",function(t){return yScale(t)}).attr("width",xScale.rangeBand()).attr("height",function(t){return svgHeight-yScale(t)}).style("fill",blue)}var time=getTime(),svgWidth=250,svgHeight=200,margin={top:20,right:30,bottom:30,left:40},clock=".clock",blue="hsl(221, 85%, 22%)",labels=["H","M","S"],barPadding=.2,width=svgWidth/time.length,maximumTime=[-1,1],yScale=d3.scale.linear().domain(maximumTime).range([svgHeight,-1]),xScale=d3.scale.ordinal().domain(time.map(function(t,e){return e})).rangeBands([0,svgWidth],barPadding),svg=d3.select(clock).append("svg").attr("height",svgHeight+margin.top+margin.bottom+"px").attr("width",svgWidth+margin.left+margin.right+"px").style("margin-left",-margin.left+"px").append("g").attr("transform","translate("+margin.left+","+margin.top+")"),hands=svg.selectAll("g").data(time).enter().append("g");hands.append("circle"),hands.append("text").attr("x",function(t,e){return xScale(e)+xScale.rangeBand()/2}).attr("y",215).attr("dy","0.75em").attr("text-anchor","middle").attr("fill",blue).text(function(t,e){return labels[e]}),tick(time),setInterval(function(){var t=getTime();tick(t)},1e3);