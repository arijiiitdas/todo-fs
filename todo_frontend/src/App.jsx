import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import EditModal from './components/EditModal'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/updateTodo/:id' element={<EditModal/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
