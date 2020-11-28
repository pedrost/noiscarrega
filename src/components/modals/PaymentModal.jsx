import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { 
    HeaderProfileContainer,
    PayPicpay,
    GridContainer
} from './select-elo-styles';

import PicpayLogo from "assets/picpay.png";

const styles = (theme) => ({
root: {
    margin: 0,
    padding: theme.spacing(2),
},
closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
},
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
            </IconButton>
        ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  

const SelecElo = ({ valueParam, open=true, handleClose=()=>{} }) => {
	const [paypalLoaded, setPaypalLoaded] = useState(true);

	useEffect(() => { 
		if(open) {
			console.log('using effect', paypal); 
			setTimeout(() => {
				paypal.Buttons({
					createOrder: function(data, actions) {
						// This function sets up the details of the transaction, including the amount and line item details.
						return actions.order.create({
							purchase_units: [{
								amount: {
									currency_code: "BRL",
									value: valueParam || '10'
								}
							}]
						});
					},
					onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            window.location = "https://www.noiscarrega.com.br/agradecimento";
						return actions.order.capture().then(function(details) {
							// This function shows a transaction success message to your buyer.
							alert('Transaction completed by ' + details.payer.name.given_name);
						});
					}
				}).render('#paypal-button-container');
				setPaypalLoaded(false);
			}, 2000);
		}
	}, [ open ])

  return (
    <HeaderProfileContainer>
      <Dialog fullWidth={ true } onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Selecionar método de pagamento
        </DialogTitle>
        <DialogContent dividers>

        <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
					{ paypalLoaded && <CircularProgress /> }
					<div id="paypal-button-container"></div>
          { !paypalLoaded && 
            <a href="https://app.picpay.com/user/noiscarrega" target="blank" rel="noopener">
              <PayPicpay src={PicpayLogo} />
            </a>      
          }
        </Grid>
        </DialogContent>
      </Dialog>
    </HeaderProfileContainer>
  );
}

export default SelecElo;
