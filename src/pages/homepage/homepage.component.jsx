import React from "react";

import { Row, Col, Icon } from "antd";
import FontCard from "../../components/font-card/font-card.component";

import "antd/dist/antd.css";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFontsField: "",
      inputWordField: "Then came the night of the first falling start",
      selectFont: "32",
      darkModeToggle: false,
      grideViewToggle: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = async event => {
    const { inputWordField } = this.state;
    const { name, value } = await event.target;
    //     if(name == inputWordField) {

    //     }
    await this.setState({
      [name]: value
    });
    await console.log(this.state.searchFontsField);
    await console.log(this.state.inputWordField);
    await console.log(this.state.selectFont);
  };

  componentDidMount() {}
  render() {
    const { darkModeToggle, grideViewToggle } = this.state;
    return (
      <div className="home-page">
        <div className="input-function">
          <form className="input-form" onSubmit={this.handleSubmit}>
            <Row style={{ borderRadius: "3rem" }}>
              <Col xs={2} sm={4} md={6} lg={7} xl={7}>
                <input
                  onChange={this.handleChange}
                  className="input-row__input"
                  name="searchFontsField"
                  type="search"
                  placeholder="Search fonts"
                />
              </Col>
              <Col
                xs={20}
                sm={16}
                md={12}
                lg={7}
                xl={7}
                style={{ borderLeft: "1px solid black" }}
              >
                <input
                  onChange={this.handleChange}
                  className="input-row__input"
                  name="inputWordField"
                  type="search"
                  placeholder="Type Something"
                />
              </Col>
              <Col
                xs={2}
                sm={4}
                md={6}
                lg={4}
                xl={4}
                style={{ borderLeft: "1px solid black" }}
              >
                <select
                  onChange={this.handleChange}
                  name="selectFont"
                  className="input-row__select select-font"
                >
                  <option value="20">20px</option>
                  <option value="24">24px</option>
                  <option defaultValue value="32">
                    32px
                  </option>
                  <option value="40">40px</option>
                </select>
              </Col>
              <Col xs={20} sm={16} md={12} lg={2} xl={2}>
                {darkModeToggle ? (
                  <button className="mode-toggle mode-toggle__dark"></button>
                ) : (
                  <button className="mode-toggle mode-toggle__white"></button>
                )}
              </Col>
              <Col xs={20} sm={16} md={12} lg={2} xl={2}>
                {grideViewToggle ? (
                  <Icon className="input-row__icon" type="table" />
                ) : (
                  <Icon className="input-row__icon" type="unordered-list" />
                )}
              </Col>
              <Col xs={20} sm={16} md={12} lg={2} xl={2}>
                <Icon className="input-row__icon" type="reload" />
              </Col>
            </Row>
          </form>
        </div>
        {/* END OF INPUT FUNCTION */}
        <section className="main-section">
          <Row gutter={[16, 16]}>
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
            <FontCard />
          </Row>
        </section>
        <footer className="footer">
          <p>Made by Josh | 2019 | Chingu Pre-Work Project</p>
        </footer>
      </div>
    );
  }
}

export default HomePage;
