import React,{useState} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import tachyons from 'tachyons';

function App () {
  
  // constructor(){
  //   super();
  //   this.state = {
  //     route : 'home',
  //     isSignedIn : false,
  //     user:{
  //     username : '',
  //     emailid: '',
  //     joined: new Date()
  //    }
  //   }
  // }
  const [route,setRoute] = useState('home');
  const [isSignedIn,setisSignedIn] = useState(false);
  const [user,setUser] = useState(
                                  {username : '',
                                    emailid: '',
                                    joined: new Date()
                                  }
                                 );
  const onLogin = (data)=>{
    setUser({
        username : data.name,
        emailid : data.emailid,
        joined : data.joined
      });
  }
  const onRouteChange = (data)=>{
    if(data==='home' || data ==='dashboard'){
     // this.setState({isSignedIn : true})
        setisSignedIn(true);
    }
    else{
      // this.setState({isSignedIn : false})
      setisSignedIn(false);
    }
    // this.setState({route : route})
     setRoute(data);
  }
  return (
    <div className="App body">
      <Navigation onRouteChange={onRouteChange} isSignedIn = {isSignedIn} route ={route} username={user.username}/>
      {
        (route === 'home') 
        ? <Home />
        : (
           (route === 'dashboard')
            ? <Dashboard onRouteChange={onRouteChange} user={user} />
           : (
            (route === 'register')
            ? <Register onRouteChange={onRouteChange} onLogin={onLogin} />
            : <Login onRouteChange={onRouteChange} onLogin={onLogin} />
            )
         )
      }      
    </div>
  )
} 


export default App;
