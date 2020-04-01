import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  cardAvatarWrapper: {
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  cardName: {
    fontWeight: 600,
    color: '#414141',
    fontSize: 18,
  },
}));

const CardFace = (props) => {
  const classes = useStyles();
  const { cardName, cardImage } = props;
  return (
    <Box>
      <Typography className={classes.cardName} noWrap variant="subtitle1" gutterBottom>
        {cardName}
      </Typography>
      <div className={classes.cardAvatarWrapper}>
        <img src={cardImage} alt={`Name of the card ${cardName}`} />
      </div>
    </Box>
  );
};

CardFace.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
};

export default CardFace;
