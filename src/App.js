import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/PageLayout/Home";
import Login from './Components/Authentic/Login';
import Header from './Components/PageLayout/Header';
import SavedRecipe from './Components/PageLayout/SavedRecipe';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/home' element={<Home />}/>
         <Route path='/savedrecipe' element={<SavedRecipe/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
