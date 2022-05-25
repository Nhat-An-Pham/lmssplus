import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar--pc">
      <div className='navbar__content navbar__content--logo'>
          <h1>lmss plus</h1>
      </div>

      <div className='navbar__content navbar__content--searchBox'>
          <input placeholder="Player's name"/>
          <button>Search</button>
      </div>
      <div className='navbar__content navbar__content--loginBox'>
          <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar;
