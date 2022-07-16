
import React from 'react'
import { BrowserRouter as Router , Routes,Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';

import './App.css';


const App = () => (
  <div className='container'>
    {/* here we had imported the home component from pages/home */}
    
    <Router>
    
      <Routes>
        <Route  path='/' element ={<Home/>}/>
        <Route  path='/cart' element ={<Cart/>}/>
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </Router>

    
    
  </div>
)

export default App;



