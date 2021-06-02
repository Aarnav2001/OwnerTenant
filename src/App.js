import './App.css';

import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import BVG from './components/BVG';
import Moderator from './components/Moderator'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path= '/BVG' component={BVG}/>
      <Route path= '/Moderator' component={Moderator}/>
      <Route path= '/' exct component={MainPage}/>
    </Switch>
  );
}

export default App;
