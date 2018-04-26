d3.select();//returns first instance
d3.selectAll();//returns all instances

d3.select('h1').style('color','red')//updating style
.attr('id','trying')//updating attributes
.text("updated example 1");//updating text

d3.select('body').append('p').text("hello1");//appending elements  
d3.select('body').append('p').text("hello2");
d3.select('body').append('p').text("hello3");

d3.selectAll('p').style("color",'red');//using select all