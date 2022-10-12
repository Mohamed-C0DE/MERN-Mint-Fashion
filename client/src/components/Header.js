import { useState } from "react";

const Header = () => {
  const [scrolledHeader, setScrolledHeader] = useState(false);

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 1) {
      setScrolledHeader(true);
    } else {
      setScrolledHeader(false);
    }
  });

  return (
    <header>
      <nav
        className={`${
          scrolledHeader ? `top-0 border-b border-gray-200` : `relative`
        } bg-white px-2 sm:px-4 py-0.5 fixed w-full z-20`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl whitespace-nowrap">MINT</span>
          </a>
          <div className="flex items-center md:order-2">
            <a href="https://flowbite.com/">
              <svg
                className="hidden md:block w-4 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </a>
            <a className="flex items-center" href="https://flowbite.com/">
              <svg
                className="w-5 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
              </svg>
              <span>(5)</span>
            </a>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                  aria-current="page"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white"
                >
                  Sale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
