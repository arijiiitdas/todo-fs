import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import axios from 'axios'

const Home = () => {

    const [todo, setTodo] = useState([])
    const [text, setText] = useState("")
    const [flag, setFlag] = useState(false)

    const getAll = async () => {
        try {
            const response = await axios.get("http://localhost:8001/getAll")
            console.log(response)
            setTodo(response.data.data)

        } catch (error) {
            console.log(error)
        }
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleTodo = async (text) => {
        const data = {
            title: text
        }
        try {
            setFlag(false)
            const response = await axios.post("http://localhost:8001/create", data)
            console.log(response)
            setText('')
            setFlag(true)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAll()

    }, [flag])

    return (
        <div>
            <Header />
            <div>
                <input type="text" placeholder='enter title' value={text} onChange={handleText} />
                <button onClick={() => handleTodo(text)}>Add</button>
            </div>
            <MainSection todo={todo} getAll={getAll} />
            <Footer />
        </div>
    )
}

export default Home