import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Time to begin your</HeroH1>
          <HeroP>SELF CARE JOURNEY!</HeroP>
          <HeroBtn>Get Started</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
