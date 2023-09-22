import React from 'react';
import './List.scss';
import Card from "../Card/Card"

const List = () => {
    const data = [
        {
            id: 4,
            img: "none",
            oldPrice: 19,
            price: 12,
        }
    ];
  return (
    <div className='list'>
        {data?.map(item =>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List