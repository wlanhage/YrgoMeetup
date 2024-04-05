import CompanyRegProgBar from "./CompanyRegProgBar";
import CompanyCardContent from "./CompanyCardContent";
import { useState } from "react";
import "../App.css";
import RedButton from "./RedButton";
import { Link } from "react-router-dom";



function CompanyCardFinished ({designData}) {

    const textArea = {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px'
    }

    const header = {
        fontFamily: 'inter',
        fontSize: '34px',
        textAlign: 'start'

    }

    const flexRow = {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '30px',
        
    }

    const smallText = {
        fontSize: '16px',
        fontFamily: 'inter',
    }

    const iconContainer = {
        width: '25px',
        height: '25px',
        backgroundColor: 'gray',
    }

    const mailText = {
        fontFamily: 'inter',
        fontSize: '16px',
    }

    const cardContainer = {
        position: 'relative',
        width: '350px',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
    }
  
      const card = {
          width: '320px',
          height: '200px',
          backgroundColor: designData.color,
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1.5px solid',
          borderRadius: '9px 9px 9px 9px',
  
          position: 'absolute',
          transform: 'translate(0px, 12px)',
      } 
  
      const cardBackside = {
          width: '320px',
          height: '200px',
          backgroundColor: '#F52A3B',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1.5px solid',
          borderRadius: '9px 9px 9px 9px',
  
          position: 'absolute',
          transform: 'translate(25px, -12px)',
      }
  
      const cardBacksideText = {
        position: 'relative',
        top: '30px',
        fontFamily: 'inter',
        fontSize: '40px',
      }  
     
  
      const emojiStyle = {
          fontSize: '50px',
          transform: 'rotate(20deg)',
          position: 'absolute',
          left: '85px',
          bottom: '130px'
      }

      const bottomText = {
        
        width: '340px',
        textAlign: 'start',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'inter'

      }



    const [isFlipped, setIsFlipped] = useState(true);
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    }


    return (
        <>
        <CompanyRegProgBar number={'3'} redBarWidth={'330px'} grayBarWidth={'0px'} />

        <div style={textArea}>
            <div style={header}>Tack för din anmälan! Vi ses på eventet</div>
            <div style={{...flexRow, ...smallText}} >
                <div style={iconContainer}></div>Visual arena Lindholmen
            </div>
            <div style={{display: 'flex', flexDirection: 'row' } }>
                <div style={{...flexRow, ...smallText, marginRight: '30px', marginBottom: '30px'}}>
                    <div style={iconContainer}></div>Onsdag 24 April
                </div>
                <div style={{...flexRow, ...smallText}}>
                    <div style={iconContainer}></div>Kl 15 - 17
                </div>
            </div>
            <div style={mailText}>Mail skickat</div>
        </div>

        
        <div style={cardContainer} onClick={handleCardClick}>
                  {isFlipped ? (
                    <>
                      <div style={cardBackside}></div>
                      <div style={card}>
                        <CompanyCardContent />
                        <div style={emojiStyle}>
                          {designData.emoji}
                        </div> 
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={card}>
                        <CompanyCardContent />
                      </div>
                      <div style={cardBackside}>
                        <h3 style={cardBacksideText}>{submittedData.company}</h3>
                      </div>
                    </>
                  )}
                </div>


                <div style={{display: 'flex', flexDirection: 'row', marginTop: '250px', width: '300px', marginLeft: 'auto', marginRight: 'auto',}}>
                    <div style={bottomText}>
                    Här är ditt visitkort
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                        <div style={iconContainer}></div>
                        <div style={iconContainer}></div>
                    </div>
                </div>

                <RedButton text={'Möt studenterna'} style={{marginTop: '15px',}} />
                
                <Link to="/Company" >
                    <RedButton text={'backa'} style={{ marginTop: '15px', backgroundColor: 'white', border: '1px solid red', color: 'red', }}/>
                </Link> 


        
        
        </>


    )
}

export default CompanyCardFinished;