import React, { useState } from 'react'
import userMenu from '../../assets/icon/userMenu.png'
import eye from '../../assets/icon/eye.png'
import black from '../../assets/icon/blacklistUser.png'
import active from '../../assets/icon/activeUsericon.png'
import { Link } from 'react-router-dom'


type PropsType = {
  id?: string;
  setActiveDropDown: (id:string| undefined)=>void;
  activeDropDown: string;
}

const ViewUser = ({id, activeDropDown, setActiveDropDown}: PropsType) => {


  return (
    <div>
      <img src={userMenu} alt='menu' onClick={(e)=>{e.stopPropagation(); setActiveDropDown(id)}}/>
      {activeDropDown === id && (
                <div className='details'>
                    <Link to={`/user/${id}`}><div className='details-option'>
                        <img src={eye} alt='view details'></img>
                        <span>View Details</span>
                    </div></Link>
                    <div className='details-option'>
                        <img src={black} alt='blacklist'></img>
                        <span>Blacklist User</span>
                    </div>
                    <div className='details-option'>
                        <img src={active} alt='activate'></img>
                        <span>Activate User</span>
                    </div>
                </div>
            )}
    </div>
  )
}

export default ViewUser