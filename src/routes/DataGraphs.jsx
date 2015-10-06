import React from 'react';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import {Link} from 'react-router';

//import Chart from './components/Chart';

export default class DataGraphs extends React.Component {
    displayName = 'Generate graphs to visualize data'

    state = {
      dataUri: null
    }

    handleSubmit = (e) => {
      e.preventDefault();
    }

    // Read file
    handleFile = (e) => {
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onload = (upload) => {
        this.setState({
          dataUri: upload.target.result
        });
      };

      reader.readAsDataURL(file);
    }

    render() {
      return (
        <Container>
            <Row>
                <Column style="col-lg-12">
                    <h1 className="page-header">Data Visualization&nbsp;
                        <small>Lexical Similarity</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="visualize">Visualize Data</Link></li>
                        <li className="active">Generate Graphs</li>
                    </ol>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" className="pull-right">
                    <span className="btn btn-default btn-file">
                      <i className="fa fa-upload"></i> Upload File
                      <input type="file" onChange={this.handleFile} />
                    </span>
                </form>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                    <h2>File Format</h2>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                    <p>Your data file must be in the following format.</p>
                    <ul>
                        <li>format</li>
                        <li>format</li>
                        <li>format</li>
                    </ul>
                </Column>
            </Row>
        </Container>
      );
    }
}
