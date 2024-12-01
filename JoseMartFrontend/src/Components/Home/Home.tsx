import { useState } from 'react'
import img from '../../assets/slider-bg.jpg'
import { Header } from '../Header/Header'
import style from './home.module.css'
export const Home = () => {
    const [text, setText] = useState(0);


    const sliderData = [
        {
            heading: 'Discover Endless Possibilities with Our Premium Selection of Products, Tailored Just for You ',
            paragraph: 'At JoseMart, we offer a wide variety of top-quality products that cater to every style and need. Shop from exclusive collections, enjoy unbeatable prices.'
        },
        {
            heading: 'Unleash the Power of Quality and Value in Every Product You Buy from Our Diverse Range ',
            paragraph: 'From trendy outfits to the latest gadgets, discover products that combine style, function, and affordability, all with the convenience of shopping from home.'
        },
        {
            heading: 'Elevate Your Everyday Life with Our Carefully Curated Collection of High-Quality',
            paragraph: 'Whether upgrading your home or treating yourself to something special, our collection of carefully selected products makes shopping easy and fun., and experience shopping made simple'

        }
    ]

    setTimeout(() => {
        if (text == sliderData.length - 1) {
            setText(0)
        } else {
            setText(text + 1)
        }
    }, 4000)
    const data = sliderData[text]
    return (
        <div className="imgdiv position-relative col-12 ">
            <img className={style.img} src={img} >
            </img>
            <div className={`${style.homdiv} position-absolute top-0`}>
                <Header />

                {/* ------------------------------------------------home section ---------------------------------------------- */}

                <div className="container mt-5">
                    <div className="row">
                        <div className={`${style.datadiv} text-black col-md-7 col-lg-5 pt-5`}>
                            <h2>
                                {data.heading}
                            </h2>
                            <p className='mt-3'>{data.paragraph}</p>
                            <div className=''>
                                <button className={`${style.btn} border-0 p-2 rounded-3 px-3 text-white `}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>
    )
}