import React from 'react';

export default class Footer extends React.Component {
    displayName = 'Footer'
    render() {
      return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Collab<span>Lab</span></h3>

                <p className="footer-links">
                    <a href="#">Home</a>
                    ·
                    <a href="#">Visualize Data</a>
                    ·
                    <a href="#">About</a>
                    ·
                    <a href="#">Contact Us</a>
                </p>

                <p classNameName="footer-company-name"> CollabLab &copy; 2015</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>21 Sheridan Street</span> Evanston, IL</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 555 123 7456</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">email@northwestern.edu</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About CollabLab</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod.
                </p>

                <div className="footer-icons">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
      );
    }
}
