import React from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { navCompanyLinks, offcanvasMenuData } from "../../utils/data";

const OffCanvasMenu = () => (
  <div className="offcanvas-body">
    <ul className="nav col-15 col-md-auto justify-content-center main-menu">
      <DropdownMenu title="Products" menuData={offcanvasMenuData} additionalClass="width-half" />
      <DropdownMenu title="Resources" menuData={navCompanyLinks} additionalClass="width-full" />
      <li data-bs-dismiss="offcanvas">
        <Link href="/services"><a className="nav-link">Services</a></Link>
      </li>
      {/* More individual as I build */}
      <li><Link href="/contact-us"><a className="nav-link">Contact</a></Link></li>
      <li><Link href="/about-us"><a className="nav-link">About</a></Link></li>
    </ul>
    <div className="action-btns mt-4 ps-3">
      <span data-bs-dismiss="offcanvas">
        <Link href="/login"><a className="btn btn-outline-primary me-2">Sign In</a></Link>
      </span>
      <span data-bs-dismiss="offcanvas">
        <Link href="/request-demo"><a className="btn btn-primary">Get Started</a></Link>
      </span>
    </div>
  </div>
);

export default OffCanvasMenu;
