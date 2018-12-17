import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
// sections for this page
import CustomHeaderLinks from "../../components/Header/CustomHeaderLinks.jsx";
import MenuTabs from "./Sections/mT.jsx";
import componentsStyle from "../../assets/jss/material-kit-react/views/components.jsx";
// Logo
import logo from "../../assets/img/mdf_logo.png"

class MainPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          leftLinks= {<img src={logo} alt="logo"/>}
          rightLinks={<CustomHeaderLinks />}
          fixed
          color="white"
          {...rest}
        />
        <GridContainer>
          <GridItem>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <MenuTabs />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(MainPage);
