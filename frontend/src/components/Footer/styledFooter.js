import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #333333;
  color: #ffffff;
  margin-top: auto;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #cccccc;
  line-height: 1.5;
  margin: 0;
`;

export const FooterBottom = styled.div`
  padding: 1rem 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;