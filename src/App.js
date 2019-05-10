import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './component/LoginPage';
import DashboardPage from './component/DashboardPage';
import {Provider} from 'react-redux';
import store from './store/configstore';



class App extends Component{
  render(){
      return(
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <Route path='/dashboard' component={DashboardPage}/>
                </Switch>
            </div>
          </BrowserRouter>
        </Provider>  

      )
  }
}

export default App;
