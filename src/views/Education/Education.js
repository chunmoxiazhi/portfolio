import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  {Grid, Typography, Drawer, Divider } from '@mui/material'
import SectionLayout from "../../components/SectionLayout"

const EDUCATION = [
  {
    schoolName: "university_of_toronto",
    time: "2011 - 2015",
    degree: "bachelor_of_science",
    honor: "honours_degree",
    image: "/images/university_of_toronto.png",
    colorBorder: "linear-gradient(#C6DAFC, #3367D6), linear-gradient(#C6DAFC, #7BAAF7), linear-gradient(#7BAAF7, #4285F4), linear-gradient(#3367D6, #4285F4 )",
  },
  {
    schoolName: "seneca_college",
    time: "2019 - 2020",
    degree: "diploma_of_computer_programming",
    honor: "gpa",
    image: "/images/seneca_college.png",
    colorBorder: 'linear-gradient(#F1959B, #DC1C13), linear-gradient(#F1959B, #F07470), linear-gradient(#F07470, #EA4C46), linear-gradient(#DC1C13, #EA4C46)',
  }
]

const EducationContentLayout = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '3rem 0',
  background: theme.palette.primaryLightGrey,
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
    alignItems: 'center'
  },
}))

const EducationContentContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 1rem',
  alignItems: 'center',
  width: 400,
  [theme.breakpoints.down("md")]: {
    width: '90%'
  },
  [theme.breakpoints.down("sm")]: {
    width: '80%',
    margin: '0 0.5rem',
  },
}))

const AvtarBackgroundContainer = styled(Grid)(({ theme }) => ({
  zIndex: 1,
}))

const AvtarContainer = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, colorborder }) => ({
  "@keyframes rotate": {
    '100%': {
      transform: 'rotate(1turn)',
    }
  },
  width: '212px',
  height: '212px',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  zIndex: 0,
  overflow: 'hidden',
  marginBottom: '1.5rem',
  
  '&:hover': {
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -2,
      left: '-50%',
      top:'-50%',
      width: '200%',
      height: '200%',
      backgroundColor: '#399953',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 50%, 50% 50%',
      backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%', 
      backgroundImage: colorborder,
      animation: 'rotate 4s linear infinite',
      opacity: '0.8'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      left: '6px',
      top: '6px',
      width: 'calc(100% - 12px)',
      height: 'calc(100% - 12px)',
      background: 'white',
      borderRadius: '50%'
    },
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: '2rem'
  },
}))

const Avtar = styled("img")(({ theme }) => ({
  width: '200px',
  borderRadius: '50%',
  position: 'absolute',
}))

const HideContainer = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, show }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems:'center',
  marginTop: show ? 0 : '-40%',
  overflow: 'hidden',
  transition: 'all .5s',
  zIndex: show ? 0 : -1,
  '& p': {
    marginBottom: '0.3rem',
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: '1rem'
  },
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeTitle,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: '5rem',
  [theme.breakpoints.down("sm")]: {
    marginBottom: '2rem',
  },
}))

const DegreeTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeLarge,
  fontWeight: theme.typography.fontWeightBold,
  textAlign: 'center',
}))
const YearTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeSmall,
  color: theme.palette.text.darkBlue,
}))
const RegularTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeMedium
}))

const Education = ({ref, t}) => {

  const [show, setShow] = useState()

  return (
    <SectionLayout
      background='#eeeeee'
    >
      <Title>{t('education')}</Title>
      <EducationContentLayout ref={ref}>
        {
          EDUCATION.map(education => <EducationContentContainer>
            <AvtarBackgroundContainer>
              <AvtarContainer
                colorborder={education.colorBorder}
              >
                <Avtar
                  src={education.image}
                  onMouseOver={()=>{setShow(education.schoolName)}}
                  onMouseLeave={() => {setShow("")}}
                />
              </AvtarContainer>
            </AvtarBackgroundContainer>
            
            <HideContainer
              show={show === education.schoolName}
            >
              <DegreeTypography>
                {t(education.degree)}
              </DegreeTypography>
              <RegularTypography>
                <strong>{t(education.schoolName)}</strong>
              </RegularTypography>
              <YearTypography>
                {t(education.time)}
              </YearTypography>
              <RegularTypography>
                {t(education.honor)}
              </RegularTypography>
            </HideContainer>
          </EducationContentContainer>)
        }
      </EducationContentLayout>
    </SectionLayout>
    

  )
}

export default Education