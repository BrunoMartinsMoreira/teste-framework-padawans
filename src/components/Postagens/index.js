import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header'

const Postagens = () => {

   const [posts, setPosts] = useState([]);
   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((response) => {
            setPosts(response.data)
            console.log(posts)
         })
         .catch((err) => {
            console.log(err)
         })
      // eslint-disable-next-line react-hooks/exhaustive-deps     
   }, []);

   return (
      <section>
         <Header />
         <div>
            {posts.map((post) => {
               return (
                  <div>
                     <h2>{post.title}</h2>
                     <p>{post.body}</p>
                  </div>
               )
            })}
         </div>

      </section>
   );
}

export default Postagens;