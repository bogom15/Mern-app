import React from 'react'
import UsersList from '../components/UsersList'

 const Users  = () => {
     const USERS = [
    {
        id: 'u1',
        name: 'Bogosi Moima',
        image: 'https://images.unsplash.com/photo-1615559108290-5e8ab1443acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80',
        place: 3
     }
    ]
  return (
    <UsersList items={USERS}/>
  )
}

export default Users