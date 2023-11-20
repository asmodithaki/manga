import React from "react";

import Layout from "./layout";
import Footer from "./Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import ServiceOne from "@components/services/ServiceOne";
import SupportOne from "@components/support/SupportOne";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";

const services = () => {
  return (
    <Layout title="Services" desc="Thurisa Labs Services  ">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Building Ai Powered Products"
        desc="An ecosystem of interdependent products built to help your business grow and scale all in one place" />

      <ServiceOne />
      <TestimonialTwo sectionBgClass="bg-white" swiperBgClass="bg-white" />
      <SupportOne className="true" />
      <Footer footerLight />
    </Layout>
  );
};

export default services;
