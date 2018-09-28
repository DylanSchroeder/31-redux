import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import uuid from 'uuid';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import { Provider } from 'react-redux';
import createAppStore from '../src/lib/store';

const store = createAppStore();

class App extends Component {
  componentDidMount() {
    // store.subscribe(() => {
    //   console.log('__STATE__', store.getState());
    // });
  }


  render() {
    return (<Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/">Landing</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path="/"
              component={() => <p>Description.</p>} />

            <Route exact path="/dashboard"
              component={Dashboard} />
          </main>
          <footer>
            <Route path="/dashboard"
              component={() => <p>If you are on the dashboard you will see this message, 
                just testing how it works. Hello!</p>} />
          </footer>
        </div>
      </BrowserRouter>
    </Provider>);
  }
}

export default App;
