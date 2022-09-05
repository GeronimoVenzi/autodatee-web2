import Head from "next/head";
import Image from "next/image";
import { HomePage } from "../components/HomePage/HomePage";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
