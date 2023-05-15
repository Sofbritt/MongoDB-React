import './App.css';
import Detail from './movies/Detail';
import AllMovies from './movies/AllMovies'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllMovies />} />
          <Route path='/moviedetail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>






    </div>

  );
}

export default App;