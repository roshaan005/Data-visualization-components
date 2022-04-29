
   
const createPieChart=(element,positionx,positiony)=>{
  
let arcChartWidth = 150, arcChartHeight = 150, fullAngleArc = 2* Math.PI;
let arc = d3.select(`.${element}`).append("svg")
            .attr("width", arcChartWidth).attr("height", arcChartHeight)
            
let dataArc = [{startAngle:0, endAngle:1.5,color:'#FFA41B'},
            {startAngle:1.5, endAngle:3.4,color:'#809BCE'},
            {startAngle:3.4, endAngle:4.2,color:'#B8E0D2'},
            {startAngle:4.2, endAngle:5.9,color:'rgb(255, 144, 0)'},
            {startAngle:5.9, endAngle:6.28,color:'#C4B7D4'}];
let segmentsArc = d3.arc()
                .innerRadius(35)
                .outerRadius(50)
                .padAngle(.3)
                .padRadius(10)
                .cornerRadius(4);
            
let sectionsArc = arc.append("g").attr("transform", `translate(${positiony}, ${positionx})`)
    .selectAll("path").data(dataArc);
sectionsArc.enter().append("path").attr("d", segmentsArc).attr("fill", (d)=>d.color);


}

// creating piecharts 
createPieChart('graph-2',80,90)
createPieChart('chart-container',100,75)


const createHalfPieChart = (element)=>{
  let arcChartWidth = 150, arcChartHeight = 150, fullAngleArc = 2* Math.PI;

let secondArc = d3.select(`.${element}`).append("svg")
            .attr("width", arcChartWidth).attr("height", arcChartHeight)

                        
let seconddataArc = [{startAngle:0, endAngle:100,color:'#809BCE'},
{startAngle:1.5, endAngle:3.4,color:'#C4B7D4'},


];
            

let SecondSegmentsArc = d3.arc()
.innerRadius(35)
.outerRadius(50)
.padAngle(.3)
.padRadius(10)
.cornerRadius(10);
let secondSectionsArc = secondArc.append("g").attr("transform", "translate(80, 70)")
    .selectAll("path").data(seconddataArc);
secondSectionsArc.enter().append("path").attr("d", SecondSegmentsArc).attr("fill", (d)=>d.color);

}

createHalfPieChart('half-chart-container')
createHalfPieChart('graph-3')


// bargraph
const createBarGraph = (element)=>{

const data = [
  { name: '2001', score: 50 ,color:'#809BCE'},
  { name: '2002', score: 76 ,color:'#95B8D1' },
  { name: '2003', score: 40,color:'#B8E0D2' },
  { name: '2004', score: 32 ,color:'#D6EADF'},
  { name: '2005', score: 90,color:'#EAC4D5' },
  { name: '2006', score: 75 ,color:'#F0E1BC'},
  { name: '2007', score: 86 ,color:'#C4B7D4'},
];

const width = 600;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right: 0 };

const svg = d3.select(`.${element}`)
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
    .call(d3.axisLeft(y).ticks(null, data.format).ticks(4))
    
    .attr("font-size", '20px')
}


  
function yAxisRight(g) {
  g.attr("transform", `translate(${width}, 0)`)
    .call(d3.axisRight(y).ticks(null, data.format).ticks(4))
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

}

//creating bar graph

createBarGraph('bar-graph-container')
createBarGraph('stack-bar')

