import React from "react"

// Utils
import { styled } from '@mui/material/styles';

// Components
import  {Grid, Typography} from '@mui/material'

const CustomizedFooter = styled(Grid)(({ theme }) => ({
  zIndex: 9999,
  background: theme.palette.primaryDarkGrey,
  color: theme.palette.primaryWhite,
  textAlign: 'center',
  height: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const Footer = ({t}) => {
  return (
    <CustomizedFooter>
      <Typography>{t("copyright")}</Typography>
    </CustomizedFooter>
  )
}

export default Footer