import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import SingleServiceRegister from "@components/services/SingleServiceRegister";

export default function Home() {
  return (
    <Layout navLight>
      <Navbar />
      <SingleServiceRegister />
      <Footer/>
    </Layout>
  )
}


