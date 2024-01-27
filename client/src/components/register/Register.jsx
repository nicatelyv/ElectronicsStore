import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './style.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSound from 'use-sound';
import sound from "../../assets/sounds/notification-confirmation-with-echo-smartsound-fx-lower-tone-2-00-01.mp3"
import wrongSound from "../../assets/sounds/dats-wrong.mp3"

function Register() {
  const [inputType, setInputType] = useState('password');
  // Function to toggle input type
  const toggleInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  //Sound effect
  const [playSound] = useSound(sound);
  const [playWrongSound] = useSound(wrongSound);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState("")

  function wait() {
    let button = document.getElementById('submitbtn');
    button.style.cursor = 'wait'
  }

  function defaultCursor() {
    let button = document.getElementById('submitbtn');
    button.style.cursor = 'pointer'
  }

  async function handleButton(values) {
    try {
      wait()
      let response = await axios.post('https://electronics-store-api.vercel.app/api/auth/register/', values)
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
      let notify = () => toast.error(t('Username or email has been used!'));
      notify()
      playWrongSound()
      defaultCursor()
      console.log(err.response)
      setError(error.response.data.message)
    }
  }
  return (
    <section className='registerPage'>
      <div className='registerMain'>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', username: '', password: '' }}
          validationSchema={Yup.object({
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            email: Yup.string().email('*Geçerli e-posta yazın').required('*E-posta boş olamaz'),
            username: Yup.string().required("*Kullanıcı adı boş olamaz"),
            password: Yup.string().required("*Şifre boş olamaz"),
          })}
          onSubmit={(values) => handleButton(values)}
        >
          {({ errors, touched }) => (
            <div className='formDiv'>
              <h2 id='registerH2'><i class="fa-regular fa-address-card"></i> {t("Qeydiyyat")}</h2>
              <Form>
                <div id='first_last_name'>
                  <div id='frstNameDiv'>
                    <label htmlFor="firstName"><i class="fa-solid fa-user-pen" style={{ color: "#63E6BE" }}></i> {t("Ad")}:</label>
                    <Field className={`inp ${errors.firstName && touched.firstName && "errorInp"}`} name="firstName" type="text" />
                  </div>

                  <div id='lstNameDiv'>
                    <label htmlFor="lastName"><i class="fa-solid fa-user-pen" style={{ color: "#63E6BE" }}></i> {t("Soyad")}:</label>
                    <Field className={`inp ${errors.lastName && touched.lastName && "errorInp"}`} name="lastName" type="text" />
                  </div>
                </div>

                <div className='email_usrname_password'>
                  <div id='inputDiv'>
                    <label htmlFor="username"><i class="fa-solid fa-user-tag" style={{ color: "#63E6BE" }}></i> {t("İstifadəçi adı")}:</label>
                    <Field className={`inp ${errors.username && touched.username && "errorInp"}`} name="username" type="text" />
                  </div>

                  <div id='inputDiv'>
                    <label htmlFor="email"><i className="fa-solid fa-envelope" style={{ color: "#FFD43B" }}></i> {t("E-poçt")}:</label>
                    <Field className={`inp ${errors.email && touched.email && "errorInp"}`} name="email" type="email" />
                  </div>

                  <div id='inputDiv'>
                    <label htmlFor="password"><i className="fa-solid fa-lock" style={{ color: "#74C0FC" }}></i> {t("Şifrə")}:</label>
                    <Field className={`inp ${errors.password && touched.password && "errorInp"}`} name="password" type={inputType} />
                    {inputType === 'password' ? <i onClick={toggleInputType} className="fa-regular fa-eye"></i> : <i onClick={toggleInputType} className="fa-regular fa-eye-slash"></i>}
                  </div>
                </div>
                {error ? <span className='errors' style={{ color: "#d91900" }}>{error}</span> : <></>}
                <Link id='haveaccount' to={'/giris'}>{t("Hesabınız varmı ?")}</Link>
                <button id='submitbtn' type="submit"><i class="fa-solid fa-right-to-bracket"></i> {t("Qeydiyyatdan keç")}</button>
              </Form>
            </div>
          )}
        </Formik>
        <ToastContainer />
      </div>
    </section>
  )
}

export default Register