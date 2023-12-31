"use client"

import Image from 'next/image'



import logofrada from '../../public/Images/Footer/Frada logo.svg'
import snapchat from '../../public/Images/Footer/Icon awesome-snapchat-ghost.svg'
import tiktok from '../../public/Images/Footer/Icon simple-tiktok.svg'
import twitter from '../../public/Images/Footer/Icon awesome-twitter.svg'
import insta from '../../public/Images/Footer/Icon awesome-instagram.svg'
import facebook from '../../public/Images/Footer/Icon awesome-facebook-f.svg'
import email from '../../public/Images/Footer/Icon awesome-mail-bulk.svg'
import visa from '../../public/Images/Footer/visa.svg'

import mada from '../../public/Images/Footer/مدي.svg'

import pay from '../../public/Images/Footer/pay.svg'
import most from '../../public/Images/Footer/moste card.svg'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import './FooterMobile.css'


export default function FooterMobile() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const route = usePathname();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://back.fradaksa.net/api/categories');
                const data = await response.json();
                setCategories(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (

        <div className="Foooter-mobile" dir='rtl' lang='ar'>
            <div className='flexx'>
                <div className="box1 boxbadel">
                    <div className="box1-content">
                        <div className='footer-textmobile'>
                            <h4>تسوق منتجاتنا</h4>

                            <div className='catoegry-footer'>
                                <div className='name-cateogry'>
                                    {categories.map((category) => (

                                        <Link href={"category/" + category.CategoryID} as={`/category/${category.CategoryID}`} style={{ textDecoration: 'none', color: 'unset', width: '40%' }} key={category.CategoryID}><p >{category.Name}</p></Link>

                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <hr className='swprate-none'></hr>
                <div className='seprate-div'></div>

                <div className="box1">
                    <div className="box1-content">
                        <div className='footer-textmobile'>
                            <h4> تعرف علينا اكتر</h4>

                            <div className='catoegry-footer'>
                                <div className='name-cateogry'>
                                    <Link href={"policies/"} style={{ textDecoration: 'none', color: 'unset' }} >     <p> من نحــــــن</p> </Link>
                                    <p >سياسة الاستبدال والاسترجـاع</p>
                                </div>
                                <div className='name-cateogry'>
                                    <p> تواصل معنـــــــا</p>
                                    <p >  سياسة الشحن والتوصيـــــــل</p>
                                </div>
                                <div className='name-cateogry'>
                                    <p>  وظائف فــــــرادا</p>
                                    <p > سياسة الخصوصية والأمــــان</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='component-footer'>
                <div className='flexx2-pay'>
                    <div className='pay-mobile'>
                        <div className='paypart1-mobile'>
                            <Image src={visa} alt='visa' />
                            <Image src={most} alt='most' />
                            <Image src={mada} alt='most' />
                            <Image src={pay} alt='pay' />
                        </div>

                    </div>
                    <div className='parent-email'>
                        <div className='flex2-part1mobile' style={{ paddingTop: '3%' }}>
                            <h4>أشترك في النشرة البريدية</h4>
                            <div className='input-emailmobile'>
                                <input placeholder='أدخل بريدك الإلكتروني لتلقي أحدث المستجدات' />
                                <Image src={email} alt='email' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flexx2'>
                    <div className='map-mobile'>
                        <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14485.688365750524!2d46.6356799!3d24.815235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5dad86c258d%3A0xd870f6653aa0238!2z2YHYsdin2K_Ypw!5e0!3m2!1sar!2seg!4v1703029098092!5m2!1sar!2seg" ></iframe>

                        </div>

                    </div>
                    <div className='seprate-div'></div>
                    <div className='logo-footer'>
                        <div className='frada-log'><Image src={logofrada} alt='logo' priority="auto" /></div>

                        <div className='content-social'> <Image src={snapchat} className='social-media' alt='snapchat' />
                            <Image src={tiktok} className='social-media' alt='tiktok' />
                            <Image src={twitter} className='social-media' alt='twitter' />
                            <Image src={insta} className='social-media' alt='inst' />
                            <Image src={facebook} className='social-media social-diff' alt='facebook' />
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='end-footermobile'>
                <p>جميع الحقوق محفوظة لفرادا 2023</p>
            </div>
            <div className='end-footermobile' style={{ height: '100px' }}>

            </div>

        </div>
    )
}