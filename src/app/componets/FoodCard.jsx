import Image from 'next/image';
import React from 'react';

const FoodCard = ({food}) => {
    const {dish_name,image_link}=food
    return (
        
           <div className=" card bg-base-100 w-96 shadow-sm ">
  <figure>
    
      <Image
        width = {400}
        height ={400}
        src ={image_link}
        alt= 'image food'>
          </Image>
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">    {dish_name}
</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-blue-500">Buy Now</button>
    </div>
  </div>
</div>
            
    
    );
};

export default FoodCard;