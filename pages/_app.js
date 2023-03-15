import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NODE_ENV !== 'production') return;
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const canonicalUrl = (
    `https://srblife.com` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];

  return (
    <>
      {/* Conditionally render the next two <Script /> tags in production only */}
      {process.env.NODE_ENV === 'production' && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
      )}
      {process.env.NODE_ENV === 'production' && (
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
      )}
      <Layout>
        <Head>
          <title>Schomburg Road Baptist Church Columbus, Georgia</title>
          <meta
            name="keywords"
            content="church, family-friendly, baptist, small, kids, nursery"
          />
          <meta
            name="description"
            content="Loving Him, loving them, changing lives! That is our purpose at Schomburg Road Baptist Church in Columbus, Georgia. Everything we do is driven from these six short words. By understanding this statement you will better understand who we are."
          />
          <link rel="canonical" href={canonicalUrl} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </>
  );
}

export default MyApp;
