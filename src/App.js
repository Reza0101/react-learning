import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductProvider from './services/ProductProvider';
import ScrollToTop from './components/ScrollToTop';
import CartContextProvider from './services/CartContextProvider';
import routes from './routes';
import animation from './components/Animation-scroll';


const App = () => {

  let router = useRoutes(routes);

  useEffect(() => {
    animation(1000)
  }, [])

  return (
    <>
    <CartContextProvider>
          <ProductProvider>
                <ScrollToTop />
                <Navbar />
                {router}
                <Footer />
          </ProductProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
