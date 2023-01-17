import React from "react"

// Utils
import { styled } from '@mui/material/styles';
import { Trans } from 'react-i18next'

// Components
import  { 
  Typography,
  Grid
 } from '@mui/material'

//Assets
import GradeIcon from '@mui/icons-material/Grade'

const ExperienceDetailLayout = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [theme.breakpoints.down("sm")]: {
    flexDirection: 'column',
  }
}))

const LeftPanel = styled(Grid)(({ theme }) => ({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down("sm")]: {
    width: '100%',
  }
}))

const RightPanel = styled(Grid)(({ theme }) => ({
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down("sm")]: {
    width: '100%',
  }
}))

const ExpandableGrid = styled(Grid)(({ theme }) => ({
  transition: 'transform .4s',
  width: '85%',
  // height: '200px',
  paddingLeft: '1rem',
  margin: '0.5rem auto',
  '&:hover': {
    transform: 'scale(1.1)',
    borderLeft: `2px solid ${theme.palette.button.primaryBlue}`
  }
}))

const BoldTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primaryDarkGrey,
  fontSize: theme.typography.fontSizeMedium,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: '0.5rem',
}))

const RegularTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSizeSmall,
  alignItems: 'center',
  marginBottom: '0.5rem',
}))

const Image = styled('img')(({ theme }) => ({
  fontSize: theme.typography.fontSizeSmall,
  alignItems: 'center',
  marginBottom: '1rem',
  [theme.breakpoints.down("md")]: {
    display: 'none'
  }
}))
const ExperienceDetails = ({
  detail,
  t,
}) => {
  return (
    <ExperienceDetailLayout>
      <LeftPanel>
        <ExpandableGrid>
          <BoldTypography>{t('job_description')}: </BoldTypography>
          <RegularTypography>{t(detail.jobDesc)}</RegularTypography>
        </ExpandableGrid>
          
        <ExpandableGrid>
          <BoldTypography>{t('duties')}: </BoldTypography>
          {
            detail.duties.map(duty => <RegularTypography>
              <Trans t={t}>{t(duty)}</Trans>
            </RegularTypography>)
          }

        </ExpandableGrid>
      </LeftPanel>
      <RightPanel>
        <Image src={detail.image}/>
        <ExpandableGrid>
          <BoldTypography>{t('skills')}: </BoldTypography>
          <RegularTypography>
            <Trans t={t}><strong>{t(detail.skills)}</strong></Trans>
          </RegularTypography>
        </ExpandableGrid>
      </RightPanel>
    </ExperienceDetailLayout>
  )
}

export default ExperienceDetails