import React, { Component } from 'react';
import {FormErrors} from './FormErrors';
import '.././Form.css';

 class LoginPage extends Component {
     constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
  }
}

     handleUserInput=(e) =>{
         e.preventDefault();
         const name = e.target.name;
         const value = e.target.value;
         this.setState({
             [name]: value
         },() => { this.validateField(name, value) });
     }

     validateField=(fieldName, value)=>{
         let fieldValidationErrors = this.state.formErrors;
         let emailValid = this.state.emailValid;
         let passwordValid = this.state.passwordValid;

         switch (fieldName) {
             case 'email':
                 emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                 fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                 break;
             case 'password':
                 passwordValid = value.length >= 6;
                 fieldValidationErrors.password = passwordValid ? '' : ' is not valid';
                 break;
             default:
                 break;
         }
         this.setState({
             formErrors: fieldValidationErrors,
             emailValid: emailValid,
             passwordValid: passwordValid
         }, this.validateForm);
     }

     validateForm=()=> {
         this.setState({
             formValid: this.state.emailValid && this.state.passwordValid
         });
     }

     errorClass=(error)=> {
         return (error.length === 0 ? '' : 'has-error');
     }


     gotodashboard=(e)=>{
            e.preventDefault();
       if(this.state.email==='hruday@gmail.com' && this.state.password==='hruday123'){
        this.props.history.push('/dashboard');
         }else{
           alert('please enter the correct username')
           this.props.history.push('/');

         }
     }

  render() {
    return (
      <form className='demoForm'>
       <h2>Login</h2>
       <div className='panel panel-default'>
         <FormErrors formErrors={this.state.formErrors} />
        </div>
       <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
         <label htmlFor='email'>UserName</label>
         <input type='email' className='form-control'
           name='email'
            value={this.state.email} 
            onChange={(event) => this.handleUserInput(event)}  
           />
       </div>
       <div className='form-group'>
         <label htmlFor='password'>Password</label>
         <input type='password' className='form-control'
           name='password' 
             value={this.state.password}
             onChange={(event) => this.handleUserInput(event)}
           />
       </div>
       <button type="submit" className="btn btn-primary" 
  disabled={!this.state.formValid}
  onClick={this.gotodashboard}
  >Login</button>
     </form>
    )
  }
}


export default LoginPage;
