import "../styles/globals.css";
import NavigationList from "../components/NavigationList";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <NavigationList className="NavigationList" />
        <section>
          <NavBar className="NavBar" />
          <Component {...pageProps} className="Component" />
        </section>
      </div>

      <style>
        {`
        .container {
          display: flex;
        }
        section {
          flex: 8;
        }
      `}
      </style>
    </>
  );
}

export default MyApp;
