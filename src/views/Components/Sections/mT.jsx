import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
// @material-ui/icons
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import IndicatorTab from "./IndicatorTab.jsx";
import AAR from "./aarTabs";

class mT extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container} style={{paddingTop:120}}>
          <CustomTabs
            headerColor="info"
            tabs={[
              {
                tabName: "Indicators",
                tabIcon:"drag_indicator",
                tabContent: (
                  <div>
                    <IndicatorTab />
                  </div>
                )
              },
              {
                tabName: "AAR Adjustments",
                tabIcon: "settings_input_component",
                tabContent: (
                  <AAR />
                )
              },
              {
                tabName: "Reports",
                tabIcon:'insert_chart',
                tabContent: (
                  //Put something here
                  <div> </div>
                )
              },
              {
                tabName: "Snapshots",
                tabIcon:'crop',
                tabContent: (
                  //Put something here
                  <div> </div>
                )
              }
            ]}
          />

        </div>
      </div>

    );
  }
}

export default withStyles(basicsStyle)(mT);
