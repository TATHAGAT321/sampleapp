import React from 'react';

function Dashboard({user}){
	return(
         <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
		  <div class="tc">
		    <img src="https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
		    <h1 class="f3 mb2">{user.username} </h1>
		    <h2 class="f5 fw4 gray mt0">{user.emailid}</h2>
		    <h2 class="f5 fw4 gray mt0">Joined on: {user.joined}</h2>
		  </div>
		</article>

		); 
}
export default Dashboard;