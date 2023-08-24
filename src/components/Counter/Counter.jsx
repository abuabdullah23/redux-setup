import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../../redux/features/counter/counterSlice';

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    console.log(count);

    return (
        <div className='flex items-center gap-4'>
            <button onClick={()=> dispatch(increment())}
            className='bg-gray-200 hover:bg-gray-400 rounded-lg py-2 px-4'
            >Increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=> dispatch(decrement())}
            className='bg-gray-200 hover:bg-gray-400 rounded-lg py-2 px-4'
            >Decrement</button>
            <button onClick={()=> dispatch(incrementByValue(5))}
            className='bg-gray-200 hover:bg-gray-400 rounded-lg py-2 px-4'
            >Increment By Value 5</button>
        </div>
    );
};

export default Counter;