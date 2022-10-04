import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/Banner/banner1.jpg';
import banner2 from '../../../images/Banner/banner2.jpg';
import banner3 from '../../../images/Banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fw-bold'>MAJOR CAR SERVICE</h3>
                        <p>A major service might also be referred to as a 'Master' or 'Gold' service, and is recommended every 24 months or 24,000 miles. I</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fw-bold'>INTERIM CAR SERVICE</h3>
                        <p>An interim car service is the entry-level package that is sometimes called a 'Basic' or 'Bronze' service. It's designed for high-mileage drivers </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fw-bold'>FULL CAR SERVICE</h3>
                        <p>A full service, also known as an 'Intermediate' or 'Silver' service, is usually recommended every 12 months or 12,000 miles, whichever comes first.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;