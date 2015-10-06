import React from 'react';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import {Link} from 'react-router';

import Chart from '../components/Chart';

export default class Visualize extends React.Component {
    displayName = 'Data visualization'

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
                        <li className="active">Visualize Data</li>
                    </ol>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12 text-center">
                    <Link to="datagraphs" className= "btn btn-default">
                      Visualize Lexical Similarity
                    </Link>
                    <p>
                      <small>
                        Upload your files to visualize lexical similarity in your conversations
                      </small>
                    </p>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12 text-center">
                    <h2>Examples</h2>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                    <h4>Similarity through a conversation</h4>
                </Column>
            </Row>
            <Row>
                <Column style="col-md-6">
                    <Chart />
                </Column>
                <Column style="col-md-6">
                    <p>Explanation</p>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                    <h4>Similarity for three different individual conversations</h4>
                </Column>
            </Row>
            <Row>
                <Column style="col-md-6">
                    <Chart />
                </Column>
                <Column style="col-md-6">
                    <Chart />
                </Column>
            </Row>
            <Row>
                <Column style="col-md-6">
                    <Chart />
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12 text-center">
                </Column>
            </Row>
        </Container>
      );
    }
}
