import { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "components/Sidebar";
import logo from 'assets/logo/logo_text.svg'

const Header = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onClickAppDrawer = () => (e) => {
    setIsSidebarOpen(true);
  };

  const onClickSearchDrawer = () => {
    console.log("clicked")
  }

  return <header className="header">
    <div className="header-wrap">
      <div className="btn-wrap">
        <Link to={'/home'} className="btn btn-go-home"><IconHome /></Link>
      </div>
      <div className="btn-tools-wrap">
        <div className="btn-wrap">
          <button className="btn"
            onClick={onClickSearchDrawer}
          >
            <IconSearch />
          </button>
        </div>
        {/* <Link to={'/search'} className="btn btn-search"><IconSearch /></Link> */}
        <div className="btn-wrap">
          <button type="button" className="btn btn-app-drawer" onClick={onClickAppDrawer()}>
            <IconSideBar />
          </button>
        </div>
      </div>
    </div>
    <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
    {children}
  </header>
};

export default Header;

const IconHome = () => {
  return <img src={logo} alt="" />
};

const IconSearch = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path d="M16.635 4.51c3.24 3.241 3.335 8.424.303 11.79l.3-.3L22 20.765 20.764 22l-4.763-4.763.3-.3c-3.366 3.033-8.55 2.939-11.79-.302A8.573 8.573 0 0 1 16.635 4.51zM5.723 5.724a6.858 6.858 0 1 0 9.698 9.699 6.858 6.858 0 0 0-9.698-9.7zm4.848-.58a5.574 5.574 0 0 1 5.573 5.475l.001.098h-.857A4.717 4.717 0 0 0 10.662 6h-.091v-.858z" id="8d2njemffa" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <use fill="#555555" href="#8d2njemffa" />
    </g>
  </svg>
}

const IconSideBar = () => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="3" fill="#555555" />
    <rect x="9" y="11" width="11" height="3" fill="#555555" />
    <rect x="4" y="18" width="16" height="3" fill="#555555" />
  </svg>
}