import React, { useState, useRef, useEffect, useLayoutEffect } from "react"

// Utils
import { styled } from '@mui/material/styles'
import { Trans } from 'react-i18next'

// Components
import  {Grid, Typography, Drawer, Divider, SVG } from '@mui/material'
import SectionLayout from "../../components/SectionLayout"

// Assets
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person';

const ContactMeLayout = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '5rem',
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeTitle,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: '5rem',
  color: 'white'
}))

const ContactMeButton = styled('button', {shouldForwardProp: (props) => props !== "color" ,})(({ theme, expanded }) => ({
  '@keyframes extend': {
    '0%': {
      width: '600px',
      height: '200px',
      borderRadius: '100px',
      [theme.breakpoints.down("sm")]: {
        width: '220px',
        height: '160px',
      },
    },
    '10%': {
      width: '610px',
      height: '210px',
      background: 'white',
      marginLeft: '-5px',
      marginTop: '-5px',
      borderRadius: '60px',
      [theme.breakpoints.down("sm")]: {
        width: '220px',
        height: '160px',
      },
    },
    '20%': {
      width: '600px',
      height: '200px',
      background: 'white',
      marginLeft: '0px',
      marginTop: '0px',
      borderRadius: '20px',
      border:'none',
      [theme.breakpoints.down("sm")]: {
        width: '220px',
        height: '160px',
      },
    },
    '100%': {
      width: '600px',
      height: '200px',
      borderRadius: '100px',
      background: 'white',
      borderRadius: '4px',
      border:'none',
      [theme.breakpoints.down("sm")]: {
        width: '220px',
        height: '160px',
      },
    },
  },
  
  borderWidth: '1px',
  width: 300,
  height: 100,
  borderRadius: 100,
  background: 'white',
  border: `5px solid ${theme.palette.text.darkBlue}`,
  animation: expanded && 'extend 1s ease-in-out',
  animationFillMode: expanded && 'forwards',
  [theme.breakpoints.down("sm")]: {
    width: "220px !important",
  },

}))

const ContactMeButtonText = styled('span', {shouldForwardProp: (props) => props !== "color" ,})(({ theme, expanded }) => ({
  '@keyframes disappear ': {
    '0%': {
      opacity: 1
    },
    '20%': {
      opacity: 0.7
    },
    '100%': {
      opacity: 0,
    },
  },
  fontSize: theme.typography.fontSizeLarge,
  color: theme.palette.text.darkBlue,
  fontWeight: theme.typography.fontWeightBold,
  animation: expanded && 'disappear 1s ease-in-out',
  animationFillMode: expanded && 'forwards',

}))

const ContactMeButtonContentLayout = styled('div', {shouldForwardProp: (props) => props !== "color" ,})(({ theme, expanded }) => ({
  '@keyframes appear ': {
    '0%': {
      opacity: 0
    },
    '40%': {
      opacity: 0.4,
    },
    '100%': {
      opacity: 1,
    },
  },
  display: expanded ? 'flex' : 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  animation: expanded && 'appear 1s ease-in-out',
  animationFillMode: expanded && 'forwards',
}))

const ContactMeButtonContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '35%',
  '& p': {
    fontSize: theme.typography.fontSizeMedium,
    color: theme.palette.text.darkGray,
    fontWeight: theme.typography.fontWeightBold,
  },
  '& svg': {
    color: theme.palette.primaryDarkGrey,
    opacity: 0.6,
    marginRight: '1rem',
    marginBottom: '1rem',
  },
  [theme.breakpoints.down("sm")]: {
    width: '95%',
    '& svg': {
      marginRight: '0.5rem',
    },
  },
}))
const ContactMe = ({ref, t}) => {

  const [expanded, setExpanded] = useState(false)
  
  return (
    <SectionLayout
      background={'#3273AD'}
    >
      <ContactMeButton
        expanded={expanded}
        onClick={()=>{setExpanded(true)}}
      >
        <ContactMeButtonText expanded={expanded}>
          {t("contact_me")}
        </ContactMeButtonText>
        <ContactMeButtonContentLayout expanded={expanded}>
          <ContactMeButtonContent>
            <PersonIcon/>
            <Typography>Xiao (Michelle) Xiao</Typography>
          </ContactMeButtonContent>
          <ContactMeButtonContent>
            <PhoneIcon/>
            <Typography>+1 647-704-6988</Typography>
          </ContactMeButtonContent>
          <ContactMeButtonContent>
            <EmailIcon/>
            <Typography>xiaox9201@gmail.com</Typography>
          </ContactMeButtonContent>

        </ContactMeButtonContentLayout>

      </ContactMeButton>
    </SectionLayout>
    

  )
}




export default ContactMe