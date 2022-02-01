import { Switch } from 'react-router-dom';
import Routex from './Routex';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import New from '../pages/New';
import Customers from '../components/Customers';

export default function Rout(){
    return(
        <Switch>
            <Routex exact path="/" component={SignIn}/>
            <Routex exact path="/register" component={SignUp}/>

            <Routex exact path="/dashboard" component={Dashboard} isPrivate/>
            <Routex exact path="/profile" component={Profile} isPrivate/>
            <Routex exact path="/customers" component={Customers} isPrivate/>
            <Routex exact path="/new" component={New} isPrivate/>
            <Routex exact path="/new/:id" component={New} isPrivate/>
        </Switch>
    )
}

