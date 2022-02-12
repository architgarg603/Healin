import styled from 'styled-components';
import ImgBg from '../../../assets/self3.jpg';

export const ActivitiesContainer = styled.div`
  background: url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const ActivitiesContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  margin-left: auto; 
margin-right: 0;
`;

export const ActivitiesItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #000;
  margin-left: auto; 
margin-right: 0;
  line-height: 1;
  

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const ActivitiesH1 = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
export const ActivitiesH2 = styled.h2`
  font-size: 36px;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const ActivitiesP = styled.p`
  font-size: 22px;
  margin-bottom: 2rem;
  letter-spacing: 1.25px;
`;

export const ActivitiesBtn = styled.button`
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
