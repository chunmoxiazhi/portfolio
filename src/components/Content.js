import React, { useState, useRef, useEffect } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Element } from 'react-scroll'

// Components
import  {Grid, Typography, Drawer } from '@mui/material'
import Sidebar from "./Sidebar";
import AboutMe from "../views/AboutMe/AboutMe"
import Experiences from "../views/Experiences/Experiences"
import Education from "../views/Education/Education"
import Projects from "../views/Assignments/Assignments"
import ContactMe from "../views/ContactMe/ContactMe"

// Constants
import { SIDEBAR_WIDTH } from "../constants/constants";

const useMountEffect = (fun) => useEffect(fun, []);

const ContentLayout = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '66px',
  paddingTop: '5rem',
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
  },
}));

const MainContent = styled("main", {shouldForwardProp: (props) => props !== "color" ,})(({ theme, shift }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp, 
    duration: theme.transitions.duration.leavingScreen, 
  }),
  position: 'relative',
  marginLeft: shift ? SIDEBAR_WIDTH : `calc(${theme.spacing(4)} + 1px)`,
}));

const Content = ({t, children, ...props}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContentLayout>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        t={t}
      />
      <MainContent shift={isOpen ? isOpen : undefined} >
        <Element id="about_me" name="about_me">
          <AboutMe t={t} />
        </Element>
        <Element id="experience" name="experience">
          <Experiences t={t} />
        </Element>
        <Element id="education" name="education">
          <Education t={t} />
        </Element>
        <Element id="projects" name="projects">
          <Projects t={t}/>
        </Element>
        <Element id="contact_me" name="contact_me">
          <ContactMe t={t} />
        </Element>
      </MainContent>
    </ContentLayout>
  )
}

export default Content