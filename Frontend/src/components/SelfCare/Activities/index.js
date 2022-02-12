import React from 'react';
import {
  ActivitiesContainer,
  ActivitiesContent,
  ActivitiesItems,
  ActivitiesH1,
  ActivitiesP,
  ActivitiesBtn,
  ActivitiesH2,
} from './ActivitiesElements';

const Hero = () => {

  return (
    <ActivitiesContainer>
       
      <ActivitiesContent>
     
        <ActivitiesItems>
        
          <ActivitiesH2>Find out your Self Care Activity!</ActivitiesH2>
          <ActivitiesP>
            I can spend: <br/>
            <ActivitiesBtn>5-10 mins</ActivitiesBtn>
            <ActivitiesBtn>10-30 mins</ActivitiesBtn>
            <ActivitiesBtn>30-60 mins</ActivitiesBtn>
            <ActivitiesBtn>60+ mins</ActivitiesBtn>
          </ActivitiesP>
          <ActivitiesP>Location:<br/>
            <ActivitiesBtn>Indoors</ActivitiesBtn>
            <ActivitiesBtn>Outdoors</ActivitiesBtn>
            <ActivitiesBtn>No preference</ActivitiesBtn>
          </ActivitiesP>
        </ActivitiesItems>
      </ActivitiesContent>
    </ActivitiesContainer>
  );
};

export default Hero;
