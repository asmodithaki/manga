import Layout from "@layout/Layout";
import FaqOne from "@components/faq/FaqOne";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import PricingOne from "@components/pricing/PricingOne";
import FeatureOne from "@components/features/FeatureOne";
import SupportOne from "@components/support/SupportOne";
import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessOne from "@components/workprocess/WorkProcessOne";
import HeroDashBoard from "@components/hero-section/HeroDashBoard";
import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";

const  Dashboard = () =>  {
  return (
    <Layout>
      <Navbar navDark />
      <HeroDashBoard />
      <FeatureImgContentOne />
      <TestimonialOne darkBg />
      <WorkProcessOne />
      <PricingOne header="true" />
      <FaqOne />
      <IntegrationOne />
      <SupportOne />
      <Footer footerGradient />
    </Layout>
  );
};

export default Dashboard;