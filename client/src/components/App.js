import '../App.css';
import Login from './Login';
import NavBar from './NavBar';
import {useState} from 'react';


function App() {
  const [user, setUser] = useState(null);

  

  return (
    <div className="App">
      <NavBar/>
      <Login/>
    </div>
  );
}

export default App;
