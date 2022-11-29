import{BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Container from './components/Layout/Container';
import Companhia from './components/pages/Companhia';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import NovoProjeto from './components/pages/NovoProjeto';


function App() {
  return (
   
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Contato'>Contato</Link>
        <Link to='/Companhia'>Companhia</Link>
        <Link to='/NovoProjeto'>NovoProjeto</Link>
      </div>
      <Container customClass="min_height">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/companhia' element={<Companhia/>}></Route>
        <Route exact path='/contato' element={<Contato/>}></Route>
        <Route exact path='/novoprojeto' element={<NovoProjeto/>}></Route>
      </Routes>
      </Container>
      <p>footer</p>

    </Router>
  );
}

export default App;
