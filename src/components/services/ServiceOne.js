import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                title="Learn More About our Service Offerings"
                description="Thurisa Labs specializes in providing AI-powered e-commerce and legal solutions designed to propel enterprises into the digital future."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                title="Learn More About our Service Offerings"
                description="Thurisa Labs specializes in providing AI-powered e-commerce and legal solutions designed to propel enterprises into the digital future."
                centerAlign
              />
            )}
            <div className="feature-grid">
              {/* Advanced analytics */}
              <div
                className={`shadow-sm highlight-card rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <span className="fal">
                    <SiSimpleanalytics className="h4 text-primary" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Advanced analytics</h3>
                  <p>
                    Our analytics services provide you with deep insights into your business metrics and KPIs.
                  </p>
                  <h6 className="mt-4">Included with...</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Real-Time Analytics
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Customer Segmentation
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Sales Forecasting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? "text-warning" : "text-primary"
                        }`}
                      />
                      Trend Analysis
                    </li>
                  </ul>
                </div>
                <Link
                  href="/service-single"
                  className="link-with-icon text-decoration-none mt-3">
                  View Details{" "}
                  <i className="far mb-1">
                    <BsArrowRight />
                  </i>

                </Link>
              </div>
                            {/* Automated Reports */}
                            <div
                            className={`shadow-sm feature-card rounded-custom p-5 ${
                              bgDark
                                ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                                : "bg-white"
                            }`}
                          >
                            <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                              <span className="fal">
                                <HiOutlineDocumentReport className="h3 text-success" />
                              </span>
                            </div>
                            <div className="feature-content">
                              <h3 className="h5">Automated Reports</h3>
                              <p>
                                Keep track of your KPIs with custom, automated reports delivered straight to your inbox.
                              </p>
                              <h6 className="mt-4">Included with...</h6>
                              <ul className="list-unstyled mb-0">
                                <li className="py-1">
                                  <FaCheckCircle
                                    className={`fad fa-check-circle me-2 ${
                                      bgDark ? "text-warning" : "text-primary"
                                    }`}
                                  />
                                  Weekly Summaries
                                </li>
                                <li className="py-1">
                                  <FaCheckCircle
                                    className={`fad fa-check-circle me-2 ${
                                      bgDark ? "text-warning" : "text-primary"
                                    }`}
                                  />
                                  Performance Metrics
                                </li>
                                <li className="py-1">
                                  <FaCheckCircle
                                    className={`fad fa-check-circle me-2 ${
                                      bgDark ? "text-warning" : "text-primary"
                                    }`}
                                  />
                                  Revenue Analysis
                                </li>
                              </ul>
                            </div>
                            <Link
                              href="/service-single"
                              className="link-with-icon text-decoration-none mt-3">
                              View Details{" "}
                              <i className="far mb-1">
                                <BsArrowRight />
                              </i>

                            </Link>
                          </div>
                                        {/* User Journey Flow */}
              <div
              className={`shadow-sm feature-card rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="icon-box d-inline-block rounded-circle bg-info-soft mb-32">
                <span className="fal">
                  <HiOutlineUsers className="h3 text-info" />
                </span>
              </div>
              <div className="feature-content">
                <h3 className="h5">User Journey Flow</h3>
                <p>
                  Gain insights into your customer&apos;s journey and improve user experience.
                </p>
                {/* You can add more content here */}
              </div>
              <Link
                href="/service-single"
                className="link-with-icon text-decoration-none mt-3">
                View Details{" "}
                <i className="far mb-1">
                  <BsArrowRight />
                </i>

              </Link>
            </div>

            {/* Compare A/B Testing */}
            <div
              className={`shadow-sm feature-card rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="icon-box d-inline-block rounded-circle bg-purple-soft mb-32">
                <span className="fal">
                  <HiOutlineUsers  className="h3 text-purple" />
                </span>
              </div>
              <div className="feature-content">
                <h3 className="h5">Compare A/B Testing</h3>
                <p>
                  Make data-driven decisions with our robust A/B testing tools.
                </p>
                {/* You can add more content here */}
              </div>
              <Link
                href="/service-single"
                className="link-with-icon text-decoration-none mt-3">
                View Details{" "}
                <i className="far mb-1">
                  <BsArrowRight />
                </i>

              </Link>
            </div>

            {/* Easy Customization */}
            <div
              className={`shadow-sm feature-card rounded-custom p-5 ${
                bgDark
                  ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                  : "bg-white"
              }`}
            >
              <div className="icon-box d-inline-block rounded-circle bg-yellow-soft mb-32">
                <span className="fal">
                  <HiOutlineCog className="h3 text-yellow" />
                </span>
              </div>
              <div className="feature-content">
                <h3 className="h5">Easy Customization</h3>
                <p>
                  Customize our services to better meet your business needs.
                </p>
                {/* You can add more content here */}
              </div>
              <Link
                href="/service-single"
                className="link-with-icon text-decoration-none mt-3">
                View Details{" "}
                <i className="far mb-1">
                  <BsArrowRight />
                </i>

              </Link>
            </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
