import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

function Layout({children}){
  return(
    <>
      <Header/>
    </>
  )
}

function App() {
  return (
    <Router>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
    </Router>
    );
}

export default App;
