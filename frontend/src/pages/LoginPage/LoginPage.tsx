import React from 'react'
import * as Yup from "yup"
import  { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';
import './LoginPage.css'
import { Link } from 'react-router-dom'

type Props = {}

type LoginFormsInputs = {
    email: string;
    password: string;
};

const validation = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
    const {loginUser} = useAuth();
    const  {
        register, 
        handleSubmit, 
        formState:{ errors}} =  useForm<LoginFormsInputs>({resolver: yupResolver(validation)});

        const handleLogin = (form:LoginFormsInputs) => {
            loginUser(form.email, form.password);
        }
  return (
    
    <div className="container bg-body">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="ri-key-fill" aria-hidden="true"></i> 
                </div>
                <Link to="/" className='hme'>
                    <span><i className="ri-home-fill" aria-hidden="true"></i>  Home</span>
                </Link>
                <div className="col-lg-12 login-title">
                    User Login
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-group">
                                <label className="form-control-label">Username</label>
                                <input type="text" id='username' className="form-control" {...register("email")}/>
                                {errors.email ? <p className='error'>{errors.email.message}</p> : ""}
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Password</label>
                                <input type="password" id='password' className="form-control" {...register("password")}/>
                                {errors.password ? <p className='error'>{errors.password.message}</p> : ""}
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                    <button type="submit" className="btn btx">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>


  )
}

export default LoginPage