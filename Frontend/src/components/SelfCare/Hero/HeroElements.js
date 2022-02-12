import styled from 'styled-components';
import ImgBg from '../../../assets/self.jpg';

export const HeroContainer = styled.div`
  background: url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #000;
  
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 28px;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border: none;
  background: #C4C4C4;
  color: #000;
  transition: 0.2s ease-out;
  border-radius: 60px;
  &:hover {
    background: rgba(165, 165, 165, 1);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;
