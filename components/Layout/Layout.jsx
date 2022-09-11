import Head from "next/head";
import { FormPage } from "../FormPage";
import { FooterPage } from "../FooterPage";
import { NavBar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Autodatee Web</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200;300;500;800&family=Montserrat:wght@400;800&family=Raleway:wght@800&display=swap"
          rel="stylesheet"
        />
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
      <FooterPage />
    </>
  );
};
