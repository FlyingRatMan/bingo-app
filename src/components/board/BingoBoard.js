import {useDispatch, useSelector} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {useEffect} from 'react';

import {fillCells, check, checkAdjacent, reset} from '../../store/cellsSlice';
import BingoCell from '../cell/BingoCell';
import './bingoBoard.css';

const BingoBoard = () => {
    const dispatch = useDispatch();
    const {matrix, isWon} = useSelector(state => state.matrix);

    useEffect(() => {
        dispatch(fillCells());
    }, []);

    return (
        <div className={`board ${isWon ? 'isWon' : ''}`}>
            {matrix.map((row, rowIndex) => row.map((cell, colIndex) => <BingoCell
                key={nanoid()}
                cell={cell}
                onCheck={() => {
                    dispatch(reset());
                    dispatch(check({rowIndex, colIndex}));
                    dispatch(checkAdjacent({rowIndex, colIndex}));
                }}/>))}
        </div>
    );
};

export default BingoBoard;
