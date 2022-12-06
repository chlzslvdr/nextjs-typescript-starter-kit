import type { AppProps } from 'next/app';
import Layout from '../components/Layout/index';
import '@/styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
