import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Divider from '@material-ui/core/Divider';
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "components/CustomButtons/Button.jsx";



class overLap extends React.Component {

  state = {
    selectedValue: 'a',
  };
  
  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={6}>
          <CustomInput
                  labelText="Source Intervention"
                  secondary
                  formControlProps={{
                    fullWidth: true
                  }}
                />
            <h5>This is the intervention the overlap will apply to.</h5>
              

            <h2 style={{paddingTop:20}}>Overlapping Intervention</h2>
            <Divider />
            <h5>This is the intervention that overlaps the selected intervention.</h5>

            <GridContainer style={{paddingTop:10}}>

              <GridItem xs={4}>

              <CustomDropdown
                        buttonText="Indicator"
                        outlined
                        variant="outlined"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent",
                          variant:"outlined",
                          
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />

              </GridItem>
              <GridItem xs={4}>
              <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
        />
        <h9>%age Overlap</h9>
              </GridItem>
              <GridItem xs={4}>
              <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
        />
        <h9>Value Overlap</h9>
              </GridItem>

            </GridContainer>

            <GridContainer style={{paddingTop:10}}>
              <GridItem xs={4}>
              <TextField
          id="outlined-bare"
          className={classes.textField}
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
              </GridItem>
              
            </GridContainer>

            <GridContainer style={{paddingTop:10}}>

              <GridItem xs={4}>
                <h5 justify="centre">Overlap adj.figure</h5>
              </GridItem>
              <GridItem xs={5}>
              </GridItem>
              <GridItem xs={3}>
                <Button >
                  Apply
                </Button>
              </GridItem>

            </GridContainer>
          </GridItem>
          <GridItem xs={6}>
            <h5>Preview:</h5>
          </GridItem>
        </GridContainer>
      </div>





    );
  }
}

export default withStyles(basicsStyle)(overLap);
