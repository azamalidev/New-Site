import React, { useEffect, useState } from 'react';
import ProfileIcon from '../assets/icons/profile';
import BellIcon from '../assets/icons/bell';
import { routes } from '../contant';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/image/Logo.png';
import { getProfile } from '../redux/action/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate(routes.signin);
  };

  const goToUserDashboard = () => {
    navigate(routes.dashboard);
  };

  const goToProfile = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  return (
    <header
      onMouseLeave={() => setIsOpen(false)}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: 'white',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px 24px',
      }}
      className='flex justify-between items-center bg-white py-4 px-6 shadow-md'
    >
      {/* Logo */}
      <img
        src={Logo}
        style={{ width: '10rem', height: '3rem', cursor: 'pointer' }}
        alt='Logo'
        onClick={() => navigate(routes.main)}
        className='lg:w-40 lg:h-12 w-32 h-10' // Adjust size for mobile
      />

      {/* Mobile Menu Button */}
      <button
        className='lg:hidden text-gray-700 focus:outline-none'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Navigation */}
      <nav
        className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'
          } absolute lg:static bg-white lg:bg-transparent w-full top-16 left-0 shadow-md lg:shadow-none xl:ml-[10%] xl:ml-[10%]2`}
      >
        <ul className='flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6'>
          
          <ul className="flex space-x-4">
 
            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                Home 
              </button>

            
              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out rounded-lg"
              >
                <div className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">
                  Submenu 1
                </li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">
                  Submenu 2
                </li>
              </ul>
            </li>







            {isAuthenticated && (
              <li className="relative group">
                <button
                  onClick={goToUserDashboard}
                  className="text-gray-700 hover:text-black focus:outline-none"
                >
                  Dashboard
                </button>
                <ul className="absolute left-0 hidden mt-2 w-40 bg-white border border-gray-300 shadow-md group-hover:block">
                  <li className="px-4 py-2 hover:bg-gray-100">Dashboard Submenu 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Dashboard Submenu 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Dashboard Submenu 3</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Dashboard Submenu 4</li>
                </ul>
              </li>
            )}

            {isAuthenticated && (
              <li className="relative group">
                <button
                  onClick={() => navigate('/lead')}
                  className="text-gray-700 hover:text-black"
                >
                  Leads
                </button>
                <ul className="absolute left-0 hidden mt-2 w-40 bg-white border border-gray-300 shadow-md group-hover:block">
                  <li className="px-4 py-2 hover:bg-gray-100">Leads Submenu 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Leads Submenu 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Leads Submenu 3</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Leads Submenu 4</li>
                </ul>
              </li>
            )}

            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                About Us
              </button>

              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer"> Submenu 1 </li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                Courses
              </button>

              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Onsite</li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Online</li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                Opportunities
              </button>

              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 1</li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                Info Desk
              </button>

              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 1</li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                Join Hands
              </button>

              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 1</li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</li>
              </ul>
            </li>

            <li className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                Our Events
              </button>

              <ul
                className="absolute left-0 mt-2 w-28 bg-white border border-gray-300 shadow-md transform transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-4 rounded-lg"
              >

                <div
                  className="absolute -top-3 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 1</li>
                <li className="px-4 py-2 text-sm hover:bg-blue-500 hover:text-white hover:rounded-md cursor-pointer">Submenu 2</li>
              </ul>
            </li>
          </ul>

          {/* {isAuthenticated ? (
            <li>
              <Link
                to={routes.quotation}
                className='text-[#56D9B9] font-semibold hover:text-teal-600'
              >
                Generate Quotation
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to={routes.signin}
                className='text-[#56D9B9] font-semibold hover:text-teal-600'
              >
                Info Desk
              </Link>
            </li>
          )} */}
        </ul>
      </nav>

      {/* Icons and Authentication */}
      <div className='flex items-center space-x-4'>
        {isAuthenticated ? (
          <>
            <button className='text-gray-700 hover:text-black'>
              <BellIcon />
            </button>
            {profile?.profilePhoto ? (
              <span
                onMouseEnter={() => setIsOpen(true)}
                onClick={toggleDropdown}
                className='relative'
              >
                <img
                  src={profile?.profilePhoto}
                  alt='Profile'
                  className='w-14 h-8 object-cover rounded-full border-none' // Make the width and height the same for a round shape
                />
              </span>
            ) : (
              <button
                onMouseEnter={() => setIsOpen(true)}
                onClick={toggleDropdown}
                className='bg-blue-200 text-gray-800 rounded-full p-2 hover:bg-blue-300 focus:outline-none'
              >
                <ProfileIcon />
              </button>
            )}
          </>
        ) : (
          <>
            <Link
              to={routes.signup}
              className='text-sm text-blue-600 hover:underline'
            >
              Signup
            </Link>
            <Link
              to={routes.signin}
              className='text-sm text-blue-600 hover:underline'
            >
              Login
            </Link>
          </>
        )}
      </div>

      {isOpen && (
        <div className='absolute right-0 mt-[40vh] w-48 bg-white border rounded-lg shadow-lg z-50'>
          <ul className='py-2'>
            <li>
              <Link
                to={routes.profile}
                className='block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
              >
                Profile hh
              </Link>
            </li>
            <li>
              <Link
                to={routes.lead}
                className='block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
              >
                My Request
              </Link>
            </li>
            <li>
              <button
                onClick={goToUserDashboard}
                className='w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={logout}
                className='w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer'
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
