'use client';

import Layout from "./layout";
import Navbar from "../navigation/Header/Navbar";

import HeroSectionOne from "@components/hero-section/HeroSectionOne";
import FeatureOne from "@components/features/FeatureOne";
import SupportOne from "@components/support/SupportOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import PaymentTestimonial from "@components/testimonial/PaymentTestimonial";
import Footer from "../navigation/Footer/Footer";


export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionOne />
      <FeatureOne />
      <IntegrationOne />
      <SupportOne />
      <PaymentTestimonial darkBg />
      <Footer footerGradient />
    </Layout>
  );
}