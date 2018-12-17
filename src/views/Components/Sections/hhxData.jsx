import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "components/CustomButtons/Button.jsx";

class hhxData extends React.Component {

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

      <GridContainer style={{ paddingTop: 10 }}>

       <GridItem xs={4}>
        <CustomDropdown
         buttonText="Indicator"
         outlined
         variant="outlined"
         buttonProps={{
          className: classes.navLink,
          color: "transparent",
          variant: "outlined",

         }}
         dropdownList={[
          "Action",
          "Another action",
          "Something else here",
          { divider: true },
          "Separated link",
          { divider: true },
          "One more "
         ]}
        />

       </GridItem>
       <GridItem xs={4}>

        <TextField
         id="outlined-bare"
         className={classes.textField}
         variant="outlined"
         InputProps={{
          endAdornment: <InputAdornment position="end">X</InputAdornment>,
         }}
        /> 
        <h5 style={{textAlign:'center'}}>Multiplier</h5></GridItem>
       <GridItem xs={4}>
        <Button size="lg" style={{margin:0}}>
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

export default withStyles(basicsStyle)(hhxData);
