import Head from 'next/head';
import Layout from '../Layout';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect } from 'react';
import NonSSRWrapper from '../component/NonSSRWrapper';
import '../public/assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
