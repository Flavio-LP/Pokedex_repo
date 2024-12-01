import {useState} from 'react'
import './index.css';
import axios from 'axios';

function Homepage(){


    const [pokemon, setPokemon] = useState("");

    const getPokemon = async() => {
        const toArray = [];
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url)
            toArray.push(res.data);
         
        } catch(e) {
            console.log(e)
        }
    } 



     const handleChange = (e: { target: { value: string; }; }) => {
        getPokemon(); 
        //setPokemon(e.target.value.toLowerCase())
     }

    
    return(

        

        <div className='Homepage'>

            <div className='Top_bar'>

                <h1 className='Top_bar_title'>Pokédex</h1>

            </div>

            <div className='body_page'> 
                <div className='Side_bar'>
                    <h3 className='Side_bar_title'>Search a pokémon</h3>

                    <input className='Side_bar_input' onChange={handleChange} ></input>

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