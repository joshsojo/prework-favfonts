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
  line-height: 1.1;
   display: block;
  display: -webkit-box;
      height: 141px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
`;

const FontCard = ({ family, category, size, text, cardMd, cardLg, cardXl }) => (
  <Col xs={24} sm={24} md={cardMd} lg={cardLg} xl={cardXl}>
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
