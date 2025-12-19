import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainSection from '../components/MainSection'
import axios from 'axios'

const Home = () => {

    const [todo, setTodo] = useState([])

    const getAll = async () => {
        try {
            const response = await axios.get("http://localhost:8001/getAll")
            console.log(response)
            setTodo(response.data.data)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAll()

    }, [])

    return (
        <div>
            <Header />
            
            <MainSection todo={todo} />
            <Footer />
        </div>
    )
}

export default Home