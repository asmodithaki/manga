import React, { useEffect, useState } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData
} from '../../utils/data';
import dynamic from 'next/dynamic';

const Navbar = ({ navDark, insurance, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${
        navDark ? 'position-absolute' : ''
      } w-100 ${classOption} ${
        insurance && 'ins-header main-header w-100 z-10'
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-70 ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">

            {scroll > headerTop || !navDark ? (
              <Image
                width={200}
                height={50}
                src="/logo-color.png"
                alt="logo"
                className="img-fluid logo-color"
              />
            ) : (
              <Image
                width={200}
                height={50}
                src="/logo-white.png"
                alt="logo"
                className="img-fluid logo-white"
              />
            )}

          </Link>
          <button
            className="navbar-toggler position-fixed right-5 border-1"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li className="nav-item dropdown">
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      {navHomeOne.map((navH, i) => (
                        <span key={i + 1}>
                          <Link href={navH.href} className="dropdown-link">

                            <span className="dropdown-info mb-0">
                              <span className="drop-title">{navH.title}</span>
                              <span>{navH.info}</span>
                            </span>

                          </Link>
                        </span>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      {navHomeTwo.map((navH, i) => (
                        <span key={i + 10}>
                          <Link href={navH.href} className="dropdown-link">

                            <span className="dropdown-info mb-0">
                              <span className="drop-title">{navH.title}</span>
                              <span>{navH.info}</span>
                            </span>

                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
              
                <Link href="services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="about-us" className="nav-link">
                  About
                </Link>
              </li>
             
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Thurisa+</h6>
                      {navCompanyLinks.map((navLink, i) => (
                        <div key={i + 1}>
                          <Link href={navLink.href} className="dropdown-link px-0">

                            <span className="me-2">{navLink.icon}</span>
                            <span className="drop-title mb-0">
                              {navLink.title}{' '}
                            </span>

                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">Utility</h6>
                      {navCompanyPage.map((navPage, i) => (
                        <div key={i + 1}>
                          <Link href={navPage.href} className="dropdown-link">

                            <span className="me-2">{navPage.icon}</span>
                            <span className="drop-title mb-0">
                              {navPage.title}{' '}
                            </span>

                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                <div className="dropdown-grid rounded-custom width">
                <div className="dropdown-grid-item">
                {offcanvasMenuData.map((navH, i) => (
                  <span key={i + 1}>
                    <Link
                      href={navH.href}
                      className="dropdown-link"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">

                      <span className="dropdown-info mb-0">
                        <span className="drop-title">{navH.title}</span>
                        <span>{navH.info}</span>
                      </span>

                    </Link>
                  </span>
                ))}
              </div>
                  
                </div>
              </div>
            </li>
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            
            <Link
              href="request-discuss"
              className={
                insurance ? 'ins-btn ins-primary-btn' : 'btn btn-primary'
              }>
              
               Learn More
              
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link
                href="/"
                className="d-flex align-items-center mb-md-0 text-decoration-none">

                <Image
                  width={121}
                  height={36}
                  src="/logo-color.png"
                  alt="logo"
                  className="img-fluid ps-2"
                />

              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
