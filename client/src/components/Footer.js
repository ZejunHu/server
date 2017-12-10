import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Thank you for using emaily!</h5>
            <div className="grey-text text-lighten-4">
              <p>Instructor:</p> <p>Stephen Grider</p>
              <p>Contributor:</p> <p>Jonathan Hu</p>
              <p>Bill Duan</p>
            </div>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Connect</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/ZejunHu"
                  target="_blank"
                >
                  <i className="fa fa-github" style={{ marginRight: "5px" }} />
                  Github
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.linkedin.com/in/jonathan-hu-b10767129/"
                  target="_blank"
                >
                  <i
                    className="fa fa-linkedin-square"
                    style={{ marginRight: "5px" }}
                  />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://twitter.com/hzj1227"
                  target="_blank"
                >
                  <i className="fa fa-twitter" style={{ marginRight: "5px" }} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://codepen.io/hzj1227/"
                  target="_blank"
                >
                  <i className="fa fa-codepen" style={{ marginRight: "5px" }} />
                  Codepen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2017 Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
