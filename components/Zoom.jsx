import React, { useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  paper: {
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
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
          <Paper elevation={4} className={classes.paper}>
            <Typography>Badges</Typography>
            {/* <Icon>fingerprint</Icon> */}
            <FontAwesomeIcon icon={faCoffee} size='xs' />
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <FontAwesomeIcon icon={faChartBar} />
            {/* <Icon>fingerprint</Icon> */}
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '800ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1200ms' : '0ms' }}>
          <Paper elevation={4} className={classes.paper}>
            <Typography>Quality Performance</Typography>
            <Icon>fingerprint</Icon>
          </Paper>
        </Zoom>
      </div>
    </div>
  );
}
