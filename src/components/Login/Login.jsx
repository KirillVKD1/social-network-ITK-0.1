import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../Common/FormsControls/FormControls.module.css';



const LoginForm = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit}>{/* redux form peredaet osobie props,nazivaemie <handlesubmit */}
            <div>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />{/* Field- eto iz Redux From */}
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} type={'password'} component={Input} validate={[required]} />
                </div>
            </div>
            {(props.error)&&<div className={s.formSummaryError}>{/* to je samoe chto i 'if(props.error === true){...}' */}
                {props.error}
            </div>
            }

            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} />remember me
            </div>
            <div>
                <button>Log in</button>{/* knopka, nahodashayasa v form avtomaticheski pri najatii otpravlaet vsu form */}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {

        return <Redirect to={'/profile'} />
    }

    return <div>
        <div>Login</div>
        <LoginReduxForm onSubmit={onSubmit} />

    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth

})


export default connect(mapStateToProps, { login })(Login);