import React from 'react'
import UserCard from './UserCard'
import { useContext } from 'react';
import { userdata } from '../App';
const Show = () => {

    let data1=useContext(userdata)
    const [data, setData] = React.useState(data1);
    
  return (
    <div>
    {data.map((user,index)=>{
        return <UserCard key={index} data={user}/>
    })}
    </div>
  )
}

export default Show