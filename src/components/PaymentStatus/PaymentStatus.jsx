import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const useStyles = makeStyles(() => ({
  statusBadge: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    width: '69px',
    padding: '2px 10px',
    backgroundColor: '#fff',
    color: '#fff',
    fontSize: '13px',
  },
  statusPaid: {
    backgroundColor: '#00c853',
  },
  statusUnpaid: {
    backgroundColor: '#f44336',
  },
}));

const PaymentStatus = (props) => {
  const classes = useStyles();

  const { status } = props;

  const style = cx(classes.statusBadge, {
    [classes.statusPaid]: status === true,
    [classes.statusUnpaid]: status === false,
  });

  let innerText;

  if (status) {
    innerText = 'Paid';
  } else {
    innerText = 'Unpaid';
  }

  return (
    <span className={style}>
      {innerText}
    </span>
  );
};

PaymentStatus.propTypes = {
  status: PropTypes.bool.isRequired,
};

export default PaymentStatus;
