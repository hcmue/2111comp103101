import logo from './logo.svg';
import './App.css';
import { Hello } from './Demo';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HELLO REACT COURSE</h2>
        <Hello name="Công" age="14" />
        <Hello name="Đào" age="18" />
      </header>
    </div>
  );
};
