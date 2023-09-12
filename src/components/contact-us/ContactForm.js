import React from 'react';
import Image from 'next/image';
import { Formik,} from 'formik';
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
  const handleSubmit = async (values, { setSubmitting }) => {
    // make API request here
    setSubmitting(false);
  };

  return (
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
                console.log(isSubmitting),
                <form action="/api/submitForm" method="post" className="register-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="mb-1">
                        First name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          required
                          placeholder="First name"
                          aria-label="First name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 ">
                      <label htmlFor="lastName" className="mb-1">
                        Last name
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="phone" className="mb-1">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          required
                          placeholder="+1 234 567 8901"
                          aria-label="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email" className="mb-1">
                        Email Address<span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                          placeholder="Company Email"
                          aria-label="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourMessage" className="mb-1">
                        Message <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <textarea
                          className="form-control"
                          id="yourMessage"
                          required
                          placeholder="How can we help you?"
                          style={{ height: '120px' }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Get in Touch
                  </button>
                </form> 
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
  );
};

export default ContactForm;
