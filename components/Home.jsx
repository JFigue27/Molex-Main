import Badges from './Zoom';
import { Container, Grid } from '@material-ui/core';

const Home = () => (
  <>
    <Container maxWidth='md'>
      <Grid container justify='center'>
        <Badges />
      </Grid>
    </Container>
  </>
);
export default Home;
