import Layout from "../components/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faClock,
  faPhone,
  faEnvelope,
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
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
