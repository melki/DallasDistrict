var width = 500,
    height = 500,
    centered;

// Define color scale
var color = d3.scale.linear()
    .domain([1, 20])
    .clamp(true)
    .range(['#fff', '#409A99']);
//change with default color of d3

var projection = d3.geo.mercator()
    .scale(150000) //subject to change
    // Center the Map in Colombia
    .center([-97.009, 32.930804353])
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

// Set svg width & height
var svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);


svg.append('rect')
    .attr('class', 'background')
    .attr('width', width)
    .attr('height', height)
    .on('click', clicked);

var g = svg.append('g');
var color =  d3.scale.category20();
var effectLayer = g.append('g')
    .classed('effect-layer', true);

var mapLayer = g.append('g')
    .classed('map-layer', true);

var dummyText = g.append('text')
    .classed('dummy-text', true)
    .attr('x', 10)
    .attr('y', 30)
    .style('opacity', 0);

var bigText = g.append('text')
    .classed('big-text', true)
    .attr('x', 20)
    .attr('y', 45);

// Load map data
d3.json('data/dallas.geojson', function(error, mapData) {
  var features = mapData.features;

  // Update color scale domain based on data
  console.log(features);
  
  // Draw each province as a path
  mapLayer.selectAll('path')
      .data(features)
    .enter().append('path')
      .attr('d', path)
      .attr("fill",function (d,i) {
        console.log(d.properties.name);
        return color(i);
      })
      .attr("stroke","black")
      .on('mouseover', mouseover)
      .on('mouseout', mouseout)
      .on('click', clicked);
});


// Get province name
function nameFn(d){
  return 0;
}

// Get province name length
function nameLength(d){
  return 0;
}

// Get province color
function fillFn(d){
  return "blue";
}

// When clicked, zoom in
function clicked(d) {
 console.log(d.properties.name)
}

function mouseover(d){
 //console.log(d);
}

function mouseout(d){
 
}
