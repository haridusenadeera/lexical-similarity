import React from 'react';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import {Link} from 'react-router';

export default class NotFound extends React.Component {
    displayName = '404 Error Message'

    render() {
      return (
        <Container>
            <Row>
                <Column style="col-lg-12">
                    <h1 className="page-header">
                        Page Not Found: Error 404
                    </h1>
                    <div className="alert alert-danger">
                        <p>
                          Sorry, the page you requested was not found. The file may have been
                          removed, renamed or is temporarily unavailable.
                        </p>
                        <p>Please try the following:</p>
                        <ul>
                            <li>Make sure the web site address (URL) displayed in the address bar
                              is spelled and formatted correctly.</li>
                            <li>If you reached this page by clicking a link, inform the web site
                              administrator that the link is incorrect.
                            </li>
                        </ul>
                    </div>
                    <p> Here's a little map that might help you get back on track. </p>
                    <ul>
                        <li><Link to ="home" >Home </Link></li>
                        <li><Link to ="visualize" >Visualize Data</Link></li>
                            <ul>
                                <li><Link to ="datagraphs" >Upload Your Files </Link></li>
                            </ul>
                        <li><Link to ="about" >About </Link></li>
                        <li><Link to ="contact" >Contact Us </Link></li>
                    </ul>
                </Column>
            </Row>
        </Container>
      );
    }
}
