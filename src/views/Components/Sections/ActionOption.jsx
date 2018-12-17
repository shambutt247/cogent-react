import React from "react";
import axios from 'axios';
// @material-ui/icons
import Button from '@material-ui/core/Button';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import javascriptStyles from "../../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import API from "../../../assets/config/APIconfig";

const styleedit = {
  'min-height': 36,
  'min-width': 36,
  padding: '0',
};

const styledelete = {
  'min-height': 36,
  'min-width': 36,
  padding: '0',
  color: 'red'
};

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ActionOption extends React.Component {

  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }

  editIndicator() {


  }
  deleteIndicator() {


  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        {/*<MuiThemeProvider theme={theme}>*/}
        <Button variant="outlined" style={styleedit}>
          <i className="fas fa-edit" />
        </Button>
        {/*</MuiThemeProvider>*/}


        <Button variant="outlined" style={styledelete}
          onClick={() => this.handleClickOpen("classicModal")} >
          <i className="fas fa-trash-alt" />
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.classicModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("classicModal")}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose("classicModal")}
            >
              <Close className={classes.modalClose} />
            </IconButton>

          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <p>Are you sure you want to delete this indicator?</p>
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button color="transparent" simple>Yes</Button>
            <Button
              onClick={() => this.handleClose("classicModal")}
              color="danger"
              simple
            >No</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(ActionOption);