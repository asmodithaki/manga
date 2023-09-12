/* eslint-disable @next/next/no-img-element */
import React from "react";
import ServiceForm from "./ServiceForm";

const SingleServiceRegister = () => {
  return (
    <section
      className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom right",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="testimonial-tab-slider-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="text-white">Build Your Project with Us</h2>
              <p>
                Whatever your goal, we are ready.
              </p>
              <hr />
              <div
                className="tab-content testimonial-tab-content text-white-80"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="testimonial-tab-1"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      &quot;The consultation process is smooth and the online support system priporities user interests for a better foundation establishing a great discourse for superior software development for African and International markets.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Veronica P. Byrd</span>
                    <span className="d-block small">Veterinary technician</span>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="testimonial-tab-2"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      &quot;They should consider business concierge and maybe focus on serving an audience in 
                      need of various business setups and investor due dilliegence&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">Raymond H. Gilbert</span>
                    <span className="d-block small">Angelics Ion</span>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="testimonial-tab-3"
                  role="tabpanel"
                >
                  <blockquote className="blockquote">
                    <em>
                      &quot;My business got registered in less than and month, compared with the 4 months I had to 
                      wait for business registration and other document filling procedures.
                      They made getting paid online easy after my payment service provider required extra KYB.&quot;
                    </em>
                  </blockquote>
                  <div className="author-info mt-3">
                    <span className="h6">ASmodi R. Ithaki</span>
                    <span className="d-block small">Owokere Inc</span>
                  </div>
                </div>
              </div>
              <ul
                className="nav nav-pills mb-0 testimonial-tab-indicator mt-5"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-1"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/1.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-2"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/4.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#testimonial-tab-3"
                    type="button"
                    role="tab"
                  >
                    <img
                      src="/testimonial/6.jpg"
                      alt="testimonial"
                      width="55"
                      className="img-fluid rounded-circle"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <ServiceForm />
        </div>
        {/* <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
        <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div> */}
      </div>
    </section>
  );
};

export default SingleServiceRegister;
