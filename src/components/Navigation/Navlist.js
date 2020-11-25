import React from 'react'
import { Link } from 'gatsby'

const Navlist = ({ main, open, setOpen }) => {
  return (
    <>
      <div
        className={
          'navigation__list' +
          ' ' +
          (open ? 'navigation__list--open' : 'navigation__list--closed')
        }>
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
        <Link
          onClick={() => setOpen(false)}
          to='/projects'
          className='navigation__link'>
          Realizacje
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to='/services'
          className='navigation__link'>
          Usługi towarzyszące
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to='#contact'
          className='navigation__link cursor-pointer'>
          Kontakt
        </Link>
      </div>
    </>
  )
}
export default Navlist
