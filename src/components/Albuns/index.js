import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../global.css';


const Albuns = () => {
   const [albuns, setAlbuns] = useState([]);
   const [filterAlbuns, setFilterAlbuns] = useState([])

   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums?_limit=6")
         .then((response) => {
            setAlbuns(response.data)
            setFilterAlbuns([])
         })
         .catch((err) => {
            console.log(err)
         })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const hadleChange = ({ target }) => {
      if (!target.value || target.value === "") {
         setFilterAlbuns([])
         setAlbuns(albuns)
         return;
      }
      const filterItens = albuns.filter((album) => album.title.startsWith(target.value))
      if (filterItens) {
         setFilterAlbuns(filterItens)
         setAlbuns([])
      } else {
         setFilterAlbuns([])
         setAlbuns(albuns)
         return;
      }
   }

   return (
      <section className="itensContainer">
         <div className="buscaContainer">
            <input
               onChange={hadleChange}
               className="busca"
               type="text"
            />
            <button className="btnBusca">Buscar</button>
         </div>
         <div className="boxContainer">

            {
               albuns.map((album) => {

                  return (
                     <div className="item">
                        <div className="card">
                           <p key={album.id} className="itemDescription">{album.title}</p>
                        </div>
                     </div>
                  )
               })
            }
         </div>
         <div className="boxContainer">
            {
               filterAlbuns.map((album) => {

                  return (
                     <div className="item">
                        <div className="card">
                           <p key={album.id} className="itemDescription">{album.title}</p>
                        </div>
                     </div>
                  )
               })

            }

         </div>

      </section >
   );
}

export default Albuns;