import {useSelector} from 'react-redux';

import './bingoCell.css';

const BingoCell = ({cell, onCheck}) => {
const {isWon} = useSelector(state => state.matrix);

    return (
        <div  onClick={onCheck}
              className={`cell ${cell.status? 'checked' : ''} ${isWon? 'isWon' : ''}`}>
            <p>{cell.title}</p>
        </div>
    );
};

export default BingoCell;
