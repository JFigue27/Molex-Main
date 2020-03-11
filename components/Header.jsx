import Link from 'next/link';
import { AppBar, Toolbar, ButtonBase, Grid, Typography, Zoom, Container } from '@material-ui/core';
import Badges from '../components/Zoom';

const Header = () => (
  <>
    <AppBar position='static'>
      <Toolbar>
        <Link href={'/'}>
          <ButtonBase>
            <img src='/static/images/Molex_Red.png' alt='Logo Molex' style={{ width: 100, margin: 5 }} />
          </ButtonBase>
        </Link>
        <Grid item xs />
      </Toolbar>
    </AppBar>
    <Container maxWidth='md'>
      <Grid container justify='center'>
        <Badges />
      </Grid>
    </Container>
    <AppBar position='fixed' style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Grid container direction='column' alignItems='center'>
          <Typography> © 2020 | Molex Apps Juárez </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
    <style global jsx>
      {`
        body {
          margin: 0;
          padding-top:'50px'};
        }
      `}
    </style>
  </>
);

export default Header;
