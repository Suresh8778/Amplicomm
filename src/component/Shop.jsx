import React from 'react'
import img1 from '../image/img1.png';
import img2 from '../image/img2.png';
import img3 from '../image/img3.png';
import img4 from '../image/img4.png';
import img6 from '../image/img6.png';
import img7 from '../image/img7.png';

function Shop() {
  return (
        <div className='container'>
            <h3 style={{fontWeight:'bold'}} className='my-3'>Shop by Health concerns</h3>
            <div className='d-flex justify-content-evenly'>
                <div className='text-center'>
                <img src={img1} alt='brand' width='200px' className='p-3'></img>
                <p>Diabetes</p>
                </div>
                <div className='text-center'>
                <img src={img2} alt='brand' width='200px' className='p-3'></img>
                <p>Heart care</p>
                </div>
                <div className='text-center'>
                <img src={img3} alt='brand' width='200px' className='p-3'></img>
                <p>Stomach care</p>
                </div>
                <div className='text-center'>
                <img src={img4} alt='brand' width='200px' className='p-3'></img>
                <p>Liver care</p>
                </div>
                <div className='text-center'>
                <img src={img6} alt='brand' width='200px' className='p-3'></img>
                <p>Bone,Muscle care</p>
                </div>
                <div className='text-center'>
                <img src={img7} alt='brand' width='200px' className='p-3'></img>
                <p>Kidney care</p>
                </div>
            </div>
        </div>
  )
}

export default Shop;