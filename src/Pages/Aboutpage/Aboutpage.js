import React from 'react';
import './Aboutpage.css'
import about1 from '../../Images/about1.jpg'
import about2 from '../../Images/fastdelivery.png'

const Aboutpage = () =>{
    return(
<div className='about-container'>
    {/* <div><img src="aboutImg.png" classNameName="about-img" /></div> */}
    <div><h1>About Us</h1></div>
    <div className="about">
        <div className="row">
            <div className="about-col">
                <h1>India's Best Ecommerce Website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Praesentium, velit quibusdam eligendi porro facere adi
                     isci officiis earum ad ea architecto. Corporis molestiae
                      ab vero dolorem dolor. Suscipit ut excepturi fuga, illum quia l
                      aborum quasi doloremque itaque asperiores fugiat reiciendis facilis.</p>
                <button>MORE ABOUT US</button>      
            </div>
            <div className="about-col">
                <img src={about1} />
            </div>
        </div>
    </div>
    <hr />
    <div className="about">
        <div className="row">
            <div className="about-col">
                <h1>Experience the India's Faster,Smoother & Safer Deliveries</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Praesentium, velit quibusdam eligendi porro facere adi
                     isci officiis earum ad ea architecto. Corporis molestiae
                      ab vero dolorem dolor. Suscipit ut excepturi fuga, illum quia l
                      aborum quasi doloremque itaque asperiores fugiat reiciendis facilis.</p>     
            </div>
            <div className="about-col">
                <img src={about2} />
            </div>
        </div>
    </div>
</div>
    )
}
export default Aboutpage;