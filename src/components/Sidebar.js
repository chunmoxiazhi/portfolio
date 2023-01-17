import React, { useState, useEffect, useRef } from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Link, scroller } from 'react-scroll'

// Components
import  {
  Button,
  Collapse,
  Drawer,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  SvgIcon,
  Typography,
  Grid
 } from '@mui/material'

// Constants
import { SIDE_BAR_LIST, SIDEBAR_WIDTH } from "../constants/constants";

// Assets
import KeyboardArrowRightIcon from '@mui/icons-material/ArrowForwardIos';

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  transform: 'unset !important',
  visibility: 'visible !important'
});

const openedMixin = (theme) => ({
  width: SIDEBAR_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const SidebarLayout = styled(Drawer, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, open }) => ({
  '& .MuiPaper-root': {
    width: SIDEBAR_WIDTH,
    marginTop: 66,
    border: 'none',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    background: theme.palette.primaryDarkBlue
  },
}));

const SidebarButtons = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, open, subsection=false }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  color: theme.palette.primaryLightGrey,
  cursor: 'pointer',
  paddingLeft: subsection && '3.2rem',
  '&:hover': {
    color: theme.palette.primaryWhite,
    background: theme.palette.primaryDarkGrey,
    '& svg ': {
      color: theme.palette.primaryWhite,
    }
  },
  '&>div': {
    display: 'flex',
    flexDirection: 'row',
  },
  '& span': {
    display: !open && 'none',
    margin: subsection ? '0.5rem' : '1.2rem 1rem',
    
  }
}));

const SidebarButtonLeft = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme }) => ({
  alignItems: 'center',
}));

const SidebarIcon = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, open }) => ({
  margin: '1.4rem 1rem',
  '& svg ': {
    color: theme.palette.primaryLightGrey,
  },
}));

const ExpandableIcon = styled(Grid, {shouldForwardProp: (props) => props !== "color" ,})(({ theme, expanded }) => ({
  margin: '1.4rem 1rem',
  alignItems: 'center',
  '& svg ': {
    color: theme.palette.primaryLightGrey,
    fontSize: theme.typography.fontSizeSmall,
    transform: expanded && 'rotate(90deg)'
  },
}));


const Sidebar = ({
  isOpen, 
  setIsOpen, 
  t
}) => {
  const [expandedSections, setExpandedSections] = useState([])
  const handleNavigation = (path, list) => {
    const sectionObj = list.find(section => section.path === path)
    if (sectionObj.expandable) {
      if(expandedSections.includes(sectionObj.path)) {
        const newExpandedSections = expandedSections.filter(section => section !== path)
        setExpandedSections(newExpandedSections)
      } else {
        setExpandedSections([
          ...expandedSections,
          path
        ])
      }
      return
    }
    const contactMe = document.querySelector(`[name=${sectionObj.path}]`)
    contactMe.scrollIntoView({ behavior: "smooth" })

  }

  const renderSidebarSubsections = (list) => list.map(subsection => {
    return <SidebarButtons
      open={isOpen}
      subsection={true}
      onClick={() => handleNavigation(subsection.path, list)}
      key={subsection.title}
    >
      <span>{t(subsection.title)}</span>
    </SidebarButtons>
  })
  const renderSidebarSections = () => SIDE_BAR_LIST.map(sidebarContent => {

    const isExpanded = expandedSections.find(section => section === sidebarContent.path)

    return <div
        key={sidebarContent.title}
      >
        <SidebarButtons
          open={isOpen}
          onClick={() => handleNavigation(sidebarContent.path, SIDE_BAR_LIST)}
        >
          <SidebarButtonLeft>
            <SidebarIcon> { sidebarContent.icon} </SidebarIcon>
            <span>{t(sidebarContent.path)}</span>
          </SidebarButtonLeft>
          {
            sidebarContent.expandable && <ExpandableIcon expanded={isExpanded ? isExpanded : undefined} > <KeyboardArrowRightIcon/> </ExpandableIcon>
          }
        </SidebarButtons>
        {
          isExpanded
          && renderSidebarSubsections(sidebarContent.children)
        }
      </div>
    })
  
 
  
  return (
    <SidebarLayout
      anchor="left"
      open={isOpen}
      variant="permanent"
      onMouseOver={()=>{setIsOpen(true)}}
      onMouseLeave={() => {setIsOpen(false)}}
    >
      {renderSidebarSections()}
     
    </SidebarLayout>
  )
}

export default Sidebar