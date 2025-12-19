// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const EditModal = () => {
//     const [val, setVal] = useState('')

//     const {id}=useParams()
//     console.log(id)

//     const getTodo = async()=>{
//         const response =await axios.get(`http://localhost:8001/findTodo/${id}`)
//         const title = response.data.data.title
//         console.log(title)
//         setVal(title)
//     }


//     useEffect(()=>{
//         getTodo()
//     }, [])





//     return (
//         <div
//             id="modal"
//             className="fixed inset-0 z-50 flex items-center justify-center"
//         >
//             <div className="fixed inset-0 bg-black/50" />
//             <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
//                 <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                         Update Todo
//                     </h3>
//                     <button
//                         id="closeModalButton"
//                         className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                     >
//                         <svg
//                             className="h-4 w-4 inline-block ml-2"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                             data-slot="icon"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6 18 18 6M6 6l12 12"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="space-y-4">
//                     <div>
//                         <label
//                             htmlFor="website_url"
//                             className="block text-sm font-medium text-gray-700 dark:text-gray-300"
//                         >
//                             Title
//                         </label>
//                         <input value={val}
//                             type="url"
//                             id="website_url"
//                             className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
//                             placeholder="https://example.com"
//                             required=""
//                         />
//                     </div>
//                     <div className="flex justify-end gap-3">
//                         <button
//                             id="cancelButton"
//                             className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             id="submitUrlButton"
//                             className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600"
//                         >
//                             Update
//                             <svg
//                                 className="h-4 w-4 inline-block ml-2"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 aria-hidden="true"
//                                 data-slot="icon"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default EditModal


import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';

const EditModal = () => {
  const { register, handleSubmit, formState, setValue } = useForm({

  })

  const { id } = useParams()
  console.log("id", id)

  const navigate = useNavigate()

  const getTodo = async () => {
    try {

      const res = await axios.get(`http://localhost:8001/findTodo/${id}`)  
      // console.log("note", res);
      const title = res.data.data.title

      setValue('title', title)
    } catch (error) {
      console.log(error)
    }

  }

  const updateNote = async (data) => {
    try {

      const res = await axios.put(`http://localhost:8001/update/${id}`, data,
      )
      console.log("res", res);
      navigate('/')
      

    } catch (error) {
        console.log(error)
    }
  }

  const handleCancel = () => {
    navigate('/')
  }


  useEffect(() => {
    getTodo()
  }, [id])


  return (
    <div>
      <form onSubmit={handleSubmit(updateNote)}>
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
          <div className="mb-6">
            <label htmlFor="title" className="text-sm font-semibold leading-7 text-gray-600 mt-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              {...register('title')}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <p className='text-xs text-red-600 font-semibold'>{formState.errors.name?.message}</p>
          </div>

          <div className='flex justify-center gap-5'>

            <button className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" type='submit'>
              Update
            </button>
            <button className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" type='button' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditModal




