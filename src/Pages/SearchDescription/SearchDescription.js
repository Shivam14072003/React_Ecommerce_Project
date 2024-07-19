import React from 'react';
import './SearchDescription.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchDescription = () =>{
    const navigate = useNavigate();
    const[Search,setSearch] = useState();
    const[Products,setProducts] = useState([]);
    const [inFocus, setInFocus] = useState(false);

    async function callApi(){
        const response = await fetch(`https://dummyjson.com/products/search?q=${Search}`);
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
    }

    useEffect(() => {
        callApi()
    },[Search]);

    function onClick(id){
        if(id){
            navigate(`/product-description/${id}`)
        }
    }



    return(
        <div className='description'>
            <input placeholder='search' input={Search} onChange={(e) => setSearch(e.target.value)} 
                onClick={() => {
                    // 👇 show dropdown on focus
                    setInFocus(true);
                  }}
                //   onBlur={() => {
                //     // 👇 hide dropdown when focus leaves
                //     setInFocus(false);
                //   }}
            />
            { inFocus &&
               (<div className='resultField' onClick={() => setInFocus(false)}>
               {
                   (Products?.slice(0,8).map((value) => (<p onClick={() => onClick(value.id)}>{value.title}</p>)))
               }
           </div>)

            }
            
        </div>
    )
}
// export default Searching;

// const SearchDescription = () =>{
//     return(
//         <div className='description'>
//             <input placeholder='search' />
//         </div>
//     )
// }
export default SearchDescription;

{/* <div className='resultField'>
                {
                    (Products?.slice(0,10).map((value) => (<p onClick={() => onClick(value.id)}>{value.title}</p>)))
                }
            </div> */}