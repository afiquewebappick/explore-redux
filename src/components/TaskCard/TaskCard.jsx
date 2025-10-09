import React from 'react';

const TaskCard = ({ task, handleResolves }) => {
    return (
        <div className='card bg-base-100 card-xs shadow-sm p-4 mt-3'>
            <h1 className='font-semibold'>{task.title}</h1>
            <button onClick={() => handleResolves(task)} className='btn w-full bg-[#02A53B] text-white mt-4'>Complete</button>
        </div>
    );
};

export default TaskCard;