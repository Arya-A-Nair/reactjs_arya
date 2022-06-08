import React from 'react'
import data from '../data'
import UserCard from './UserCard'

const Show = () => {
  return (
    <div>
    {data.map((user,index)=>{
        return <UserCard key={index} data={user}/>
    })}
    </div>
  )
}

export default Show