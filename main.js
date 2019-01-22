
/**
 * User should be able to click 5 points on a map.
 * Data points should be connected with a line.
 * Option to save and upload coordinates
 */

/**
 * Psuedo: 
 *  mouse clicks contain x and y coordinates
 *  when a user clicks on the map, push the x and y 
 *    coordinates for each click to the array
 *  use D3 to dynamically create a line graph that loops through the array
 *    of coordinates and connects the data points
 *  save button should "save" the array somehow
 * upload button should upload the coordinates and display them on the image
 */

// Gather coordinates section
let coordinates = [
  [338, 432],
  [412, 213],
  [500, 423],
  [430, 500],
  [320, 435]
];

// get mouse click coordinate
const mouseClickPosition = (event) => {
  let cursorX = event.clientX;
  let cursorY = event.clientY;
  
  
  pushCoordinatesToArray(cursorX, cursorY);
  
} 

// push mouse click coordinates to array
const pushCoordinatesToArray = (posX, posY) => {
   return coordinates.push([posX, posY]);
}

// D3 - data visualization section
// get browser window dimensions
const w = window.innerWidth;
const h = window.innerHeight;

// create svg for data points
const svg = d3.select("div.data-visualization__section__map")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
              .attr("background-color", "yellow")
              .append("path")
              .attr("fill", "none")
              .attr("stroke", "black")
              .attr("stroke-width", 4)

// create data points
svg.selectAll("circle")
    .data(coordinates)
    .enter()
    .append("circle")
    .attr("cx", (d) => d[0])
    .attr("cy", (d) => h - d[1])
    .attr("r", 5)
    .style("fill", "red")

// create line to connect data points
let line = d3.line();
let connectTheDots = line(coordinates);
d3.select("path").attr("d", connectTheDots)

// Save and Load functionality
// save coordinates
const saveCoordinates = () => {
  // localStorage.setItem("dataPoints", JSON.stringify(coordinates));
  // return
}

const loadCoordinates = () => {
  console.log('load button clicked')
}


