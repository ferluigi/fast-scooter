import React from "react";
import './sign-in.sign-up.styles.scss';
//import Facebook from './social-media-sign-in/facebook-sign-in';


class SignInUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isToggleOn: true,
      isLoggedIn: false,
      name: "",
      email: "",
      password:""
    };

this.handleClick = this.handleClick.bind(this);

  }


handleClick() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
    
  } ));
}

 
  render() {
  
    
 return (
   <div className="sign">
     <div
       className={
         -this.state.isToggleOn ? "container" : "container right-panel-active "
       }
       id="container"
     >
       <div className="form-container sign-up-container">
         <form action="#">
           <h1 className="h1sign">Create Account</h1>
           <div className="social-container">
             <a className="social">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a className="social">
               <i className="fab fa-google-plus-g"></i>
             </a>
             <a className="social">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
           <span className="spansign">or use your email for registration</span>
           <input
             type="text"
             placeholder="Name"
             
           />
           <input
             type="email"
             placeholder="Email"
             
           />
           <input
             type="password"
             placeholder="Password"
          
           />
           <button className="buttonsign">Sign Up</button>
         </form>
       </div>
       <div className="form-container sign-in-container">
         <form action="#">
           <h1 className="h1sign">Sign in</h1>
           <div className="social-container">
             <a class="social">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a className="social">
               <i className="fab fa-google-plus-g"></i>
             </a>
             <a className="social">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
           <span className="spansign">or use your account</span>
           <input
             type="email"
             placeholder="Email"
            
           />
           <input
             type="password"
             placeholder="Password"
            
           />
           <a href="#">Forgot your password?</a>
           <button className="buttonsign">Sign In</button>
         </form>
       </div>
       <div className="overlay-container">
         <div className="overlay">
           <div className="overlay-panel overlay-left">
             <h1 className="h1sign">Welcome Back!</h1>
             <p className="psign">
               To keep connected with us please login with your personal info
             </p>
             <button
               className="ghost buttonsign"
               id="signIn"
               onClick={this.handleClick}
             >
               Sign In
             </button>
           </div>
           <div className="overlay-panel overlay-right">
             <h1 className="">Hello, Friend!</h1>
             <p className="psign">
               Enter your personal details and start journey with us
             </p>
             <button
               className="ghost buttonsign"
               id="signUp"
               onClick={this.handleClick}
             >
               Sign Up
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
}

export default SignInUp;