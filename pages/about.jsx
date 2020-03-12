import Layout from '../components/MyLayout';
import { Container, Grid } from '@material-ui/core';
import UnderConstruction from '../components/UnderConstruction';

const About = () => {
  return (
    <>
      <Layout>
        <Container maxWidth='md'>
          <Grid container justify='center'>
            <UnderConstruction />
          </Grid>
        </Container>
      </Layout>
    </>
  );
};
export default About;
