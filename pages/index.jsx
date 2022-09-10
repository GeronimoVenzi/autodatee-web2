import { HomePage } from "../components/HomePage/HomePage";
import { AboutPage } from "../components/AboutPage/AboutPage";
import { ServicePage } from "../components/ServicePage/ServicePage";
import { PartnersPage } from "../components/PartnersPage/PartnersPage";
import { Layout } from "../components/Layout";

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
