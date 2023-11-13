/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import Navigation from 'swiper';

import Rating from '../common/Rating';

SwiperCore.use([Navigation]);

const TestimonialThree = () => {
  const swiperOption = {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <>
      <section className="cutomer-review-app-two ptb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <div className="mb-4 mb-sm-5">
                <h2> Happy Clients</h2>
              </div>
            </div>
            <div className="col-lg-5 col-12 text-end d-none d-lg-block">
              <div className="appTwoReviewSwiper-Controller ms-md-auto position-relative">
                <span className="swiper-button-next"></span>
                <span className="swiper-button-prev"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="appTwoReviewSwiper">
                <navigator {...swiperOption}>
                  <navigator>
                    <div className="single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <Rating />
                      <p>
                        Thurisa Labs has been instrumental in transforming our tech startup&apos;s branding strategy.
                        Their unique approach to user research and attention to detail in UI/UX design has elevated our brand presence to new heights. We can&apos;t recommend them enough!
                      </p>
                      <div className="d-flex align-items-center">
            
                        <div className="author-info">
                          <h6 className="mb-0">Manly Hall</h6>
                          <small>Founder - Hydra</small>
                        </div>
                      </div>
                    </div>
                  
                    <div className=" single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <Rating />
                    
                      <p>
                       Their Brand Buzz service took our UI build from bland to brilliant. They&apos;re experts in their field, and it shows in their dedication and the quality of their work   </p>
                      <div className="d-flex align-items-center">
                        <div className="author-info">
                          <h6 className="mb-0">Hugh Mahal</h6>
                          <small>Product Manager - Bingo Alley</small>
                        </div>
                      </div>
                    </div>
                
                 
                    <div className="single-review-slider p-lg-5 p-4 bg-white rounded-custom border my-lg-4">
                      <Rating />
                      <p>
                        Their expertise in branding and their deep understanding of the tech industry has given our business a competitive edge.
                        We have seen a remarkable increase in customer engagement and brand recognition since we started working with them
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="author-info">
                          <h6 className="mb-0">Richard Johnson</h6>
                          <small>Manager - BlueMetal</small>
                        </div>
                      </div>
                    </div>
                  </navigator>
                </navigator>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialThree;
