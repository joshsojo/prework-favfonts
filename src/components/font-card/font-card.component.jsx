import React from "react";

import { Col, Icon } from "antd";
import FontText from "./font-text.component";
import "antd/dist/antd.css";
import "./font-card.styles.scss";

const FontCard = ({ family, category, size, text, cardMd, cardLg, cardXl }) => (
  <Col xs={24} sm={24} md={cardMd} lg={cardLg} xl={cardXl}>
    <div className="font-card">
      <h3>{family}</h3>
      <span className="font-card__add-icon">
        <Icon type="plus-circle" />
      </span>
      <h4>{category}</h4>
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
