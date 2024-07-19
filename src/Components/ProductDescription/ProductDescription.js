import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductDescription.css';



const ProductDescription = () => {
    const params = useParams();
    console.log("params",params);

    const [Data, setData] = useState([]);
    const [image, setImage] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) =>{
        dispatch(addCart(product));
    }

    async function callApi(id){
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setData(data);
        setImage(data.images)
    }

    useEffect(() => {
        callApi(params.id);
    },[params.id]);

    return(
        <div className='product-description'>
            <div className='col-1'>
                <div className='row-1'>
                    <img src={Data.thumbnail} />
                </div>
                <div className='row-2'>
                   {
                        image && image.map((value)=>(
                            <img src={value} />
                        ))
                    }
                </div>

            </div>
            <div className='col-2'>
                <h1>{Data.title}</h1>
                <p>{`Rating : ${Data.rating} / 5`}</p>
                <p>{Data.description}</p>
                <p>{`Price : $${Data.price}.00`}</p>
                <input type="number" value="1" />
                <button onClick={() => addProduct(Data)}>
                    <AddShoppingCartIcon/>Add to cart
                </button>
               
                
            </div>

        </div>
    )
}
export default ProductDescription;

{/* <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <img src={Data.thumbnail} id="ProductImg" />
                <div className="small-img-row">
                    {/* <div className="small-img-col">
                        <img src={Data.images[0]} className="small-img" />
                    </div>  */}
                    
                    // {
                    //     image && image.map((value)=>(
                    //      <div className="small-img-col">
                    //         <img src={value} className="small-img" />
                    //      </div>
        
                    //     ))
                    // }
        //         </div>
        //     </div>
        //     <div className="col-2">
        //         <p>Home/T-shirt</p>
        //         <h1>Red Printed T-Shirt from HRX</h1>
        //         <h4>$50.00</h4>
        //         <select className="" id="">
        //             <option value="">Select size</option>
        //             <option value="">M</option>
        //             <option value="">L</option>
        //             <option value="">XL</option>
        //             <option value="">XXL</option>
        //         </select>
        //         <input type="number" value="1" />
        //         <a href="cart.html" className="btn">Add To Cart</a>
        //         <h3>Product Details <i className="fa fa-indent"></i></h3><br />
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //              Molestiae nemo facere quia fugiat atque, quod dolores cumque soluta,
        //              quos ducimus maiores beatae? Quidem, voluptatem nihil.</p>

        //     </div>
        // </div>
    // </div> */}