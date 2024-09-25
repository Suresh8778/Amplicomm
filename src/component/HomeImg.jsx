import React from 'react';
import HNSlide1 from '../image/HNSlide1.jpg';
import brand1 from '../image/brand1.jpg';
import brand2 from '../image/brand2.jpg';
import brand3 from '../image/brand3.jpg';
import brand4 from '../image/brand4.jpg';
import brand5 from '../image/brand5.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomeImg() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={HNSlide1} height="500px" className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block top-0 start-0 w-100 position-absolute">
                            <h2 className='text-dark mt-4'>Immune Support</h2>
                            <button className="butn text-white py-2 px-4 mt-2">Shop Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={HNSlide1} height="500px" className="d-block w-100" alt="Slide 2" />
                        <div className="carousel-caption d-none d-md-block top-0 start-0 w-100 position-absolute">
                            <h2 className='text-dark mt-4'>Immune Support</h2>
                            <button className="butn text-white p-2 px-4 mt-2">Shop Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={HNSlide1} height="500px" className="d-block w-100" alt="Slide 3" />
                        <div className="carousel-caption d-none d-md-block top-0 start-0 w-100 position-absolute">
                            <h2 className='text-dark mt-4'>Immune Support</h2>
                            <button className="butn text-white p-2 px-4 mt-2">Shop Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container'>
                <h3 style={{fontWeight:'bold'}} className='my-3'>Top Brands</h3>
                <div className='d-flex justify-content-between'>
                    <img src={brand1} alt='brand' className='p-3'></img>
                    <img src={brand2} alt='brand' className='p-3'></img>
                    <img src={brand3} alt='brand' className='p-3'></img>
                    <img src={brand4} alt='brand' className='p-3'></img>
                    <img src={brand5} alt='brand' className='p-3'></img>
                </div>
            </div>
        </>
    );
}

export default HomeImg;
