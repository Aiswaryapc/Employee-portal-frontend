import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Authentication/Login';
import SignUp from "./components/Authentication/Signup";
import Newsfeed from "./components/NewsFeed/Newsfeed";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/newsfeed" element={<Newsfeed/>} />
        <Route path="/project" element={<Project/>} />
        </Routes>
    </div>
  );
}

export default App;
