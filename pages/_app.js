import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/react-spinner/react-spinner-loader.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
