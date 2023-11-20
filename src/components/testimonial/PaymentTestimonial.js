'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Rating from '@components/common/Rating';


export default function PaymentTestimonial(
    
) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        padding: 10,
        margin: 5,
        width: 800,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="payment-testimonial bg-white-light ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="text-center mb-5">
                            <h2 className="mb-3">Trusted Customers Are Saying.</h2>
                            <p className="m-0">
                                Globally envisioneer an expanded array of methods of empowerment
                                and out-of-the-box ideas. Completely deliver open-source strategic
                                theme.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="payment-testimonial-slider">
                        <Slider {...settings}>
                        {/* Testimonial 1 */}
                        <div className="single-payment-testimonial bg-white py-5 px-4 rounded-custom">
                            <img
                                src="/testimonial/quotes-p.svg"
                                className="mb-4"
                                alt="quotes"
                            />
                            <h5 className="mb-3">Innovative Solutions!</h5>
                            <p className="mb-3">
                                Their innovative approach transformed our digital strategy. The team's dedication was unparalleled, significantly boosting our market presence.
                            </p>
                            <Rating classOption='mb-4' />
                            <div className="payment-t-author d-flex align-items-center">
                                <div className="payment-auth-img me-3">
                                    <img
                                        src="/testimonial/tp-2.png"
                                        alt="author"
                                    />
                                </div>
                                <div className="payment-auth-info">
                                    <h5 className="h6 m-0">Jordan Smith</h5>
                                    <small>CTO, Tech Corp</small>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="single-payment-testimonial bg-white py-5 px-4 rounded-custom">
                            <img
                                src="/testimonial/quotes-p.svg"
                                className="mb-4"
                                alt="quotes"
                            />
                            <h5 className="mb-3">Remarkable Creativity!</h5>
                            <p className="mb-3">
                                Their creativity in problem-solving is remarkable. They delivered a user-friendly platform that has received positive feedback from our customers.
                            </p>
                            <Rating classOption='mb-4' />
                            <div className="payment-t-author d-flex align-items-center">
                                <div className="payment-auth-img me-3">
                                    <img
                                        src="/testimonial/tp-3.png"
                                        alt="author"
                                    />
                                </div>
                                <div className="payment-auth-info">
                                    <h5 className="h6 m-0">Emily Johnson</h5>
                                    <small>Marketing Director, Branding Inc.</small>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="single-payment-testimonial bg-white py-5 px-4 rounded-custom">
                            <img
                                src="/testimonial/quotes-p.svg"
                                className="mb-4"
                                alt="quotes"
                            />
                            <h5 className="mb-3">Exceptional Support!</h5>
                            <p className="mb-3">
                                The support from their team was exceptional. They were always available to answer our questions and ensure our project was moving forward smoothly.
                            </p>
                            <Rating classOption='mb-4' />
                            <div className="payment-t-author d-flex align-items-center">
                                <div className="payment-auth-img me-3">
                                    <img
                                        src="/testimonial/tp-4.png"
                                        alt="author"
                                    />
                                </div>
                                <div className="payment-auth-info">
                                    <h5 className="h6 m-0">Alex Williams</h5>
                                    <small>Project Manager, NextGen Developers</small>
                                </div>
                            </div>
                        </div>
                        {/* Add more unique testimonials as needed */}
                    </Slider>
                </div>
                        </div>
                    </div>
                </div>
            
        </section>
    )
}
