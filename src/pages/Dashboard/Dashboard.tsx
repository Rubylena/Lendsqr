import React, { useEffect } from 'react'
import './dashboard.scss'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import user from '../../assets/icon/USER-ICON.png'
import activeUser from '../../assets/icon/activeUser.png'
import loan from '../../assets/icon/userWithLoan.png'
import savings from '../../assets/icon/userWithSavings.png'
import UserCard from '../../components/UserCard/UserCard'
import UserTable from '../../components/UserTable/UserTable'

const Dashboard = () => {

  const data = [
    {
      img: user,
      text: 'USERS',
      numbers: '2,453'
    },
    {
      img: activeUser,
      text: 'ACTIVE USERS',
      numbers: '2,453'
    },
    {
      img: loan,
      text: 'USERS WITH LOANS',
      numbers: '12,453'
    },
    {
      img: savings,
      text: 'USERS WITH SAVINGS',
      numbers: '102,453'
    }
  ]

  return (
    <div>
      <Nav />
      <div className='dashboard'>
        <Sidebar />

        <main>
          <h2>Users</h2>
          <div className='userOptions'>
            {data.map((item, index) => (
              <div key={index} className='userOptions-single'>
                <UserCard src={item.img} alt={item.text} text={item.text} numbers={item.numbers} />
              </div>
            ))}
          </div>

          <section className='dashboard-table'>
            <UserTable  />
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard