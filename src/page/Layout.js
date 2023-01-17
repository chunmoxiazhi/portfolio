import React, { useEffect, useState } from "react"


// Utils
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import Grid from '@mui/material/Grid'
import Content from "../components/Content"
import ContactMe from "../views/ContactMe/ContactMe"

// Styles
import './layout.scss'

const MainLayout = styled(Grid)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowX: 'hidden'
}));

const Layout = ({t}) => {

  const isMatches = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true })

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Header/>
        <Content
          t={t}
        />
        <Footer
          t={t}
        />
      </MainLayout>
    </ThemeProvider>
    
  )
}

const theme = createTheme({
  typography: {
    fontFamily:"sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    fontSizeTitle: '30px',
    fontSizeLarge: '22px',
    fontSizeMedium: '16px',
    fontSizeSmall: '12px',
    h6: {
      fontWeight: 700,
      fontSize: ".9rem",
      letterSpacing: "1px"
    }
  },
  palette: {
    text: {
      darkBlue: "#4F6382",
      primary: '#333333',
      lightGray: '#707C8D',
      lightGray2: '#868686',
      darkGray: '#333333',
    },
    primary: {
      main: "#007bff",
    },
    icon: {
      grey: '#475B79',
      blue: '#0569FF',
      purpleIcon:'#5F72FF',
      purpleIconBg: '#EFF1FE',
      blueIcon: '#0569FF',
      redIcon: '#F96C6C',
      redIconBg:'#FDEAEA',
      disabledLightGray: '#e0e0e0',
      disabledDarkGray: '#999999'
    },
    button: {
      primaryBlue: '#3273AD',
    },
    primaryBlack: '#222222',
    primaryWhite: '#fffff3',
    primaryLightGrey: '#eeeeee',
    primaryDarkGrey: '#b4b3b3',
    primaryDarkBlue: '#242e47',
    dashedButtonBorder: '#8397B5',
    boxShadow: '0px 0px 10px #0000001A',
    primaryRed: '#C73734'
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: "4px",
        border: "none",
      },
    },
    container: {
      borderRadiusLarge: '15px'
    },
    button: {
      borderRadiusLarge: '8px'
    },
    greyBorder:'1px solid #BBBBBB',
    errBorder: '1px solid #C73734'
  },
  breakpoints: {
    xs: '375px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
})

export default Layout