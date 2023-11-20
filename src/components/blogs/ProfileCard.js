import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import dynamic from 'next/dynamic';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
      <Image
        width={120}
        height={120}
        src="/team/team-2.jpg"
        alt="author"
        className="img-fluid shadow-sm rounded-circle"
      />
      <div className="author-info my-4">
        <h5 className="mb-0">Elena Mou</h5>
        <span className="small">Head of Designer</span>
      </div>
      <p>
        Uniquely communicate open-source technology after value-added ideas.
        Professionally engage efficient channels without B2C functionalities.
      </p>
      <ul className="list-unstyled author-social-list list-inline mt-3 mb-0">
        <li className="list-inline-item">
          <Link href="#!" passHref className="fab" legacyBehavior>

            <FaLinkedinIn />

          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#!" passHref className="fab" legacyBehavior>

            <FaTwitter />

          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#!" passHref className="fab" legacyBehavior>

            {' '}
            <FaGithub />

          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#!" passHref className="fab" legacyBehavior>

            <FaFacebookF />

          </Link>
        </li>
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProfileCard), { ssr: false });
