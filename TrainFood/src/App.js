import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import Create from './components/create.component';
import Edit from './components/Orderedit.component';
import Index from './components/index.component';
import AboutUs from './components/aboutus.component';
import SignIn from './components/signin.component';
import Landing from './components/LandingPage.component';
import CusProfile from './components/customerProfile.component';
import AddOrder from './components/addOrder.component';
import MyOrder from './components/myorder';
import Payment from './components/Payment.component';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route  path='/create' component={Create}/>
                        <Route  path='/editOrder/:id' component={Edit}/>
                        <Route  path='/index/:id' component={Index}/>
                        <Route  path='/aboutUs' component={AboutUs}/>
                        <Route  path='/signIn' component={SignIn}/>
                        <Route  path='/logout' component={Landing}/>
                        <Route  path='/cusprofile/:id' component={CusProfile}/>
                        <Route  path='/addorder/:id' component={AddOrder}/>
                        <Route  path='/myorder/:id' component={MyOrder}/>
                        <Route  path='/payment/:id' component={Payment}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;