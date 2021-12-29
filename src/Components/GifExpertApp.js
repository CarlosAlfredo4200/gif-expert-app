import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

const GifExpertApp = () => {



    const [categories, setCategories] = useState(['Dios'])


    const handleAdd = () => {
        setCategories([...categories, 'Principe'])
        
        //setCategories( cats => [...cats, 'Paz'])
    }




    return (

        <div>
            <h2>GifExpertApp</h2>
            <hr></hr>

            <AddCategory setCategories={ setCategories } />

            {
                <ul>
                    {
                        categories.map(cat => 
                            <GifGrid
                                key ={ cat}
                                category={cat} />
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default GifExpertApp
