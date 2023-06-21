  import "./App.css";
  import Home from "./pages/Home";
  import "./assets/home.css";
  import Login from "./pages/Login";
  import "./assets/login.css";
  import Register from "./pages/Register";
  import "./assets/register.css";
  import Contact from "./pages/Contact";
  import "./assets/contact.css";
  import About from "./pages/About";
  import "./assets/about.css";
  import UserList from "./pages/UserList";
  import Music from "./pages/Music";
  import "./assets/music.css";

  import { BrowserRouter, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route
            path="/userList"
            element={
                <UserList />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }

  
  export default App;


