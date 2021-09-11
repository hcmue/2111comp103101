import logo from './logo.svg';
import './App.css';
import { Hello } from './Demo';
import { RectangleStats } from './components/RectangleStats';

export const App = () => {
  const myrect = {
    width: 12, height: 9,
    area: 108
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HELLO REACT COURSE</h2>
        <Hello name="Công" age="14" />
        <Hello name="Đào" age="18" />
        <RectangleStats rectangle={myrect} />
      </header>
    </div>
  );
};
