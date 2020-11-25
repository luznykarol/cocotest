import React from 'react'

const Burger = ({ open, setOpen, navBar, main }) => {
  return (
    <div
      className={main ? 'burger burger-main' : 'burger'}
      open={open}
      onClick={() => setOpen(!open)}>
      <span
        style={{
          transform: open ? 'rotate(45deg)' : 'none',
        }}
      />
      <span
        style={{
          opacity: open ? 0 : 1,
        }}
      />
      <span
        style={{
          transform: open ? 'rotate(-45deg)' : 'none',
        }}
      />
    </div>
  )
}

export default Burger
