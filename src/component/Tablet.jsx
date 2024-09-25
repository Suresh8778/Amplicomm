import React from 'react'
import tab1 from '../image/tab1.png';
import tab2 from '../image/tab2.png';
import tab3 from '../image/tab3.png';
import tab4 from '../image/tab4.png';
import tab6 from '../image/tab6.png';
import tab7 from '../image/tab7.png';

function Tablet() {
  return (
        <div className='container'>
            <h3 style={{fontWeight:'bold'}} className='my-3'>Proven Bestsellers</h3>
            <div className='d-flex justify-content-evenly'>
                <div className='text-center'>
                <img src={tab1} alt='brand' width='200px' className='p-3'></img>
                <p>Multivitamins</p>
                </div>
                <div className='text-center'>
                <img src={tab2} alt='brand' width='200px' className='p-3'></img>
                <p>Omega-3</p>
                </div>
                <div className='text-center'>
                <img src={tab3} alt='brand' width='200px' className='p-3'></img>
                <p>Nervous system</p>
                </div>
                <div className='text-center'>
                <img src={tab4} alt='brand' width='200px' className='p-3'></img>
                <p>Multivitamins</p>
                </div>
                <div className='text-center'>
                <img src={tab6} alt='brand' width='200px' className='p-3'></img>
                <p>Multivitamins</p>
                </div>
                <div className='text-center'>
                <img src={tab7} alt='brand' width='200px' className='p-3'></img>
                <p>Multivitamins</p>
                </div>
            </div>
        </div>
  )
}

export default Tablet;
