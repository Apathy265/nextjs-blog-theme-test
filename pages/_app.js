import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta property="al:ios:url" content="itms-apps://itunes.apple.com/app/id1461262794"/>
        <meta property="al:ios:app_store_id" content="id1461262794"/>
        <meta property="al:ios:app_name" content="Garmin Dive"/>
        <meta property="al:android:url" content="market://details?id=com.garmin.android.apps.dive"/>
        <meta property="al:android:app_name" content="Garmin Dive"/>
        <meta property="al:android:package" content="com.garmin.android.apps.dive"/>
        <meta property="og:title" content="Garmin Dive"/>
        <meta property="al:web:url" content="https://www.garmin.com/p/707742"/>
        <meta property="og:image"content={`https://connect.garmin.com/images/apps/dive/DIVE_1x.png`}/>
      </Head>
      // <span className="theme-bejamas" />
      // <Component {...pageProps} />
    </>
  );
}

export default MyApp;
