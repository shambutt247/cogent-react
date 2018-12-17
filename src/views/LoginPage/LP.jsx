import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import { Link } from "react-router-dom";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import image from "../../assets/img/bg7.jpg";
import micrologo from "assets/img/windows.png";

class LP extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes} = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center" spacing={16}>
              <GridItem xs={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardBody>
                      <h4 style={{ color: '#737373' }}>
                        <img src={micrologo} alt="micro-logo" style={{ height: '32px' }} />
                        <b>
                          Microsoft
                        </b>
                      </h4>
                      <h3 className={classes.title}><b>
                        Sign in
                  </b></h3>
                      <CustomInput
                        labelText="Email,phone or Skype"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "regular"
                        }}
                      />
                      <font size="2">No Account?<font color="blue">Create one!</font></font>
                      <div>
                        <font size="2" color="blue">Can't access your account?</font>
                      </div>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Link to={"/main-page"} className={classes.link}>
                        <GridItem >
                          <Button color="info" size="md">
                            Next
                        </Button>
                        </GridItem>

                      </Link>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LP);
