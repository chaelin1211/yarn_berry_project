export default function cytoscapeStyle() {
    return [
        {
            selector: 'node',
            style: {
                'background-color': '#282',
                'label': 'data(label)',
                //opacity: 0.3
            }
        },
        {
            selector: 'node[type="comp"]',
            style: {
                'background-color': '#822',
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 1,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
        }
    ];
}
