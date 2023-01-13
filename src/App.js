import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import DetailName from "./components/Detail/DetailName";
import DetailID from "./components/Detail/DetailID";
import Create from "./components/Activity/Activity";
import Landing from "./components/LandingPage/LandingPage";
import Top from "./components/Top/Top";
// import Loading from "./components/Loading/Loading";
import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as actions from "../src/redux/actions";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_BACKEND_URL;

function App() {
  const location = useLocation();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.addAllCountries());
  }, [dispatch]);

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Nav />}

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route
          exact
          path="/countrie/:countrieId"
          element={<DetailID countrieId />}
        />
        <Route exact path="/top" element={<Top />} />
        <Route exact path="/countrie" element={<DetailName />} />
        <Route exact path="/createActivity" element={<Create />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
