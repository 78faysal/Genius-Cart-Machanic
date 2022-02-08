import React from 'react';

import mechanic1 from '../../../images/Car Mechanics/2.jpg';
import mechanic2 from '../../../images/Car Mechanics/3.jpg';
import mechanic3 from '../../../images/Car Mechanics/4.jpg';
import mechanic4 from '../../../images/Car Mechanics/5.jpg';
import Expart from '../Expart/Expart';



const experts = [
    {
        id: 1,
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: 'Engine Expert'
    },
    {
        id: 2,
        img: mechanic2,
        name: 'John Anderson',
        expertize: 'Polish Expert'
    },
    {
        id: 3,
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: 'Coloring Expert'
    },
    {
        id: 4,
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: 'Alrounder Expert'
    },
]

const Exparts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary mt-5'>Our Exparts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;