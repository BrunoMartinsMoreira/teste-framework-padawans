import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackHomeBtn from '../../components/HomeBtn';

import "./album.css";

const Albuns = () => {
   const [albuns, setAlbuns] = useState([]);
   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums?_limit=20")
         .then((response) => {
            setAlbuns(response.data)
            console.log(albuns)
         })
         .catch((err) => {
            console.log(err)
         })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


   return (
      <section className="section">
         <header>
            <div className="back">
               <BackHomeBtn />
            </div>

         </header>
         <div className="main">
            {albuns.map((album) => {
               return (
                  <div className="container">
                     <div className="card">
                        <p>{album.title}</p>
                     </div>
                  </div>

               )
            })}
         </div>
      </section>
   );
}

export default Albuns;