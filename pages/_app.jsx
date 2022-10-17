import "../styles/globals.css";
import NavigationList from "../components/NavigationList";
import NavBar from "../components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className="container">
            <NavigationList className="NavigationList" />
            <section>
              <NavBar className="NavBar" />
              <Component {...pageProps} className="Component" />
            </section>
          </div>
        </RecoilRoot>
      </QueryClientProvider>

      <style>
        {`
        .container {
          display: flex;
        }
        section {
          flex: 6;
        }
      `}
      </style>
    </>
  );
}

export default MyApp;
