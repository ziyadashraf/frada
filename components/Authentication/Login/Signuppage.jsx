"use client"

import Image from 'next/image'
import image from '../../../public/Images/Login/0V5A3401.png'
import apple from '../../../public/Images/Login/apple.png'
import facebook from '../../../public/Images/Login/facebook.png'
import google from '../../../public/Images/Login/bmnm.png'
import './Signup.css'

export default function Signuppage() {
    return (
        <div className="Login-page" dir='rtl' lang='en'>
            <div className="login-components">
                <div className="Image-login">
                    <Image src={image} alt='welcome' />
                </div>
                <div className='form-content'>
                    <form>
                        <div>
                            <h2>سجل حساب جديد مع فرادا</h2>
                            <p>بالفعل لدي حساب <span>تسجيل الدخول</span></p>
                            <div className='image-iconlogin'>
                                <div className='apple'><Image src={apple} alt='aplle' /></div>
                                <div className='facebook'><Image src={facebook} alt='facebook' /></div>

                                <div className='google'>
                                    <p>سجل باستخدام جوجل</p>
                                    <Image src={google} alt='google' /></div>
                            </div>
                            <p className='or'>-او-</p>
                            <div className='form-input'>
                                <div className='input-content'>
                                    <label>الاسم بالكامل</label>
                                    <input type='text' />
                                </div>
                                <div className='input-content'>
                                    <label>البريد الإلكتروني </label>
                                    <input type='email' />
                                </div>
                                <div className='input-content'>
                                    <label> كلمة السر </label>
                                    <input type='password' />
                                </div>
                                <div className='strong-password'>
                                    <p> كلمة المرور قوية  </p>
                                    <div className='measure-pass'><hr></hr><hr></hr><hr></hr><hr></hr></div>
                                </div>
                                <div className='security'>
                                    <input type='checkbox' />
                                    <p>
                                        عند قيامي بانشاء حساب فأنا اوافق على <span>سياسة الخصوصية</span>

                                        <br></br><span>شروط الخدمة</span><span className='and'>   و   </span> <span>تلقي الأخبار والإشعارات</span>
                                    </p>
                                </div>
                                <div className='submit'>
                                    <button>أنشى الحساب</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}