
'use client'

import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Promo from '@components/promo/Promo';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import IntegrationFeature from '@components/integration/IntegrationFeature';

export const metadata = {
  title: 'Integrations'
}
 
export default function Integrations() {
  return (
    <Layout title="Integrations" desc="We integrate other providers.">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Athena is the ecosystem designed for all your business needs"
        desc="Integrate anything, connect all and create your personalized business ecosystem, automate routine tasks, It is like owning a fleet of cars and knowing where they all are"
      />
      <IntegrationFeature />
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};
  



  


