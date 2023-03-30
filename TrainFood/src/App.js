import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import Create from './components/cusRegistration';
import EditProfile from './components/cusEditProfile';
import Edit from './components/cusOrderEdit';
import Index from './components/cusHome';
import SignIn from './components/signin';
import Landing from './components/landingPage';
import CusProfile from './components/cusProfile';
import AddOrder from './components/cusAddOrder';
import MyOrder from './components/cusOrders';
import Payment from './components/cusPayment';
import AdminHome from './components/adminHome';
import AdminAssignDeliver from './components/adminAssignDeliver';
import AdminAddFood from './components/adminAddFood';
import AdminViewFood from './components/adminViewFood';
import AdminEditFood from './components/adminEditFood';
import AdminAddDeliver from './components/adminAddDeliver';
import AdminViewDeliver from './components/adminViewDeliver';
import AdminEditDeliver from './components/adminEditDeliver';
import AdminAddTrain from './components/adminAddTrain';
import AdminViewTrain from './components/adminViewTrain';
import AdminEditTrain from './components/adminEditTrain';

import CusSearchOrder from './components/cusSearchOrder';
import AdminSearchOrder from './components/adminSearchOrder';
import AdminSearchDeliver from './components/adminSearchDeliver';
import AdminSearchTrain from './components/adminSearchTrain';
import AdminSearchFood from './components/adminSearchFood';

class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route  path='/create' component={Create}/>
                        <Route  path='/cusedit/:id' component={EditProfile}/>
                        <Route  path='/editOrder/:id' component={Edit}/>
                        <Route  path='/index/:id' component={Index}/>
                        <Route  path='/signIn' component={SignIn}/>
                        <Route  path='/logout' component={Landing}/>
                        <Route  path='/cusprofile/:id' component={CusProfile}/>
                        <Route  path='/addorder/:id' component={AddOrder}/>
                        <Route  path='/myorder/:id' component={MyOrder}/>
                        <Route  path='/payment/:id' component={Payment}/>
                        <Route  path='/adminhome/:id' component={AdminHome}/>
                        <Route  path='/adminassigndeliver/:id' component={AdminAssignDeliver}/>
                        <Route  path='/adminaddfood/:id' component={AdminAddFood}/>
                        <Route  path='/adminviewfood/:id' component={AdminViewFood}/>
                        <Route  path='/admineditfood/:id' component={AdminEditFood}/>
                        <Route  path='/adminadddeliver/:id' component={AdminAddDeliver}/>
                        <Route  path='/adminviewdeliver/:id' component={AdminViewDeliver}/>
                        <Route  path='/admineditdeliver/:id' component={AdminEditDeliver}/>
                        <Route  path='/adminaddtrain/:id' component={AdminAddTrain}/>
                        <Route  path='/adminviewtrain/:id' component={AdminViewTrain}/>
                        <Route  path='/adminedittrain/:id' component={AdminEditTrain}/>

                        <Route  path='/searchorder/:pathParam1?/:pathParam2?' component={CusSearchOrder}/>
                        <Route  path='/adminsearchorder/:pathParam1?/:pathParam2?' component={AdminSearchOrder}/>
                        <Route  path='/adminsearchdeliver/:pathParam1?/:pathParam2?' component={AdminSearchDeliver}/>
                        <Route  path='/adminsearchtrain/:pathParam1?/:pathParam2?' component={AdminSearchTrain}/>
                        <Route  path='/adminsearchfood/:pathParam1?/:pathParam2?' component={AdminSearchFood}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;