import { FC } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: FC<SEOProps> = ({ title, description }) => {
  const SEOTitle = `${title} | Ubidy`;
  return (
    <>
      <Head>
        <title>{SEOTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo title={SEOTitle} description={description} />
    </>
  );
};

export default SEO;
