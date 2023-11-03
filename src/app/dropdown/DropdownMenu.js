import DropdownItem from "./DropdownItem";

const DropdownMenu = ({ title, menuData, additionalClass }) => (
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle d-flex justify-content-between" href="#" role="button" data-bs-toggle="dropdown">
      {title}
    </a>
    <div className={`dropdown-menu border-0 rounded-custom shadow py-0 bg-white ${additionalClass}`}>
      <div className="dropdown-grid rounded-custom">
        <div className="dropdown-grid-item">
          {menuData.map((item, i) => (
            <DropdownItem key={i + 1} item={item} />
          ))}
        </div>
      </div>
    </div>
  </li>
);

export default DropdownMenu;
