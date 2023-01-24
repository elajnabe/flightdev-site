import MainLayout from '../src/components/layout/main-layout';
import '../styles/globals.css';
// all the page css's
import '../src/components/header/header.css'
import '../src/components/footer/footer.css'
import '../src/components/home/home-page.css'
import "../src/components/darkmode/DarkMode.css";
import "../src/components/layout/main-layout.css";
import "../src/components/codecard/code-card.css";
import "../src/components/dropdown/DropdownMenu.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
