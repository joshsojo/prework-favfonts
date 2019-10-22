import React from "react";

import { Col, Icon } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import "./font-card.styles.scss";

const FontText = styled.p`
  @import url('${props => props.link}');
  font-family: ${props => props.font || "Open Sans"};
`;

const FontCard = () => (
  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
    <div className="font-card">
      <h3>roboto</h3>
      <span className="font-card__add-icon">
        <Icon type="plus-circle" />
      </span>
      <h4>christiain robertson</h4>
      <FontText
        font="Liu Jian Mao Cao"
        link={`https://fonts.googleapis.com/css?family=${"Liu Jian Mao Cao"}&display=swap`}
      >
        Then came the night of the first falling star
      </FontText>
    </div>
  </Col>
);

export default FontCard;
