import React from 'react';
import Dygraph from 'dygraphs';


export default class Chart extends React.Component {
    displayName = 'Chart for visualizing data'

    static propTypes = {
      dataFile: React.PropTypes.string
    }

    componentDidMount() {
      const g = new Dygraph(

        React.findDOMNode(this.refs.graph), './data/test.csv',
        {
          ylabel: 'Lexical SImilarity',
          xlabel: 'Turn Number'
        }
      );
    }

    render() {
      return (
        <div ref= "graph" className="graph"></div>
      );
    }
}
