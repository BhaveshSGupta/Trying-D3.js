var bar_graph=[80,70,65,80,99,25,150,45]

var svg_width =500, svg_height=300, bar_padding=5;
var bar_width=(svg_width/bar_graph.length)
d3.select('body')
  .append('svg')
  .attr('class','bar-chart')
  .attr('width',svg_width)
  .attr('height',svg_height)

var svg = d3.select('svg')

var yScale = d3.scaleLinear()
    .domain([0, d3.max(bar_graph)])
    .range([0, svg_height-20]);
var xScale=d3.scaleLinear()
    .domain([0,d3.max(bar_graph)])
    .range([svg_height,0]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);
svg.append("g")
  .attr("transform","translate(50,10)")
  .call(y_axis);
  xAxisTranslate = svg_height-20;
svg.append("g")
  .attr("transform","translate(50,"+xAxisTranslate+")")
  .call(x_axis);
  
var bar_chart = svg.selectAll("rect")
    .data(bar_graph)
    .enter()
    .append("rect")
    .attr("y",function(d){
      return svg_height - yScale(d);
    })
    .attr("height",function(d){
      return yScale(d);
    })
    .attr("width",bar_width - bar_padding)
    .attr("transform",function(d,i){
      var translate = [bar_width * i, 0];
      return "translate("+translate+")";
    });

var text = svg.selectAll("text")
    .data(bar_graph)
    .enter()
    .append("text")
    .text(function(d){
      return d;
    })
    .attr("y", function(d,i){
      return svg_height - yScale(d) -2;
    })
    .attr("x", function(d,i){
      return bar_width * i;
    })
    .attr("fill","#000")