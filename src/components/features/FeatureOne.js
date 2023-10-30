import React from 'react';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import {  FaBrain, FaBusinessTime, FaMoneyCheck,   FaTruckLoading } from 'react-icons/fa';
import { BsHeadset } from 'react-icons/bs';

const FeatureImgSix = () => {
  return (
    <>
      <section className="feature-section-two ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="feature-content-wrap">
                <SectionTitle
                  title="The All-in-One Suite for Your Growing Business"
                  description="Create your store, manage orders, track sales with in-depth reports and analytics focused on growing your business. "
                  leftAlign
                />
                <ul className="list-unstyled mb-0">
                   <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <FaBrain className="fa-lg" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h3">AI Integration</h3>
                      <p> 
                        Leverage AI, automate your business processes, increase productivity, efficiency and profitability.
                        It&apos;s your personal business assistant, built to help you navigate your business landscape with ease.
                      </p>
                    </div>
                  </li>
                    <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <FaBusinessTime className="fa-lg" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h3">Business Compliance</h3>
                      <p>
                        Create entities, manage compliance and other business management processes with AutomaLaw, Streamline your business and stay compliant in few easy steps. 
                      </p>
                    </div>
                  </li>
                 <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <FaBusinessTime className="fa-lg" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h3">Multi-store Manager</h3>
                      <p>
                        Inshopper allows users to link their social media accounts to their online store,
                        enabling them to turn their social media presence into a thriving e-commerce platform.
                        This integration offers a unique opportunity to leverage the power of social media to drive sales and increase visibility.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <FaTruckLoading className="fa-lg" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h3">Logistics</h3>
                      <p>
                        Manage logistics needs, just ship and track
                        It offers real-time tracking of your fleet, efficient management of drivers,
                        and up-to-the-minute updates on your deliveries,
                        including AI-assisted route optimization. All these features are conveniently accessible via your mobile device
                      </p>
                    </div>
                  </li>
                   <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <FaMoneyCheck className="fa-lg" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h3">Payments</h3>
                      <p>
                      Got foreign customers who want to make payments? Don&apos;t worry, we got you covered. Giva Wallet supports major payments gateways for seamless business and service delivery and offers a secure Payout system for your business.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="icon-box bg-primary rounded me-4">
                      <span className="fas text-white">
                        <BsHeadset />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h3 className="h3"> Business Advisory</h3>
                      <p>
                        Manage your business needs, enjoy exceptionally great technical support, and get access to a team of business experts to help you grow your business aligning with your business needs
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="feature-img-wrap">
                <Image
                  width={120}
                  height={100}
                  layout="responsive"
                  src="/feature-hero-img.svg"
                  alt="feature"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgSix;

