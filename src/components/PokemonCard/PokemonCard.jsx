import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../slices/dataSlice';
import StartButton from '../StartButton/StartButton';
import './pokemonCard.css'

const PokemonCard = ({ name, image, types, id, favorite}) => {

    const abiliti = types.map(elem => elem.type.name).join(", ")

    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}));
    };

    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
            >
            <Meta description={abiliti} />
        </Card>
    );
}
export { PokemonCard };