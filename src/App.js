import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import {  Products } from './pages/Products';
import {ROUTES_PATH} from "./consts"

function App() {
  return (
    <Routes>
       <Route path={ROUTES_PATH.HOME} element={<Home />}/>
       <Route path={ROUTES_PATH.PRODUCTS} element={<Products />}/>
    </Routes>
  )
}

export default App;
