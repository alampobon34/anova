import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <hr/>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3 mx-auto">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
          
        </div>
      </div>

      <div className="footer-copyright text-center py-1">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      </div>
    </footer>
  );
}

export default Footer;
