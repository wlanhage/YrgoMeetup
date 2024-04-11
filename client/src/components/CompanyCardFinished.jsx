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
  position: relative;
  width: 320px;
  height: 100%;
  margin: 20px auto;
  margin-bottom: 270px;
`;

const Card = styled.div`
  width: 320px;
  height: 200px;
  background-color: white;
  margin: auto;
  border: 1.5px solid;
  border-radius: 9px;
  position: absolute;
  transform: translate(-12px, 12px);

  /* @media (min-width: 900px) {
    width: 450px;
    height: 300px;
  } */
`;

const CardBackside = styled.div`
  width: 320px;
  height: 200px;
  background-color: ${props => props.color};
  background-image: url(${props => props.pattern});
  background-size: cover;
  margin: auto;
  border: 1.5px solid;
  border-radius: 9px;
  position: absolute;
  transform: translate(12px, -12px);

  /* @media (min-width: 900px) {
    width: 450px;
    height: 300px;
  } */
`;

const CardBacksideText = styled.h3`
  position: relative;
  top: 110px;
  right: 50px;
  font-family: inter;
  font-size: 30px;
  color: 'white';
`;

const BottomText = styled.div`
  width: 340px;
  text-align: center;
  
  font-family: inter;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    
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

  const DesktopLeftTextArea = styled.div`
    margin-bottom: 60px;

  `;

  const DesktopRight = styled.div`
    width: 40vw;
    align-items: center;
    padding: 20px;
    border: 1px solid #001A52;
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

  const downloadPNG = async () => {
    const element = document.getElementById('cardContainer');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = imgData;
    link.click();
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
            <CardBackside pattern={designData.pattern} color={designData.color}>
              <CardBacksideText>{submittedData.company}</CardBacksideText>
            </CardBackside>
          </>
        )}
      </CardContainer>
      <FlexRow style={{ marginTop: '250px', width: '300px' }}>
        <BottomText>Här är ditt visitkort</BottomText>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
          <Icon src={download} alt="downloadPin" onClick={downloadPNG} />
          <Icon />
        </div>
      </FlexRow>
      <RedButton text={'Möt studenterna'} onClick={() => navigate('/Students')} style={{ marginTop: '15px' }} />
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
              <CardBackside pattern={designData.pattern} color={designData.color}>
                <CardBacksideText>{submittedData.company}</CardBacksideText>
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

      <RedButton text={'Möt studenterna'} onClick={() => navigate('/Students')} style={{ marginTop: '15px' }} />
      <Link to="/">
        <RedButton text={'Till startsidan'} style={{ marginTop: '15px', backgroundColor: 'white', border: '1px solid red', color: 'red' }} />
      </Link>
          
          </DesktopRight>
        </DesktopWrapper>
      </Desktop>

    </>
  );
}

export default CompanyCardFinished;
