import React, { useState } from "react"
import i18n from 'i18next'

// Utils
import { styled } from '@mui/material/styles';

// Components
import {Grid, Typography, SvgIcon, Menu, MenuItem} from '@mui/material'

// Assets
import LanguageIcon from '@mui/icons-material/Language'

// Constants
import { LANGUAGES } from '../constants/constants'

const CustomizedHeader = styled(Grid)(({ theme }) => ({
  width: '100%',
  background: theme.palette.primaryWhite,
  height: '66px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  boxShadow: theme.palette.boxShadow,
  alignItems: 'center',
  padding: '0 5%',
  position: 'fixed',
  zIndex: 9999,
  [theme.breakpoints.down("lg")]: {
    padding: '0 40px',
  },
  [theme.breakpoints.down("xs")]: {
    padding: '0 40px',
  }
}))

const Logo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryBlack,
  fontSize: theme.typography.fontSizeTitle,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
}))

const Icon = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette.primaryDarkGrey,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primaryBlack
  }
}))

const LanguageMenu = styled(Menu)(({ theme }) => ({
  marginTop: '5px',
  marginLeft: '-20px',
  zIndex: 99999,
    '& > div': {
      borderRadius: theme.overrides.MuiPaper.borderRadius,
      boxShadow: '0px 0px 10px 0px #DEE2FF99',
    }
}))

const LanguageMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: theme.typography.fontSizeSmall,
}))


const Header = () => {
  // Manages position of language popover
  const [anchorEl, setAnchorEl] = useState(null)

  // Manages language popover
  const handleLanguageOpen = (e) => setAnchorEl(e.currentTarget)
  const handleLanguageClose = () => setAnchorEl(null)

  return (
    <CustomizedHeader>
      <Logo>Mi!</Logo>
      <Icon 
        component={LanguageIcon}
        onClick={e => handleLanguageOpen(e)}
      />
      <LanguageMenu
        anchorEl={anchorEl}
        open={!!anchorEl}
        elevation={0}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        getContentAnchorEl={null}
        onClose={handleLanguageClose}
      >
        {
          LANGUAGES.map(lang => <LanguageMenuItem
            key={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code)
              handleLanguageClose()
            }}
          >
            {lang.name}
          </LanguageMenuItem>)
        }
      </LanguageMenu>
      
    </CustomizedHeader>
  )
}

export default Header