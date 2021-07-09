import React, { useState } from 'react';

 function Login({onRouteChange,onLogin}) {
   
   // constructor(props){
   //  	super(props);
   //  	this.state = {
   //  		email : '',
   //  		password : '',
   //  		error : ''
   //  	}
   //  };
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    // onEmailChange = onEmailChange.bind(this);
    // onPasswordChange = onPasswordChange.binf(this);
    // onSubmit = onSubmit.bind(this);

	const onEmailChange = (event)=>{
      // this.setState({email: event.target.value})
      setEmail(event.target.value);
	}
	const onPasswordChange= (event)=>{
	  // this.setState({password: event.target.value});
	  setPassword(event.target.value);
	}
	const onSubmit = () =>{
        fetch('https://peaceful-rocky-mountain-53218.herokuapp.com/signin',{
        	method : 'post',
        	headers : {'Content-Type' : 'application/json',
             'Accept': 'application/json'},
        	body : JSON.stringify({
        		email : email,
        		password: password
        	})

        })
        .then(response=>response.json())
        .then(data=>{
        	
        	if(data !== 'Wrong username or password')
        	{
        	  onRouteChange('home');
        	  onLogin(data) ;
        	}
            else{
            	// this.setState({error : "Invalid Username or Password"})
            	setError("Invalid Username or Password");
            }

        }) 
		
	}

		return(
			<main className="pa4 black-80">
			  <div className=" br3 measure center shadow-5 pa5 ma3 dib bg-black">
			    <p className='f4 red'> {error} </p>
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0 white b">Sign In</legend>
			      <div class="mt3">
			        <label class="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
			        <input onChange={onEmailChange} class="pa2 input-reset ba  hover-bg-black hover-white w-100 b--white" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div class="mv3">
			        <label class="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
			        <input onChange={onPasswordChange} class="pa2 input-reset ba  hover-bg-black hover-white w-100 b--white" type="password" name="password"  id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      onClick = {onSubmit}
			      className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib white" 
			      type="submit" 
			      value="Sign in" />
			    </div>
			  </div>
	        </main>

		 );
}
export default Login;