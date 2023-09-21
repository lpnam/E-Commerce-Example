import React from 'react'
import './FeaturedProducts.scss';
const FeaturedProducts = ({ type }) => {
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sed fuga deserunt corrupti et doloribus possimus exercitationem, 
                nostrum ducimus. Cupiditate, quidem mollitia. 
                Reiciendis sed, voluptate impedit aspernatur quas autem odit aliquam?
            </p>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default FeaturedProducts