import { useLocation, useNavigate } from 'react-router-dom';
import style from './Header.module.css'
import { TiShoppingCart } from "react-icons/ti";
import { FaCartPlus } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { useEffect, useState } from 'react';


export const Header = () => {
    const navigation = useNavigate();
    ; const location = useLocation().pathname.split("/")[1];
    const [islogin, setisLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token != null){
            setisLogin(true)
        }
    }, [])


    const openlink = (name: any) => {
        navigation(name)
    }
    return (
        <div className="container-fluid pt-3">
            <div className="container-fluid">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="text-black col-5 col-sm-4  col-md-3 col-xl-2 d-flex justify-content-evenly  align-items-center">
                        <TiShoppingCart className={`fs-1`} style={{ color: '#f7444e' }} />
                        <h2>Jose.<span style={{ color: "#f7444e" }}>M</span>art</h2>
                    </div>
                    <div className={`${style.lst} d-none d-md-block col-md-6 col-lg-5 col-xl-4 align-self-end`}>
                        <ul className='d-flex  justify-content-between position-relative'>
                            <li className={`${location == 'home' || '/' ? style.list : style.blck}`}>Home</li>
                            <li className={`${location == 'contact' ? style.list : style.blck}`}>Contact Us</li>
                            <li className={`${location == 'products' ? style.list : style.blck}`}>Products</li>
                            <li className={`${location == 'catagory' ? style.list : style.blck}`}>Catagory</li>
                        </ul>
                    </div>
                    <div className="col-2 col-md-2 col-lg-3  col-xl-2 d-none d-sm-block ">
                        <div className="row">
                            {islogin &&
                                <div className="col-7  text-end">
                                    <button type="button" className={`position-relative border-0 ${style.cart}`}>
                                        <FaCartPlus className={`fs-3 ${style.hovr}`} />
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            99+
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                </div>}
                            <div className='col-5'>
                                {islogin ? <IoPersonCircleOutline className={`fs-2 ${style.hovr}`} /> : <button onClick={() => openlink('/login')} className={`border-0 px-4 py-1 rounded-3 ${style.loginbtn}`}>Login</button>
                                }

                            </div>
                        </div>
                    </div>

                    <div className='d-sm-none col-2 fs-1'>
                        <MdOutlineMenu className='fs-1' />

                    </div>
                </div>
            </div>
        </div>
    )
}