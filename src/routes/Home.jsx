import React from 'react';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import Panel from '../components/Panel';
import Button from '../components/Button';
import {Link} from 'react-router';

export default class Home extends React.Component {
    displayName = 'Web Application Homepage'

    render() {
      return (
        <Container>
            <Row>
                <Column style="col-lg-12">
                    <h1 className="page-header">
                        Lexical Similarity in Text-Based Communication
                    </h1>
                </Column>
            </Row>
            <div className="well">
                <Row>
                    <Column style="col-md-10">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum
                          neque nemo praesentium cum alias asperiores commodi.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio
                          corporis quae nulla aspernatur in alias at numquam rerum ea excepturi
                          expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?
                        </p>
                        <p> You can now upload your files to visualize the lexical similarity in
                          your conversations. Try it today!
                        </p>
                    </Column>
                    <Column style="col-md-2">
                        <Link to="datagraphs" className= "btn btn-success btn-lg btn-block">
                          Try It!
                        </Link>
                        <Link to="visualize" className= "btn btn-default btn-block">
                          See an Example
                        </Link>
                    </Column>
                </Row>
            </div>
            <Row>
                <Column style="col-md-4">
                    <Panel title="What is Lexical Similarity">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                        optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi
                        expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?
                        </p>
                        <Button href="#" name="Learn More" btnStyle="btn-default"/>
                    </Panel>
                </Column>
                <Column style="col-md-4">
                    <Panel title="Previous Research">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                        optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi
                        expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?
                        </p>
                        <Button href="#" name="Learn More" btnStyle="btn-default"/>
                    </Panel>
                </Column>
                <Column style="col-md-4">
                    <Panel title="Our Approach">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
                        optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi
                        expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?
                        </p>
                        <Button href="#" name="Learn More" btnStyle="btn-default"/>
                    </Panel>
                </Column>
            </Row>
            <Row>
                <Column style="col-lg-12">
                    <h2 className="page-header">About CollabLab</h2>
                </Column>
                <Column style="col-md-7">
                    <p>Our current research programs span a number of areas from understanding
                      how various forms of visual information influence our social interactions
                      and developing dynamic visualizations of interaction patterns
                      in online environments to building computational models that account
                      for real-time contextual information to support interaction.
                    </p>
                    <p>Darren Gergle (Ph.D., Carnegie Mellon University) is the director of the
                      CollabLab and is a faculty member in Communication Studies and Electrical
                      Engineering &amp; Computer Science at Northwestern University.
                    </p>
                    <Button href="http://collablab.northwestern.edu/"
                      name="Visit Our Site" btnStyle="btn-default"
                    />
                </Column>
                <Column style="col-md-5">
                    <img className="img-responsive" src="images/NU.jpg" alt="northwestern university" width="240" />
                </Column>
            </Row>
        </Container>
      );
    }
}
