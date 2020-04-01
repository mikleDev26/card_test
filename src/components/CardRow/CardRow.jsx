import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Divider } from '@material-ui/core';
import CardFace from '../CardFace/CardFace';
import PaymentProgress from '../PaymentProgress/PaymentProgress';
import CardInfoLine from './CardInfoLine';
import PaymentStatus from '../PaymentStatus/PaymentStatus';
import CardMenu from '../CardMenu/CardMenu';

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    flexGrow: 1,
    borderRadius: 3,
    maxWidth: '900px',
    margin: '25px auto',
    padding: ' 15px 10px',
    transform: 'translateX(0)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateX(-4px)',
    },
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  interest: {
    fontSize: 11,
    color: '#588BAE',
    display: 'flex',
    justifyContent: 'space-between',
  },
  payBtn: {
    textTransform: 'capitalize',
  },

}));

const CardRow = (props) => {
  const classes = useStyles();
  const {
    card: {
      cardName,
      cardImage,
      barMax,
      barPaid,
      balance,
      nextPayment,
      lastPayment,
      nextPaymentDate,
      paymentMade,
      interest: {
        apr,
        interestPaid,
        principal,
      },
    },
  } = props;

  const formatedPaymentDate = moment(nextPaymentDate).format('MMMM Do, YYYY');
  return (
    <Box boxShadow={3} className={classes.cardWrapper}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={2} lg={2}>
          <Box maxWidth={300}>
            <CardFace cardImage={cardImage} cardName={cardName} />
          </Box>
        </Grid>

        <Grid item container spacing={2} xs={12} sm={9} md={10} lg={10}>
          <Grid item xs={10} sm={11}>
            <PaymentProgress toPay={barMax} paid={barPaid} />
          </Grid>
          <Grid item xs={2} sm={1}>
            <CardMenu />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <div>
              <CardInfoLine infoKey="Balance" infoValue={`$${balance}`} />
              <CardInfoLine infoKey="Next Paymenet" infoValue={`$${nextPayment}`} />
              <CardInfoLine infoKey="Last Payment" infoValue={`$${lastPayment}`} />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <div>
              <CardInfoLine infoKey="Interest" infoValue={`${apr}%`} />
              <div className={classes.interest}>
                <span>
                  Interest: $
                  {interestPaid}
                </span>
                <span>
                  Principal: $
                  {principal}
                </span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <Box>
              <CardInfoLine infoKey="Next Payment" infoValue={formatedPaymentDate} />
              <Divider light />
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <PaymentStatus status={paymentMade} />
                <Button
                  className={classes.payBtn}
                  variant="contained"
                  color="primary"
                  size="small"
                  disableElevation
                >
                  Make Payment
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardRow;
