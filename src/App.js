import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './views/global/Header';
import Footer from './views/global/Footer';
import { Routes, Route } from "react-router-dom";
import { Simulator } from './views/simulator/Simulator';



function App() {
  return (
    <>
      <CssBaseline/>

      <div className='body'>
          <main className='content flex flex-col'>
              <Header/>


              <div className='main h-[100%] w-[80%] mx-auto px-5 my-5'>
                <Routes>
                  <Route path="/" element={<Simulator />} />
                  <Route path="/perro" element={<Simulator />} />                
                </Routes>
              </div>


              <Footer/>

              
              
              
              



              
          </main>
      </div>    
    
    </>
    
  );
}

export default App;
