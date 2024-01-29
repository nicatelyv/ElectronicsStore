import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSound from 'use-sound';
import sound from "../../assets/sounds/mixkit-wind-chimes-2014.wav"
import wrongSound from "../../assets/sounds/dats-wrong.mp3"

function Login() {
    const [inputType, setInputType] = useState('password');
    // Function to toggle input type
    const toggleInputType = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };
    const [playSound] = useSound(sound);
    const [playWrongSound] = useSound(wrongSound);


    const { t } = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState("")

    function wait() {
        let button = document.getElementById('submitbtn');
        button.style.cursor = 'wait'
        document.body.style.cursor = 'wait'
    }
    function defaultCursor() {
        let button = document.getElementById('submitbtn');
        button.style.cursor = 'pointer'
        document.body.style.cursor = 'default'
    }

    async function handleSubmit(values) {
        try {
            wait()
            let response = await axios.post('https://electronics-store-api.vercel.app/api/auth/login/', values)
            playSound()
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('firstName', response.data.firstName)
            localStorage.setItem('lastName', response.data.lastName)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('isAdmin', response.data.isAdmin)
            let notify = () => toast.success(t('Successful login!'));
            notify()
            setTimeout(() => {
                navigate("/")
                window.location.reload(false);
            }, 1500);

        } catch (err) {
            let notifyErr = () => toast.error(t(err.response.data.message));
            notifyErr()
            playWrongSound()
            defaultCursor()
            console.log(err.response)
            setError(t(err.response.data.message))
        }
    }
    return (
        <section className='loginPage'>
            <div className='loginMain'>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string().required("*"),
                        password: Yup.string().required("*"),
                    })}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ errors, touched }) => (
                        <div className='formDiv'>
                            <h2 id='loginH2'><i className="fa-solid fa-store"></i> {t("Daxil ol")}</h2>
                            <Form>
                                <div className='login_usrname_password'>
                                    <div id='loginDiv'>
                                        <label htmlFor="username"><i className="fa-solid fa-user" style={{ color: "#63E6BE" }}></i> {t("İstifadəçi adı")}:</label>
                                        <Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
                                    </div>

                                    <div id='loginDiv'>
                                        <label htmlFor="password"><i className="fa-solid fa-lock" style={{ color: "#74C0FC" }}></i> {t("Şifrə")}:</label>
                                        <Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type={inputType} />
                                        {inputType === 'password' ? <i onClick={toggleInputType} className="fa-regular fa-eye"></i> : <i onClick={toggleInputType} className="fa-regular fa-eye-slash"></i>}
                                    </div>
                                </div>
                                {error ? <span className='errors' style={{ color: "#d91900" }}>{error}</span> : <></>}
                                <Link id='havenotaccount' to={'/qeydiyyat'}>{t("Hesabınız yoxdur ?")}</Link>
                                <button id='submitbtn' type="submit"><i className="fa-solid fa-right-to-bracket"></i> {t("Daxil ol")}</button>
                            </Form>
                        </div>
                    )}
                </Formik>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Login