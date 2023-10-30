import React from "react";
import SectionTitle from "../common/SectionTitle";

const PromoThree = ({ hasBg }) => {
  return (
    <>
      <section className={`promo-section ptb-120 ${hasBg ? "bg-light" : ""}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <SectionTitle
                title="We Know The Problem; Join Us, We Are Solving It!"
                description="."
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="promo-card-wrap promo-border border-color-purple border-2 bg-dark rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                <div className="promo-card-info">
                  <h3 className="display-5 fw-medium mb-4">Automate Efficiency</h3>
                  <h2 className="h5">Complete tasks in record time</h2>
                  <p className="mb-0">
                    Rapidiously embrace distinctive best practices after B2B
                    syndicate.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="promo-card-wrap border border-2 bg-purple rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                <div className="promo-card-info">
                  <h3 className="display-5 fw-medium mb-4">Analyza Data</h3>
                  <h2 className="h5">Make sense out of data</h2>
                  <p className="mb-0">
                    Tailor your service provisioning with superb analytics plugged into your business processes.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="promo-card-wrap promo-border border-2 bg-dark rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
                <div className="promo-card-info">
                  <h3 className="display-5 fw-medium mb-4">90%</h3>
                  <h2 className="h5">24/7 Support</h2>
                  <p className="mb-0">
                    Synergistically revolutionize leadership whereas platform.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoThree;
