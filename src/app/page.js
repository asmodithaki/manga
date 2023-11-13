import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import FeatureOne from "@components/features/FeatureOne";
import SupportOne from "@components/support/SupportOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import HeroSectionOne from "@components/hero-section/HeroSectionOne";

export const metadata = {
  title: 'Sage Ink',
  description: 'Building unqiue solutions',
}

export default function Home() {
  return (
    <Layout>
      <Navbar navDark />
      <HeroSectionOne />
      <FeatureOne />
      <IntegrationOne />
      <SupportOne />
      <TestimonialOne darkBg />
      <Footer footerGradient />
    </Layout>
  )
}