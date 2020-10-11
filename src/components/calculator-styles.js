import styled from 'styled-components';

export const HeaderProfileContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding-bottom: 80px;
`;

export const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto 24px;
`;

export const TitleContainer = styled.span`
  display: block;
  font-family: 'Gilroy-Bold';
  text-align: center;
  font-size: 24px;
  color: var(--primary-green);
`;

export const VictoryCalculatorContainer = styled.div`
  width: 240px;
  text-transform: uppercase;
  color: white;
  font-size: 24px;
  text-align: center;
  margin: auto;
  @media only screen and (max-width: 768px) {
    margin: 32px auto;
  }
`;

export const VictoryCalculatorHeader = styled.div`
  height: 80px;
  background: #17387A;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 2px solid white;
  z-index: 10;
  position: relative;
`;

export const VictoryCalculatorBody = styled.div`
  height: 120px;
  z-index: 2;
  position: relative;
  top: -34px;
  background: #3FA7E6;
  display: flex;
  justify-content: center;
  font-size: 42px;
  align-items: center;
  border-radius: 24px;
  border: 2px solid white;
`;

export const VictoryCalculatorSpan = styled.span`
  margin: 0 8px;
  padding-top: 24px;
`;

export const SubtitleContainer = styled.span`
  display: block;
  font-family: 'Gilroy-SemiBold';
  text-align: center;
  font-size: 14px;
  color: var(--base-gray-light);
`;

export const QueueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const QueueHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const QueueHeader = styled.div`
  height: 24px;
  width: 202px;
  background: #2C5A9B;
  color: white;
  padding-top: 12px;
  letter-spacing: 2px;
  padding-bottom: 30px;
  text-align: center;
  border-bottom: 1px solid white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
`;

export const QueueBox = styled.div`
  height: 42px;
  width: 202px;
  position: relative;
  right: 0px;
  background: #11386F;
  color: white;
  padding: 8 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-bottom-right-radius: 22px;
  border-bottom-left-radius: 22px;
  &::after {
    content: '';
    display: block;
    height: 32px;
    width: 32px;
    background: transparent;
    position: absolute;
    background-image: url(${require('../assets/arrow2.png')});
    background-size: 32px;
    cursor: pointer;
    transform: rotate(180deg);
    right: 24px;
  }
`;

export const SwitchesLeftText = styled.div`
  color: #112E4D;
  margin-left: 24px;
  position: relative;
  text-transform: uppercase;
  &::before{
    content: '';
    position: absolute;
    display: block;
    left: -12px;
    height: 54px;
    width: 4px;
    background-color: #399CDA;
  }
`;

export const SwitchesLeftText2 = styled.div`
  margin-top: 32px;
  color: #112E4D;
  margin-left: 24px;
  position: relative;
  text-transform: uppercase;
  &::before{
    content: '';
    position: absolute;
    display: block;
    left: -12px;
    height: 54px;
    width: 4px;
    background-color: #E7AA3E;
  }
`;

export const SwitchesLeftBoldText = styled.div`
  font-family:'Gilroy-Bold' !important;;
  color: #112E4D;
  font-size: 24px;
`;

export const SwitchesLeftLightText = styled.div`
  font-family:'Gilroy-Light' !important;
  color: #112E4D;
  font-size: 24px;
`;

export const BronzeFlag = styled.img`
  width: 291px;
  height: auto;
  margin: auto;
  @media only screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;

export const CurrentElo = styled.div`
  width: 142px;
  height: 42px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 2px solid white;
  background: #11386F;
  color: white;
  position: absolute;
  font-size: 16px;
  top: -52px;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and (max-width: 768px) {
    left: 50%;
  }
`;

export const DesiredElo = styled.div`
  width: 152px;
  height: 42px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 2px solid white;
  background: #3D9BE9;
  color: white;
  position: absolute;
  font-size: 16px;
  top: -52px;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and (max-width: 768px) {
    left: 50%;
  }
`;

export const FlagContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: auto;
  @media only screen and (max-width: 768px) {
    margin-top: 70px;
    margin-bottom: 24px;
  }
`;

export const FlagImg = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  width: 240px;
  height: 446px;
`;

export const Capacete2 = styled.img`
  width: 330px;
  height: auto;
  position: absolute;
  bottom: -70px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
`;

export const Capacete1 = styled.img`
  width: 306px;
  height: auto;
  position: absolute;
  top: -201px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
`;

export const TextFlagContainer = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

export const Elo = styled.p`
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0px;
  position: absolute;
  color: white;
  left: inherit;
  top: 56%;
  z-index: 10;
  &::after {
    content: '';
    height: 24px;
    width: 24px;
    display: block;
    background: url('https://imgur.com/8toqDzW.png');
    background-size: 24px;
    z-index: 11;
    position: absolute;
    cursor: pointer;
    right: -24px;
    top: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    left: inherit;
  }
`;

export const Queue = styled.p`
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0px;
  position: absolute;
  color: white;
  left: inherit;
  top: 67%;
  z-index: 10;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    left: inherit;
  }
`;

export const Pdl = styled.p`
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0px;
  position: absolute;
  color: white;
  left: inherit;
  top: 60.2%;
  z-index: 10;
  &::after {
    content: '';
    height: 24px;
    width: 24px;
    display: block;
    background: url('https://imgur.com/8toqDzW.png');
    background-size: 24px;
    z-index: 11;
    position: absolute;
    cursor: pointer;
    right: -24px;
    top: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    left: inherit;
  }
`;

export const SwitchesLeftContainer = styled.div`
  position: absolute;
  left: -2px;
  top: 15%;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
export const MobileCategoryContainer = styled.div`
  margin-top: 32px;
  font-size: 32px;
  text-align: center;
  color: #1D3F73;
`;
export const MobileCategoryLight = styled.p`
  font-family: 'Gilroy-Light' !important;
`;
export const MobileCategoryBold = styled.p`
  font-family: 'Gilroy-Bold' !important;

`;
export const MobileCategoryBox = styled.div`
  width: 240px;
  height: 64px;
  color: white;
  margin: 16px auto;
  font-size: 24px;
  background: #3D9BE9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid white;
`;

export const DiscountBox = styled.div`
  color: white;
  background: red;
  width: 54px;
  display: inline-flex;
  justify-content: center;
  margin: 0 8px;
  align-items: center;
  height: 24px;
  border-radius: 4px;
`;

export const Disclaimer = styled.p`
  color: red;
  font-size: 12px;
`; 

export const SwitchDivision = styled.div`
  height: 60px;
  width: 200px;
  justify-content: space-between;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  align-items: center;
  padding: 24px;
  color: white;
  transition: width 1s, height 0.2s;
  border: 2px solid white;
  margin: 16px 0;
  background: rgb(56,154,222);
  background: linear-gradient(90deg, rgba(56,154,222,1) 0%, rgba(33,109,176,1) 49%, rgba(8,58,117,1) 100%);
`;

export const SwitchDivision2 = styled.div`
  height: 24px;
  width: 160px;
  transition: width 1s, height 0.2s;
  justify-content: space-between;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  align-items: center;
  padding: 24px;
  color: #A7A5A3;
  border: 2px solid white;
  margin: 16px 0;
  background: #CCCCCC;
`;

export const SwitchVictory = styled.div`
  height: 60px;
  width: 200px;
  justify-content: space-between;
  margin: 16px 0;
  padding: 24px;
  display: flex;
  color: white;
  align-items: center;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  border: 2px solid white;
  background: rgb(248,211,73);
  background: linear-gradient(90deg, rgba(248,211,73,1) 0%, rgba(245,173,66,1) 49%, rgba(241,128,58,1) 100%);
`;

export const BronzeElo = styled.p`
  font-weight: bold;
  font-size: 16px;
  position: relative;
  padding: 4px 0px;
  position: absolute;
  color: white;
  left: inherit;
  top: 56%;
  z-index: 10;
  &::after {
    content: '';
    height: 24px;
    width: 24px;
    display: block;
    background: url('https://imgur.com/8toqDzW.png');
    background-size: 24px;
    z-index: 11;
    position: absolute;
    cursor: pointer;
    right: -24px;
    top: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    left: inherit;
  }
`;

export const BronzeQueue = styled.p`
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0px;
  position: absolute;
  color: white;
  left: inherit;
  top: 67%;
  z-index: 10;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    left: inherit;
  }
`;

export const BronzePdl = styled.p`
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0px;
  position: absolute;
  color: white;
  left: inherit;
  top: 275px;
  z-index: 10;
  &::after {
    content: '';
    height: 24px;
    width: 24px;
    display: block;
    background: url('https://imgur.com/8toqDzW.png');
    background-size: 24px;
    z-index: 11;
    position: absolute;
    cursor: pointer;
    right: -24px;
    top: 0;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    left: inherit;
    right: 120px;
  }
`;

export const CheckoutOrderBoxContainer = styled.div`
  width: 100%;
  background: white;
  height: 100%;
  border-radius: 24px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #010c1c;
  border-top: 1px solid #6F787F;
  border-right: 1px solid #6F787F;
  border-left: 1px solid #6F787F;
`;

export const CheckoutBody = styled.div`
  width: 100%;
  height: 342px;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;


export const SubTitleBox = styled.div`
  padding: 16px 24px 4px;
  display: flex;
  justify-content: space-between;
`;

export const OrderBox = styled.div`
  display: flex;
  padding: 0 24px 16px;
  margin: 0 0;
  border-bottom: 1px solid #3B3B3B;
  justify-content: space-between;
  background: white;
`;

export const Division = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: black;
`;

export const SalePrice = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #3B3B3B;
  text-decoration: line-through;
`;

export const BoostOrder = styled.div`
  font-weight: bold;
  font-size: 12px;
  font-family:'Gilroy-Regular';
  text-transform: uppercase;
  margin: auto 0;
  color: #3B3B3B;
`;

export const CheckoutHeaderTitle = styled.div`
  font-size: 14px;
  padding-left: 16px;
  padding-top: 4px;
  font-family:'Gilroy-Regular';
  color: #F6B443;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  width: 100px;
  text-align: right;
  background: white;
  color: #4C7CDC;
`;

export const OrderAditionsBox = styled.div`
  padding: 24px 24px 16px;
  margin: 0 0;
  font-weight: normal;
  border-bottom: 1px solid #3B3B3B;
  background: white;
`;

export const OrdersAditionsTitle = styled.div`
  color: black;
`;

export const FreeChampionAdition = styled.div`
  color: #3B3B3B;
  font-family: 'Gilroy';
  justify-content: space-between;
  display: flex;
  margin: 16px 0 0;
`;

export const SpellsAdition = styled.div`
  color: #3B3B3B;
  justify-content: space-between;
  display: flex;
  margin: auto 0;
`;

export const OfflineModeAdition = styled.div`
  color: #3B3B3B;
  justify-content: space-between;
  display: flex;
  margin: auto 0;
`;

export const VPNAdition = styled.div`
  color: #3B3B3B;
  justify-content: space-between;
  display: flex;
  margin: auto 0;
`;

export const TotalAmountBox = styled.div`
  padding: 16px 24px 16px;
  margin: 0 0;
  font-weight: normal;
  border-bottom: 1px solid #3B3B3B;
  background: white;
`;

export const TotalTitle = styled.div`
  color: black;
`;

export const TotalValue = styled.div`
  color: #4C7CDC;
  font-size: 24px;
`;

export const ExpressOrderBox = styled.div`
  padding: 16px 24px 16px;
  margin: 0 0;
  font-weight: normal;
  border-bottom: 1px solid #3B3B3B;
`;

export const ExpressOrder = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonOrderBox = styled.div`
  border-radius: 4px;
  text-align: center;
  width: 100%;
  padding: 24px 0;
  cursor: pointer;
  background: white;
`;

export const ButtonOrder = styled.div`
  margin: 0 24px;
  color: white;
  border-radius: 4px;
  text-align: center;
  background: #ED3833;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


