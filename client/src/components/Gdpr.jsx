import { css } from '@emotion/react';
import styled from '@emotion/styled';
import "../App.css";
import RedButton from './RedButton';
import { useState } from "react";

function GdprPopup () {

    const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

    const Wrapper = styled.div`
    position: fixed;
    top: 100px;
    right: 350px;


    width: 754px;
    height: 436px;
    background-color: white;
    padding: 20px;
  
    @media (max-width: 900px) {
      width: 100vw;
      height: auto;
      right: 0px;
    }
    `;

    const Header = styled.h2`
        font-family: inter;
        font-size: 34px;

    
        @media (max-width: 900px) {
            font-size: 24px;

          }
    `

    const Text = styled.p`
        font-family: inter;
        font-size: 16px;

    
        @media (max-width: 900px) {
            font-size: 16px;

          }
    `


    return(
        <Wrapper>
            <Header>
                Vårt förhållningssätt till dataskydd och GDPR
            </Header>
            <Text>
                Vi värnar om din integritet och är dedikerade till att skydda dina personuppgifter. Genom att använda denna webbplats samtycker du till vår hantering av dina personuppgifter enligt vår sekretesspolicy och i enlighet med EU:s allmänna dataskyddsförordning (GDPR). <br /><br />

                Genom att klicka på "Godkänn" samtycker du till vår användning av cookies och andra spårningstekniker för att förbättra din upplevelse på vår webbplats. Du kan när som helst ändra dina cookie-inställningar genom att besöka vår cookie-policy.<br /><br />

                För att justera dina cookie-inställningar och läsa mer om hur vi använder cookies och andra spårningstekniker, klicka på "Inställningar".
            </Text>

            <RedButton text={'Stäng'} onClick={() => setIsOpen(false)} />

        </Wrapper> 
    )
}

export default GdprPopup;