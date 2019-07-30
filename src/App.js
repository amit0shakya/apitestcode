import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom';


const Home = () => (
    <div>
        <h2>Home Component</h2>
        <Link to="/roster"> Roster</Link><br></br>
        <Link to="/schedule"> Schedule</Link>
    </div>
);

const Roster = () => (
    <div>
        <h2>Roster Component</h2>
        <Link to="/"> Home</Link><br></br>
        <Link to="/schedule"> Schedule</Link>
    </div>
);

const Schedule = () => (
    <div>
        <h2>Schedule Component</h2>
        <Link to="/roster"> Roster</Link><br></br>
        <Link to="/"> Home</Link>
    </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

ReactDOM.render(
<BrowserRouter>
    <Main />
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();