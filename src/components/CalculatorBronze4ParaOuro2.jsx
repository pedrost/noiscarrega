import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import { 
    HeaderProfileContainer,
    GridContainer,
    FlagContainer,
    FlagImg,
    Capacete2,
    Capacete1,
    BronzeFlag,
    TextFlagContainer,
    Elo,
    Pdl,
    Queue,
    BronzeElo,
    BronzePdl,
    BronzeQueue,
    CheckoutOrderBoxContainer,
    CheckoutHeader,
    SubTitleBox,
    OrderBox,
    Division,
    SalePrice,
    BoostOrder,
    TotalPrice,
    OrderAditionsBox,
    FreeChampionAdition,
    OrdersAditionsTitle,
    SpellsAdition,
    OfflineModeAdition,
    VPNAdition,
    TotalAmountBox,
    TotalTitle,
    TotalValue,
    ExpressOrderBox,
    ExpressOrder,
    ButtonOrderBox,
    ButtonOrder
  } from './calculator-styles';

import ironFlag from "assets/bandeira ouro 2.png";
import bronzeflag from "assets/bandeira bronze 2.png";

import SelectElo from "components/modals/SelectElo";

const PurpleSwitch = withStyles({
  switchBase: {
    color: '#797979',
    '&$checked': {
      color: '#4C7CDC',
    },
    '&$checked + $track': {
      backgroundColor: '#446fc4',
    },
  },
  checked: {},
  track: {},
})(Switch);

const Calculator = () => {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
  });

  const [modalState, setModalState] = React.useState(false);
  const [modalStateFrom, setModalStateFrom] = React.useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleModalChange = () => {
    setModalState(!modalState);
  };
  const handleModalChangeFrom = () => {
    setModalStateFrom(!modalStateFrom);
  };

  return (
    <HeaderProfileContainer>
      <SelectElo handleClose={ handleModalChange } open={ modalState } desired={ true } />
      <SelectElo handleClose={ handleModalChangeFrom } open={ modalStateFrom } desired={ false } />
      <GridContainer>
        <Grid container spacing={2}
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={12} s={12} md={4}>
            <FlagContainer>
              <BronzeElo onClick={ () => { setModalStateFrom(true) } } >
                BRONZE 4
              </BronzeElo>
              <BronzePdl>
                0 - 20 PDL
              </BronzePdl>
              <BronzeQueue>
                Solo
              </BronzeQueue>
              <FlagImg src={ bronzeflag } />
            </FlagContainer>
          </Grid>
          <Grid item xs={12} s={12} md={4}>
            <FlagContainer>
              <Elo onClick={ () => { setModalState(true) } } >
                OURO 2
              </Elo>
              <Pdl onClick={ () => {} } >
                0 - 20 PDL
              </Pdl>
              <Queue>
                Solo
              </Queue>
              <FlagImg src={ ironFlag } />
            </FlagContainer>
          </Grid>
          <Grid item xs={12} s={12} md={4}>
            <CheckoutOrderBoxContainer>
              <CheckoutHeader>

              </CheckoutHeader>
              <SubTitleBox>
                <Division>
                  SOLO DIVISIONS
                </Division>
                <SalePrice>
                  1,186.53$
                </SalePrice>
              </SubTitleBox>
              <OrderBox>
                <BoostOrder>Diamond IV (0 LP) - GrandMaster</BoostOrder>
                <TotalPrice>889.90$</TotalPrice>
              </OrderBox>
              <OrderAditionsBox>
                <OrdersAditionsTitle>ORDER ADITIONS</OrdersAditionsTitle>
                <FreeChampionAdition>
                  <span style={ { margin: 'auto 0', fontFamily:'Gilroy-Regular' } }>Choose roles and Champions</span>
                  <PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA"/>
                </FreeChampionAdition>
                <SpellsAdition>
                  <span style={ { margin: 'auto 0', fontFamily:'Gilroy-Regular' } }>Choose summoner spells</span>
                  <PurpleSwitch checked={state.checkedB} onChange={handleChange} name="checkedB"/>
                </SpellsAdition>
                <OfflineModeAdition>
                  <span style={ { margin: 'auto 0', fontFamily:'Gilroy-Regular' } }>Offline mode</span>
                  <PurpleSwitch checked={state.checkedC} onChange={handleChange} name="checkedC"/>
                </OfflineModeAdition>
                <VPNAdition>
                  <span style={ { margin: 'auto 0', fontFamily:'Gilroy-Regular' } } >VPN + Encryption Protection</span>
                  <PurpleSwitch checked={state.checkedD} onChange={handleChange} name="checkedD"/>
                </VPNAdition>
              </OrderAditionsBox>
            </CheckoutOrderBoxContainer>
            <TotalAmountBox>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalValue>889.90 $</TotalValue>
            </TotalAmountBox>
            <ExpressOrderBox>
              <ExpressOrder>
                <span style={ { margin: 'auto 0' } } >Express Order <span style={ { color: '#B0B0B0', margin:'auto 0' } } >(+25%)</span></span>
                <PurpleSwitch checked={state.checkedE} onChange={handleChange} name="checkedE"/>
              </ExpressOrder>
            </ExpressOrderBox>
            <ButtonOrderBox>
              <ButtonOrder>Purchase Boost</ButtonOrder>
            </ButtonOrderBox>
          </Grid>
        </Grid>
      </GridContainer>
    
    </HeaderProfileContainer>
  );
}

export default Calculator;
