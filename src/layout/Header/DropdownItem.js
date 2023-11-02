import Link from "next/link";

const DropdownItem = ({ item }) => (
  <span>
    <Link
      href={item.href}
      className="dropdown-link"
      data-bs-dismiss="offcanvas"
      aria-label="Close">

      <span className="dropdown-info mb-0">
        <span className="drop-title">{item.title}</span>
        <span>{item.info || item.icon}</span>
      </span>

    </Link>
  </span>
);

export default DropdownItem;
