import React from 'react';
import prd2 from '../image/prd2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Health() {
  return (
    <div className='container my-3'>
        <h4 style={{fontWeight:'bold'}} className='my-3'>Deal of the day</h4>
        <div className="d-flex justify-content-between">
        <div class="card m-2">
            <img className='img-fluid' src={prd2} width='250px' height='300px' alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Pure Encapsulations</h5>
            <p class="card-text"></p>
            <h4>Rs.75.00</h4>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        <div class="card m-2">
            <img className='img-fluid' src={prd2} width='250px' height='300px' alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Pure Encapsulations</h5>
            <p class="card-text"></p>
            <h4>Rs.100.00</h4>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        <div class="card m-2">
            <img className='img-fluid' src={prd2} width='250px' height='300px' alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Pure Encapsulations</h5>
            <p class="card-text"></p>
            <h4>Rs.75.00</h4>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        <div class="card m-2">
            <img className='img-fluid' src={prd2} width='250px' height='300px' alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Pure Encapsulations </h5>
            <p class="card-text"></p>
            <h4>Rs.150.00</h4>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        <div class="card m-2">
            <img className='img-fluid' src={prd2} width='250px' height='300px' alt="..."></img>
        <div class="card-body">
            <h5 class="card-title">Pure Encapsulations </h5>
            <p class="card-text"></p>
            <h4>Rs.150.00</h4>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
        </div>
    </div>
  )
}
export default Health;