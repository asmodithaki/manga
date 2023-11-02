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
    <Layout title="Integrations" desc="We integrate other providers.">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="We know you need these apps all in one place"
        desc="Integrate anything, connect all and create your personalized business ecosystem, It is like owning a fleet of cars and knowing where they all are. 
         MAKE IT SIMPLE."
      />
      <IntegrationFeature />
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Integrations;
