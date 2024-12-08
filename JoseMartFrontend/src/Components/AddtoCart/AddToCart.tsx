import { useEffect, useState } from "react"
import { Header } from "../Header/Header"
import { Loder } from "../Loader";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
import { CgRemoveR } from "react-icons/cg";
import style from './addtocart.module.css'


export const AddtoCart = () => {
    const userid = localStorage.getItem('userid');
    const [cartdata, setCartData] = useState([]);
    const [loder, setLoader] = useState(true)

    const getCartData = async () => {
        try {
            await fetch(`http://localhost:3000/getcartdata/${userid}`)
                .then(async (res) => {
                    const dta = await res.json()
                    await setCartData(dta.products)
                    setLoader(false)
                })
                .catch((er) => {
                    console.log(er);

                })

        } catch (er) {
            console.log(er);
        }
    }

    useEffect(() => {
        getCartData();
    }, [])

    return (
        <div>
            <Header />
            {
                loder ?
                    <div className="text-center" style={{ paddingTop: '10%' }}>
                        <Loder />
                    </div> :
                    <div className="px-5 d-flex" style={{ paddingTop: '10%' }}>
                        <div className="col-8">
                            {
                                cartdata.length != 0 &&
                                cartdata.map((val: any, i: number) => {
                                    return (
                                        <div key={i} className="d-flex  justify-content-between border mt-2 shadow-sm border-2 p-2 rounded-4">
                                            <img src={val.img} width={100} />
                                            <div className="ms-2 col-3">
                                                <h5>{val.title}</h5>
                                                <p>size: {val.size}</p>
                                                <p>SKU: {val.sku}</p>

                                            </div>
                                            <div className="col-3 d-flex flex-column justify-content-between ">
                                                <h6>quantity</h6>
                                                <h5 className="">{val.quentity}</h5>
                                                <div className="button d-flex ">
                                                    <CiSquarePlus className={`${style.btn} fs-3`} />
                                                    <h6 className="px-3">1</h6>
                                                    <CgRemoveR className={`${style.btn} fs-3`} />
                                                </div>

                                            </div>
                                            <div className=" d-flex flex-column  justify-content-between align-items-center col-3">
                                                <div className="delete">
                                                    <RiDeleteBin2Fill className={`${style.delete} fs-2 `}  />
                                                </div>
                                                <h5 className="text-danger">${val.price}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-4">

                        </div>

                    </div>
            }
        </div>
    )
}