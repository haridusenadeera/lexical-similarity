import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Link, Route, RouteHandler, NotFoundRoute} from 'react-router';

import Navbar from './components/Navbar';
import NavbarHeader from './components/NavbarHeader';
import NavbarItems from './components/NavbarItems';
import Footer from './components/Footer';

import HomeHandler from './routes/Home.jsx';
import AboutHandler from './routes/About.jsx';
import VisualizeHandler from './routes/Visualize.jsx';
import ContactHandler from './routes/Contact.jsx';
import DataGraphs from './routes/DataGraphs.jsx';
import NotFoundHandler from './routes/NotFound.jsx';

const navitems = [
    {displayName: 'VISUALIZE DATA',
      name: 'visualize',
      path: '/visualize',
      handler: '{VisualizeHandler}'
    },
    {displayName: 'ABOUT',
      name: 'about',
      path: '/about',
      handler: '{AboutHandler}'
    },
    {displayName: 'CONTACT US',
      name: 'contact',
      path: '/contact',
      handler: '{ContactHandler}'
    }
];

class App extends React.Component {
    displayName = 'Web Application'

    render() {
      return (
        <div>
            <Navbar>
                <NavbarHeader>
                    <Link className="navbar-brand" to="home">LEXICAL SIMILARITY</Link>
                </NavbarHeader>
                <NavbarItems>
                    <li><Link to="home">HOME</Link></li>
                    {
                      navitems.map(item => {
                        return (
                        <li key={navitems.indexOf(item)}>
                            <Link to={item.name}>{item.displayName}</Link>
                        </li>);
                      })
                    }
                </NavbarItems>
            </Navbar>
            <RouteHandler />
        </div>
      );
    }
}

const routes = (
  <Route name="app" path="/" handler={App}>
      <DefaultRoute name="home" handler={HomeHandler}/>
      <Route name="visualize" path="/visualize" handler={VisualizeHandler}/>
      <Route name="datagraphs" path="visualize/generate" handler={DataGraphs}/>
      <Route name="about" path="/about" handler={AboutHandler}/>
      <Route name="contact" path="/contact" handler={ContactHandler}/>
      <NotFoundRoute handler={NotFoundHandler}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.getElementById('content'));
});
