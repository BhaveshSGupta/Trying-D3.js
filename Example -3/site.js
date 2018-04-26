var bar_graph=[80,70,65,80,99,25,150,45]

var svg_width =500, svg_height=300, bar_padding=5;
var bar_width=(svg_width/bar_graph.length)
d3.select('body')
  .append('svg')
  .attr('class','bar-chart')
  .attr('width',svg_width)
  .attr('height',svg_height)

var svg = d3.select('svg')
var bar_chart = svg.selectAll("rect")
    .data(bar_graph)
    .enter()
    .append("rect")
    .attr("y",function(d){
      return svg_height - d;
    })
    .attr("height",function(d){
      return d;
    })
    .attr("width",bar_width - bar_padding)
    .attr("transform",function(d,i){
      var translate = [bar_width * i, 0];
      return "translate("+translate+")";
    });

