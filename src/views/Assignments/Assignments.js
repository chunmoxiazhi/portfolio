import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'
import { Autoplay, Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import  {Grid, Typography, Drawer, Divider, Dialog } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react"
import Button from "../../components/Button"
import SectionLayout from "../../components/SectionLayout"

const PROJECTS = [
  {
    companyName: "Zed Network Inc.",
    url: 'https://webportal-dev.zed.network/',
    logoSrc: '/images/zed_project.png',
    description: 'zed_description',
    
  },
  {
    companyName: "WEMI Technologies Inc.",
    url: 'https://shop.wemi.co/',
    logoSrc: '/images/wemi_project.png',
    description: 'wemi_description',
    
  },
  {
    companyName: "Zod Tv",
    url: 'https://www.zod.tv/',
    logoSrc: '/images/zod_project.png',
    description: 'zod_description',
  },
]

const Avtar = styled("img")(({ theme }) => ({
  width: '80%',
  height: '200%',
  borderRadius: '4px',
  border: `1px solid ${theme.palette.primaryLightGrey}`,
  marginBottom: '1.5rem',
  objectFit: 'cover',
  [theme.breakpoints.down("lg")]: {
    width: '100%',
    height: '120%',
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}))

const CustomizedSwiper = styled(Swiper)(({ theme }) => ({
  width: '60%',
  '& .swiper-button-prev, .swiper-button-next': {
    width: 30,
    height: 30,
    border: `1px solid ${theme.palette.primaryDarkGrey}`,
    borderRadius: '50%',
    color: theme.palette.text.darkBlue,
    '&:hover': {
      background: theme.palette.button.primaryBlue,
      border: 'none',
      color: 'white',
    }
  },
  [theme.breakpoints.down("xl")]: {
    width: '85%',
  },
  [theme.breakpoints.down("lg")]: {
    width: '100%',
    '& .swiper-button-prev, .swiper-button-next': {
      display: 'none'
    }
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: '300px !important'
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: '200px !important'
  },
}))
const SingleProjectContainer = styled(SwiperSlide)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 550,
  alignItems: 'center',
  marginBottom: '3rem',
  [theme.breakpoints.down("md")]: {
    height: '100%',
    maxWidth: '100vw !important',
  },
}))

const ProjectDescriptionContainer = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, marginleft }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '350px',
  paddingTop: '2.5rem'

}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeTitle,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: '5rem',
  [theme.breakpoints.down("sm")]: {
    marginBottom: '2rem',
  },
}))

const Projects = ({ref, t}) => {
  
  const navigate =  (url) => {
    console.log(url)
    window.open(
      url,
      '_blank' 
    )
  }

  return (
    <SectionLayout>
        <Title>{t("projects")}</Title>
        
       <CustomizedSwiper
          slidesPerView={"auto"}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
        >
          {
            PROJECTS.map((project, index) => {
              return <SingleProjectContainer>
                <Avtar src={project.logoSrc}/>
                <Button
                  text="Click to Visit"
                  t={t}
                  onClick={() => navigate(project.url)}
                />
              </SingleProjectContainer>})
          }
        </CustomizedSwiper>
    </SectionLayout>
  )
}


export default Projects