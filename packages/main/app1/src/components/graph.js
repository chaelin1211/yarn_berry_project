import React, { Component, createRef } from "react";
import CytoscapeComponent from "../utils/cytoscape";
import CytoscapeStyleSheet from "../assets/cytoscapeStyleSheet"

const api = require('../api/neo4jApi');

class Graph extends Component {
  constructor() {
    super();
    this.ref = createRef();
    this.layout = { name: "cose-bilkent" };
    this.state = {};
  }

  render() {
    return (
      <div>
        <CytoscapeComponent
        elements={api.getGraph()}
        stylesheet={CytoscapeStyleSheet()}
        layout={this.layout}
        style={{ width: "100%", height: "400px" }}
        cy={cy => (this.ref = cy)}
      />
      </div>
      
    );
  }
}
export default Graph;