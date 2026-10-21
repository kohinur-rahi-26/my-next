// import React from 'react';
// import FoodCard from '../componets/FoodCard';

import FoodCard from "../componets/FoodCard";

const MenuPage =async () => {
    const rec =  await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods"
    
       ,{     cache: "force-cache",
        }
    )
    const data = await rec.json()
    const food = data.data;
    console.log("food data", food)

    return (
        <div>
            
{            food.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
}            
        </div>
    );
};

export default MenuPage;

// const MenuPage = async () => {
//     const rec = await fetch(
//         "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
//         {
//             cache: "force-cache",
//         }
//     );

//     const data = await rec.json();
//     const food = data.data;

//     return (
//         <div>
//             {            food.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
//  } 
           
//         </div>
//     );
// };

// export default MenuPage;
