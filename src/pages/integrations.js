import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Promo from '@components/promo/Promo';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import IntegrationFeature from '@components/integration/IntegrationFeature';


const Integrations = () => {
  return (
    <Layout title="Integrations" desc="This is integrations page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Featured Integrations"
        desc="Enjoy our suite of integrated solutions all in one place for ease of business activities."
      />
      <IntegrationFeature />
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Integrations;
