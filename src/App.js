import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form'
import { Scope } from './components/Scope'
import { History } from './components/History';
import { Routes, Route,  BrowserRouter as Router } from 'react-router-dom';
import {Main} from './components/Main';
import {Faq} from './components/Faq';
import {Info} from './components/Info';
// import './App.css';

function App() {
  return (
    <div >
   <Router >
    <Navbar/>
      <Routes>
      <Route  exact path='/' element={<Main/>}></Route>
      <Route exact path={"/formulario"} element={<Form/>}></Route>
      <Route exact path={"/alcance"} element={<Scope/>} ></Route>
      <Route exact path={"/empresa"} element={<History/>}></Route>
      <Route exact path={"/preguntas"} element={<Faq/>}></Route>
      <Route exact path={"/info"} element={<Info/>}></Route>
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
