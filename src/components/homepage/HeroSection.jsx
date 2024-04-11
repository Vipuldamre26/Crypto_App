import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './herosection.css';
import { DataContext } from '../UserContext';
import img from '../../assets/hero-bg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const HeroSection = () => {

    const navigate = useNavigate();


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'ease-in-out',

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


    const { data1, currency } = useContext(DataContext);
    console.log(data1);


    const getCoinInfo = (id) => {
        navigate(`/coin/${id}`);
    }

    // console.log(data1);

    return (
        <div className='herosection'>
            <div className='hero-content'>
                <div className='hero-bg'>
                    <img src={img}></img>
                </div>

                <h2>Crypto Analyser</h2>
                <p>Get All The Info Regarding Your Favorite Crypto Currency</p>

                <div className='slider-container'>
                    <Slider {...settings}>
                        {
                            data1.map((item) => {
                                return (
                                    <div className='coin-item' onClick={() => getCoinInfo(item.id)} key={item.id}>
                                        <img src={item.image}></img>
                                        <p style={{ color: 'white' }}>{(item.symbol).toUpperCase()} <span style={{ display: 'inline-block', fontWeight: '600', color: item.price_change_percentage_24h > 0 ? 'lightgreen' : 'red' }}>{item.price_change_percentage_24h > 0 ? '+' : ''}{(item.price_change_percentage_24h).toFixed(2)} %</span></p>
                                        <strong>{currency === 'INR' ? '₹ ' : '$ '}{item.current_price}</strong>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;