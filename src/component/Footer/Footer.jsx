import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h2>About</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Expedita officia tempore facere aliquam totam doloremque optio consequatur minima, 
            nostrum corporis voluptas ab veniam voluptatibus et aliquid magni deleniti ratione ad!
          </span>
        </div>
        <div className="item">
          <h2>Contact</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Expedita officia tempore facere aliquam totam doloremque optio consequatur minima, 
            nostrum corporis voluptas ab veniam voluptatibus et aliquid magni deleniti ratione ad!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer