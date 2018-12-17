import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from "../../../assets/config/APIconfig";
import loading from "../../../assets/img/loading.gif"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown.jsx";
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

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
class IndicatorTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indicators: [],
      isLoading: true,
      errors: null,
      header: [
        {
          name: "Name",
          prop: "name"
        },
        {
          name: "Friendly Name",
          prop: "fname"
        },
        {
          name: "Description",
          prop: "desc"
        },
        {
          name: 'Dimensions',
          prop: "dims"
        }

      ],
      editIdx: -1
    };
    this.handleChange = this.handleChange.bind(this);

  }
  getIndicators() {
    axios
      .get(API.URL.Indicator)
      .then(response => {
        const indicators = response.data;
        console.log(indicators);
        this.setState({
          indicators,
          isLoading: false
        });
      })
  }

  editIndicator(indicator) {
    console.log(indicator)
    axios
      .post(API.URL.Indicator, {
        name: indicator.name,
        fname: indicator.fname,
        desc: indicator.desc,
        dims: '{}'
      })
      .then(response => console.log(response.status))
      .catch(e => console.log(e));
  }


  componentDidMount() {
    this.getIndicators();
  }

  handleRemove = i => {
    this.setState(state => ({
      indicators: state.indicators.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = i => {
    this.setState({ editIdx: -1 });
    var indicators = this.state.indicators;
    this.editIndicator(indicators[Object.keys(indicators)[i]])

  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      indicators: state.indicators.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    const { classes } = this.props;
    const { isLoading, indicators, header, editIdx } = this.state;
    
    return (
      <div>

        <Paper className={classes.root}>
          {!isLoading ? (
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {header.map((x, i) => {
                    return (
                      <TableCell key={`thc-${i}`}>
                        {x.name}
                      </TableCell>
                    );
                  })}
                  <TableCell>Dims</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody> {
                indicators.map((x, i) => {
                  const currentlyEditing = editIdx === i;
                  return (
                    <TableRow key={`tr-${i}`}>
                      {header.map((y, k) => (


                        
                        
                        
                        <TableCell key={`trc-${k}`} >
                          {currentlyEditing ?
                            <TextField
                              name={y.prop}
                              onChange={e => this.handleChange(e, y.prop, i)}
                              value={x[y.prop]}
                            />
                            : [
                              (y.prop === 'dims' ?
                                
                                <CustomDropdown
                                  left
                                  buttonText= {x[y.prop].length}
                                  color="red"
                                  hoverColor="info"
                                  buttonProps={{
                                    className: classes.navLink,
                                    color: "transparent"
                                  }}
                                  dropdownList={x[y.prop]}
                                />
                  
                             : x[y.prop]),
                      ]
                    }
                        </TableCell>
                      ))}
                      <TableCell>
                        {currentlyEditing ? (
                          <Button variant="outlined" style={styleedit}
                            onClick={() => this.stopEditing(i)} >
                            <i className="fas fa-check" />
                          </Button>
                        ) : (
                            <Button variant="outlined" style={styleedit}
                              onClick={() => this.startEditing(i)} >
                              <i className="fas fa-edit" />
                            </Button>
                          )}

                        <Button variant="outlined" style={styledelete}
                          onClick={() => this.handleRemove(i)} >
                          <i className="fas fa-trash-alt" />
                        </Button>

                      </TableCell>
                    </TableRow>
                  );
                })
              }
              </TableBody>
            </Table>
          ) : (

              <img src={loading} alt='loading' style={{ position: 'absolute', top: '50%', left: '50%' }}></img>
            )}
        </Paper>
      </div>
    );
  }


}
IndicatorTab.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(IndicatorTab);