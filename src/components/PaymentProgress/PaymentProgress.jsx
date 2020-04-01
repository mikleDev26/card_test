import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  paid: {
    display: 'inline-block',
    color: '#1e88e5',
    fontWeight: 600,
    fontSize: 12,
  },
  toPay: {
    display: 'inline-block',
    fontWeight: 400,
    color: '#588BAE',
    fontSize: 11,
  },
}));

const PaymentProgress = (props) => {
  const classes = useStyles();

  const { toPay, paid } = props;
  const MIN = 0;
  const normalise = (value) => ((value - MIN) * 100) / (toPay - MIN);

  return (
    <Box mt={1}>
      <LinearProgress variant="determinate" value={normalise(paid)} />
      <Box mt={1} display="flex" justifyContent="space-between">
        <span className={classes.paid}>{`$${paid}`}</span>
        <span className={classes.toPay}>{`Paid of $${toPay}`}</span>
      </Box>
    </Box>
  );
};

PaymentProgress.propTypes = {
  toPay: PropTypes.number.isRequired,
  paid: PropTypes.number.isRequired,
};

export default PaymentProgress;
