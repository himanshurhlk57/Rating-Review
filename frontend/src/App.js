import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import { MovieProvider } from "../src/context/MovieContext";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <MovieProvider>
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/movies/:id" element={<MovieDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </Router>
      </>
    </MovieProvider>
  );
}

export default App;
