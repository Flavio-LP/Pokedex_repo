import {KeyboardEvent, useEffect, useState} from 'react'
import './index.css';
import axios from 'axios';

function Homepage(){


    const [pokemon, setPokemon] = useState('');
    const [data, setData] = useState(null);
    const [Key,setKey] = useState(null);
    const [Validador, setValidador] = useState('');


    function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {

        let key = event.key;
        
       if (key == 'Enter')
            setPokemon(Validador);
        getPokemon();
      }

      const handleChange = (e: { target: { value: string; }; }) => {
        setValidador(e.target.value.toLowerCase())
        //console.log({pokemon}) 
        
    }


    //  useEffect(() => {
    //     const debounceTimeout = setTimeout(() => { getPokemon()},50)
    //  },);


      const getPokemon = async() => {
        const toArray = [];
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url)
            toArray.push(res.data);
            console.log(toArray)
         
        } catch(e) {
            console.log(e)
        }
    } 
    
    return(

        

        <div className='Homepage'>

            <div className='Top_bar'>

                <h1 className='Top_bar_title'>Pokédex</h1>

            </div>

            <div className='body_page'> 
                <div className='Side_bar'>
                    <h3 className='Side_bar_title'>Search a pokémon</h3>


                        <input className='Side_bar_input' onChange={handleChange}  onKeyPress={(event) => handleKeyPress(event)} ></input>


                    <div className='stats_pokemon'>
                        <h2>HP</h2>
                        <p className='hp_stats'></p>
                        <h2>Attack</h2>
                        <p className='attack_stats'></p>
                        <h2>Defense</h2>
                        <p className='defense_stats'></p>
                        <h2>Speed</h2>
                        <p className='speed_stats'></p>
                        <h2>Types</h2>
                        <p className='types_stats'></p>
                    </div>
                </div>

                <div className='Center_div'>
                    <h1 >{pokemon}</h1>
                </div>

            </div>    





        </div>
    )

};

export default Homepage