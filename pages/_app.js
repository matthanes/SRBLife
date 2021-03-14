import Layout from "../components/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import "../styles/globals.css";

library.add(fab, faMapMarkedAlt);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
