<<<<<<< HEAD
import React,{useState} from 'react'
import Loading from '../loading/Loading'
import  './productItem.css'
import BtnRender from './BtnRender'
import axios from 'axios'
const ProductItem = ({product,isAdmin,callback,setCallback}) => {
const [loading,setLoading]= useState(false)

const deleteProduct= async ()=>{
    try{
       setLoading(true)

    //     const destroyImg= await axios.post('/api/destroy',{public_id: product.images.public_id},{
    //         headers: {}
    //     }
    //    );
       
        const deleteProduct = await axios.delete(`/api/products/${product._id}`,  {
            headers: {}
        }
        )
 
    //   await destroyImg
      await deleteProduct
      setLoading(false)
      setCallback(!callback)



    }catch(err){
        alert(err.response.data.msg)
    }
}

const handleCheck=()=>{
    product.checked= !product.checked
}


if(loading){
    return (
        <div className='product_card'>
            <Loading/>
        </div>
    )
}

    return (
        <div className="product_card">
        

                {isAdmin && <input type='checkbox' checked={product.checked} onChange={handleCheck} />
                }

                <img src={product.images.url} alt="" />

                <div className="product_box">
                    <h2 title={product.title}>{product.title}</h2>
                    <span>${product.price}</span>
                    <p>{product.description}</p>
                </div>


                <BtnRender product={product}  deleteProduct={deleteProduct}/>
       

             
          

          



        </div>
    )
}

=======
import React from 'react'
import {Link} from 'react-router-dom'
import  './productItem.css'
import BtnRender from './BtnRender'
const ProductItem = ({product,isAdmin}) => {
    return (
        <div className="product_card">
            {isAdmin && <input type='checkbox' checked={product.checked}/>
            }
            
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
   
          
            <BtnRender product={product}/>

           



        </div>
    )
}

>>>>>>> f8728ffce37ba7587379769914a5dfc40c1c629b
export default ProductItem