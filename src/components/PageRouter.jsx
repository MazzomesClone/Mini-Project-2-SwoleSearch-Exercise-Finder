import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import SavedExercises from "./SavedExercises";
import SearchPage from "./SearchPage";

export default function PageRouter() {

  return (
    <Routes>
      <Route path="/" element={<RedirectHome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/savedexercises" element={<SavedExercises />} />
    </Routes>
  )
}

function RedirectHome() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [])
  return(<></>)
}