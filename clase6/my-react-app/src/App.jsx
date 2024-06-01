import About from './About';
import Contact from './Contact';
import Home from './Home';
import UserList from './UserList'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  

  return (
  
    <div>
    <h1>App React con MockAPI.io</h1>
    {/* <UserList /> */}
    <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>



<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/users" element={<UserList />} />
</Routes>
</Router>

    </div>

  )
}

export default App
