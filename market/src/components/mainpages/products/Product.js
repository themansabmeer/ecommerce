import React,{useContext, useEffect} from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/productItem'
import './Products.css'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
const Product = () => {
  const state= useContext(GlobalState)
  const [products,setProduct]= state.productsAPI.products
  const [isAdmin]= state.userAPI.isAdmin


  useEffect(()=>{
    const getProducts= async ()=>{
      const res= await axios.get('/api/products')
      setProduct(res.data.products)
    }
    getProducts()
  
  }, [setProduct])


  return (
    <>
    <div className='products '>
{
  products.map(product=>{
    return <ProductItem  key={product._id} product={product}
    isAdmin={isAdmin}/>
  })
}


    </div>
    {products.length===0 && <Loading/>}

    
    </>
  )
}

export default Product