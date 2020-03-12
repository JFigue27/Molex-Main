import Layout from '../components/MyLayout';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Home from '../components/Home';

const Index = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default Index;
