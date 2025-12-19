import React from 'react'

const Card = ({title}) => {
  return (
    <div className='flex gap-3'>
      <div>{title}</div>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  )
}

export default Card
