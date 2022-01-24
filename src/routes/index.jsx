import { Switch } from 'react-router-dom';
import Routex from './Routex';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

export default function Rout(){
    return(
        <Switch>
            <Routex exact path="/" component={SignIn}/>
            <Routex exact path="/register" component={SignUp}/>

            <Routex exact path="/dashboard" component={Dashboard} isPrivate/>
        </Switch>
    )
}

