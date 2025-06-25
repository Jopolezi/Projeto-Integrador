import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  max-width: 1200px;
  margin: 0 auto 30px auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .logo-icon {
    background-color: #FF4444;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
  }
  
  .logo-text {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
  border-bottom: 2px solid #FF4444;
  padding-bottom: 10px;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF4444, #FF6666);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .placeholder {
    font-size: 48px;
    color: white;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #FF4444;
    box-shadow: 0 0 0 2px rgba(255, 68, 68, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #FF4444;
    box-shadow: 0 0 0 2px rgba(255, 68, 68, 0.1);
  }
`;

export const ExperienceInput = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  
  input {
    flex: 1;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.disabled ? '#ccc' : '#FF4444'};
  color: white;
  border: none;
  padding: ${props => props.small ? '12px 20px' : '15px 30px'};
  border-radius: 6px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: ${props => props.small ? '14px' : '16px'};
  font-weight: ${props => props.small ? '500' : 'bold'};
  ${props => props.fullWidth && 'width: 100%; margin-top: 20px;'}
  ${props => props.outline && `
    background-color: transparent;
    color: #FF4444;
    border: 2px solid #FF4444;
    &:hover { background-color: #FF4444; color: white; }
  `}
  
  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : props.outline ? '#FF4444' : '#e03e3e'};
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

export const ExperienceTag = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid #ddd;
  
  button {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    margin-left: 8px;
    font-size: 12px;
    
    &:hover {
      color: #FF4444;
    }
  }
`;