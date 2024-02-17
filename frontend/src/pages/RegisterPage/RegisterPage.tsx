import React from 'react'
import * as Yup from "yup"
import  { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import '../LoginPage/LoginPage.css'

type Props = {}

type RegisterFormsInputs = {
    userName: string;
    email: string;
    password: string;
};

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const RegisterPage = (props: Props) => {
const {registerUser} = useAuth();

const  {
        register, 
        handleSubmit, 
        formState:{ errors},} =  useForm<RegisterFormsInputs>({resolver: yupResolver(validation)});

const handleRegister = (form:RegisterFormsInputs) => {
            registerUser(form.email, form.userName, form.password);
        }        
  return (
    <div className="container bg-body">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="ri-user-fill" aria-hidden="true"></i> 
                </div>
                <Link to="/" className='hme'>
                    <span><i className="ri-home-fill" aria-hidden="true"></i>  Home</span>
                </Link>
                <div className="col-lg-12 login-title">
                    User Registration
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-group">
                                <label className="form-control-label">Username</label>
                                <input type="text" id='username' className="form-control" {...register("userName")}/>
                                {errors.userName ? <p className='error'>{errors.userName.message}</p> : ""}
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">Email</label>
                                <input type="email" id='email' className="form-control" {...register("email")}/>
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
                                    <button type="submit" className="btn btx">SIGNUP</button>
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

export default RegisterPage