import "@styles/globals.css";
import Navbar from "@components/Navbar";
import { UserContext } from "@lib/context";
import { Toaster } from "react-hot-toast";
import { userUserData, useUserData } from "@lib/hooks.js";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
