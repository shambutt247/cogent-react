import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Overlap from './overLap.jsx';
import HHxData from './hhxData.jsx';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    minWidth: 20,
  },
});

class aarTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <div position="static" color="white">
          <Tabs color="primary" value={value} onChange={this.handleChange}>
            <Tab label="Overlap" />
            <Tab label="HH xData" />
            <Tab label="Estimates" />
            <Tab label="Exch Rates" />
          </Tabs>
        </div>
        {value === 0 && <TabContainer><Overlap /></TabContainer>}
        {value === 1 && <TabContainer><HHxData/></TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item 4</TabContainer>}
      </div>
    );
  }
}

aarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(aarTabs);