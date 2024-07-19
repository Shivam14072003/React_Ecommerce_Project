import React, { useState,useEffect } from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Products  = () =>{
    const navigate = useNavigate();
    const[Item,setItem] = useState([]);

    async function getData(){
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        console.log(data.products);
        setItem(data.products);
    }

    useEffect(() => {
        getData();
      }, []);

    function onClick(id){
        if(id){
            navigate(`/product-description/${id}`)
        }
    }  

    return(
        <div className='products'>
            {Item?.map((value) => (
                    <div className='products-row' onClick={() => onClick(value.id)}>
                        <img src={value.thumbnail} alt="" />
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        <p>{`Price : $${value.price}`}</p>
                        <p>{`Rating : ${value.rating}`}</p>
                    </div>
            ))}
        </div>
    )
}
export default Products;