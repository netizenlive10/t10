'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import menuData from './menuData'

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar)
    }
  })

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  const usePathName = usePathname()

  return (
    <>
      {/* <NotificationBar /> */}
      <header
        className={`header bg-gray-dark left-0 top-0 z-40 flex w-full items-center  ${
          sticky
            ? ' bg-bg-color-dark  fixed z-[9999]  !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
            : `${usePathName !== '/' && 'absolute'}  bg-transparent py-1`
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="  w-80 max-w-full xl:mr-12 relative">
              <Link href="/">
                <Image
                  src="/assets/logo/logo.png"
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-[50px] md:h-[80px] w-full object-contain"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block  h-0.5 w-[20px] bg-white transition-all duration-300  ${
                    navbarOpen ? ' top-[7px] rotate-45' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block  h-0.5 w-[20px] bg-white transition-all duration-300  ${
                    navbarOpen ? 'opacity-0 ' : ' '
                  }`}
                />
                <span
                  className={`relative my-1.5 block  h-0.5 w-[20px] bg-white transition-all duration-300  ${
                    navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px]  px-6 py-4 duration-300 border-body-color/20 bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? 'visibility top-full opacity-100'
                    : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className="block lg:flex lg:space-x-10">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative ">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          onClick={() => setNavbarOpen(false)}
                          className={`flex py-2  lg:mr-0 lg:inline-flex text-sm lg:px-0 lg:py-6 whitespace-nowrap  font-semibold uppercase ${
                            usePathName === menuItem.path
                              ? ' text-white'
                              : ' text-white/70 hover:text-white'
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex uppercase cursor-pointer items-center justify-between text-sm py-2  font-semibold text-white/70 group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 -mt-0.5"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu relative left-0 top-full rounded-sm  font-semibold transition-[top] duration-300 group-hover:opacity-100 bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? 'block' : 'hidden'
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem, index) => (
                              <Link
                                href={submenuItem.path}
                                key={index}
                                onClick={() => setNavbarOpen(false)}
                                className="block rounded py-2.5 text-sm text-white/70 hover:text-white uppercase lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Image
                  src="/assets/logo/logo1.png"
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="drop-shadow-[0_10px_25px_rgba(255,255,255,0.6)]  w-16  xl:w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
