import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import { Login } from './ui/Login';
import { useSelector } from 'react-redux';

function App() {
  const userAppState = useSelector((state) => state.User);
  console.log(userAppState)

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
              {userAppState.isLogged ? (
                <li style={{ display: 'inline-block', margin: 5 }}>
                  Hello {userAppState.username}
                  <button>Thoát</button>
                </li>
              ) : (
                <li style={{ display: 'inline-block', margin: 5 }}>
                  <Link to="/login">Đăng nhập</Link>
                </li>
              )}

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
