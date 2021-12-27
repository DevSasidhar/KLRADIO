import React from "react";
import Home from './Components/Home/Home'
import CelebInt from "./Components/Interviews/CelebInt";
import FacultyInt from "./Components/Interviews/FacultyInt";
import Allshows from "./Components/Shows/Allshows";
import Upcoming from "./Components/Shows/Upcoming";
import Clgupdates from "./Components/ClgUpdates/Clgupdates";
import Team from "./Components/Team/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>    
      <Router>          
          <Routes>
          <Route path='/' element={<Home/>}/>   
          <Route path='/celeb-interviews' element={<CelebInt/>}/>
          <Route path='/faculty-interviews' element={<FacultyInt/>}/>
          <Route path='/all-shows' element={<Allshows/>}/>
          <Route path='/upcoming-shows' element={<Upcoming/>}/>
          <Route path='/campus-updates' element={<Clgupdates/>}/>
          <Route path='/our-team' element={<Team/>}/>
          </Routes>      
        </Router>
    </>
  );
}

export default App;
