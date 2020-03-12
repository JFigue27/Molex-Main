import React from 'react';
import { Switch, Paper, Slide, Typography, ButtonBase, Button, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 280
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: 50,
    padding: 5,
    width: 300
  },
  iconPaper: {
    width: 150,
    margin: 75
  },
  svg: {
    width: 150,
    height: 150
  },
  icon: {
    fontSize: 130,
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

export default function SimpleSlide() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  // const handleChange = () => {
  //   setChecked(prev => !prev);
  // };

  return (
    <div className={classes.root}>
      {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label='Show' /> */}
      <Slide direction='up' in={checked} mountOnEnter unmountOnExit>
        <ButtonBase href='/'>
          <Paper elevation={4} className={classes.paper}>
            <Paper elevation={2} className={classes.iconPaper}>
              <Typography align='center'>
                <Icon className={classes.icon}>build</Icon>
              </Typography>
            </Paper>
            <Typography variant='h4' align='center'>
              This app is under construction
            </Typography>
          </Paper>
        </ButtonBase>
      </Slide>
    </div>
  );
}
