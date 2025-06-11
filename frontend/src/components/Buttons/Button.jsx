import React from 'react'
import styled from 'styled-components'
import * as C from '../../styles/colors'
import '../../assets/fonts/fonts.css'

const ButtonComponent = styled.button`
    width: 100%;
    background: ${C.colors.red};
    color: ${C.colors.white};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.85rem;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  
    &:hover {
        background: ${C.colors.darkred};
    }
    `

const Button = ( { type, loading, children, ...props }) => {
  return (
    <ButtonComponent 
    type={type}
    disabled={loading}
    {...props}>

    {children}
    </ButtonComponent>
  )
}

export default Button
