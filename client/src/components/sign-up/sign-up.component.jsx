import React, {useState} from "react";
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions';

const SignUp= ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        displayName: '',
        password: '',
        confirmPassword: ''
    });
        const {displayName, email, password, confirmPassword} = userCredentials
        const handleSubmit = async event => {
            event.preventDefault();
            if(password !== confirmPassword){
                alert("passwords don't match");
                return;
            }
            signUpStart({email, password, displayName});
        }
        const handleChange = (event) => {
            const {value, name} = event.target;
            setUserCredentials({...userCredentials, [name]: value})
        }

        
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName' 
                    type='text'
                    label='displayName'
                    value={displayName} 
                    handleChange={handleChange}
                    required />
                <FormInput 
                    name='email' 
                    type='email'
                    label='email'
                    value={email} 
                    handleChange={handleChange}
                    required />
                <FormInput 
                    name='password' 
                    type='password'
                    label='password' 
                    value={password} 
                    handleChange={handleChange}
                    required />
                <FormInput 
                    name='confirmPassword' 
                    type='password'
                    label='confirmPassword' 
                    value={confirmPassword} 
                    handleChange={handleChange}
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
}
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);