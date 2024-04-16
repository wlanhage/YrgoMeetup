import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CompanyRegProgBar from './CompanyRegProgBar';
import CompanyCardContent from './CompanyCardContent';
import RedButton from './RedButton';
import { Link } from 'react-router-dom';
import icon4 from '../assets/icon4.svg';
import clock from '../assets/smallicons/clock.svg';
import calendar from '../assets/smallicons/cal.svg';
import location from '../assets/smallicons/location.svg';
import download from '../assets/smallicons/download.svg';
import html2canvas from 'html2canvas';

const Phone = styled.div`
  display: block;

  @media (min-width: 900px) {
    display: none;
  }
`;

const TextArea = styled.div`
  width: 85%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-family: inter;
  font-size: 34px;
  text-align: start;
  weight: 200;
  
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 8px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-family: inter;
`;

const CardContainer = styled.div`
    
    width: 384px;
    height: 240px;
    margin-left: auto;
    margin-right: auto;
  `;

  const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 384px;
    height: 240px;
    background-color: white;
    /* margin-left: auto;
    margin-right: auto; */
    border: 1.5px solid;
    border-radius: 9px;
    
    transform: translate(-12px, 12px);
    margin-bottom: 0px;
  `;

  const CardBackside = styled.div`
    width: 384px;
    height: 240px;
    background-color: ${props => props.color};
  background-image: url(${props => props.pattern});
  background-size: cover;
    margin-left: auto;
    margin-right: auto;
    border: 1.5px solid;
    border-radius: 9px;
    position: absolute;
    transform: translate(12px, -12px);
    
  `;

  const CardBacksideText = styled.p`
    position: relative;
    top: 115px;
    right: 65px;
    font-family: "inter";
    font-size: 30px;
    font-weight: bold;
    color: white;
  `;

const BottomText = styled.div`
  
  width: 340px;
  text-align: center;
  
  font-family: inter;
  
  margin-right: 200px;
  
  margin-bottom: 10px;
  
  

  display: flex;
  justify-content: center;
  align-items: center;
  

  @media (min-width: 900px) {
    margin-top: 50px;
  }
`;

const Icon = styled.img`
  cursor: pointer;
`;


const Desktop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  
  @media (max-width: 900px) {
    display: none;
    transform: scale(1.3);
  }
  `;

  const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 50px auto;
  `;

  const DesktopLeft = styled.div`
    width: 45vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  

  const DesktopRight = styled.div`
    width: 40vw;
    align-items: center;
    padding: 20px;
    border: 1px solid #001A52;
  `;
  const Gap = styled.div`
  margin: 10px;
  `;

function CompanyCardFinished({ designData }) {

  if (!designData.icon) {
    designData.icon = icon4; // if icon is not set, use icon4
}
if (!designData.color) {
    designData.color = '#9C9A9A'; // if color is not set, use gray
}

  const navigate = useNavigate();
  const submittedData = JSON.parse(localStorage.getItem('submittedFormData'));
  const [isFlipped, setIsFlipped] = useState(true);
  const elementRef = useRef(null);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  

  return (
    <>
      <Phone>
      <TextArea>
        <Header>Tack för din anmälan! Vi ses på eventet</Header>
        <FlexRow>
          <Icon src={location} alt="locationPin" />
          <SmallText>Visual arena Lindholmen</SmallText>
        </FlexRow>
      <FlexRowContainer>
        <FlexRow>
          <Icon src={calendar} alt="calendarPin" />
          <SmallText>Onsdag 24 April</SmallText>
        </FlexRow>
        <FlexRow>
          <Icon src={clock} alt="clockPin" />
          <SmallText>Kl 15 - 17</SmallText>
        </FlexRow>
        </FlexRowContainer>
        {/* <MailText>Mail skickat</MailText> */}
      </TextArea>
      
      <CardContainer id="cardContainer" onClick={handleCardClick}>
        {isFlipped ? (
          <>
            <CardBackside pattern={designData.pattern} color={designData.color}></CardBackside>
            <Card>
              <CompanyCardContent designData={designData} />
            </Card>
          </>
        ) : (
          <>
            <Card>
              <CompanyCardContent />
            </Card>
            <CardBackside style={{ transform: 'translate(10px, -250px)'}} pattern={designData.pattern} color={designData.color}>
              <CardBacksideText >{submittedData.companyName}</CardBacksideText>
            </CardBackside>
          </>
        )}
      </CardContainer>
      <FlexRow>
        <BottomText>Här är ditt visitkort</BottomText>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          
          <Icon />
        </div>
      </FlexRow>
      <RedButton text={'Möt studenterna'} onClick={() => navigate('/Students')} style={{ marginTop: '15px' }} />
      <Gap />
      <Link to="/">
        <RedButton text={'Till startsidan'} style={{ marginTop: '15px', backgroundColor: 'white', border: '1px solid red', color: 'red' }} />
      </Link>
      </Phone>

      <Desktop>
        <div style={{fontFamily: 'inter', fontSize: '60px', weight: '300'}}>
          Tack för din anmälan! Vi ses på eventet!</div>
        <DesktopWrapper>
          <DesktopLeft>
            <CardContainer id="cardContainer" onClick={handleCardClick}>
          {isFlipped ? (
            <>
              <CardBackside pattern={designData.pattern} color={designData.color}></CardBackside>
              <Card>
                <CompanyCardContent designData={designData} />
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CompanyCardContent />
              </Card>
              <CardBackside style={{ transform: 'translate(10px, -250px)'}} pattern={designData.pattern} color={designData.color}>
                <CardBacksideText >{submittedData.companyName}</CardBacksideText>
              </CardBackside>
            </>
          )}
            </CardContainer>
            <BottomText>Här är ditt visitkort</BottomText>
          </DesktopLeft>

          <DesktopRight>
          <TextArea>
        <Header>BRANSCHEVENT 2024</Header>
        <FlexRow>
          <Icon src={location} alt="locationPin" />
          <SmallText>Visual arena Lindholmen</SmallText>
        </FlexRow>
      <FlexRowContainer>
        <FlexRow>
          <Icon src={calendar} alt="calendarPin" />
          <SmallText>Onsdag 24 April</SmallText>
        </FlexRow>
        <FlexRow>
          <Icon src={clock} alt="clockPin" />
          <SmallText>Kl 15 - 17</SmallText>
        </FlexRow>
        </FlexRowContainer>
        {/* <MailText>Mail skickat</MailText> */}
      </TextArea>

      <RedButton text={'Möt studenterna'} onClick={() => navigate('/Students')} style={{ marginTop: '15px', width: '90%' }} />
      <Gap />
      <Link to="/">
        <RedButton text={'Till startsidan'} style={{ marginTop: '15px', backgroundColor: 'white', border: '1px solid red', color: 'red', width: '90%' }} />
      </Link>
          
          </DesktopRight>
        </DesktopWrapper>
      </Desktop>

    </>
  );
}

export default CompanyCardFinished;
