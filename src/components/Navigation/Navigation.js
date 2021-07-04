import React from 'react';

function Navigation({onRouteChange , isSignedIn , route, username}){
	
		if(isSignedIn){
		if(route === 'dashboard'){ 
          return(
          	<nav style={{display:'flex'}}>
		     <p className='f3 link dim black underline pointer pa4 white' onClick={()=>onRouteChange('home')} style={{justifyContent: 'flex-start'}} > Home </p>
		    </nav>
          );
		}
		else{ 
          return(
          	<nav style={{display:'flex', justifyContent: 'flex-end'}}>
          	<p className='f3 link dim black underline pointer pa2 white' onClick={()=>onRouteChange('dashboard')}> {username} </p>
		    <p className='f3 link dim black underline pointer pa2 white' onClick={()=>onRouteChange('login')}> SignOut </p>
		    </nav>
          );
		}
	   }
		else{
			return(
			<nav style={{display:'flex', justifyContent: 'flex-end'}}>
			  <p className='f3 link dim black underline pointer pa2 white'  onClick={()=>onRouteChange('signin')}> SiginIn </p>
			  <p className='f3 link dim black underline pointer pa2 white'  onClick={()=>onRouteChange('register')}> Register </p>
			</nav>
			);
		}	
}
export default Navigation;