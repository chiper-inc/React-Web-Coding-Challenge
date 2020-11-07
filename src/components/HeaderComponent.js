import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Link className="headerLink" to="/cases">
          <div className="row">
            <div className="col-12 col-md-8 m-auto">
              <div className="row">
                <div className="col-4">
                  <img
                    width={200}
                    className="headerImg"
                    src="https://images.vexels.com/media/users/3/162884/isolated/preview/24e7b433b499dd2c9823d02ee72d939c-cresta-de-berlin-by-vexels.png"
                    alt="Cresta de berlin Transparent PNG"
                    title="Cresta de berlin Transparent PNG"
                  />
                </div>
                <div className="col-8 ml-auto">
                  <h1 className="headerText">Berlin Police Department</h1>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;
