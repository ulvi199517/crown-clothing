import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component.jsx';
import {auth} from '../../firebase/firebase.utils';
import {googleSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
        handleSubmit =async event => {
            event.preventDefault();
            const {email, password} = this.state;
            try {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({email: '', password: ''});
                
            } catch(error) {
                console.error(error)
            }
        }
        handleChange = (event) => {
            const {value, name} = event.target;
            this.setState({[name]: value})
        }
    render(){
        const {googleSignInStart} = this.props;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        name='password' 
                        type='password'
                        label='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type='submit'> SIGN IN </CustomButton>
                    <span className='divider'>OR</span>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google  </CustomButton>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);