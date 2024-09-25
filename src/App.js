import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Health from './component/Heath';
import HomeImg from './component/HomeImg';
import Product from './component/Product';
import Shop from './component/Shop';
import Tablet from './component/Tablet';

function App() {
  return (
    <>
    <Header/>
    <HomeImg/>
    <Product />
    <Tablet />
    <Shop />
    <Health />
    <About />
    <Footer />
    </>
  );
}

export default App;
