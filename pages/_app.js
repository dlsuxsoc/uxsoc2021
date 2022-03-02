import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/react-spinner/react-spinner-loader.css";
import Router from "next/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress

// Bind Router events for onPageLoad
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
