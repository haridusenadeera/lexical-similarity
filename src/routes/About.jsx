import React from 'react';
import Container from '../components/layout/Container';
import Row from '../components/layout/Row';
import Column from '../components/layout/Column';
import {Link} from 'react-router';

export default class About extends React.Component {
    displayName = 'About Us page'
    render() {
      return (
        <Container>
            <Row>
                <Column style="col-lg-12">
                    <h1 className="page-header">About&nbsp;
                        <small>Our Research</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="home">Home</Link></li>
                        <li className="active">About</li>
                    </ol>
                </Column>
            </Row>
            <Row>
                <Column style="col-md-6">
                    <img className="img-responsive" src="images/similarity.png" alt="" />
                </Column>
                <Column style="col-md-6">
                    <h2>Lexical Similarity in Text-Based Communication</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
                </Column>
            </Row>
            <Row >
                <Column style="col-lg-12" >
                    <h1 className="page-header">About&nbsp;
                        <small>Authors</small>
                    </h1>
                </Column>
                <Column style="col-md-4 text-center">
                    <div className="thumbnail">
                        <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
                        <div className="caption">
                            <h3>Darren Gergle, Ph.D.<br />
                                <small>
                                    Director of CollabLab, <br /> Associate Professor in Department of Communication Studies and Department of Electrical Engineering &amp; Computer Science
                                </small>
                            </h3>
                            <p>His research program focuses on developing a theoretical understanding of the role that technology plays in supporting group interaction, and using this understanding, in turn, to develop innovative technologies to support group interaction.</p>
                        </div>
                    </div>
                </Column>
                <Column style="col-md-4 text-center">
                    <div className="thumbnail">
                        <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
                        <div className="caption">
                            <h3>Noah Liebman<br />
                                <small>Ph.D. student in Technology &amp; Social Behavior</small>
                            </h3>
                            <p>He is interested in social norms in mediated communication, and the individual and collective implications of communication technology.</p>
                        </div>
                    </div>
                </Column>
            </Row>
        </Container>
      );
    }
}
