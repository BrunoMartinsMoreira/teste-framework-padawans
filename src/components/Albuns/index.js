import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../global.css';


const Albuns = () => {
   const [albuns, setAlbuns] = useState([]);


   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums?_limit=20")
         .then((response) => {
            setAlbuns(response.data)
         })
         .catch((err) => {
            console.log(err)
         })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <section className="itensContainer">
         <div className="buscaContainer">
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
      </section >
   );
}

export default Albuns;