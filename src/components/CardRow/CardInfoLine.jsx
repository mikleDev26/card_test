import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  cardInfoLine: {
    display: 'flex',
    justifyContent: 'space-between',
    '&:not(:last-child)': {
      marginBottom: '6px',
    },
  },
  infoKey: {
    color: '#588BAE',
  },
  infoValue: {
    fontWeight: '450',
    color: '#515151',
  },

}));

const CardInfoLine = (props) => {
  const { infoKey, infoValue } = props;
  const classes = useStyles();
  return (
    <div className={classes.cardInfoLine}>
      <div className={classes.infoKey}>{infoKey}</div>
      <div className={classes.infoValue}>{infoValue}</div>
    </div>
  );
};

CardInfoLine.propTypes = {
  infoKey: PropTypes.string.isRequired,
  infoValue: PropTypes.string.isRequired,
};

export default CardInfoLine;
