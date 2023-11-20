import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const FooterShort = () => {
  return (
    <footer className="footer-section">
      {/* <!--footer bottom start--> */}
      <div className="footer-bottom bg-dark text-white py-4">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7">
              <div className="copyright-text">
                <p className="mb-lg-0 mb-md-0">
                  &copy; 2023 All Rights Reserved.
                  <Link href="https://thurisalabs.com/" className="text-decoration-none">

                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="footer-single-col text-start text-lg-end text-md-end">
              <ul className="list-unstyled list-inline footer-social-list mb-0">
              <li className="list-inline-item">
              <Link href="https://www.twitter.com/thurisalabs" legacyBehavior>

                <FaTwitter />

              </Link>
              </li>
              <li className="list-inline-item">
              <Link
                href="https://www.linkedin.com/company/thurisa-labs-llc/?viewAsMember=true"
                legacyBehavior>

                <FaLinkedin />

              </Link>
              </li>
              <li className="list-inline-item">
              <Link href="https://www.github.com/mace-techno" legacyBehavior>

                <FaGithub />

              </Link>
            </li>
             <li className="list-inline-item">
                <Link href="https://www.instagram.com/thurisalabs" legacyBehavior>

                  <FaInstagram />

                </Link>
              </li>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--footer bottom end--> */}
    </footer>
  );
};

export default FooterShort;
