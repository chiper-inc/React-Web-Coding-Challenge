import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({
    title,
    description,
    date_stolen,
    stolen_location,
    large_img,
    id,
}) => {
    const datos = () => {
        let myDate = new Date(date_stolen * 1000);

        return `${myDate.toGMTString().slice(0, 16)}`;
    };

    const image =
        'https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1';

    return (
        <div className='card'>
            <div key={id}>
                <div>
                    {large_img ? (
                        <img
                            src={large_img}
                            alt='Bike not found'
                            className='img'
                        />
                    ) : (
                        <img
                            className='img '
                            src={image}
                            alt='Bike not found'
                        />
                    )}
                </div>
                <div className='info'>
                    <h1>{title}</h1>
                    <h3 className='description'>
                        {description ? (
                            description.length > 500 ? (
                                `${description.slice(0, 250)}...`
                            ) : (
                                description
                            )
                        ) : (
                            <h3 className='not-found'>Description not found</h3>
                        )}
                    </h3>
                    <div className='date-direction'>
                        <h3 className='stolen'>Date Stolen:</h3>
                        <h3>{datos()}</h3>

                        <h3 className='stolen'>Location:</h3>
                        <h3>{stolen_location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    date_stolen: PropTypes.number,
    stolen_location: PropTypes.string,
    large_img: PropTypes.string,
    id: PropTypes.number,
};
