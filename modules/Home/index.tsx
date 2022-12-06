import { Fragment } from 'react';
import type { NextPage } from 'next';
import SEO from '@/components/SEO/index';

const Home: NextPage = () => {
  return (
    <Fragment>
      <SEO title="Home" />

      <div className="home-container">Home</div>
    </Fragment>
  );
};

export default Home;
