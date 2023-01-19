import React from 'react'
import './sidebar.scss'
import briefcase from '../../assets/icon/briefcase.png'
import down from '../../assets/icon/downarr.png'
import home from '../../assets/icon/dashboard.png'
import SidebarOptions from './SidebarOptions'
import { customerData, businessData, settings } from './SidebarData'

const MobileSidebar = () => {

  return (
    <div className='navbar bg-body-tertiary '>
        <div className='container-fluid'>
            <p>Sidebar</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="mobile offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <div  className='sidebar-switch'>
                    <img src={briefcase} alt='switch organization' />
                    <p>Switch Organization</p>
                    <img src={down} alt='down arrow' /> 
                </div>

                <div className={`not-active`}>
                    <SidebarOptions src={home} alt='dashboard' text='Dashboard' />
                </div>


                <h2>Customers</h2>
                {customerData.map((item, index) => (
                    <div key={index} className={`not-active ${index === 0 && " active "}`}>
                        <SidebarOptions src={item.img} alt={item.alt} text={item.text} />
                    </div>
                ))}

                <h2>Businesses</h2>
                {businessData.map((item, index) => (
                    <div key={index} className={`not-active`}>
                        <SidebarOptions src={item.img} alt={item.alt} text={item.text} />
                    </div>
                ))}

                <h2>Settings</h2>
                {settings.map((item, index) => (
                    <div key={index} className='not-active'>
                        <SidebarOptions src={item.img} alt={item.alt} text={item.text} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MobileSidebar