import React from 'react';
import abt from '../image/abt.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About() {
  return (
    <div className='row mt-3'>
        <div className='col-6'>
            <img src={abt} alt='about' width='100%' height='400px'></img>
        </div>
        <div className='col-6'>
            <h4>About us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem architecto cupiditate 
            sapiente quod rerum porro quidem voluptatibus veniam, mollitia placeat iste laboriosam ad ipsa 
            expedita iure facilis ut cum ea  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Id obcaecati ipsa amet, ipsam natus repellat eum quis labore, ducimus quo consequuntur 
            uibusdam fugiat dicta cumque, molestiae quod sint a earum! Voluptatem architecto cupiditate 
            sapiente quod rerum porro quidem voluptatibus veniam, mollitia placeat iste laboriosam ad ipsa 
            expedita iure facilis ut cum ea  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Id obcaecati ipsa amet, ipsam natus repellat eum quis labore, ducimus quo consequuntur 
            uibusdam fugiat dicta cumque, molestiae quod sint a earum!</p>

            <button className='butn text-white mt-5 px-3 py-2'>Lorem ipsum</button>
        </div>
    </div>
  )
}

export default About;
