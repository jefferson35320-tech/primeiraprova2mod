import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NovaPage from './Nova/NovaPage';
import FrutasPage from './Frutas/FrutasPage';

function App() {
  return (
    <Router>
      <div>
        <nav style={{marginBottom: '20px'}}>  
         <link to ={"/Frutas"} >Frutas</link>
         <link to ={"/Nova"} >Nova Fruta</link>
        </nav>

        <Routes>
          <Route path="/Frutas" element={<FrutasPage />} /> 
          <Route path="/Nova" element={<NovaPage />} />
        </Routes>
      </div>
    </Router>
    
  )
};

export default App;
