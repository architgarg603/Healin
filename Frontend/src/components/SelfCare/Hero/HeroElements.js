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
  font-size: clamp(1.7rem, 2.2vw, 2.7rem);
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  font-weight:400;
`;

export const HeroP = styled.p`
  font-weight:bold;
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-top:0.8rem;
  margin-bottom: 1.5rem;
  padding-left:30px;
`;

export const HeroBtn = styled.button`
  font-size: large;
  cursor:pointer;
  margin-left:80px;
  border: none;
  background: #524F5E;
  color: white;
  transition: 0.2s ease-out;
  border-radius: 20px;
  height:50px;
  width:150px;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;
