import React from "react";

import { Col, Icon } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import "./font-card.styles.scss";

const FontText = styled.p`
  @import url('${props => props.link}');
  font-family: '${props => props.font || "Open Sans"}', ${props =>
  props.category || "sans-serif"};
  font-size: ${props => props.size || 32}px;
  padding-bottom: 2rem;
`;

const FontCard = ({ family, category, size, text }) => (
  <Col xs={24} sm={24} md={6} lg={6} xl={6}>
    <div className="font-card">
      <h3>{family}</h3>
      <span className="font-card__add-icon">
        <Icon type="plus-circle" />
      </span>
      <h4>christiain robertson</h4>
      <FontText
        font={family}
        category={category}
        size={size}
        link={`https://fonts.googleapis.com/css?family=${
          family ? family : "Open Sans"
        }&display=swap`}
      >
        {text}
      </FontText>
    </div>
  </Col>
);

export default FontCard;
