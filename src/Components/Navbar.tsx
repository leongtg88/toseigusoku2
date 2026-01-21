import { useState } from 'react';
import logo from '../assets/Logo Rectangular Negro.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm relative z-20 shadow-sm">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="shrink-0">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Clases</a>
              <a href="#" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Planes</a>
              <a href="#" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Horarios</a>
              <a href="#" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Sobre Nosotros</a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="#" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Login</a>
              <a href="#" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#3caffc] hover:bg-[#032c85] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Registrarse
              </a>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} -z-10`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Clases</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Planes</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Horarios</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Sobre Nosotros</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Login</a>
          <a href="#" className="bg-indigo-600 text-white block px-3 py-2 rounded-md text-base font-medium">Registrarse</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
