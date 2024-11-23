import React from 'react'
import './index.css';

function Homepage(){

    return(

        <div className='Homepage'>

            <div className='Top_bar'>

                <h1 className='Top_bar_title'>Pokédex</h1>

            </div>

            <div className='Side_bar'>
                <h3 className='Side_bar_title'>Search a pokémon</h3>

                <input className='Side_bar_input'></input>
            </div>


        </div>
    )

};

export default Homepage