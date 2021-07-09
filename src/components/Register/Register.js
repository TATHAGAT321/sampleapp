import React , {useState} from 'react';


function Register ({onLogin,onRouteChange}) {
	
   // constructor(props){
   // 	super(props);
   // 	this.state = {
   // 		name : '',
   // 		email: '',
   // 		password: ''
   // 	}
   // }
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');


   const onEmailChange = (event)=>{
   	// this.setState({email : event.target.value})
    setEmail(event.target.value);
   }
   const onNameChange = (event)=>{
   	// this.setState({name : event.target.value})
    setName(event.target.value);
   }
   const onPasswordChange = (event)=>{
   	// this.setState({password : event.target.value}) 
    setPassword(event.target.value);
   }
   
   const onRegister = ()=>{
   	fetch('https://peaceful-rocky-mountain-53218.herokuapp.com/register',{
        	method : 'post',
        	headers : {'Content-Type' : 'application/json'} ,
        	body : JSON.stringify({
        		email : email,
        		password: password,
        		name : name
        	})

       })
   	   .then(response=>response.json())
   	   .then(data =>{
   	   	 onLogin(data);
   	   })

   	  onRouteChange('home');
   	 
    } 

    
	return (
		<main className="pa6 black-80">
		  <div className="br3  measure center shadow-5 pa5 ma3 dib bg-black ">
		    <fieldset id="sign_up" className="ba b--transparent">
		      <legend className="f2 fw6 ph0 mh0 white b">Register</legend>
		      <div class="mt3">
		        <label class="db fw6 lh-copy f4 white" htmlFor="name">Name</label>
		        <input onChange={onNameChange} className="pa2 input-reset ba  hover-bg-black hover-white w-100 b--white" type="text" name="name"  id="name" />
		      </div>
		      <div class="mt3">
		        <label class="db fw6 lh-copy f4 white" htmlFor="email-address">Email</label>
		        <input onChange={onEmailChange} className="pa2 input-reset ba  hover-bg-black hover-white w-100  b--white" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div class="mv3">
		        <label class="db fw6 lh-copy f4 white" htmlFor="password">Password</label>
		        <input onChange={onPasswordChange} className="b pa2 input-reset ba hover-bg-black hover-white w-100  b--white" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		        onClick = {onRegister}
		        className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib white" 
		        type="submit" 
		        value="Register" />
		    </div>
		  </div>
        </main>

		)
	
}

export default Register;