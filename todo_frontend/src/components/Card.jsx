import React, { useState } from 'react'
import DeleteModal from './DeleteModal'
import { Link } from 'react-router-dom'

const Card = ({title, id, getAll}) => {
const [delModal,setDelmodal]=useState(false)
const [todoId,setTodoId]=useState()



  return (
    <div className='flex gap-3'>
      <div className='ms-5'>{title}</div>
      <button onClick={()=>{setDelmodal(true) ; setTodoId(id)}}>Delete</button>
      <Link to={`/updateTodo/${id}`}>
            <button>Edit</button>
      </Link>

      {delModal && <DeleteModal  setDelmodal={setDelmodal} todoId={todoId} getAll={getAll} />}
    </div>
  )
}

export default Card
