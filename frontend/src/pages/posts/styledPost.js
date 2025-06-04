import styled from 'styled-components';

// Colors
export const colors = {
  dark: '#2c3e50',
  darkGray: '#34495e',
  gray: '#7f8c8d',
  lightgray: '#bdc3c7',
  red: '#e74c3c',
  white: '#ffffff',
  offwhite: '#f8f9fa'
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${colors.offwhite};
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  padding: 20px 4%;
  height: 80px;
  position: fixed;
  top: 0;
  background: ${colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const LogoText = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${colors.dark};
  margin: 0;
  pointer-events: none;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 0 4%;
  gap: 10px;
  flex-grow: 1;
`;

export const Title = styled.h1`    
  align-self: flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: ${colors.darkGray};
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background: ${colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  gap: 1rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroupFull = styled(FormGroup)`
  grid-column: 1 / -1;
`;

export const InputTitle = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.dark};
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid ${({ hasError }) => hasError ? colors.red : colors.lightgray};
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  background: ${colors.white};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.red};
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid ${({ hasError }) => hasError ? colors.red : colors.lightgray};
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.red};
  }
  
  &::placeholder {
    color: ${colors.gray};
  }
`;

export const InputError = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  color: ${colors.red};
  margin-top: 0.25rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin: 10px 0;
`;

export const RememberCheckbox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  accent-color: ${colors.red};
`;

export const RememberCheckboxText = styled.p`
  color: ${colors.gray};
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  margin: 0;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  max-width: 100%;
  padding: 20px 4%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colors.white};
  color: ${colors.gray};
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const FooterText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.75rem; 
  pointer-events: none;
  user-select: none;
  margin: 0;
`;

export const FooterLinks = styled.div`
  font-size: 0.75rem;
  display: flex;
  gap: 20px;

  a {
    color: ${colors.gray};
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    transition: color 0.55s ease;
    cursor: pointer;

    &:hover {
      color: ${colors.dark};
    }
  }
`;

export const SuccessAlert = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  padding: 12px 20px;
  background-color: #27ae60;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;