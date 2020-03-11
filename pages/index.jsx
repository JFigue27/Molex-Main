import Layout from '../components/MyLayout';
import Head from 'next/head';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757575',
      main: '#212121',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#c62828',
      main: '#b71c1c',
      dark: '#ba000d',
      contrastText: '#fff'
    }
    // type: 'dark'
  }
});

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Molex Main</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />

        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='icon' type='image/x-icon' href='./static/favicon.ico' />
      </Head>
      <Layout>
        <p> Hello Next.JS </p>
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
