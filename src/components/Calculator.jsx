import React, { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';
import Rating from '@material-ui/lab/Rating';
import "isomorphic-fetch";
import styled from 'styled-components';

const MobileMgTop = styled.div`
  margin-top: 0px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;

import { 
    HeaderProfileContainer,
    GridContainer,
    FlagContainer,
    FlagImg,
    MobileMgTop2,
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
    CheckoutHeaderTitle,
    ExpressOrder,
    ButtonOrderBox,
    ButtonOrder,
    CurrentElo,
    DesiredElo,
    SwitchesLeftContainer,
    SwitchDivision,
    SwitchDivision2,
    SwitchVictory,
    QueueContainer,
    QueueBox,
    QueueHeader,
    QueueHeaderContainer,
    SwitchesLeftText,
    SwitchesLeftText2,
    SwitchesLeftBoldText,
    SwitchesLeftLightText,
    VictoryCalculatorContainer,
    VictoryCalculatorHeader,
    VictoryCalculatorBody,
    VictoryCalculatorSpan,
    MobileContainer,
    MobileCategoryContainer,
    MobileCategoryLight,
    MobileCategoryBold,
    MobileCategoryBox,
    DivRightContainer,
    Disclaimer,
    PromotionInput,
    PromotionErrorLabel,
    PromotionSuccessLabel,
    PromotionInputLabel,
    DiscountBox,
    BorderImage,
    CheckoutOrderBgImage,
    SwitchBg
  } from './calculator-styles';

import ironFlag from "assets/bandeira ferro 2.png";
import bronzeflag from "assets/bandeira bronze 2 (1).png";
import silverFlag from "assets/bandeira prata 2 (1).png";
import goldFlag from "assets/bandeira ouro 2 (1).png";
import platinaFlag from "assets/bandeira platina 2 (1).png";
import diamanteFlag from "assets/bandeira diamante 2 (1).png";
import borderImage from "assets/border.png";
import checkoutBg from "assets/box.png";

import leftBg from "assets/esq_azul.png";
import leftBgLaranja from "assets/esq_laranja.png";
import leftBgCinza from "assets/esq_cinza.png";

import SelectElo from "components/modals/SelectElo";
import SelectPayment from "components/modals/PaymentModal";

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

const PurpleSwitch2 = withStyles({
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

let checked = {};

const Calculator = () => {

  const [soloDivision, setSoloDivision] = React.useState(true);
  const [duoDivision, setDuoDivision] = React.useState(false);
  const [divisionCalculator, setDivisionCalculator] = React.useState(true);
  const [victoryCalculator, setVictoryCalculator] = React.useState(false);
  const [soloDuoQueue, setSoloDuoQueue] = React.useState(true);
  const [flexQueue, setFlexQueue] = React.useState(false);
  const [md10, setMd10] = React.useState(false);
  const [totalCustomers, setTotalCustomers] = React.useState(0);
  const [victoriesCount, setVictoriesCount] = React.useState(1);
  const [inputPromotionValue, setInputPromotionValue] = React.useState("");
  const [promotionValueDiscount, setPromotionValueDiscount] = React.useState(0);
  const [promotionPercentageDiscount, setpromotionPercentageDiscount] = React.useState(0);
  const [promotionError, setPromotionError] = React.useState("");
  const [promotionSuccessLabel, setPromotionSuccessLabel] = React.useState("");
  const [fromEloState, setFromEloState] = React.useState('FERRO 4');
  const [toEloState, setToEloState] = React.useState('OURO 4');
  const [currentEloVictoryPrice, setCurrentEloVictoryPrice] = React.useState(0);
  
  const [division, setDivision] = React.useState('SOLO');

  let elos = [];
  let totalPrice = 0;

  const [modalState, setModalState] = React.useState(false);
  const [modalStateFrom, setModalStateFrom] = React.useState(false);
  const [modalStatePurchase, setModalStatePurchase] = React.useState(false);

  const [services, setServices] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [displayedTotal, setDisplayedTotal] = React.useState(0);
  const [additionalCost, setAditionalCost] = React.useState(0);
  const [discountedValue, setDiscountedValue] = React.useState(0);
  const [calculatorLabel1, setcalculatorLabel1] = React.useState('Divisão');
  const [calculatorLabel2, setcalculatorLabel2] = React.useState('Vitória');

  const increaseVictory = () => {
    if(md10) { return; }
    let newValue = victoriesCount + 1;
    setVictoriesCount(newValue);
    let newTotal = currentEloVictoryPrice * newValue;
    setTotal(newTotal);
    setDisplayedTotal(newTotal);
  }
  const decreaseVictory = () => {
    if(md10) { return; }
    if(victoriesCount > 1) {
      let newValue = victoriesCount - 1;
      setVictoriesCount(newValue);
      let newTotal = currentEloVictoryPrice * newValue;
      setTotal(newTotal);
      setDisplayedTotal(newTotal);
    }
  }

  const selectFlag = (flagName) => {
    if(flagName.includes('FERRO')) {
      return ironFlag;
    }
    if(flagName.includes('BRONZE')) {
      return bronzeflag;
    }
    if(flagName.includes('PRATA')) {
      return silverFlag;
    }
    if(flagName.includes('OURO')) {
      return goldFlag;
    }
    if(flagName.includes('PLATINA')) {
      return platinaFlag;
    }
    if(flagName.includes('DIAMANTE')) {
      return diamanteFlag;
    }
  }

  const handleCalculatorChange = (off) => {
    setMd10(false);
    setDivisionCalculator(!divisionCalculator)
    setVictoryCalculator(!victoryCalculator)
    if(!victoryCalculator) {
      (async() => {
        setDisplayedTotal(0);
        setTotal(0);
        elos = [];
        const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/victory`);
        const elosJson = await resElos.json();

        elosJson.forEach(elo => {
          let temp = {};
          temp[`${elo.elo}`] = elo.value_solo;
          elos.push(temp);
        });

        let fromIndex = elos.findIndex(e => Object.keys(e)[0] == fromEloState );
        let eloPrice = elos[fromIndex][fromEloState] * victoriesCount;
        setCurrentEloVictoryPrice(elos[fromIndex][fromEloState]);

        setTotal(eloPrice);
        setDisplayedTotal(eloPrice);
      })()
    }
    if(!divisionCalculator) {
      (async () => {
        setDisplayedTotal(0);
        setTotal(0);
        const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/elo`);
        const elosJson = await resElos.json();
        elosJson.forEach(elo => {
          let temp = {};
          temp[`${elo.elo.name}`] = elo.elo.value;
          elos.push(temp);
        });

        let p = ['ferro', 'bronze', 'prata', 'ouro', 'platina', 'diamante'];
        let fromEloIndex = p.findIndex(l => l.includes(fromEloState.toLowerCase().split(' ')[0]));
        let toEloIndex = p.findIndex(l => l.includes(toEloState.toLowerCase().split(' ')[0]));
        if(fromEloIndex >= toEloIndex) {
          setToEloState(fromEloState);
        }

        let fromIndex = elos.findIndex(e => Object.keys(e)[0] == fromEloState );
        let toIndex = elos.findIndex(e => Object.keys(e)[0] == toEloState );

        for(let i = fromIndex; i <= toIndex; i++){
          let eloPrice = Number.parseFloat(Object.values(elos[i])[0]);
          totalPrice += eloPrice;
        }
        setTotal(totalPrice);
        setDisplayedTotal(totalPrice);
      })();
    }
  }

  const handleMd10Switch = () => {
    setMd10(!md10);
    if(!md10) {
      setDivisionCalculator(false);
      setVictoryCalculator(true);
      setVictoriesCount(10);
      recalculateVictory(fromEloState, 10);
      (async() => {
        const resDiscount = await fetch(`https://lit-headland-64162.herokuapp.com/md10discount`);
        const discountJson = await resDiscount.json();
        if(soloDivision) {
          setDiscountedValue(discountJson.value_solo)
        }
        if(duoDivision) {
          setDiscountedValue(discountJson.value_duo)
        }
      })();
    } else {
      setDiscountedValue(0);
      setVictoriesCount(1);
    }
  }

  const handleMd10 = () => {
  }

  const handleQueueChange = () => {
    setSoloDuoQueue(!soloDuoQueue)
    setFlexQueue(!flexQueue)
  }

  const setAditionalCostFunc = (newValue) => {
    let value = 0;
    console.log('new value, ', newValue);
    if(newValue > 0) {
      value = newValue;
      setAditionalCost(value)
    } else {
      value = Math.abs(newValue);
      setAditionalCost(value)
    }
    console.log('value, ', value);
    setDisplayedTotal(total + value);
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleModalChange = () => {
    setModalState(!modalState);
  };
  const handleModalChangeFrom = () => {
    setModalStateFrom(!modalStateFrom);
  };

  const handleModalChangePurchase = () => {
    setModalStatePurchase(!modalStatePurchase);
  };

  const handleDisplayedTotal = (dT) => {
    let dc = discountedValue;
    let value = Number.parseFloat(dT);
    if(promotionPercentageDiscount != 0) {
      dc += promotionPercentageDiscount;
    }
    if(promotionValueDiscount != 0) {
      value = value - promotionValueDiscount;
    }
    if(dc != 0) {
      let discount = ( dc * value ) / 100
      value = value - discount;
      return value.toFixed(2).toString().replace(".", ",");
    } else {
      return value.toFixed(2).toString().replace(".", ",") 
    }
  }

  const titleize = (sentence) => {
    if(!sentence.split) return sentence;
    var _titleizeWord = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
    result = [];
    sentence.split(" ").forEach(function(w) {
      result.push(_titleizeWord(w));
    });
    return result.join(" ");
  }

  const selectEloCbFrom = (e) => {
    if(victoryCalculator) {
      setModalStateFrom(false);
      setFromEloState(e);
      recalculateVictory(e);
      return;
    }
    let p = ['ferro', 'bronze', 'prata', 'ouro', 'platina', 'diamante'];
    let fromEloIndex = p.findIndex(l => l.includes(e.toLowerCase().split(' ')[0]));
    let toEloIndex = p.findIndex(l => l.includes(toEloState.toLowerCase().split(' ')[0]));
    if(fromEloIndex >= toEloIndex) {
      setToEloState(e);
    }
    setModalStateFrom(false);
    setFromEloState(e);
    reCalculateValue({ from: e, to: toEloState});
  }

  const selectEloCbTo = (e) => {
    if(e == fromEloState) {
      alert(`Você já está no ${fromEloState}`);
      return;
    }
    setModalState(false);
    setToEloState(e);
    reCalculateValue({ to: e, from: fromEloState});
  }

  const recalculateVictory = (from, victories, queue='solo') => {
    (async() => {
      setDisplayedTotal(0);
      setTotal(0);
      if(!elos || elos.length <= 0) {
        elos = [];
        const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/victory`);
        const elosJson = await resElos.json();
        elosJson.forEach(elo => {
          let temp = {};
          if(queue == 'solo') {
            temp[`${elo.elo}`] = elo.value_solo;
          }
          if(queue == 'duo') {
            temp[`${elo.elo}`] = elo.value_duo;
          }
          elos.push(temp);
        });
      }
      let fromIndex = elos.findIndex(e => Object.keys(e)[0] == from );
      let eloPrice = elos[fromIndex][from] * (victories || victoriesCount);
      setCurrentEloVictoryPrice(elos[fromIndex][from]);

      setTotal(eloPrice);
      setDisplayedTotal(eloPrice);
    })()
  }

  const reCalculateValue = ({to, from}) => {
    (async() => {
      setTotal(0);
      setDisplayedTotal(0);
      totalPrice = 0; 
      if(!elos || elos.length <= 0) {
        elos = [];
        if(victoryCalculator) {
          const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/victory`);
          const elosJson = await resElos.json();

          elosJson.forEach(elo => {
            let temp = {};
            temp[`${elo.elo}`] = elo.value_solo;
            elos.push(temp);
          });
        }
        if(divisionCalculator) {
          const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/elo`);
          const elosJson = await resElos.json();

          elosJson.forEach(elo => {
            let temp = {};
            temp[`${elo.elo.name}`] = elo.elo.value;
            elos.push(temp);
          });
        }
      }

      let fromIndex = elos.findIndex(e => Object.keys(e)[0] == from );
      let toIndex = elos.findIndex(e => Object.keys(e)[0] == to );

      for(let i = fromIndex; i <= toIndex; i++){
        let eloPrice = Number.parseFloat(Object.values(elos[i])[0]);
        totalPrice += eloPrice;
      }  
      setTotal(totalPrice);
      setDisplayedTotal(totalPrice);
    })()
  }

  const handleDivisionChange = () => {
    setSoloDivision(!soloDivision);
    setDuoDivision(!duoDivision);
    if(victoryCalculator) {
      if(!soloDivision) {
        setDivision('SOLO');
        recalculateVictory(fromEloState, victoriesCount, 'solo');
      }
      if(!duoDivision) {
        setDivision('DUO');
        recalculateVictory(fromEloState, victoriesCount, 'duo');
      }
      return;
    }
    if(!soloDivision) {
      (async () => {
        setDivision('SOLO');
        setServices([]);
        elos = [];
        const resServices = await fetch(`https://lit-headland-64162.herokuapp.com/service`);
        const servicesJson = await resServices.json();

        setServices(servicesJson);
        servicesJson.forEach(service => {
          checked[`${service.name}`] = false;
        });

        const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/elo`);
        const elosJson = await resElos.json();

        elosJson.forEach(elo => {
          let temp = {};
          temp[`${elo.elo.name}`] = elo.elo.value;
          elos.push(temp);
        });

        let fromIndex = elos.findIndex(e => Object.keys(e)[0] == fromEloState );
        let toIndex = elos.findIndex(e => Object.keys(e)[0] == toEloState );
        for(let i = fromIndex; i <= toIndex; i++){
          let eloPrice = Number.parseFloat(Object.values(elos[i])[0]);
          console.log("eloprice ", eloPrice);
          totalPrice += eloPrice;
        }
        setTotal(totalPrice);
        setDisplayedTotal(totalPrice);
      })();
    }
    if(!duoDivision) {
      (async () => {
        setDivision('DUO');
        setServices([]);
        elos = [];
        const resServices = await fetch(`https://lit-headland-64162.herokuapp.com/servicesduo`);
        const servicesJson = await resServices.json();

        setServices(servicesJson);
        servicesJson.forEach(service => {
          checked[`${service.name}`] = false;
        });

        const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/eloduo`);
        const elosJson = await resElos.json();

        elosJson.forEach(elo => {
          let temp = {};
          temp[`${elo.elo.name}`] = elo.elo.value;
          elos.push(temp);
        });

        let fromIndex = elos.findIndex(e => Object.keys(e)[0] == fromEloState );
        let toIndex = elos.findIndex(e => Object.keys(e)[0] == toEloState );
        for(let i = fromIndex; i <= toIndex; i++){
          let eloPrice = Number.parseFloat(Object.values(elos[i])[0]);
          console.log("eloprice ", eloPrice);
          totalPrice += eloPrice;
        }
        console.log("teste");
        console.log('total ', totalPrice);
        setTotal(totalPrice);
        setDisplayedTotal(totalPrice);
      })();
    }
  };

  useEffect(() => {    
    (async() => {
      const resServices = await fetch(`https://lit-headland-64162.herokuapp.com/service`);
      const servicesJson = await resServices.json();
      const resElos = await fetch(`https://lit-headland-64162.herokuapp.com/elo`);
      const elosJson = await resElos.json();
      const resCustomers = await fetch(`https://lit-headland-64162.herokuapp.com/customer`);
      const customersJson = await resCustomers.json();
      setTotalCustomers(customersJson.total);
      setServices(servicesJson);
      servicesJson.forEach(service => {
        checked[`${service.name}`] = false;
      });
      elosJson.forEach(elo => {
        let temp = {};
        temp[`${elo.elo.name}`] = elo.elo.value;
        elos.push(temp);
      });
      console.log('response -> ', servicesJson);
      console.log('checked -> ', checked);
      console.log('elos -> ', elos);

      let fromIndex = elos.findIndex(e => Object.keys(e)[0] == fromEloState );
      let toIndex = elos.findIndex(e => Object.keys(e)[0] == toEloState );
      console.log('from index ->', fromIndex);
      console.log('to index ->', toIndex);
      console.log('true ->', fromIndex <= toIndex);
      for(let i = fromIndex; i <= toIndex; i++){
        let eloPrice = Number.parseFloat(Object.values(elos[i])[0]);
        console.log("eloprice ", eloPrice);
        totalPrice += eloPrice;
      }
      console.log('total ', totalPrice);
      setTotal(totalPrice);
      setDisplayedTotal(totalPrice);
    })();
  }, []);

  const handlePromotioncall = async (param) => {
    const res = await fetch(`https://lit-headland-64162.herokuapp.com/promotion?name=${param}`);
    const resJson = await res.json();
    if(resJson) {
      debugger;
      if(resJson.discount_value && resJson.discount_value != "0.0") {
        setPromotionError("");
        setPromotionValueDiscount(Number.parseFloat(resJson.discount_value));
        setPromotionSuccessLabel("Cupom aplicado !")
        return;
      }
      if(resJson.discount_percentage && resJson.discount_percentage != "0.0") {
        setPromotionError("");
        setpromotionPercentageDiscount(Number.parseFloat(resJson.discount_percentage));
        setPromotionSuccessLabel("Cupom aplicado !")
        return;
      }
    } else {
      setPromotionError("Cupom não encontrado");
      setPromotionSuccessLabel("")
    }
  }

  const handleDiscountedValue = (dT, promotionValueDiscount, promotionPercentageDiscount) => {
    dT = Number.parseFloat(dT);
    if((dT > 0 || promotionPercentageDiscount > 0) && promotionValueDiscount > 0) {
      debugger;
      alert(promotionPercentageDiscount + dT)
      return `-${(dT + promotionValueDiscount).toFixed(2).toString().replace(".00", "")}% && -${(promotionValueDiscount).toFixed(2).toString().replace(".", ",")}R$`; 
    }
    if(promotionValueDiscount > 0) {
      return `-${(promotionValueDiscount)}R$`; 
    }
    if(dT > 0 || promotionPercentageDiscount > 0) {
      return `-${(dT + promotionPercentageDiscount).toFixed(2).toString().replace(".00", "")}%`;
    }
  }

  const handleDiscountPrice2 = (dT) => {
    if(dT) {
      return `${(dT).toFixed(2).toString().replace(".", ",")}`;
    }
  }

  const handleCheckChange = (serviceName) => {
    let myService = services.find((service) => {
      return service.name == serviceName
    });
    let servicePercentage = Number.parseFloat(myService.value);
    let additionalCost2 = (servicePercentage * total) / 100;

    (async() => {
      if(!checked[serviceName]) {
        await setAditionalCostFunc(additionalCost2 + additionalCost);
      } else {
        await setAditionalCostFunc(additionalCost2 - additionalCost);
      }
    })();
    checked[serviceName] = !checked[serviceName];
  }

  return (
    <>
    <HeaderProfileContainer>
      <div style={{ position: 'absolute', top: 200 }}>
      <SwitchesLeftContainer>
        <SwitchesLeftText>
          <SwitchesLeftLightText>
            Escolha sua
          </SwitchesLeftLightText>
          <SwitchesLeftBoldText>
            Categoria
          </SwitchesLeftBoldText>
        </SwitchesLeftText>
        <SwitchDivision style={ divisionCalculator ? { } : { height: '24px', color: 'white', width: '160px' }}>
          { calculatorLabel1 }
          <SwitchBg style={divisionCalculator ? {} : { width: 200 }}  src={divisionCalculator ? leftBg : leftBgCinza} />
          <input checked={divisionCalculator}  type="checkbox"  /><label onClick={() => { handleCalculatorChange() }} for="switch">Toggle</label>
          {/* <PurpleSwitch2 checked={ divisionCalculator } onClick={ () => { handleCalculatorChange() } } /> */}
        </SwitchDivision>
        <SwitchDivision2 style={ victoryCalculator ? { height: '60px', width: '200px', color: 'white',  } : { color: 'white' }} >
          { calculatorLabel2 }
          <SwitchBg style={victoryCalculator ? {} : { width: 200 }} src={victoryCalculator ? leftBg : leftBgCinza} />
          <input checked={victoryCalculator} type="checkbox"  /><label onClick={() => { handleCalculatorChange('off') }}  for="switch">Toggle</label>
          {/* <PurpleSwitch2 checked={ victoryCalculator } onClick={ ()  => { handleCalculatorChange('off') } } /> */}
        </SwitchDivision2>
      </SwitchesLeftContainer>
      <SwitchesLeftContainer>
        <SwitchesLeftText2>
          <SwitchesLeftLightText>
            Escolha seu
          </SwitchesLeftLightText>
          <SwitchesLeftBoldText>
            Tipo de fila
          </SwitchesLeftBoldText>
        </SwitchesLeftText2>
        <SwitchVictory style={ soloDuoQueue ? { height: '60px', width: '200px' } : { height: '24px', width: '170px', color: 'white' }} >
          SOLO/DUO
          <SwitchBg style={soloDuoQueue ? {} : { width: 200 }}  src={soloDuoQueue ? leftBgLaranja : leftBgCinza} />
          <input checked={soloDuoQueue} type="checkbox"  /><label onClick={() => { handleQueueChange(1) }} for="switch">Toggle</label>
          {/* <PurpleSwitch2 checked={ soloDuoQueue } onClick={ () => { handleQueueChange() } } /> */}
        </SwitchVictory>
        <SwitchDivision2 style={ flexQueue ?  { height: '60px', width: '200px', color: 'white'} : {} } >
          FLEX
          <SwitchBg style={flexQueue ? {} : { width: 200 }}  src={flexQueue ? leftBgLaranja : leftBgCinza} />
          <input checked={flexQueue} type="checkbox"  /><label onClick={() => { handleQueueChange(1) }} for="switch">Toggle</label>
          {/* <PurpleSwitch2 checked={ flexQueue } onClick={ () => { handleQueueChange() } } /> */}
        </SwitchDivision2>
      </SwitchesLeftContainer>
      </div>

      <SelectElo callback={(e) => { selectEloCbTo(e) } } handleClose={ handleModalChange } open={ modalState } desired={ true } disabledFrom={ fromEloState.toLocaleLowerCase() }  />
      <SelectElo callback={(e) => { selectEloCbFrom(e) } } handleClose={ handleModalChangeFrom } open={ modalStateFrom } desired={ false } disabledFrom={ 'ferro 4' } />
      <SelectPayment handleClose={ handleModalChangePurchase } open={ modalStatePurchase } valueParam={ displayedTotal }  />
      <GridContainer>
        <QueueHeaderContainer>
            <QueueHeader>SERVIÇO</QueueHeader>
        </QueueHeaderContainer>
        <QueueContainer>
          <QueueBox id="divisionChange" onClick={ () => { handleDivisionChange() } }>
            <span style={ division != 'SOLO' ? { cursor: 'pointer', color: '#C7C7C7'} : {cursor: 'pointer'} }>SOLO</span>
            <span style={ division != 'DUO' ? { cursor: 'pointer', color: '#C7C7C7', marginLeft: '16px' } : { cursor: 'pointer', marginLeft: '16px' } }>DUO</span>
            <BorderImage src={borderImage}/>
          </QueueBox>
        </QueueContainer> 
        <Grid container 
          direction="row"
          justify="center"
          alignItems="center"
          >
          <MobileMgTop>

          <MobileContainer>
            <MobileCategoryContainer>
              <MobileCategoryLight> ESCOLHE AÍ!</MobileCategoryLight>
              <MobileCategoryBold> CATEGORIA </MobileCategoryBold>
            </MobileCategoryContainer>
            <MobileCategoryBox onClick={ () => { handleCalculatorChange() } } style={ divisionCalculator ? { background: '#3D9BE9', color: 'white' } : { color: '#7B7B7B', background: '#D7D7D7' } }>
              DIVISAO
            </MobileCategoryBox>
            <MobileCategoryBox onClick={ () => { handleCalculatorChange() } } style={ (victoryCalculator && !md10) ? { background: '#3D9BE9', color: 'white' } : { color: '#7B7B7B', background: '#D7D7D7' } }>
              VITÓRIA
            </MobileCategoryBox>
            <MobileCategoryBox onClick={ () => { handleMd10() } } style={ md10 ? { background: '#3D9BE9', color: 'white' } : { color: '#7B7B7B', background: '#D7D7D7' } }>
              MD10
            </MobileCategoryBox>

            <MobileCategoryContainer>
              <MobileCategoryLight>AGORA, ESCOLHA</MobileCategoryLight>
              <MobileCategoryBold> SEU TIPO DE FILA </MobileCategoryBold>
            </MobileCategoryContainer>
            <MobileCategoryBox onClick={ () => { handleQueueChange() } } style={ soloDuoQueue ? { background: '#F4A340' } : { color: '#7B7B7B', background: '#D7D7D7' } }>
              SOLO/DUO
            </MobileCategoryBox>
            <MobileCategoryBox onClick={ () => { handleQueueChange() } } style={ flexQueue ? { background: '#F4A340' }  : { color: '#7B7B7B', background: '#D7D7D7' } }>
              FLEX
            </MobileCategoryBox>
          </MobileContainer>
          </MobileMgTop >
          <MobileMgTop2/>
          <Grid item xs={0} s={0} md={2} ></Grid>
          <Grid item xs={12} s={12} md={3}>
            <FlagContainer>
              <CurrentElo>
                Elo <b style={{ marginLeft: '6px', fontWeight: 800 }} >atual</b>
              </CurrentElo>
              <BronzeElo onClick={ () => { setModalStateFrom(true) } } >
                { fromEloState }
              </BronzeElo>
              {/* { !victoryCalculator &&
              <BronzePdl>
                0 - 20 PDL
              </BronzePdl>
              } */}
              <BronzeQueue>
                { division }
              </BronzeQueue>
              <FlagImg src={ selectFlag(fromEloState) } />
            </FlagContainer>
          </Grid>
          <Grid item xs={12} s={12} md={3} lg={3}>
          <DivRightContainer>

          { divisionCalculator &&
            <FlagContainer>
              <DesiredElo>
                ELO <b style={{ marginLeft: '6px', fontWeight: 800 }}>desejado</b>
              </DesiredElo>
              <Elo onClick={ () => { setModalState(true) } } >
                { toEloState }
              </Elo>
              {/* <Pdl onClick={ () => {} } >
                0 - 20 PDL
              </Pdl> */}
              <Queue>
                { division }
              </Queue>
              <FlagImg src={ selectFlag(toEloState) } />
            </FlagContainer>
           } { victoryCalculator &&
            <>
              <VictoryCalculatorContainer>
                <VictoryCalculatorHeader>
                  Número de vitórias
                </VictoryCalculatorHeader>
                <VictoryCalculatorBody>
                  <VictoryCalculatorSpan style={{ cursor: 'pointer', zIndex: 4 }} onClick={ () => { decreaseVictory() } }>-</VictoryCalculatorSpan>
                    <VictoryCalculatorSpan>{ victoriesCount }</VictoryCalculatorSpan>
                  <VictoryCalculatorSpan style={{ cursor: 'pointer', zIndex: 4  }} onClick={ () => { increaseVictory() } } >+</VictoryCalculatorSpan>
                </VictoryCalculatorBody>
              </VictoryCalculatorContainer>
            </>
           }
          </DivRightContainer>
          </Grid>
          {/* <Grid item xs={0} s={0} md={1}></Grid> */}
          <Grid item xs={12} s={12} md={3} lg={3} style={{ marginBottom: '64px' }}>
            <div style={{ paddingTop: 100, height: '100%', width: '100%', position: 'relative'}} >
            <CheckoutOrderBgImage src={checkoutBg} />
            <CheckoutOrderBoxContainer>
              <CheckoutHeader>
                <CheckoutHeaderTitle>
                  { totalCustomers == 0 ? '-' : totalCustomers } Compraram
                </CheckoutHeaderTitle>
                <Rating name="read-only" value={5} readOnly  style={ { paddingRight: '16px'} }/>
              </CheckoutHeader>
              <SubTitleBox>
                <Division>
                  DIVISAO { division }
                  { (discountedValue > 0 || promotionValueDiscount > 0 || promotionPercentageDiscount > 0) && 
                    <DiscountBox>
                      { handleDiscountedValue(discountedValue, promotionValueDiscount, promotionPercentageDiscount) }
                    </DiscountBox>
                  }
                </Division>
                { (discountedValue > 0 || promotionValueDiscount > 0 || promotionPercentageDiscount > 0)&& 
                  <SalePrice>
                    { handleDiscountPrice2(displayedTotal)}R$
                  </SalePrice>
                }
              </SubTitleBox>
              <OrderBox>
                { divisionCalculator && 
                  <BoostOrder>{titleize(fromEloState)} - {titleize(toEloState)}</BoostOrder>
                }
                { victoryCalculator && 
                  <BoostOrder>{titleize(fromEloState)} - Vitória</BoostOrder>
                }
                <TotalPrice>{ handleDisplayedTotal(displayedTotal) } R$</TotalPrice>
              </OrderBox>
              <OrderAditionsBox style={ { minHeight: '476px' } }>
                <OrdersAditionsTitle>PRODUTOS ADICIONAIS</OrdersAditionsTitle>
                {
                  victoryCalculator &&
                    <FreeChampionAdition style={ { marginTop: 0 } }>
                      <span style={ { margin: 'auto 0' } }>MD10</span>
                      <input checked={md10} type="checkbox"  /><label onClick={() => { handleMd10Switch() }} for="switch">Toggle</label>
                      {/* <PurpleSwitch checked={md10} onChange={() => { handleMd10Switch() }} name="checkedA"/> */}
                    </FreeChampionAdition>
                }
                { services.length > 0 ? services.map((service, index) => {
                  console.log(index)
                  return (
                  <FreeChampionAdition style={ (index > 0 || victoryCalculator ) ? { marginTop: 0 } : {} }>
                    <span style={ { margin: 'auto 0' } }>{ service.name }</span>
                    <input checked={checked[service.name]} type="checkbox" /><label onClick={() => { handleCheckChange(service.name) }} for="switch">Toggle</label>
                    {/* <PurpleSwitch checked={checked[service.name]} onChange={() => { handleCheckChange(service.name) }} name="checkedA"/> */}
                  </FreeChampionAdition>
                  )
                }) : <CircularProgress style={ { marginTop: '16px' } }/> }
              </OrderAditionsBox>
              <OrderAditionsBox>
                <div style={{display: 'flex'}}>
                  <PromotionInputLabel>Cupom</PromotionInputLabel>
                  <PromotionInput value={inputPromotionValue} onChange={(e) => {
                    setInputPromotionValue(e.target.value);
                    handlePromotioncall(e.target.value);
                  }}/>
                </div>
                <PromotionErrorLabel>{promotionError}</PromotionErrorLabel>
                { promotionSuccessLabel != "" ? <PromotionSuccessLabel>{promotionSuccessLabel}</PromotionSuccessLabel> : <></>}
              </OrderAditionsBox>
            </CheckoutOrderBoxContainer>
            <TotalAmountBox>
              <Disclaimer></Disclaimer>
              <TotalTitle>TOTAL</TotalTitle>
              <TotalValue>{ handleDisplayedTotal(displayedTotal)} R$</TotalValue>
              { md10 &&  
              <Disclaimer>
                Obs: O valor das vitórias em MD10 tem desconto pois as 10 vitórias não são garantidas  
              </Disclaimer>
              }
            </TotalAmountBox>
            <ButtonOrderBox>
              <ButtonOrder onClick={() => { setModalStatePurchase(true) }}>Comprar Boost</ButtonOrder>
            </ButtonOrderBox>
            </div>
          </Grid>
        </Grid>
      </GridContainer>
    
    </HeaderProfileContainer>
    </>
  );
}

export default Calculator;
