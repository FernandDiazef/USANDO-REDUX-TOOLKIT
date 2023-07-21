import React from 'react';
import 'antd/dist/reset.css';
import { Input } from 'antd';
import './searched.css'
import { useDispatch } from 'react-redux';

const Searched = () => {

    const dispatch = useDispatch();

    return (
        <>
            <Input.Search 
            placeholder='Buscar...' 
            className='size' />
        </>
    );
}

export { Searched };