import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

let id = 0;
function createData(name, fname, desc, dims, actions) {
  id += 1;
  return { id, name, fname, desc, dims, actions };
}

const rows = [
  createData('Tony', 159, 6.0, 24, 4.0),
  createData('David', 237, 9.0, 37, 4.3),
  createData('Susan', 262, 16.0, 24, 6.0),
  createData('Johnathan', 305, 3.7, 67, 4.3),
  createData('Margret', 356, 16.0, 49, 3.9),
];

function TableList(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">fname</TableCell>
            <TableCell align="right">desc</TableCell>
            <TableCell align="right">dims</TableCell>
            <TableCell align="right">actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.desc}</TableCell>
                <TableCell align="right">{row.dims}</TableCell>
                <TableCell align="right">{row.actions}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableList);