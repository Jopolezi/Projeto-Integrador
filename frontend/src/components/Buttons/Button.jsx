import React from 'react'
import styled from 'styled-components'
import * as C from '../../styles/colors'
import '../../assets/fonts/fonts.css'

const ButtonComponent = styled.button`
    width: 100%;
    background: ${({ loading }) => loading ? C.colors.gray : C.colors.red};
    color: ${C.colors.white};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.85rem;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    cursor: ${({ loading }) => loading ? 'not-allowed' : 'pointer'};
    transition: background 0.2s;
  
    &:hover {
        background: ${({ loading }) => loading ? C.colors.gray : C.colors.darkred};
    }
    
    &:disabled {
        opacity: 0.7;
    }
`

const Button = ({ type, loading, children }) => {
  return (
    <ButtonComponent 
      type={type}
      loading={loading}
      disabled={loading}
    >
      {children}
    </ButtonComponent>
  )
}

export default Button