import React from 'react'
import logo from '../../assets/icon/logo.svg'
import search from '../../assets/icon/search-icon.png'
import alarm from '../../assets/icon/alarm-icon.png'
import profile from '../../assets/icon/profile.png'
import drop from '../../assets/icon/dropdown.png'
import './nav.scss'

const Nav = () => {
  return (
    <header className='header'>
        <div>
            <img src={logo} alt='logo' />
        </div>
        <div className='header-input'>
            <input type='text' placeholder='Search for anything' />
            <div className='header-input-search'>
                <img src={search} alt='search icon' />
            </div>
        </div>
        <div className='nav-profile'>
            <p>Docs</p>
            <div>
                <img src={alarm} alt='alarm icon' />
            </div>
            <div>
                <img src={profile} alt='profile picture' />
            </div>
            <div className='nav-profile-user'>
                <p>Adedeji</p>
                <img src={drop} alt='dropdown' />
            </div>
        </div>
    </header>
  )
}

export default Nav