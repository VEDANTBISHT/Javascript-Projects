// Define canvas and context variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Define node class
class Node {
  constructor(x, y, value) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.visited = false;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = this.visited ? "#28a745" : "#dc3545";
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.value, this.x, this.y);
  }
}

// Define graph class
class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.currentNode = null;
  }

  addNode(node) {
    this.nodes.push(node);
  }

  addEdge(node1, node2) {
    this.edges.push([node1, node2]);
  }

  draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nodes
    this.nodes.forEach(node => node.draw());

    // Draw edges
    this.edges.forEach(edge => {
      var node1 = edge[0];
      var node2 = edge[1];
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.stroke();
    });
  }

  dfs(node) {
    // Mark node as visited
    node.visited = true;
    this.draw();

    // Pause for 500 milliseconds
    setTimeout(() => {
      // Find adjacent nodes
      var adjNodes = this.edges
        .filter(edge => edge[0] == node || edge[1] == node)
        .map(edge => edge[0] == node ? edge[1] : edge[
