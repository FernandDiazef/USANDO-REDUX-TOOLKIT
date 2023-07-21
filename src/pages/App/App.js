import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { PokemonList } from '../../components/PokemonList/PokemonList';
import { Searched } from '../../components/Searched/Searched';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDeatails } from '../../slices/dataSlice';
import logo from '../../assets/statics/logo.svg'
import './App.css';


function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  //state.getIn(['data', 'pokemons'], shallowEqual)).
  //toJS();
  const loading = useSelector(state => state.ui.loading);
  //state.getIn(['ui', 'loading']));



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDeatails())
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={15} offset={5} >
        <h1>Pokedux</h1>
        <Searched />
      </Col>
      {loading ?
        <Spin spinning size='large' />
        :
        <PokemonList pokemons={pokemons} />
      }

    </div>
  );
};



export default App;
