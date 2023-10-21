import React from "react";

import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import SingleServiceRegister from "@components/services/SingleServiceRegister";

const RequestDemo = () => {
  return (
    <Layout title="Request Discuss" desc="Do you want to learn more about thurisa labs limited">
      <Navbar />
      <SingleServiceRegister />
      <Footer/>
    </Layout>
  );
};

export default RequestDemo;
