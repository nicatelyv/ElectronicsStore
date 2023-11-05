import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState("")

    async function handleSubmit(values) {
        try {
            let response = await axios.post('http://localhost:5555/api/auth/login/', values)
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('firstName', response.data.firstName)
            localStorage.setItem('lastName', response.data.lastName)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('isAdmin', response.data.isAdmin)
            navigate("/")

        } catch (err) {
            console.log(err.response)
            setError(err.response.data.message)
        }
    }
    return (
        <section className='loginPage'>
            <div className='loginMain'>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string().required("*Kullanıcı adı boş olamaz"),
                        password: Yup.string().required("*Şifre boş olamaz"),
                    })}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ errors, touched }) => (
                        <div className='formDiv'>
                            <h2 id='loginH2'>{t("Daxil ol")}</h2>
                            <Form>
                                <div className='login_usrname_password'>
                                    <div id='loginDiv'>
                                        <label htmlFor="username"><i className="fa-solid fa-user"></i> {t("İstifadəçi adı")}</label>
                                        <Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
                                    </div>

                                    <div id='loginDiv'>
                                        <label htmlFor="password"><i className="fa-solid fa-lock"></i> {t("Şifrə")}</label>
                                        <Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type="password" />
                                    </div>
                                </div>
                                <span className='errors' style={{ color: "#d91900" }}>{error}</span>
                                <Link id='havenotaccount' to={'/register'}>{t("Hesabınız yoxdur ?")}</Link>
                                <button id='submitbtn' type="submit">{t("Daxil ol")}</button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Login