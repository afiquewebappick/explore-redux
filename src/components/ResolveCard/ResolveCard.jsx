import React from 'react';

const ResolveCard = ({ resolve }) => {
    return (
        <div className='card bg-base-100 card-xs shadow-sm p-4 mt-3'>
            <h1 className='font-semibold'>{resolve.title}</h1>
            <p className='text-[#02A53B]'>✅ Completed</p>
        </div>
    );
};

export default ResolveCard;