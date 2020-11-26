import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'
import { useLocation } from '@reach/router'
import Burger from '@/components/Navigation/Burger'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const [open, setOpen] = useState(false)
  const [navBar, setNavBar] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }

    const height = document.getElementById('header').clientHeight
    setHeaderHeight(height)

    typeof window !== 'undefined' &&
      window.addEventListener('scroll', changeBackground)

    return () => window.removeEventListener('scroll', changeBackground)
  }, [])

  const changeBackground = () => {
    typeof window !== 'undefined' && window.scrollY > headerHeight
      ? setNavBar(true)
      : setNavBar(false)
  }

  return (
    <>
      <header className=' container-lg' id='header'>
        <nav className='navigation'>
          <div className='navigation__inner flex justify-between 1070:justify-end items-start'>
            <>
              <ReactSVG
                className='navigation__logo'
                src='../../img/svg/CCC-logo-full.svg'></ReactSVG>
              <div
                className={
                  'navigation__list' +
                  ' ' +
                  (open ? 'navigation__list--open' : 'navigation__list--closed')
                }>
                <div className='flex flex-col 1070:flex-row '>
                  {' '}
                  <Link
                    onClick={() => setOpen(false)}
                    to='/'
                    className='navigation__link'>
                    O nas
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    to='/about'
                    className='navigation__link'>
                    Co robimy
                  </Link>
                  {pathname == '/' ? (
                    <a
                      className='navigation__link'
                      onClick={() => {
                        setOpen(false)
                        scrollTo('#projects')
                      }}>
                      Realizacje
                    </a>
                  ) : (
                    <Link
                      to='/#projects'
                      onClick={() => {
                        setOpen(false)
                      }}
                      // onClick={() => scrollTo('/#services')}
                      className='navigation__link'>
                      Realizacje
                    </Link>
                  )}
                  <a
                    className='navigation__link'
                    onClick={() => {
                      setOpen(false)
                      scrollTo('#contact')
                    }}>
                    Kontakt
                  </a>
                </div>

                <div className='navigation__list--social'>
                  <a
                    href='https://www.instagram.com/cozycocktailcollective/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Instagram
                  </a>
                  <a
                    href='https://www.facebook.com/cozycocktailcollective'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Facebook
                  </a>
                  {/* <a
                    href="https://www.Twitter.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Twitter
                  </a> */}
                </div>
              </div>
              <Burger
                main={true}
                navBar={navBar}
                setOpen={setOpen}
                open={open}
              />
            </>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
