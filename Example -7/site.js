var data = [
  {"platform":"Android","percentage":40.1},
  {"platform":"Windows","percentage":36.69},
  {"platform":"iOS","percentage":13.06}
];
var svg_width = 500, svg_height=300, radius = Math.min(svg_width,svg_height)/2;
var svg = d3.select('svg')
            .attr("width",svg_width)
            .attr("height",svg_height)

var g = svg.append("g").attr("tansform","translate("+radius+","+radius+")");
var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d){
  return d.percentage;
})

var path = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);

var arc= g.selectAll("arc")
          .data(pie(data))
          .enter()
          .append("g")

arc.append("path")
    .attr("d",path)
    .attr("fill",function(d){return color(d.data.percentage);})

var label = d3.arc()
              .outerRadius(radius)
              .innerRadius(0)
arc.append("text")
  .attr("transform",function(d){
    return "translate("+label.centroid(d)+")";
  })
  .attr("text-anchor","middle")
  .text(function(d){
    return d.data.platform+":"+d.data.percentage+"%";
  })