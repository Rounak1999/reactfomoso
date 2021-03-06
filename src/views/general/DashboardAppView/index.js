import React from 'react';
import Welcome from './Welcome';
import VendorList from './VendorList';
import FinanceSection from './FinanceSection';
import AllCampaigns from './AllCampaigns';
import Clients from './Clients';
import Page from '~/components/Page';
import { useSelector } from 'react-redux';
import FeaturedApp from './FeaturedApp';
import UserAnalytics from './UserAnalytics';
import InactiveScreens from './InactiveScreens';
import ActiveScreens from './ActiveScreens';
import AudienceStatus from './AudienceStatus';
import AllScreens from './AllScreens';
import ScreenLocationsStatus from './ScreenLocationsStatus';
import ThirdPartyIntegration from './ThirdPartyIntegration';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';


// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

function DashboardAppView() {
  const classes = useStyles();
  const { auth, profile } = useSelector(state => state.firebase);
  const displayName = auth.displayName || profile.displayName;

  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/*********************/}
          <Grid item xs={12} md={8}>
            <Welcome displayName={displayName} />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={4}>
            <FeaturedApp />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={4}>
            <AllScreens />
          </Grid>

          <Grid item xs={12} md={4}>
            <ActiveScreens />
          </Grid>

          <Grid item xs={12} md={4}>
            <InactiveScreens />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <AudienceStatus />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={8}>
            <UserAnalytics />
          </Grid>

          {/*********************/}
          <Grid item xs={12} lg={8}>
            <AllCampaigns />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <ThirdPartyIntegration />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <ScreenLocationsStatus />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <Clients />
          </Grid>

          {/*********************/}
          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <VendorList />
              </Grid>
              <Grid item xs={12}>
                <FinanceSection />
              </Grid>
            </Grid>
          </Grid>
          {/*********************/}
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardAppView;
