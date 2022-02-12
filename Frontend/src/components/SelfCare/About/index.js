import React from 'react';
import {
  AboutContainer,
  AboutContent,
  AboutItems,
  AboutH1,
  AboutP,
  AboutBtn
} from './AboutElements';

const Hero = () => {

  return (
    <AboutContainer>
      <AboutContent>
        <AboutItems>
          <AboutH1>Why Self-Care?</AboutH1>
          <AboutP>Things have been difficult, ever since the covid. People lost their jobs and livelihood. With such tough situations, often forget about our wellbeing!
            <br/><br/>It is scientifically proven that self care is essential to keep your mind and body healthy. <br/><br/>
            It can take as little as 5 minutes to uplift your mind and body. At the end of the day, your health is all that matters!
            <br/><br/>
            Are you Ready?</AboutP>
          {/* <AboutBtn>Are you Ready?</AboutBtn> */}
        </AboutItems>
      </AboutContent>
    </AboutContainer>
  );
};

export default Hero;
