import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Menubar from './components/Navbar/Menubar';
import Home from './components/Home/Home';
import Members from './components/Pages/Members/Members';
import Books from './components/Pages/Books/Books';
import Authors from './components/Pages/Authors/Authors';
import Categories from './components/Pages/Categories/Categories';
import IssueBooks from './components/Pages/IssueBooks/IssueBooks';
import ReturnBooks from './components/Pages/ReturnBooks/ReturnBooks';
import Dashboard from './components/Dashboard/Dashboard';
import Publishers from './components/Pages/Publishers/Publishers';
import AddMember from "./components/Pages/Members/AddMember";

export let apiEndpoint = 'http://localhost:8080';

function App() {
    return (
        <>
            <Router>
                <Menubar />
                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route path='/sign-in' component={SignIn} />
                    <Route path='/sign-up' component={SignUp} />

                    <Route path='/dashboard' component={Dashboard} />

                    <Route path='/members' component={Members} />
                    <Route path='/add-member' component={AddMember} />


                    <Route path='/books' component={Books} />
                    <Route path='/authors' component={Authors} />
                    <Route path='/publishers' component={Publishers} />
                    <Route path='/categories' component={Categories} />
                    <Route path='/issue-books' component={IssueBooks} />
                    <Route path='/return-books' component={ReturnBooks} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
