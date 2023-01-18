import React, { useState } from 'react'
import './userDetails.scss'
import Nav from '../../components/Nav/Nav';
import Sidebar from '../../components/Sidebar/Sidebar';
import left from '../../assets/icon/leftArr.png'
import userPic from '../../assets/icon/userProfile-img.png'
import Details from './Details/Details';

const UserDetails = () => {
  const [menuActive, setMenuActive] = useState(0)

  const data = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System']

  return (
    <div>
      <Nav />
      <section className='userDetails'>
        <Sidebar />
        <main >
          <section className='userDetails-back'>
            <img src={left} alt='Left arrow' />
            <span>Back to Users</span>
          </section>

          <section className='userDetails-heading'>
            <h2>User Details</h2>
            <div className='userDetails-heading-btn'>
              <button type='submit' >BLACKLIST USER</button>
              <button type='submit'>ACTIVATE USER</button>
            </div>
          </section>

          <section className='userDetails-display'>
            <div className='userDetails-display-box'>
              <div className='userDetails-display-box-name'>
                <div className='userDetails-display-box-name-img'>
                  <img src={userPic} alt='User profile picture' ></img>
                </div>
                <div>
                  <p>Grace Effiom</p>
                  <p>LSQFf587g90</p>
                </div>
              </div>
              <hr />
              <div className='userDetails-display-box-tier'>
                <p>User's Tier</p>
                <div>
                  <span>&#9733;</span>
                  <span>&#10025;</span>
                  <span>&#10025;</span>
                </div>
              </div>
              <hr/>
              <div className='userDetails-display-box-balance'>
                <p>₦200,000.00</p>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>

            <div className='userDetails-display-menu'>
              {data.map((item, index) => (
                <span className={` ${menuActive === index && 'activeUserMenu'} `}
                key={index}
                onClick={()=>setMenuActive(index)}
                >{item}</span>
              ))}
            </div>
          </section>

          <section>
            <Details />
          </section>

        </main>
      </section>
    </div>
  )
}

export default UserDetails