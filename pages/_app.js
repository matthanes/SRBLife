import Layout from "../components/Layout";
import "../styles/globals.css";

library.add(fab, faMapMarkedAlt, faClock, faPhone, faEnvelope, faCalendar);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
