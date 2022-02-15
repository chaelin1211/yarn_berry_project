import React, { Component, createRef } from "react";
import CytoscapeComponent from "../utils/cytoscape";
import CytoscapeStyleSheet from "../assets/cytoscapeStyleSheet"
const memberApi = require('../api/memberApi');

class Graph extends Component {
  constructor() {
    super();
    this.ref = createRef();
    this.state = { elements: [], layout: { name: 'grid', row: 1 } };
  }

  componentDidMount() {
    memberApi.getMemberGraph().then((v) => {
      this.setState({ elements: v });
    });
  }

  render() {
    return (
      <div>
        <CytoscapeComponent
          elements={this.state.elements}
          style={{ width: "100%", height: "400px" }}
          stylesheet={CytoscapeStyleSheet()}
          cy={(cy) => {
            this.cy = cy
            cy.layout(this.state.layout).run()
          }}
        />
      </div>
    );
  }
}
export default Graph;
