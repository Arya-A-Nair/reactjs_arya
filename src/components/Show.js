import React from 'react'
import UserCard from './UserCard'
import { useContext } from 'react';
import { userdata } from '../App';
import { useEffect } from 'react';
const Show = () => {

    let data1=useContext(userdata)
    const [data, setData] = React.useState(data1);


    useEffect(() => {
      let response=fetch('https://dry-bayou-99944.herokuapp.com/profiles')
      response.then(res=>res.json()).then(data2=>setData([...data,data2]))
    },[])





  return (
    <div>
      {data.map((user,index)=>{
          return <UserCard key={index} data={user}/>
      })}
    </div>
  )
}

export default Show