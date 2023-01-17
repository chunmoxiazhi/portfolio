import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  { Button } from '@mui/material'




const StyledButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  height: '50px',
  width: '200px',
  borderRadius: 50,
  backgroundColor: '#141c3a',
  border: `2px solid ${theme.palette.button.primaryBlue}`,
  color:theme.palette.primaryWhite,
  fontWeight: theme.typography.fontWeightBold,
  '&:hover': {
    border: `2px solid ${theme.palette.button.primaryBlue}`,
    backgroundColor: theme.palette.button.primaryBlue
  }
}))


const CustomizedButton = ({text, t, onClick}) => {
  return (
    <StyledButton
      onClick={onClick}
    >
      {t(text)}
    </StyledButton>
  )
}


export default CustomizedButton