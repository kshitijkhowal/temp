import React, { useEffect, useState } from 'react'
// import list from "../../public/constants/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";


const Freebook = () => {

    const [book,setBook]=useState([]);
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get("https://temp-1-lfp0.onrender.com/book");
                console.log(res.data);
                const data=res.data.filter((data) => data.price === 0);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    },[])

    // const filterData = list.filter((data) => data.price === 0);
    // console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Unlock Your Potential with Our Free Courses!</h1>
                    <p>
                        Whether you're exploring a new hobby, upgrading your professional expertise, or diving into a passion project, our expertly crafted courses are here to guide you every step of the way.
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {book.map((item)=>(
                            <Cards item={item} key={item.id}  />
                        ))}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Freebook