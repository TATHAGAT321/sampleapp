import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import tachyons from 'tachyons';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      route : 'home',
      isSignedIn : false,
      user:{
      username : '',
      emailid: '',
      joined: new Date()
     }
    }
  }
  onLogin = (data)=>{
    this.setState({
      user : {
        username : data.name,
        emailid : data.emailid,
        joined : data.joined
      } 
    }); 
  }
  onRouteChange = (route)=>{
    if(route==='home' || route ==='dashboard'){
     this.setState({isSignedIn : true})
    }
    else{
      this.setState({isSignedIn : false})
    }
    this.setState({route : route})
  }
  render(){
    const {route} = this.state;
  return (
    <div className="App body">
      <Navigation onRouteChange={this.onRouteChange} isSignedIn = {this.state.isSignedIn} route ={this.state.route} username={this.state.user.username}/>
      {
        (route === 'home') 
        ? <Home />
        : (
           (route === 'dashboard')
            ? <Dashboard onRouteChange={this.onRouteChange} user={this.state.user} />
           : (
            (route === 'register')
            ? <Register onRouteChange={this.onRouteChange} onLogin={this.onLogin} />
            : <Login onRouteChange={this.onRouteChange} onLogin={this.onLogin} />
            )
         )
      }      
    </div>
  )
 } 
} 


export default App;
