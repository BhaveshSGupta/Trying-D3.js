var data=[1,2,3,4,5]
//we have data we are trying to create data for each item
d3.select('body')//this would select body
  .selectAll('p')//it would try to select all p inside body but as it is empty it would return nothing
  .data(data)//This would put data into waiting state.
  .enter()//this would take data one by one and perform following action one by one
  .append('p')//this would append 5 p into body and add text from following
  .text('D3 is worth trying')
  .text(function(d){ return d;})// here we have passed a function in text method, the parameter of the function contains value of data.