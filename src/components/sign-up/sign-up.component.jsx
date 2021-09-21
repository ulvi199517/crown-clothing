import React from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
        handleSubmit = async event => {
            event.preventDefault();
            const {signUpStart} = this.props;
            const {displayName, email, password, confirmPassword} = this.state;
            if(password !== confirmPassword){
                alert("passwords don't match");
                return;
            }
            signUpStart({email, password, displayName});
        }
        handleChange = (event) => {
            const {value, name} = event.target;
            this.setState({[name]: value})
        }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                    name='displayName' 
                    type='text'
                    label='displayName'
                    value={displayName} 
                    handleChange={this.handleChange}
                    required />
                <FormInput 
                    name='email' 
                    type='email'
                    label='email'
                    value={email} 
                    handleChange={this.handleChange}
                    required />
                <FormInput 
                    name='password' 
                    type='password'
                    label='password' 
                    value={password} 
                    handleChange={this.handleChange}
                    required />
                <FormInput 
                    name='confirmPassword' 
                    type='password'
                    label='confirmPassword' 
                    value={confirmPassword} 
                    handleChange={this.handleChange}
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);