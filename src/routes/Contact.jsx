import React from 'react';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import Panel from '../components/Panel';
import Button from '../components/Button';
import {Link} from 'react-router';

export default class Contact extends React.Component {
    displayName = 'Contact Us page'
    render() {
      return (
        <Container>
            <Row>
                <Column style="col-lg-12">
                    <h1 className="page-header">Contact&nbsp;
                        <small>CollabLab</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="home">Home</Link></li>
                        <li className="active">Contact</li>
                    </ol>
                </Column>
            </Row>
            <Row>
                <Column style="col-md-8 ">
                <div className="google-maps">
                    <iframe frameBorder="0"
                        src="https://www.google.com/maps/embed/v1/place?q=CollabLab%2C%20Campus%20Drive%2C%20Evanston%2C%20IL%2C%20United%20States&key=AIzaSyD14tuovwmdNwNYV29RIw-cU6-42c5N0cQ" allowfullscreen>
                    </iframe>
                </div>
                </Column>
                <Column style="col-md-4">
                    <Panel title="CollabLab">
                        <i>Northwestern University</i><br /><br />
                        <p>CollabLab<br />
                            Frances Searle Building, #2-431 <br />
                            2240 Campus Drive <br />
                            Evanston, IL 60208, USA <br /><br />
                            <strong>Email: </strong>email@northwestern.edu
                        </p>
                        <Button href="#" name="Visit Site" btnStyle="btn-default"/>
                    </Panel>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                    <h1 className="page-header">Contact&nbsp;
                        <small>Authors</small>
                    </h1>
                </Column>
            </Row>
            <Row>
                <Column style="col-md-4">
                    <Panel title="Darren Gergle, PhD">
                        <i>Associate Professor</i><br /><br />
                        <p>Department of Communication Studies <br />
                            Frances Searle Building, #1-142 <br />
                            2240 Campus Drive <br />
                            Evanston, IL 60208, USA <br /><br />
                            <strong>Email: </strong>email@northwestern.edu
                        </p>
                        <Button href="#" name="Visit Site" btnStyle="btn-default"/>
                    </Panel>
                </Column>
                <Column style="col-md-4">
                    <Panel title="Noah Liebman">
                        <i>PhD Student</i><br /><br />
                        <p>CollabLab <br />
                            Frances Searle Building, #2-431 <br />
                            2240 Campus Drive <br />
                            Evanston, IL 60208, USA <br /><br />
                            <strong>Email: </strong>email@northwestern.edu
                        </p>
                        <Button href="#" name="Visit Site" btnStyle="btn-default"/>
                    </Panel>
                </Column>
            </Row>
        </Container>
      );
    }
}
