import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  {Grid, Typography, Drawer, Divider } from '@mui/material'
import { Fade } from "react-awesome-reveal"

const FadeLayout = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, background }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5rem 0',
  background: background,
  [theme.breakpoints.down("md")]: {
    padding: `2rem 0`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: `2rem 0`,
  },
}))
const SectionLayout = ({children, ...prop}) => {
  return (
    <FadeLayout
      background={prop.background}
    >
      <Fade
        direction="up"
        triggerOnce={true}
      >
        {children}
      </Fade>
    </FadeLayout>
  )
}




export default SectionLayout