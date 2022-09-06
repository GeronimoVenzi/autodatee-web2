import Head from "next/head";
import Image from "next/image";
import { HomePage } from "../components/HomePage/HomePage";
import { AboutPage } from "../components/AboutPage/AboutPage";
import { ServicePage } from "../components/ServicePage/ServicePage";
import { PartnersPage } from "../components/PartnersPage/PartnersPage";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <ServicePage />
      <PartnersPage />
    </Layout>
  );
}
