import React from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFontsField: "",
      typeWordField: ""
    };
  }

  componentDidMount() {}
  render() {
    return <div className="home-page"></div>;
  }
}

export default HomePage;
