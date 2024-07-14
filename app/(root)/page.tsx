import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Ann', lastName:'Patwal', email:"patwal143ann@gmail.com"}
  return (
   <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access and manage your account and 
          transactions effectively'
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={2}
          totalCurrentBalance={95000.40}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
       user={loggedIn}
       transactions={[]}
       banks={[{currentBalance:1234.50},{currentBalance:5000.90}]}
       />
   </section>
  )
}

export default Home
