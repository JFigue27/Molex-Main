import Link from 'next/link';
import { AppBar, Toolbar, ButtonBase, Grid } from '@material-ui/core';

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
