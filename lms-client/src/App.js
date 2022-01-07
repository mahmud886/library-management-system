import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className='App banner'>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route path='/sign-in' component={SignIn} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
