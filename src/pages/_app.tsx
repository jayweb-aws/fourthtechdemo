import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css/bundle';
import store from '../app/store';
import PageWrapper from '../components/wrapper';
import '../styles/checkboxStyle.css';
import '../styles/globals.css';
import './../styles/testimonialsSwiperStyles.module.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <Provider store={store}>
      <Toaster position="top-center" />
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </>
  );
}

export default MyApp;
