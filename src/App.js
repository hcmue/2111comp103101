import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MenuNgang } from './components/MenuNgang';
import { routes } from './config/routes';
import { MyRoute } from './components/MyRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <!-- Menu ngang --> */}
        <MenuNgang />
        {/* Định tuyến */}
        <Switch>
          {routes.map((item, index) => {
            return (
              <MyRoute key={index} path={item.path} component={item.component} />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
