import React from 'react';
import Counter from '../componets/Counter';

const Dashboard= () => {
    
    console.log("dashboard is renderng")
    return (
        <div>
            <h2>this is dashboard</h2>
              <Counter></Counter>
            <ul>
                <li>item-1</li>
                <li>item-2</li>
                <li>item-3</li>
            </ul>
            
        </div>
    );
};

export default Dashboard;