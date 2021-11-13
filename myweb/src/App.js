import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Login } from './ui/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li style={{ display: 'inline-block', margin: 5 }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ display: 'inline-block', margin: 5 }}>
                <Link to="/login">Login</Link>
              </li>
              <li style={{ display: 'inline-block', margin: 5 }}>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/login" component={Login} />
          </Routes>
          <Login />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
