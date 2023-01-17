// Assets
import KeyboardArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowDownIcon from '@mui/icons-material/ExpandMore';
import EducationIcon from '@mui/icons-material/School';
import ExperienceIcon from '@mui/icons-material/Work';
import ContactIcon from '@mui/icons-material/Call';
import AboutMeIcon from '@mui/icons-material/Person';
import ProjectsIcon from '@mui/icons-material/LibraryAddCheck';

export const SIDE_BAR_LIST = [
  {
    title: "About Me",
    path: "about_me",
    icon: <AboutMeIcon/>,
    expandable: false,
  },
  {
    title: "Experience",
    path: "experience",
    icon: <ExperienceIcon/>,
    expandable: true,
    children: [
      {
        title: "zed_network",
        path: "experience",
        expandable: false,
      },
      {
        title: "wemi_technologies",
        path: "experience",
        expandable: false,
      },
      {
        title: "zod_tv",
        path: "experience",
        expandable: false,
      },
      {
        title: "smart_way",
        path: "experience",
        expandable: false,
      },
    ]
  },
  {
    title: "Education",
    path: "education",
    icon: <EducationIcon/>,
    expandable: true,
    children: [
      {
        title: "university_of_toronto",
        path: "education",
        expandable: false,
      },
      {
        title: "seneca_college",
        path: "education",
        expandable: false,
      },
    ]
  },
  {
    title: "Projects",
    path: "projects",
    icon: <ProjectsIcon/>,
    expandable: true,
    children: [
      {
        title: "zed_network_client_portal",
        path: "projects",
        expandable: false,
      },
      {
        title: "wemi_technologies_client_portal",
        path: "projects",
        expandable: false,
      },
      {
        title: "zod_tv_landing_page",
        path: "projects",
        expandable: false,
      },
    ]
  },
  {
    title: "Contact Me",
    path: "contact_me",
    icon: <ContactIcon/>,
    expandable: false,
  },
]

export const LANGUAGES = [
  {
    name: "English",
    code: "en"
  },
  {
    name: "Français",
    code: "fr"
  }
]

export const SIDEBAR_WIDTH = 300