import React, { useState } from 'react'
import userMenu from '../../assets/icon/userMenu.png'
import eye from '../../assets/icon/eye.png'
import black from '../../assets/icon/blacklistUser.png'
import active from '../../assets/icon/activeUsericon.png'
import { Link } from 'react-router-dom'

type PropsType = {
  id?: string;
}

const ViewUser = ({id}: PropsType) => {
  const [showAction, setShowAction] = useState(false);

  return (
    <div>
      <img src={userMenu} alt='menu' onClick={()=>setShowAction(!showAction)}/>
      {showAction && (
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