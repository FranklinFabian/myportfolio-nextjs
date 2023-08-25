import '../styles/globals.css';
import LayoutCustom from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutCustom>
      <Component {...pageProps} />
    </LayoutCustom>
  );
}

export default MyApp;
