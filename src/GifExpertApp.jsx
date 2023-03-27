import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  //agregando una nueva categoria usando el operador spred
  const onAddCategory = ( newCategory ) => {

    if(categories.includes( newCategory )) return;
    setCategories([ newCategory, ...categories])
  }

  return (
    <>
        {/* //titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory 
        
        onNewCategory={ onAddCategory }
        
        ></AddCategory>
        {/* Listado de Gif */}

        { categories.map( category => (
          <GifGrid key={ category } 
          category={ category }>
          </GifGrid>
        ))
        }

            {/* Gif Item */}
    </>
  )
}
