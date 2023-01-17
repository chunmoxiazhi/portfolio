import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  {Grid, Typography, Drawer, Divider } from '@mui/material'
import SectionLayout from "../../components/SectionLayout"

const AboutMeLayout = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  [theme.breakpoints.down("lg")]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

const Avtar = styled("img")(({ theme }) => ({
  width: '280px',
  borderRadius: '4px',
  boxShadow: '-250px 0px 150px #0000001A',
  [theme.breakpoints.down("lg")]: {
    width: '56%'
  },
  [theme.breakpoints.down("md")]: {
    width: '65%'
  },
  [theme.breakpoints.down("sm")]: {
    width: '80%'
  }
}))

const AboutMeTextContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '550px',
  marginRight: '3rem',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down("lg")]: {
    width: '56%',
    marginRight: 0,
    marginBottom: '2rem'
  },
  [theme.breakpoints.down("md")]: {
    width: '65%'
  },
  [theme.breakpoints.down("sm")]: {
    width: '80%'
  }
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeTitle,
  fontWeight: theme.typography.fontWeightBold,
}))

const AboutMe = ({t}) => {
  return (
    <SectionLayout>
      <AboutMeLayout >
        <AboutMeTextContainer>
          <Title>{t("slogan")}</Title>
          
          <div>
            <Trans t={t}>{t("introduction")}</Trans>
          </div>
          <Divider/>
        
        </AboutMeTextContainer>
        
        <Avtar
          src="/images/michelle_x.jpg"
        />
      </AboutMeLayout>
    </SectionLayout>

  )
}

export default AboutMe