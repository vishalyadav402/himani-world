"use client"
import { useState } from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full z-40">
      <nav className="hidden md:flex justify-center bg-indigo-900 border-gray-200 py-2 hover:shadow-sky-100 hover:shadow-md">
        <div className="flex flex-wrap items-center justify-center py-2">
            <ul className="text-center flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0">
              <li className='text-white'>
                Welcome to Cyberton Pvt. Ltd.
              </li>
              <li>
              <a
              href="https://wa.me/8800171896" // Replace with your WhatsApp number
              className="block py-2 pl-3 pr-4 text-white text-lg lg:hover:bg-transparent lg:hover:text-indigo-200 lg:p-0"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security reasons
            >
              <WhatsAppIcon className='text-green-400' /> Whatsapp
            </a>

              </li>
              <li>
                <a
                  href="tel:+918800171896"
                  className="block py-2 pl-3 pr-4 text-white text-lg lg:hover:bg-transparent lg:hover:text-indigo-200 lg:p-0"
                >
                <PhoneIcon className='text-gray-300'/> +918800171896
                </a>
              </li>
              <li>
                <a
                  href="mailto:cto@himaniworldinfosol.com?subject=Enquiry"
                  className="block py-2 pl-3 pr-4 text-white text-lg lg:hover:bg-transparent lg:hover:text-indigo-200 lg:p-0"
                >
                 <MailIcon className='text-gray-300'/> cto@himaniworldinfosol.com
                </a>
              </li>
              <li className='justify-center'>
                <div className="flex space-x-4 justify-center">
                    <a href="#" className="text-white hover:text-gray-400">
                        <XIcon />
                    </a>
                    <a href="#" className="text-white hover:text-blue-500">
                        <FacebookIcon />
                    </a>
                    <a href="#" className="text-white hover:text-pink-600">
                        <InstagramIcon />
                    </a>
                    <a href="#" className="text-white hover:text-blue-700">
                        <LinkedInIcon />
                    </a>
                </div>
              </li>
            </ul>
        </div>
      </nav>
      <nav className="bg-white py-2">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <div className='flex justify-start items-center w-auto'>
          <a href="/" class="flex gap-4 items-center text-2xl font-semibold">
          <img src="./images/icon.png" class="h-14 rounded" alt="Himani World Infosol Logo" />
          <h3 className="text-xl font-bold text-indigo-900">Himani World <br/>Infosol Pvt. Ltd.</h3>
          </a>
        </div>

          {/* Hamburger icon for mobile */}
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-indigo-700 rounded-lg lg:hidden hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Menu items */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } lg:flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 w-full lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/#home"
                  className="block py-2 pl-3 pr-4 text-indigo-900 bg-indigo-100 text-lg rounded lg:bg-transparent lg:text-indigo-700 lg:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#aboutsection"
                  className="block py-2 pl-3 pr-4 text-indigo-900 text-lg border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-800 lg:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#servicesection"
                  className="block py-2 pl-3 pr-4 text-indigo-900 border-b text-lg border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-800 lg:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#brandsection"
                  className="block py-2 pl-3 pr-4 text-indigo-900 border-b text-lg border-gray-100lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-800 lg:p-0"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="/#contactsection"
                  className="block py-2 pl-3 pr-4 text-indigo-900 text-lg lg:hover:bg-transparent lg:hover:text-indigo-800 lg:p-0"
                >
                  Contact
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
