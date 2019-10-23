import React from "react";

import { Row, Col, Icon, Spin } from "antd";
import Header from "../../components/header/header.component";
import FontCard from "../../components/font-card/font-card.component";

import "antd/dist/antd.css";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchFontsField: "",
      inputWordField: "Then came the night of the first falling start.",
      fontSize: "32",
      darkModeToggle: false,
      grideViewToggle: false,
      fontsArray: [],
      isLoading: false,
      loadTotal: 52,
      loadLimit: 52,
      cardMd: 6,
      cardLg: 6,
      cardXl: 6
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  reloadPage = () => {
    this.setState({
      searchFontsField: "",
      inputWordField: "Then came the night of the first falling start.",
      fontSize: "32",
      darkModeToggle: false,
      grideViewToggle: false
    });
  };

  toggleGrid = () => {
    const { grideViewToggle } = this.state;
    if (grideViewToggle) {
      this.setState({
        cardMd: 6,
        cardLg: 6,
        cardXl: 6,
        grideViewToggle: !grideViewToggle
      });
    } else if (!grideViewToggle) {
      this.setState({
        cardMd: 24,
        cardLg: 24,
        cardXl: 24,
        grideViewToggle: !grideViewToggle
      });
    }
  };

  toggleDarkMode = () => {
    const { darkModeToggle } = this.state;
    if (!darkModeToggle) {
      document.body.classList.add("container-dark");
    } else {
      document.body.classList.remove("container-dark");
    }
    this.setState({ darkModeToggle: !darkModeToggle });
  };

  handleChange = async event => {
    const { name, value } = await event.target;
    await this.setState({
      [name]: value
    });
    if (this.state.inputWordField.length === 0)
      await this.setState({
        inputWordField: "Then came the night of the first falling start."
      });
  };

  componentDidMount() {
    try {
      this.setState({ isLoading: true });
      fetch(
        `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyB4bp5OGaQ1rbXUhJhn5b78kgAO0f5z3Wo`
      )
        .then(response => response.json())
        .then(result =>
          this.setState({
            fontsArray: result.items,
            isLoading: false,
            loadTotal: result.items.length
          })
        );
    } catch (error) {
      console.log("Error: ", error);
      alert("An error occurred, Please try again");
    }
  }
  render() {
    const {
      darkModeToggle,
      grideViewToggle,
      fontsArray,
      fontSize,
      inputWordField,
      searchFontsField,
      loadTotal,
      loadLimit,
      isLoading,
      cardMd,
      cardLg,
      cardXl
    } = this.state;
    const filteredFontArray = fontsArray.filter(font =>
      font.family.toLowerCase().includes(searchFontsField.toLowerCase())
    );
    const filteredTotal = filteredFontArray.length;
    return (
      <div className="home-page">
        <Header />
        <div className="input-function">
          <form className="input-form" onSubmit={this.handleSubmit}>
            <Row
              style={{
                borderRadius: "3rem",
                border: "1px solid #868686",
                padding: "0.4rem 2rem"
              }}
            >
              <Col
                xs={20}
                sm={20}
                md={16}
                lg={9}
                xl={9}
                style={{
                  borderRight: "1px solid #868686"
                }}
              >
                <input
                  autoComplete="off"
                  onChange={this.handleChange}
                  className="input-row__input"
                  name="searchFontsField"
                  type="search"
                  placeholder="Search fonts"
                />
              </Col>
              <Col
                xs={0}
                sm={0}
                md={0}
                lg={9}
                xl={9}
                style={{
                  borderRight: "1px solid #868686"
                }}
                className="input-row__col__type"
              >
                <input
                  autoComplete="off"
                  onChange={this.handleChange}
                  className="input-row__input"
                  name="inputWordField"
                  type="search"
                  placeholder="Type Something"
                />
              </Col>
              <Col
                xs={0}
                sm={0}
                md={3}
                lg={3}
                xl={3}
                className="input-row__col__font"
              >
                <select
                  defaultValue="32"
                  onChange={this.handleChange}
                  name="fontSize"
                  className="input-row__select select-font"
                >
                  <option value="20">20px</option>
                  <option value="24">24px</option>
                  <option value="32">32px</option>
                  <option value="40">40px</option>
                </select>
              </Col>
              <Col
                xs={2}
                sm={2}
                md={2}
                lg={1}
                xl={1}
                onClick={() => this.toggleDarkMode()}
                className="input-row__col__toggle-dark"
              >
                {!darkModeToggle ? (
                  <button className="mode-toggle mode-toggle__dark"></button>
                ) : (
                  <button className="mode-toggle mode-toggle__white"></button>
                )}
              </Col>
              <Col
                xs={0}
                sm={0}
                md={1}
                lg={1}
                xl={1}
                onClick={() => this.toggleGrid()}
                className="input-row__col__toggle-grid"
              >
                {grideViewToggle ? (
                  <Icon className="input-row__icon" type="table" />
                ) : (
                  <Icon className="input-row__icon" type="unordered-list" />
                )}
              </Col>
              <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                <button className="reset-button" type="reset">
                  <Icon
                    onClick={() => this.reloadPage()}
                    className="input-row__icon"
                    type="reload"
                  />
                </button>
              </Col>
            </Row>
          </form>
        </div>
        {/* END OF INPUT FUNCTION */}
        {/* BEGINNING OF MAIN SECTION */}
        <section className="main-section">
          <p className="main-section__viewing-total">
            Viewing <span>{filteredTotal}</span> of <span>{loadTotal}</span>{" "}
            font families
          </p>
          <Row gutter={[16, 16]}>
            {!isLoading ? (
              filteredFontArray
                .filter((item, idx) => idx < loadLimit)
                .map((font, index) => (
                  <FontCard
                    key={index}
                    family={font.family}
                    category={font.category}
                    size={fontSize}
                    text={inputWordField}
                    cardMd={cardMd}
                    cardLg={cardLg}
                    cardXl={cardXl}
                  />
                ))
            ) : (
              <Spin />
            )}
            {loadLimit >= filteredTotal ? null : (
              <button
                className="load-more"
                onClick={() => this.setState({ loadLimit: loadLimit + 52 })}
              >
                <p className="load-more__text">load more</p>
                <Icon type="down" className="down-arrow" />
              </button>
            )}
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
