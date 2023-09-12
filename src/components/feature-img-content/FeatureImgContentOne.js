import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { FaAsterisk, FaBatteryFull,  FaChartBar, FaChartPie,  FaFingerprint, FaPersonBooth, FaTree, } from "react-icons/fa";

const FeatureImgContentOne = () => {
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <span className="fas text-white">
                    <BsShieldCheck />
                  </span>
                </div>
                <h2>Advanced Analytics, Understand Business</h2>
                <p>
               Integrate Athena&apos;s Advanced Analytics and predictive business models, more efficient decision-making, streamline operations, and tailor client engagement for unparalleled success.  </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaChartPie className="fas me-2 text-primary mb-1" />
                   Enhanced Decision-Making
                  </li>
                  <li className="py-1">
                    <FaBatteryFull className="fas me-2 text-primary mb-1" />
                    Efficiency and Productivity:
                  </li>
                  <li className="py-1">
                    <FaPersonBooth className="fas me-2 text-primary mb-1" />
                    Personalization
                  </li>
                  <li className="py-1">
                    <FaAsterisk className="fas me-2 text-primary mb-1" />
                    Risk Management
                  </li>
                  <li className="py-1">
                    <FaChartBar className="fas me-2 text-primary mb-1" />
                    Scalability
                  </li>
                  <li className="py-1">
                    <FaTree className="fas me-2 text-primary mb-1" />
                    Sustainability
                  </li>
                </ul>
                <a
                  href="athenagpt.ai"
                  className="read-more-link text-decoration-none"
                >
                  Learn More{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={700}
                  height={400}
                  layout="responsive"
                  src="/screen/widget-11.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                  <span className="fal text-white">
                    <FaFingerprint />
                  </span>
                </div>
                <h2>Brand Buzz</h2>
                <p>
                  A dedicated service for tech startups,
                  offering a comprehensive branding package that includes user research,
                  UI/UX design,
                  brand identity creation, brand strategy development, digital marketing
                  consultation, content creation, social media management, and PR outreach
                </p>

                <a
                  href="https://www.brandbuzz.com"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Know More About Us{" "}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={492}
                  layout="responsive"
                  src="/screen/widget-12.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentOne;
