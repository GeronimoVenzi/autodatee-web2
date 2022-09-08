import Head from "next/head";
import { FormPage } from "../FormPage/FormPage";
import { NavBar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Autodatee Web</title>
        {/*<meta name="description" content={`Informacion sobre el Pokemon ${title}`} />
                    <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                    <meta property="og:title" content={`Pokemon ${title}`} />
                    <meta property="og:description" content={`Esta es una pagina sobre ${title}`} />
                    <meta property="og:image" content={`${origin}/img/banner.png`} />*/}
      </Head>

      {/* ACA VA EL NAVBAR */}
      <NavBar />

      {children}

      {/* FORMULARIO */}
      <FormPage />
      {/* FOOTER */}
    </>
  );
};
