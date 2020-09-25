import React from 'react';

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

import { 
    HeaderProfileContainer,
    GridContainer
} from './select-elo-styles';

import Box from '@material-ui/core/Box';

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
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  

const SelecElo = ({ callback, open=true, handleClose=()=>{}, desired=false, disabledFrom='' }) => {

  return (
    <HeaderProfileContainer>
      <Dialog maxWidth={ 'md' } fullWidth={ true } onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Selecionar Elo
        </DialogTitle>
        <DialogContent dividers>
        <Box display={{ xs: 'none', s: 'none', md: 'block' }} style={ { width: '100%'} }>
        <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('FERRO 4') }
                style={ disabledFrom == 'ferro 4'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 4
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('BRONZE 4') }
                style={disabledFrom.includes('ferro')  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 4
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PRATA 4') }
                style={disabledFrom.includes('bronze') || disabledFrom.includes('ferro') ||  disabledFrom == 'prata 4'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 4
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('OURO 4') }
                style={disabledFrom.includes('bronze') || disabledFrom.includes('ferro') ||  disabledFrom.includes('prata')  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 4
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PLATINA 4') }
                style={disabledFrom.includes('bronze') || 
                disabledFrom.includes('ferro') ||  
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 4
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('DIAMANTE 4') }
                style={disabledFrom.includes('bronze') || 
                disabledFrom.includes('ferro') ||  
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') || 
                disabledFrom.includes('platina')  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 4
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('FERRO 3') }
                style={
                disabledFrom == 'ferro 4'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 3
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('BRONZE 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom == 'bronze 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 3
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PRATA 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom == 'prata 4'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 3
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('OURO 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom == 'ouro 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }>
                OURO 3
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PLATINA 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') ||
                disabledFrom == 'platina 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 3
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('DIAMANTE 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('platina') ||
                disabledFrom == 'diamante 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 3
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('FERRO 2') }
                style={
                    disabledFrom == 'ferro 4' ||
                    disabledFrom == 'ferro 3' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 2
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('BRONZE 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom == 'bronze 4' ||
                disabledFrom == 'bronze 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 2
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PRATA 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom == 'prata 4' ||
                disabledFrom == 'prata 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 2
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('OURO 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom == 'ouro 4' ||
                disabledFrom == 'ouro 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 2
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PLATINA 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') || 
                disabledFrom == 'platina 4' ||
                disabledFrom == 'platina 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 2
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('DIAMANTE 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') || 
                disabledFrom.includes('platina') || 
                disabledFrom == 'diamante 4' ||
                disabledFrom == 'diamante 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 2
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('FERRO 1') }
                style={
                    disabledFrom == 'ferro 4' ||
                    disabledFrom == 'ferro 3' ||
                    disabledFrom == 'ferro 2' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 1
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('BRONZE 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom == 'bronze 4' ||
                disabledFrom == 'bronze 2' ||
                disabledFrom == 'bronze 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 1
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PRATA 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom == 'prata 4' ||
                disabledFrom == 'prata 2' ||
                disabledFrom == 'prata 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 1
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('OURO 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom == 'ouro 4' ||
                disabledFrom == 'ouro 2' ||
                disabledFrom == 'ouro 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 1
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('PLATINA 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') || 
                disabledFrom == 'platina 4' ||
                disabledFrom == 'platina 2' ||
                disabledFrom == 'platina 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 1
            </Grid>
            <Grid item xs={12} s={12} md={2}
                onClick={ () => callback('DIAMANTE 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom.includes('ouro') || 
                disabledFrom.includes('platina') || 
                disabledFrom == 'diamante 4' ||
                disabledFrom == 'diamante 2' ||
                disabledFrom == 'diamante 3'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 1
            </Grid>
          </Grid>

        </Box>

        <Box display={{ xs: 'block', s: 'block', md: 'none' }} style={ { width: '100%'} }>

        <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('FERRO 4') }
                style={ disabledFrom == 'ferro 4'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 4
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('FERRO 3') }
                style={
                    disabledFrom == 'ferro 4'  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 3
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('FERRO 2') }
                style={
                    disabledFrom == 'ferro 4' ||
                    disabledFrom == 'ferro 3' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 2
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('FERRO 1') }
                style={
                    disabledFrom == 'ferro 4' ||
                    disabledFrom == 'ferro 3' ||
                    disabledFrom == 'ferro 2' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                FERRO 1
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('BRONZE 4') }
                style={disabledFrom.includes('ferro') ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 4
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('BRONZE 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom == 'bronze 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 3
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('BRONZE 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom == 'bronze 3' ||
                disabledFrom == 'bronze 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 2
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('BRONZE 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom == 'bronze 3' ||
                disabledFrom == 'bronze 2' ||
                disabledFrom == 'bronze 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                BRONZE 1
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PRATA 4') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 4
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PRATA 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom == 'prata 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 3
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PRATA 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom == 'prata 3' ||
                disabledFrom == 'prata 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 2
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PRATA 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom == 'prata 3' ||
                disabledFrom == 'prata 2' ||
                disabledFrom == 'prata 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PRATA 1
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('OURO 4') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 4
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('OURO 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom == 'ouro 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 3
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('OURO 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom == 'ouro 3' ||
                disabledFrom == 'ouro 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 2
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('OURO 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('prata') || 
                disabledFrom == 'ouro 3' ||
                disabledFrom == 'ouro 2' ||
                disabledFrom == 'ouro 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                OURO 1
            </Grid>
          </Grid>
          <Grid container
          style={ { padding: '8px 0', textAlign: 'center' }}
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PLATINA 4') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') || 
                disabledFrom.includes('prata')  ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 4
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PLATINA 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom == 'platina 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 3
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PLATINA 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom == 'platina 3' ||
                disabledFrom == 'platina 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 2
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('PLATINA 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom == 'platina 3' ||
                disabledFrom == 'platina 2' ||
                disabledFrom == 'platina 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                PLATINA 1
            </Grid>
          </Grid>
          <Grid container
          direction="row"
          style={ { padding: '8px 0', textAlign: 'center' }}
          justify="center"
          alignItems="center">
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('DIAMANTE 4') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom.includes('platina') ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 4
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('DIAMANTE 3') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom.includes('platina') ||
                disabledFrom == 'diamante 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 3
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('DIAMANTE 2') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom.includes('platina') ||
                disabledFrom == 'diamante 3' ||
                disabledFrom == 'diamante 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 2
            </Grid>
            <Grid item xs={12} s={12} md={3}
                onClick={ () => callback('DIAMANTE 1') }
                style={disabledFrom.includes('ferro') || 
                disabledFrom.includes('bronze') || 
                disabledFrom.includes('ouro') ||
                disabledFrom.includes('prata') || 
                disabledFrom.includes('platina') ||
                disabledFrom == 'diamante 3' ||
                disabledFrom == 'diamante 2' ||
                disabledFrom == 'diamante 4' ? { color: 'black', cursor: 'pointer' } : {color: 'gray' } }
            >
                DIAMANTE 1
            </Grid>
          </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Confirmar
          </Button> */}
        </DialogActions>
      </Dialog>
    </HeaderProfileContainer>
  );
}

export default SelecElo;
