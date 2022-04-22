
// let arcChartWidth = 200, arcChartHeight = 200, fullAngleArc = 2* Math.PI;
// let arc = d3.select(".grid-it-3").append("svg")
//             .attr("width", arcChartWidth).attr("height", arcChartHeight)
            
// let dataArc = [{startAngle:0, endAngle:1.5,color:'#FFA41B'},
//             {startAngle:1.5, endAngle:3.4,color:'#000839'},
//             {startAngle:3.4, endAngle:4.2,color:'#00A8CC'},
//             {startAngle:4.2, endAngle:5.9,color:'rgb(255, 144, 0)'},
//             {startAngle:5.9, endAngle:6.28,color:'#005082'}];
// let segmentsArc = d3.arc()
//                 .innerRadius(35)
//                 .outerRadius(90)
//                 .padAngle(.5)
//                 .padRadius(10)
//                 .cornerRadius(4);
// let sectionsArc = arc.append("g").attr("transform", "translate(100, 100)")
//     .selectAll("path").data(dataArc);
// sectionsArc.enter().append("path").attr("d", segmentsArc).attr("fill", (d)=>d.color);


// // stacked chart

// let data2 = [{desktops: 40, laptops: 20, printers: 50, monitors:15},
//     {desktops: 100, laptops: 10, printers: 20, monitors:40},
//     {desktops: 40, laptops: 100, printers: 45, monitors:70},
//     {desktops: 70, laptops: 150, printers: 65, monitors:70},
//     {desktops: 100, laptops: 160, printers: 70, monitors:40},
//     {desktops: 40, laptops: 90, printers: 40, monitors:50}];

// let width2 = 400, height2 = 200;
// let svg2 = d3.select(".grid-it-5").append("svg")
// .attr("viewBox", `0 0 300 600`)
//     .attr('transform','translate(0,50)')
    

// let stack = d3.stack().keys(["desktops", "laptops", "printers", "monitors"]).order(d3.stackOrderDescending);
// console.log(data2);


// let colors = ["#FFA41B", "#000839", "#00A8CC", "#005082"];

// let series = svg2.selectAll("g").data(stack(data2))
//         .enter().append("g")
//         .style("fill", function(d, i){return colors[i];});
// series.selectAll("rect").data(function(d){return d;})
// .enter().append("rect")
// .attr("height", 23)
// .attr("width", function(d){return d[1] - d[0];})
// .attr("x", function(d){return d[0];})
// .attr("y", function(d,i){return i*30;})

// let widthPieChart = 250, heightPieChart = 250, fullAnglePiechart = 2 * Math.PI;
// let pieChart = d3.select(".grid-it-2").append("svg")
//             .attr("width", widthPieChart).attr("height", heightPieChart)
           
            

// let items = [{percentage:50,color:'#FFA41B'},{percentage:30,color:'#000839'},
// {percentage:40,color:'#00A8CC'},
// {percentage:10,color:'rgb(255, 144, 0)'},
// {percentage:60,color:'#005082'}]

// let dataPieChart = d3.pie().sort(null).value((d)=> d.percentage)(items);
// console.log(dataPieChart)


// let segments = d3.arc()
//                 .innerRadius(10)
//                 .outerRadius(200)
//                 .padAngle(.02)
//                 .padRadius(50);
// let sections = pieChart.append("g").attr("transform", "translate(120, 120)").selectAll("path").data(dataPieChart);
// sections.enter().append("path")
// .attr("d", segments).attr("fill", (d)=> d.data.color );


// // stacked area chart 


// let dataStackedAreaChart = [{year:2000,desktops: 40, laptops: 20, printers: 50, monitors:15},
//     {year:2001, desktops: 100, laptops: 10, printers: 20, monitors:40},
//     {year:2002, desktops: 40, laptops: 100, printers: 45, monitors:70},
//     {year:2003, desktops: 70, laptops: 150, printers: 65, monitors:70},
//     {year:2004, desktops: 100, laptops: 160, printers: 70, monitors:40},
//     ];

// let widthStackedAreaChart = 550, heightStackedAreaChart = 250; spacing = 20
// let stackedAreaChart = d3.select(".grid-it-4").append("svg")
// .attr("viewBox", `0 0 300 400`).append('g')
//     .attr('transform',`translate(${spacing},0)`)
    
  
//     let xScale = d3.scaleLinear()
//     .domain([d3.min(dataStackedAreaChart,(d)=>{return d.year}),d3.max(dataStackedAreaChart,(d)=>{return d.year})])
//     .range([0,widthStackedAreaChart-spacing])   
    
// let yScale = d3.scaleLinear()
// .range([heightStackedAreaChart-spacing,0])

//     stackedAreaChart.append('g').attr('transform',`translate(0,${heightStackedAreaChart-spacing})`).call(d3.axisBottom(xScale).ticks(6).tickFormat(d3.format('d')))




//     let stackForArea = d3.stack().keys(["desktops", "laptops", "printers", "monitors"])
//     let colorsStack = ["#FFA41B", "#000839", "#00A8CC", "#005082"];
//     let stackedChart = stackForArea(dataStackedAreaChart)

//     yScale.domain([0,d3.max(stackedChart[stackedChart.length-1],(d)=>d[1])])
// stackedAreaChart.append('g')
// .call(d3.axisLeft(yScale))

// let area = d3.area()
// .x((d)=> xScale(d.data.year))
// .y0((d)=> yScale(d[0]))
// .y1((d)=> yScale(d[1]))

// let seriesArea = stackedAreaChart.selectAll('g.series').data(stackedChart).enter().append(
// 'g'
// )

// const path = seriesArea.append('path')
//   .style('fill', (d,i)=>colorsStack[i])

// path.attr('d',(d)=>area(d))
   


let arcChartWidth = 150, arcChartHeight = 150, fullAngleArc = 2* Math.PI;
let arc = d3.select(".graph-2").append("svg")
            .attr("width", arcChartWidth).attr("height", arcChartHeight)
            
let dataArc = [{startAngle:0, endAngle:1.5,color:'#FFA41B'},
            {startAngle:1.5, endAngle:3.4,color:'#000839'},
            {startAngle:3.4, endAngle:4.2,color:'#00A8CC'},
            {startAngle:4.2, endAngle:5.9,color:'rgb(255, 144, 0)'},
            {startAngle:5.9, endAngle:6.28,color:'#005082'}];
let segmentsArc = d3.arc()
                .innerRadius(35)
                .outerRadius(50)
                .padAngle(.3)
                .padRadius(10)
                .cornerRadius(4);
            
let sectionsArc = arc.append("g").attr("transform", "translate(100, 90)")
    .selectAll("path").data(dataArc);
sectionsArc.enter().append("path").attr("d", segmentsArc).attr("fill", (d)=>d.color);




let secondArc = d3.select(".graph-3").append("svg")
            .attr("width", arcChartWidth).attr("height", arcChartHeight)

                        
let seconddataArc = [{startAngle:0, endAngle:100,color:'#FFA41B'},
{startAngle:1.5, endAngle:3.4,color:'#000839'},


];
            

let SecondSegmentsArc = d3.arc()
                .innerRadius(35)
                .outerRadius(50)
                .padAngle(.3)
                .padRadius(10)
                .cornerRadius(3);
let secondSectionsArc = secondArc.append("g").attr("transform", "translate(90, 70)")
    .selectAll("path").data(seconddataArc);
secondSectionsArc.enter().append("path").attr("d", SecondSegmentsArc).attr("fill", (d)=>d.color);




// let dataStackedAreaChart = [{year:2000,desktops: 40, laptops: 20, printers: 50, monitors:15},
//     {year:2001, desktops: 100, laptops: 10, printers: 20, monitors:40},
//     {year:2002, desktops: 40, laptops: 100, printers: 45, monitors:70},
//     {year:2003, desktops: 70, laptops: 150, printers: 65, monitors:70},
//     {year:2004, desktops: 100, laptops: 160, printers: 70, monitors:40},
//     ];

// // let widthStackedAreaChart = 280, heightStackedAreaChart = 150; spacing = 30
// // let stackedAreaChart = d3.select(".stack-bar").append("svg")
// // .attr("viewBox", `0 0 300 150`).append('g')
// // .style('margin-top',"10%")
// //     .attr('transform',`translate(${spacing},0)`)
    
  
// //     let xScale= d3.scaleLinear()
// //     .domain([d3.min(dataStackedAreaChart,(d)=>{return d.year}),d3.max(dataStackedAreaChart,(d)=>{return d.year})])
// //     .range([0,widthStackedAreaChart-spacing])   
    
// // let yScale = d3.scaleLinear()
// // .range([heightStackedAreaChart-spacing,0])

// //     stackedAreaChart.append('g').attr('transform',`translate(0,${heightStackedAreaChart-spacing})`).call(d3.axisBottom(xScale).ticks(6).tickFormat(d3.format('d')))




// //     let stackForArea = d3.stack().keys(["desktops", "laptops", "printers", "monitors"])
// //     let colorsStack = ["#FFA41B", "#000839", "#00A8CC", "#005082"];
// //     let stackedChart = stackForArea(dataStackedAreaChart)

// //     yScale.domain([0,d3.max(stackedChart[stackedChart.length-1],(d)=>d[1])])
// // stackedAreaChart.append('g')
// // .call(d3.axisLeft(yScale))

// // let area = d3.area()
// // .x((d)=> xScale(d.data.year))
// // .y0((d)=> yScale(d[0]))
// // .y1((d)=> yScale(d[1]))

// // let seriesArea = stackedAreaChart.selectAll('g.series').data(stackedChart).enter().append(
// // 'g'
// // )

// // const path = seriesArea.append('path')
// //   .style('fill', (d,i)=>colorsStack[i])

// // path.attr('d',(d)=>area(d))
   

// var points = [ [0, 20], [100, 50], [60, 90], [450, 40], [50, 140]
// [100, 300], [250, 50], [400, 300], [100, 150], [400, 150], [100, 300]];
// var dataLine = [/*{x:100, y:100}, {x:130, y:260}, {x:300, y:460}, {x:500, y:250}*/
// {point:0}, {point:150}, {point:90}, {point:220}, {point:200}];
// var widthLine = 200, heightLine = 200;
// var svg = d3.select(".stack-bar").append("svg")
//             .attr("width", widthLine).attr("height", heightLine)
//             .attr('transform','translate(0,20)')
//             .attr('class','path')
            
// /* var line = d3.line();
// svg.append("path").attr("d", line(points)); */

// /*var line = d3.line()
//                 .x(function(d){return d.x;})
//                 .y(function(d){return d.y;});*/
// var line = d3.line()
//             .x(function(d){return d.point})
//             .y(function(d,i){return (i+1)*50;})
//             .curve(d3.curveBundle);
// svg.append("path").attr("d", line(dataLine));



const data = [
    { name: 'John', score: 50 ,color:'red'},
    { name: 'Simon', score: 76 ,color:'purple' },
    { name: 'Samantha', score: 40,color:'green' },
    { name: 'Patrick', score: 32 ,color:'blue'},
    { name: 'Mary', score: 90,color:'yellow' },
    { name: 'Christina', score: 75 ,color:'indigo'},
    { name: 'Michael', score: 86 ,color:'orange'},
  ];
  
  const width = 900;
  const height = 450;
  const margin = { top: 50, bottom: 50, left: 50, right: 0 };
  
  const svg = d3.select('.stack-bar')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
   
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.score))
      .attr('title', (d) => d.score)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.score))
      .attr("width", x.bandwidth()-30)
      .attr('border-radius','10px')
      .attr('fill',(d)=>d.color)
      
     
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", '20px')
  }


    
  function yAxisRight(g) {
    g.attr("transform", `translate(${width}, 0)`)
      .call(d3.axisRight(y).ticks(null, data.format))
      .attr("font-size", '20px')
  }

  
  
  
  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].name))
      .attr("font-size", '20px')
  }
  
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.append("g").call(yAxisRight);
  svg.node();