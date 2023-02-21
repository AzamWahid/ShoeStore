import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from './Components/Home'
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import ProductDetails from './Components/ProductDetails';
import ProductIndexes from './Components/ProductIndexes';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route path="/products" element={<ProductIndexes />} />
              <Route path=":ProductID" element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
