import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import useFetch from '../../hook/useFetch';
const FeaturedProducts = ({ type }) => {
  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

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
          {loading ? "loading" : data?.map(item=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts