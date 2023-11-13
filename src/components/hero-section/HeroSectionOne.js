/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

const ButtonLink = ({ href, children, className }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);

const  HeroSectionOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="hero-section ptb-100 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h2 className="fw-bold display-4 ptb-100 text-white ">
              AI Powered Business Management Software
              </h2>
              <p className="lead ">
                <strong>
                Employ Integratable data driven solutions for your business, increasing management efficiency and productivity
                  
                </strong>
              </p>
              <div className="action-btns mt-5 d-flex align-items-center">
                <ButtonLink href="/request-discuss" className="btn btn-primary me-3">
                 Let&apos;s Talk
                </ButtonLink>
               
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5  ptb-100 bg-gradient">
            <div className="hero-img position-relative circle-shape-images">
              <img
                src="/hero-1.jpg"
                alt="hero img"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
