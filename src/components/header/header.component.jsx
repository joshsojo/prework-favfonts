import React from "react";

import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./header.styles.scss";

const Header = () => (
  <div className="home-page">
    <header className="header">
      <Row type="flex" justify="space-between">
        <Col span={8} className="header__logo">
          <span className="header__logo--google">Google</span>
          <span className="header__logo--fonts">Fonts</span>
        </Col>
        <span className="header__links">
          <span>catalog</span>
          <span>featured</span>
          <span>articles</span>
          <span>about</span>
        </span>
      </Row>
    </header>
  </div>
);

export default Header;
