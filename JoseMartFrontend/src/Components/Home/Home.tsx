import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Header } from '../Header/Header'
import style from './home.module.css'
import { useEffect, useState } from "react";
import img1 from '../../assets/baner1.png'
import img2 from '../../assets/baner2.jpg'
import img4 from '../../assets/baner4.jpg'




export const Home = () => {
    const [catagoryName, setCatagoryName] = useState([])
    const [showcatagory, setshowCatagory] = useState(false);
    const [img, setImg] = useState(0);


    const getCatagory = async () => {
        try {
            await fetch('http://localhost:3000/getcatagory').then(async (res) => {
                const data = await res.json()
                setCatagoryName(data.allCategories)
            })


        } catch (er) {
            console.log(er);
        }
    }

    useEffect(() => {
        getCatagory();
    }, [])

    const imgs = [img1, img2, img4];
    const pic = imgs[img]

    setTimeout(() => {
        if ((imgs.length - 1) != img) {
            setImg(img + 1)
        } else {
            setImg(0)
        }
    }, 4000);


    console.log(catagoryName);
    

    return (
        <div >
            <Header />
            <div className={`${style.home}  `}>
                <div className="container pt-5 pt-md-0">
                    <div className="row pt-5 pt-md-4 pt-lg-0">
                        <div className="d-md-flex flex-row">
                            <div className="col-lg-2 col-6 position-relative">
                                <div className="d-flex justify-content-around  ">
                                    <h6>ALL CATEGORIES</h6>
                                    <div className={`${style.catagory}`} onClick={() => setshowCatagory(!showcatagory)}>
                                        {
                                            showcatagory ?
                                                <IoIosArrowUp className="fs-4" /> :
                                                <IoIosArrowDown className="fs-4" />
                                        }
                                    </div>
                                </div>
                                {
                                    showcatagory &&
                                    <div className="position-absolute  bg-white border px-1 rounded-2 ">
                                        {catagoryName.length !== 0 &&
                                            catagoryName.map((val: any) => {
                                                return (
                                                    <ul className={`${style.list}`}>
                                                        <li>{val.name}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>}
                            </div>
                            <div className={` col-md-10 d-none d-md-block `}>
                                <div className={`d-flex flex-row flex-wrap justify-content-between ${style.list}`}>
                                    {catagoryName.length !== 0 &&
                                        catagoryName.slice(0, 8).map((val: any) => {
                                            return (
                                                <li>{val.name}</li>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* --------------------------------------------Slider -------------------------------------------- */}

                    <div className={`${style.baner} mt-3`}>
                        <img src={pic} />
                    </div>

                    {/* -------------------------------------------- catagory ------------------------------ */}
                    <div className="mt-3">
                        <h4>All Categories</h4>

                    </div>

                </div>




            </div>
        </div >


    )
}