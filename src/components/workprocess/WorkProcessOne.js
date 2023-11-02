import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>API</h2>
              <p>
                Integrate Athena&apos;s services into your applications with ease, speed, and reliability through our user-friendly API. We provide you with a simple yet powerful tool to unlock boundless possibilities for your application&apos;s performance and functionality
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={526}
                height={621}
                src="/office-img-1.jpg"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <h3 className="h4 mb-2">Register for an API Key</h3>
                  <p>
                   Begin by signing up on Athena&apos;s API Shelf to get your unique API Key. This key will allow you to access Athena&apos;s services for your own applications.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    {' '}
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  
                  <h3 className="h4 mb-2">Learn How</h3>
                  <p>
                    Go through Athena&apos;s comprehensive API documentation
                    which details the functionalities and services available.
                    Familiarize yourself with the necessary endpoints, request
                    formats, and response structures.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">

                  <h3 className="h4 mb-2">Implementation</h3>
                  <p>
                    Leverage our well-documented and intuitive API to infuse Athena&apos;s capabilities into your application. Whether it&apos;s data extraction, process automation, or advanced analytics, integrating our API is as simple as it gets.
                    </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {' '}
                    <FiTruck />
                  </i>
                </div>
                <div className="icon-content">
                  <h3 className="h5 mb-2">Deliver Enhanced Value</h3>
                  <p>
                   We will help you deliver the final product, with Athena&apos;s API, your application can now perform at its peak efficiency. Expect smoother operations, improved user experiences, and a significant reduction in development time. In essence, your application is now a powerhouse of progressive, error-free, and globally standardized features.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
