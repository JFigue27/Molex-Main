import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, ButtonBase, Icon, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: 280
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  paper: {
    margin: theme.spacing(1),
    width: 200,
    height: 200
  },
  childPaper: {
    margin: 20,
    height: 80,
    background: '#ff0000'
  },
  iconPaper: {
    margin: 15,
    height: 90
  },
  svg: {
    width: 80,
    marginTop: 15,
    background: '#fff',
    borderRadius: 5,
    padding: 5
  },
  icon: {
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: 15,
    background: '#fff',
    borderRadius: 5,
    padding: 5
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function SimpleZoom() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  //   const handleChange = () => {
  //     setChecked(prev => !prev);
  //   };

  return (
    <div className={classes.root}>
      {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label='Show' /> */}
      <div className={classes.container}>
        <Zoom in={checked}>
          <ButtonBase href='https://auth.jjfigueroa.now.sh/'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                Authentication
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>fingerprint</Icon>
                </Typography>
              </Paper>
            </Paper>
          </ButtonBase>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <ButtonBase href='https://universal-catalog-net-core.now.sh/'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                Universal Catalogs
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>menu_book</Icon>
                </Typography>
              </Paper>
            </Paper>
          </ButtonBase>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '700ms' : '0ms' }}>
          <ButtonBase href='https://badges-molex.jjfigueroa.now.sh/'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                Badges
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>assignment_ind</Icon>
                </Typography>
              </Paper>
            </Paper>
          </ButtonBase>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '900ms' : '0ms' }}>
          <ButtonBase href='https://quality-performance.jjfigueroa.now.sh/'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                Quality Performance
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>assessment</Icon>
                </Typography>
              </Paper>
            </Paper>
          </ButtonBase>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1100ms' : '0ms' }}>
          <Link href='/about'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                HR Training
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>fitness_center</Icon>
                </Typography>
              </Paper>
            </Paper>
          </Link>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1300ms' : '0ms' }}>
          <ButtonBase href='https://it-assets.jjfigueroa.now.sh/'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                IT Assets
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>devices_other</Icon>
                </Typography>
              </Paper>
            </Paper>
          </ButtonBase>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1500ms' : '0ms' }}>
          <Link href='/about'>
            <Paper elevation={4} className={classes.paper}>
              <Typography align='center' variant='h6'>
                IPD
              </Typography>
              <Paper elevation={2} className={classes.childPaper}>
                <Typography align='center'>
                  <Icon className={classes.icon}>folder_shared</Icon>
                </Typography>
              </Paper>
            </Paper>
          </Link>
        </Zoom>
      </div>
    </div>
  );
}
