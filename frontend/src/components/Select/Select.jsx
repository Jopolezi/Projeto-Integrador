import React from 'react'
import styled from 'styled-components'
import * as C from '../../styles/colors'
import '../../assets/fonts/fonts.css'

const SelectComponent = styled.select`
    width: 100%;
    padding: 0.85rem;
    border: 2px solid ${C.colors.input};
    border-radius: 8px;
    cursor: text;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    transition: border-color 0.55s ease;
  
    &:focus {
        outline: none;
        border-color: ${C.colors.red};
    }
`

const Select = ( {type, placeholder, onChange, ...rest} ) => {
  return (
    <SelectComponent 
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    {...rest} />
  )
}

export default Select
