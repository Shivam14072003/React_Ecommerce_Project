import React from 'react';
import './Homepage.css';
import image1 from '../../Images/image1.png'

const Homepage = () =>{
    return(
        <div className='homepage'>
            <div class="homepage-col-1">
                    <h1>Give a new look <br /> to your proffession!</h1>
                    <p>Welocome to all new collection with amazing offers and discounts that you
                         never being seen and the quality that you never experinced !
                    </p>
                    <button>Explore Now</button>
            </div>
            <div class="homepage-col-2">
                    <img src={image1} alt="logo" />
            </div>
        </div>
    )
}

export default Homepage;