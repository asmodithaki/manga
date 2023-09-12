import React, { useMemo } from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const PAGE_TITLE = "Contact Us";
const PAGE_DESC = "contact us page";
const PAGE_HEADER_DESC = "We're ready to answer your queries about our suite of applications and services";

const ContactUs = () => {
  const navbarOptions = useMemo(() => ({ classOption: "navbar-light" }), []);

  const pageHeaderProps = useMemo(() => ({
    title: PAGE_TITLE,
    desc: PAGE_HEADER_DESC
  }), []);

  return (
    <Layout title={PAGE_TITLE} desc={PAGE_DESC}>
      <Navbar {...navbarOptions} />
      <PageHeader {...pageHeaderProps} />
      <ContactCard />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
