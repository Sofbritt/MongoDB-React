// import './App.css';
import './webFront/Header.css';
// import Detail from './movies/Detail';
// import AllMovies from './movies/AllMovies'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from './webFront/Web.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Web />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;