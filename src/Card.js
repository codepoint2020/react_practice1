import React from 'react';

const Card = (xyz) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2'>
            <img src={`https://robohash.org/${xyz.id}?200x200`} alt='robots'></img>
            <div>
                <h2>{xyz.name}</h2>
                <p>{xyz.email}</p>
            </div>
        </div>
    );
}

export default Card;