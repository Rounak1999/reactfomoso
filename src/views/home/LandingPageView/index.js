import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import DarkMode from './DarkMode';
import Page from '~/components/Page';
import Minimal from './Minimal';
import Advertisement from './Advertisement';
import CleanInterfaces from './CleanInterfaces';
import HugePackElements from './HugePackElements';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useLocation, matchPath } from 'react-router-dom';
import LoginView from '~/views/auth/LoginView'


// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default
  }
}));

function LandingPageView() {
  const classes = useStyles();

  React.useEffect(()=>{
    
  },[])

  return (
    
    // <LoginView />
    <Page title="Minimal | Home" id="move_top" className={classes.root}>
     <Hero />
      <RouterLink to="http://localhost:3000/auth/login"/>
      <div className={classes.content}>
        <Minimal />
        <HugePackElements />
        <DarkMode />
        <CleanInterfaces />
        <Advertisement />
        <Footer />
      </div> 
     </Page>

  );
}

export default LandingPageView;

