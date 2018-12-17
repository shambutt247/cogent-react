/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons


// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function CustomHeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>      
        <CustomDropdown
          left
          buttonText="User"
          color="black"
          hoverColor="info"
          buttonIcon="person"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            "Profile",
            "Settings",
            { divider: true },
            "Logout"
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(CustomHeaderLinks);
