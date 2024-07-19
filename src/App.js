import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products.js';
import Homepage from './Pages/Homepage/Homepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Accountpage from './Pages/Accountpage/Accountpage';
import ProductDescriptionPage from "./Pages/ProductDescriptionPage/ProductDescriptionPage";
import './App.css';
import  ContactPage  from "./Pages/Contactpage/Contactpage.js";

function App() {
  return (
   <div className='app'>

    <BrowserRouter>
       <Navbar />
       <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/about" element={<Aboutpage />}/>
        <Route exact path="/account" element={<Accountpage />}/>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/product-description/:id" element={<ProductDescriptionPage />} />
        <Route exact path="/contact" element={<ContactPage />}/>

        {/* here after / we have added dynamic routing. after / what ever comes we will only open this 
        despription page. */}
       </Routes>
       <Footer />
    </BrowserRouter>
   </div>
  );
}

export default App;
