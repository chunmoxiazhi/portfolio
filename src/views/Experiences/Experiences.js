import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  {Grid, Typography, Drawer, Divider } from '@mui/material'
import CustomizedButton from "../../components/Button"
import CustomizedModal from "../../components/Modal"
import ExperienceDetails from "./components/ExperienceDetails"
import SectionLayout from "../../components/SectionLayout"

const ExperienceContentLayout = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  [theme.breakpoints.down("lg")]: {
    flexDirection: 'column',
    alignItems: 'center'
  },
}))

const Figure = styled("figure")(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  margin: 0,
  borderRadius: '4px',
  '&:hover': {
    '& div': {
      opacity: 0.9,
    }
  },
}))

const Logo = styled("img")(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '200px',
  borderRadius: '4px',
}))


const Overlay = styled("div")(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: '100%',
  width: '100%',
  background: '#141c3a',
  opacity: 0,
  transition: '0.45s ease-in-out',
}))

const OverlayedContent = styled("div")(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  color: 'white',
  fontSize: theme.typography.fontSizeLarge,
  fontWeight: theme.typography.fontWeightBold,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  zIndex: 1,
  opacity: 0,
  '&:hover': {
    opacity: 1
  }
}))

const ExperienceContentContainer = styled("div", {shouldForwardProp: (props) => props !== "color" ,})(({ theme, last }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  marginRight: !last && '55px',
  width: '250px',
  [theme.breakpoints.down("lg")]: {
    marginRight: 0,
    marginBottom: '2rem',
    width: '85%'
  },
  [theme.breakpoints.down("sm")]: {
    width: '80%'
  }
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeTitle,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: '5rem',
  [theme.breakpoints.down("sm")]: {
    marginBottom: '2rem',
  },
}))

const RoleText = styled(Typography)(({ theme }) => ({
  marginTop: '2.5rem',
  fontSize: theme.typography.fontSizeLarge,
  fontWeight: theme.typography.fontWeightBold,
}))

const TimeText = styled(Typography)(({ theme }) => ({
  marginTop: '0.5rem',
  fontSize: theme.typography.fontSizeSmall,
  color: theme.palette.primaryDarkGrey
}))

const CompanyText = styled(Typography)(({ theme }) => ({
  marginTop: '0.5rem',
  fontSize: theme.typography.fontSizeMedium,
  fontWeight: theme.typography.fontWeightBold,
}))

const Experiences = ({experienceRef, t}) => {
  const EXPERIENCES = [
    {
      companyName: "Zed Network Inc.",
      ref: experienceRef,
      logoSrc: '/images/zed_icon.png',
      time: 'zed_time',
      role: 'full_stack_developer',
      jobDesc: 'zed_job_desc',
      duties: ['zed_duty_1', 'zed_duty_2','zed_duty_3', 'zed_duty_4', 'zed_duty_5'],
      skills: 'zed_skills',
      image: './images/currency_exchange.png'
    },
    {
      companyName: "WEMI Technologies Inc.",
      ref: experienceRef,
      logoSrc: '/images/wemi_icon.svg',
      time: 'wemi_time',
      role: 'front_end_developer',
      jobDesc: 'wemi_job_desc',
      duties: ['wemi_duty_1', 'wemi_duty_2','wemi_duty_3'],
      skills: 'wemi_skills',
      image: './images/calendar.png'
    },
    {
      companyName: "Zod Tv",
      ref: experienceRef,
      logoSrc: '/images/zod_icon.png',
      time: 'zod_time',
      role: 'freelance_developer',
      jobDesc: 'zod_job_desc',
      duties: ['zod_duty_1', 'zod_duty_2'],
      skills: 'zod_skills',
      image: './images/crypto.png'
    },
  ]

  const [openModal, setOpenModal] = useState(false)
  const [details, setDetails] = useState()

  const handleOpenModal = (experience) => {
    setDetails(experience)
    setOpenModal(true)
  }
  const renderExperiences = () => EXPERIENCES.map((experience, index) => {
    return <ExperienceContentContainer last={index === EXPERIENCES.length -1 } key={index}>
        <Figure>
          <Logo src={experience.logoSrc} />
            <OverlayedContent>
              <CustomizedButton
                text={"Details"}
                t={t}
                onClick={() => handleOpenModal(experience)}
              />
            </OverlayedContent>
          <Overlay/>
        </Figure>
        <TextContent
          experience={experience}
          t={t}
        />
      </ExperienceContentContainer>
  })
  return (
    <SectionLayout>
        <Title>
          {t("experience")}
        </Title>
        <ExperienceContentLayout>
          {renderExperiences()}
        </ExperienceContentLayout>
        <CustomizedModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          title={details?.companyName || ""}
          t={t}
        >
          <ExperienceDetails
            detail={details}
            t={t}
          />
        </CustomizedModal>
    </SectionLayout>
    
  )
}


export default Experiences

const TextContent = ({experience, t}) => {
  return <>
    <RoleText>{t(experience.role)}</RoleText>
    <TimeText>{t(experience.time)}</TimeText>
    <CompanyText>{t('At')} {experience.companyName}</CompanyText>
  </>
}