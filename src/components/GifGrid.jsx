import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const {images, isLoading } = useFetchGifs( category )

  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading && ( <h2>Cargando...</h2> )
        }

        <div className="card-grid">
          { 
              images.map( ( image )=>(
               <GifItem 
               key={ image.id } 
               { ...image}> 
              {/* Con el operador spreed puedo tomar todas las propiedades de la image que recorro con el map */}
               </GifItem>
              ))
          }
        </div>
    </>
  )
}
