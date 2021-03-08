import React, { lazy } from 'react';

import Page from '~/components/Page';
import {
  DarkTheme,
  RetroTheme,
  NightTheme,
  SilverTheme,
  FlatPaleTheme,
  StandardTheme,
  AubergineTheme
} from './GoogleMaps/themes';
import {
  Box,
  Grid,
  Card,
  Skeleton,
  Container,
  CardHeader,
  CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const GoogleMapMarker = lazy(() => import('./GoogleMaps/GoogleMapMarker'));
const GoogleMapCircle = lazy(() => import('./GoogleMaps/GoogleMapCircle'));


export default function ScreenView() {
  const MAP_THEMES = {
    standard: StandardTheme,
    dark: DarkTheme,
    night: NightTheme,
    retro: RetroTheme,
    silver: SilverTheme,
    flatpale: FlatPaleTheme,
    aubergine: AubergineTheme
  };
  const useStyles = makeStyles(theme => ({
    root: {},
    margin: {
      marginBottom: theme.spacing(3)
    },
    map: {
      zIndex: 0,
      height: 560,
      overflow: 'hidden',
      position: 'relative',
      borderRadius: theme.shape.borderRadius
    }
  }));

  const classes = useStyles();


  return (
    <Page title="Components | Google Map" className={classes.root}>
        <Grid item xs={12}>
                <Card className={classes.margin}>
                  {/* <CardHeader title="Google Map Marker" /> */}
                  <CardContent>
                    {/* <GoogleMapMarker
                      themes={MAP_THEMES}
                      className={classes.map}
                    /> */}
                  </CardContent>
                </Card>
              </Grid>
    </Page>
  );
}
