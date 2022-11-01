<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductsAPI = () => {
  const [products, setProducts] = useState([])
  const [callback,setCallback]= useState(false)



  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('/api/products')
      setProducts(res.data.products);
    }
    getProducts()
  }, [callback])


  return {
    products: [products, setProducts],
    callback: [callback,setCallback]
  }
}

=======
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductsAPI = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await axios.get('/api/products')
    setProducts(res.data.products);
  }
  useEffect(() => {
    getProducts()
  }, [])
  return {
    products: [products, setProducts]
  }
}

>>>>>>> f8728ffce37ba7587379769914a5dfc40c1c629b
export default ProductsAPI