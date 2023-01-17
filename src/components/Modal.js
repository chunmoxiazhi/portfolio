import React from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  { 
  Modal,
  Backdrop,
  Fade,
  Paper,
  Card,
  CardContent,
  Typography,
  Grid
 } from '@mui/material'

// Assets
import CloseIcon from '@mui/icons-material/Close';


const StyledModal = styled(Modal)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto'
}))

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 4,
  overflowY: 'hidden',
  [theme.breakpoints.down("md")]: {
    height: 'calc(100% - 66px)',
    width: '100%',
    marginTop: 66,
    borderRadius: 0
  }
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primaryWhite,
    border: 'none',
    borderRadius: 5,
    boxShadow: 'none',
    zIndex: 9,
    maxWidth: '650px',
    [theme.breakpoints.down("md")]: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: '0',
      maxWidth: '100%',
    }
}))

const StyledModalTitle = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.primaryWhite,
  border: 'none',
  boxShadow: 'none',
  background: theme.palette.primaryDarkBlue,
  color: theme.palette.primaryWhite,
  padding: '1rem 1.5rem',
  '& svg': {
    fontSize: 18,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.button.primaryBlue
    }
  },
  // [theme.breakpoints.down("sm")]: {
  //   position: 'fixed',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   overflowY: 'scroll',
  //   borderRadius: '0'
  // }
}))

const StyledModalContent = styled(Grid)(({ theme }) => ({
  padding: '1.5rem 1.5rem',
}))

const CustomizedModal = ({
  title,  
  children, 
  openModal, 
  setOpenModal,
  t,
  ...restProps
}) => {
  return (
    <StyledModal
      open={openModal}
      onClose={() => setOpenModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <StyledPaper>
          <StyledCard>
            <StyledModalTitle>
              {t(title)}
              <CloseIcon
                onClick={() => setOpenModal(false)}
              />
            </StyledModalTitle>
            <StyledModalContent>
              {children}
            </StyledModalContent>
          </StyledCard>
        </StyledPaper>
      </Fade>
    </StyledModal>
  )
}

export default CustomizedModal