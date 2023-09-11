import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  Webpage } from './Components/Product';
import {  Pagedetail } from './Components/Display';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={[<Webpage/>]}/>
      <Route path='/pagedetail/:id' element={[<Pagedetail />]} />
       

     </Routes>

     </BrowserRouter>


{/* <Webpage/> */}

      
    </>
  );
}

export default App;
