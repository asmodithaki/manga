/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { integrationOneLeft, integrationOneRight } from '../../utils/data';

const IntegrationOne = () => {
  return (
    <section className="integration-section ptb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <div className="integration-list-wrap">
              {integrationOneLeft.map((integration, i) => (
                  (<Link
                    href="/integration-single"
                    key={i + 1}
                    className={integration.className}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Your Brand Name">

                    <Image
                      width={40}
                      height={40}
                      src={integration.image}
                      alt="integration"
                      className="img-fluid rounded-circle"
                    />

                  </Link>)
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="section-heading text-center my-5 my-lg-0 my-xl-0">
              
              <h2>Integrated Partners</h2>
              <Link href="/integrations" className="mt-4 btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="col-lg-4">
              <div className="integration-list-wrap">
                {integrationOneRight.map((integration, i) => (
                    (<Link
                      href="/integration-single"
                      key={i + 1}
                      className={integration.className}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Thurisa Labs">

                      <img
                        src={integration.image}
                        alt="integration"
                        className="img-fluid rounded-circle"
                      />

                    </Link>)
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-100">
          <div className="col-lg-5 col-md-12">
            <a
              href="integration-single"
              className="mb-4 mb-lg-0 mb-xl-0 position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
            >
              <div className="position-relative connected-app-content">
                <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                  <img
                    src="/integations/4.png"
                    width="40"
                    alt="integration"
                    className="img-fluid"
                  />
                </div>
                <h5>Paystack</h5>
                <p className="mb-0 text-body">
               Make payments, accepts Payments in various currencies and allow your business reach a global audience.
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-5 col-md-12">
            <a
              href="integration-single"
              className="position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
            >
              <div className="position-relative connected-app-content">
                <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                  <img
                    src="/integations/6.png"
                    width="40"
                    alt="integration"
                    className="img-fluid"
                  />
                </div>
                <h5>PayPal</h5>
                <p className="mb-0 text-body">
                  Cater to your international audiences, receive payments from over 150+ countries
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationOne;
