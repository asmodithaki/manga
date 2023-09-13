import React, { useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Form validation schema
const formSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  phone: Yup.string().required('Required').matches(/^[0-9]+$/, 'Phone number is not valid'),
  email: Yup.string().email('Invalid email').required('Required'),
  yourMessage: Yup.string().required('Required')
});

const ContactForm = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = async (values, { setSubmitting }) => {
    // make API request here
    setFormSubmitted(true); // set form submitted state to true
    setSubmitting(false);
  };

  return (
    <div>
    {isFormSubmitted ? (
      <div>Form Submitted</div>
    ) : (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Talk to Our Sales & Marketing Department Team</h2>
              <p>
                Got questions about our products, services or pricing? Our team will help you get started.
              </p>
            </div>
            <Formik
            initialValues={{ firstName: '', lastName: '', phone: '', email: '', yourMessage: '' }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form action="/api/submitForm" method="post" className="register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="firstName">First name <span className="text-danger">*</span></label>
                    <Field name="firstName" type="text" className="form-control" placeholder="First name" />
                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName">Last name</label>
                    <Field name="lastName" type="text" className="form-control" placeholder="Last name" />
                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone">Phone <span className="text-danger">*</span></label>
                    <Field name="phone" type="text" className="form-control" placeholder="+1 234 567 8901" />
                    <ErrorMessage name="phone" component="div" className="text-danger" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Email Address<span className="text-danger">*</span></label>
                    <Field name="email" type="email" className="form-control" placeholder="Company Email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourMessage">Message <span className="text-danger">*</span></label>
                    <Field name="yourMessage" as="textarea" className="form-control" placeholder="How can we help you?" style={{ height: '120px' }} />
                    <ErrorMessage name="yourMessage" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-primary mt-4" disabled={isSubmitting}>
                    Get in Touch
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={526}
                height={406}
                src="/contact-us-img-2.svg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
    </div>
  );
};

export default ContactForm;
