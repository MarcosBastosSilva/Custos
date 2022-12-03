import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Container from './components/Layout/Container';
import NavBar from './components/Layout/NavBar';
import Companhia from './components/pages/Companhia';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Footer from './components/Layout/Footer';
import NovoProjeto from './components/pages/NovoProjeto'
import Projeto from './components/pages/Projeto';

function App() {
  return (
   
    <Router>
      <NavBar/>
      <Container customClass="min_height">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Projeto' element={<Projeto/>}></Route>
        <Route exact path='/companhia' element={<Companhia/>}></Route>
        <Route exact path='/contato' element={<Contato/>}></Route>
        <Route exact path='/NovoProjeto' element={<NovoProjeto/>}></Route>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
