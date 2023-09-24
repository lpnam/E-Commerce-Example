import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
           id: 1,
           img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
           img2: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
           title: "Long Sleeve APS",
           desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, distinctio illo explicabo rerum enim, tempora ex sed numquam qui possimus iure quasi exercitationem perspiciatis sequi cumque commodi optio soluta dolorum!",
           isNew: true,
           oldPrice: 19,
           price: 12, 
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, distinctio illo explicabo rerum enim, tempora ex sed numquam qui possimus iure quasi exercitationem perspiciatis sequi cumque commodi optio soluta dolorum!",
            isNew: true,
            oldPrice: 19,
            price: 12, 
         }
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 50)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart