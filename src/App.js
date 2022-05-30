import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Home";
import Checkout from "./Containers/Checkout/Checkout";
import Payment from "./Containers/Payment/Payment";
import DsSection from "./Components/Blogs/DataStructure/DsSection";
import Algorithm_Section from "./Components/Blogs/Algorithm/Algorithm_Section";
import Aptitude_Section from "./Components/Blogs/Aptitude/Aptitude_Section";
import Cs_Section from "./Components/Blogs/CsSubjects/Cs_Section";
import Interview_Section from "./Components/Blogs/Interview/Interview_Section";
import Helpful_Topics from "./Components/Helpful_Topics/Helpful_Topics";
import LearnCpp from "./Components/Blogs/DataStructure/Languages/Cpp/LearnCpp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ResumeBuilder from "./Components/ResumeBuilder/ResumeBuilder";
import LearnJava from "./Components/Blogs/DataStructure/Languages/Java/LearnJava";
import LearnPython from "./Components/Blogs/DataStructure/Languages/Python/LearnPython";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/Algorithm_Section"
            element={<Algorithm_Section />}
          ></Route>
          <Route
            path="/Aptitude_Section"
            element={<Aptitude_Section />}
          ></Route>
          <Route path="/Cs_Section" element={<Cs_Section />}></Route>
          <Route
            path="/Interview_Section"
            element={<Interview_Section />}
          ></Route>
          <Route path="/learnpython" element={<LearnPython />}></Route>
          <Route path="/learnjava" element={<LearnJava />}></Route>
          <Route path="/learncpp" element={<LearnCpp />}></Route>
          <Route path="/Resume_Builder" element={<ResumeBuilder />}></Route>
          <Route path="/Helpful_Topics" element={<Helpful_Topics />}></Route>
          <Route path="/DsSection" element={<DsSection />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
