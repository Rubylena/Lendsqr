import React, { useState } from 'react'
import './userTable.scss'
import filter from '../../assets/icon/filter-results-button.png'
import { extractedData, organization, status } from './userdata'
import userMenu from '../../assets/icon/userMenu.png'
import eye from '../../assets/icon/eye.png'
import black from '../../assets/icon/blacklistUser.png'
import active from '../../assets/icon/activeUsericon.png'
import { axiosBase } from './Users'
import { useEffect } from 'react';


const UserTable = () => {
    type User = {
        orgName: string;
        createdAt: string;
        userName: string;
        email: string;
        phoneNumber: string;
    };
      
    type GetUsersResponse = {
        map(arg0: (item: { orgName: string; createdAt: string; userName: string; email: string; phoneNumber: string }, index: number) => JSX.Element): React.ReactNode
        data: User[];
    };
    const [details, setDetails] = useState(false);
    const [filterer, setFilterer] = useState(false);

    const [users, SetUsers] = useState<GetUsersResponse>([])

    async function getUser() {
        try {
          const response = await axiosBase.get<GetUsersResponse>('/users');
          SetUsers(response.data)
        //   return users
    } catch (error) {
        console.error(error);
    }
}
console.log(users)
    
      useEffect(() => {
        getUser()
      }, [])

    const headingData = [ 'ORGANIZATION', 'USERNAME', 'EMAIL',
                         'PHONE NUMBER', 'DATE JOINED', 'STATUS'] 

    const status = ['Active', 'Pending', 'Blacklisted', 'Inactive']                     
    const openDetails = (index: number) => {
        console.log(index)
        setDetails(!details)
    }

    const openFilter = (index: number) => {
        setFilterer(!filterer)
    }

    const customDate =(ele: string)=>{
        const date = new Date(ele).toLocaleDateString('en-US', { year: "numeric", month: "short", day: "numeric" } )
        const time = new Date(ele).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })
        return date + ' ' + time
    }

  return (
    <table className='userTable'>
        <thead className='userTable-head'>
        <tr style={{position: 'relative'}}>
            {headingData.map((item, index) => (
                <th key={index} > 
                    {item}
                    <img className='th-img' src={filter} alt='filter' onClick={()=>openFilter(index)} />
                </th>
            ))}
            {filterer && (
                <div className='filter'>
                    <form>
                        <div className='form-filter-options'>
                            <label htmlFor='organization' >Organization</label>
                            <select name="organization" id="organization">
                                {organization.map((item, index) => (
                                    <option key={index} >{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className='form-filter-options'>
                            <label htmlFor='username' >Username</label>
                            <input className='inputs' type='text' name='username' placeholder='User' />
                        </div>
                        <div className='form-filter-options'>
                            <label htmlFor='email' >Email</label>
                            <input type='email' name='email' placeholder='Email' />
                        </div>
                        <div className='form-filter-options'>
                            <label htmlFor='date' >Date</label>
                            <input type='date' name='date' placeholder='Date' />
                        </div>
                        <div className='form-filter-options'>
                            <label htmlFor='tel' >Phone Number</label>
                            <input type='tel' name='tel' placeholder='Phone Number' />
                        </div>
                        <div className='form-filter-options'>
                            <label htmlFor='status' >Status</label>
                            <select name="status" id="status">
                                {status.map((item, index) => (
                                    <option key={index} >{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className='filter-buttons'>
                            <button type='reset' >Reset</button>
                            <button type='submit' >Filter</button>
                        </div>
                    </form>
                </div>
            )}
        </tr>
        </thead>
        <tbody className='userTable-body'>
            {extractedData.map((item, index) => (
                <tr key={index}>
                    <td>{item.organization} </td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.date}</td>
                    <td>
                        <p className={`${item.status == 'Blacklisted' ? 'blacklist'
                        :item.status === 'Pending' ? 'pending' 
                        :item.status === 'Active' ? 'activeOpt' : 'inactive' }`}>
                            {item.status}
                        </p>
                    </td>
                    <td onClick={()=>openDetails(index)} ><img src={userMenu} alt='menu' /></td>
                </tr>
            ))}
            {users.map((item: User, index: number) => (
                <tr key={index}>
                    <td>{item.orgName} </td>
                    <td>{item.userName.split('.').join(' ')}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{customDate(item.createdAt)}</td>
                    {status.map((item2, index) =>(
                        <td><p>{item2}</p></td>
                    ))}
                    {/* <td>
                        <p className={`${item.status == 'Blacklisted' ? 'blacklist'
                        :item.status === 'Pending' ? 'pending' 
                        :item.status === 'Active' ? 'activeOpt' : 'inactive' }`}>
                            {item.status}
                        </p>
                    </td> */}
                    <td onClick={()=>openDetails(index)} ><img src={userMenu} alt='menu' /></td>
                </tr>
            ))}
        </tbody>
            {details && (
                <div className='details'>
                    <div className='details-option'>
                        <img src={eye} alt='view details'></img>
                        <span>View Details</span>
                    </div>
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

            

    </table>
  )
}

export default UserTable