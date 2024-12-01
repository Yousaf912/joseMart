
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../Header/Header'
import style from './SignUpLOgin.module.css'
import img1 from '../../assets/signup.png'
import img2 from '../../assets/signup2.png'
import { CgProfile } from "react-icons/cg";


const SignUplOGIN = () => {
    const location = useLocation().pathname.split("/")[1];
    const navigate = useNavigate();

    const openlink = (name: any) => {
        navigate(name)
    }

    return (
        <div className={style.main}>
            <Header />
            <div className={`container`}>
                <div className="row">
                    <div className="col-12 d-md-flex mt-4 align-items-center">
                        <div className={`${style.imgsection} col-md-6`}>
                            <img src={location == 'signup' ? img1 : img2} className={style.img} />
                        </div>
                        <div className={`${style.textsection} col-md-6 px-5  p-3 rounded-4 text-white`}>
                            <div className='text-center'>
                                <CgProfile className={`${style.profile}`} />
                                <h2>{location == 'signup' ? 'Signup' : 'Login'}</h2>
                            </div>
                            {location == 'signup' &&
                                <div className='mb-2'>
                                    <div className='d-flex flex-column mt-3'>
                                        Name:
                                        <input className='p-2 rounded-3' type="text" placeholder='Enter your name' required />
                                    </div>
                                    <div className='d-flex flex-column mt-3'>
                                        Number:
                                        <input className='p-2 rounded-3' type="number" placeholder='Enter your number' required />
                                    </div>

                                </div>
                            }
                            <div className='d-flex flex-column'>
                                Email Address:
                                <input className='p-2 rounded-3' type="email" placeholder='enter email' required />
                            </div>
                            <div className='d-flex flex-column mt-3'>
                                Password:
                                <input className='p-2 rounded-3' type="password" placeholder='Enter Password' required />
                            </div>
                            <div className='mt-4 text-center'>
                                <button className='px-3 py-1 rounded-3'>{location == 'signup' ? 'SignUp' : 'Login'}</button>
                                <a onClick={() => openlink(location == 'signup' ? '/login' : '/signup')} className='ms-4 text-white '>{location == 'signup' ? 'Login' : 'Signup'}</a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUplOGIN