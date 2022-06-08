import React from 'react'

const UserCard = ({data}) => {

  return (
    <div className='Card'>
        <div className='Card-Top'>
            <span>{data.name}</span>
            <span>{data.contact}</span>
        </div>
        <div className='Card-Bottom'>
            <div>{data.email}</div>
            <div>{data.address}</div>
        </div>

    </div>
  )
}

export default UserCard