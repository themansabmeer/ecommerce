<<<<<<< HEAD
import { useState, useEffect } from 'react'
import axios from 'axios'

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get('/api/category')
            setCategories(res.data)
        }

        getCategories()
    }, [callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

=======
import { useState, useEffect } from 'react'
import axios from 'axios'

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get('/api/category')
            setCategories(res.data)
        }

        getCategories()
    }, [callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

>>>>>>> f8728ffce37ba7587379769914a5dfc40c1c629b
export default CategoriesAPI