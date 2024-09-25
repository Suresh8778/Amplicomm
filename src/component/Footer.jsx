import React from 'react'

function Footer() {
  return (
    <div className='footer mt-3'>
        <div className='container fluid row'>
            <div className="col-lg-3 my-5">
            <h4>Company</h4>
            <ul class="list-unstyled">
                <li class="list-block-item p-2">Why shop with us?</li>
                <li class="list-block-item p-2">Shipping</li>
                <li class="list-block-item p-2">Return</li>
                <li class="list-block-item p-2">About us</li>
            </ul>
            </div>
            <div className="col-lg-3 my-5">
            <h4>Security & Privacy</h4>
            <ul class="list-unstyled">
                <li class="list-block-item p-2">Secure Website</li>
                <li class="list-block-item p-2">PCI Compliance</li>
                <li class="list-block-item p-2">Privacy Policy</li>
                <li class="list-block-item p-2">Term of service</li>
            </ul>
            </div>
            <div className="col-lg-3 my-5">
            <h4>Subscribe</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <input type='email' className='p-2 mb-2' placeholder='Enter your email'></input><br></br>
            <button type='btn btn-outline-white p-1 rounded'>Sign Up</button>
            </div>
            <div className="col-lg-3 my-5">
                <p>Statements made on this website
                    have not been evaluated by the U.S.
                    Food and Drug Administration.
                    These products are not intended to
                    diagnose, treat, cure or prevent any
                    disease. Information provided by
                    this website or this company is not a
                    substitute for individual medical </p>
            </div>
    </div>
    </div>
  )
}

export default Footer;