
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import accessories_banner from './Components/Assets/banner_accessories.png'
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route path='/shop' element={<Shop/>}/> */}
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/accessories' element={<ShopCategory banner={accessories_banner} category="accessories"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      <WhatsAppButton />
    </div>
  );
}

export default App;
