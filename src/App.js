import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form'
import { Scope } from './components/Scope'
import { Routes, Route,  BrowserRouter as Router } from 'react-router-dom';
import {Main} from './components/Main';
// import './App.css';

function App() {
  return (
    <div >
   <Router>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<Main/>}></Route>
      <Route exact path={"/formulario"} element={<Form/>}></Route>
      <Route exact path={"/alcance"} element={<Scope/>}></Route>
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
