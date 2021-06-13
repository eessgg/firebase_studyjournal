import React from 'react';
import firebase from '../firebase';
import { useState } from 'react'
import { useRouter } from 'next/router'
import LoginRegisterForm from './../components/LoginRegisterForm';
import { toast } from 'react-toastify';
import {Button} from 'antd';
import { GoogleOutlined } from '@ant-design/icons'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState("");
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPass, setRegisterPass] = useState("");
    const router = useRouter();

    const register = async() => {
        console.log('reg')
        await firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPass)
            .then((user) => {
                console.log('REGISTER:', registerEmail, registerPass)
            })
            .catch((err) => {
                console.log(err)
                toast.error(err.message);
            })
    }

    const login = async () => {
        console.log('login', loginEmail, loginPass);
        await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPass)
            .then((user) => {
                console.log('log', user)
            })
            .catch((err) => {
                console.log(err)
                toast.error(err.message);
            })
    }

    const googleLogin = async () => {
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user) => {
            console.log("LOGIN", user)
        })
        .catch((err) => {
            console.log(err)
            toast.error(err.message);
        })
    }


    return (
        <div className="container">
            <h2 className="text-center pt-4"> Login/Register 🔑</h2>

            <Button 
                onClick={googleLogin}
                className="mb-3 col-md-3"
                type="danger"
                icon={<GoogleOutlined />}
                shape="round"
                block size="large" 
            >
                Login with Login
            </Button>


            <div className="row">
                <LoginRegisterForm 
                    email={loginEmail}
                    setEmail={setLoginEmail}
                    pass={loginPass}
                    setPass={setLoginPass}
                    buttonName="Login"
                    handleSubmit={login}            
                />
        
                 <LoginRegisterForm 
                    email={registerEmail}
                    setEmail={setRegisterEmail}
                    pass={registerPass}
                    setPass={setRegisterPass}
                    buttonName="Register"                
                    handleSubmit={register}
                />
            </div>
        </div>
    );
}

export default Login;
