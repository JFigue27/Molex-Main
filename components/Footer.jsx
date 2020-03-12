import { AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
const Footer = () => (
  <>
    <AppBar position='fixed' style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Grid container direction='column' alignItems='center'>
          <Typography> © 2020 | Molex Juárez Apps </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  </>
);

export default Footer;
