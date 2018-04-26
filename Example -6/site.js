var svg_width =500, svg_height=500;
d3.select('body')
  .append('svg')
  .attr('class','svg-element')
  .attr('width',svg_width)
  .attr('height',svg_height)
  .append("line")
  .attr("x1",100)
  .attr("x2",500)
  .attr("y1",50)
  .attr("y2",50)
  .attr("stroke","red")
  .attr("stroke-width",5)
  
var svg=d3.select('svg');
svg.append("rect")
  .attr("x","100")
  .attr("y","100")
  .attr("width","200")
  .attr("height","100")
  .attr("fill","#9B95FF")

svg.append("circle")
  .attr("cx","200")
  .attr("cy","300")
  .attr("r","80")
  .attr("fill","#7CE8D5")
  