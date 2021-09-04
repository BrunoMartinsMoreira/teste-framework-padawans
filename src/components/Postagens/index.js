import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../global.css';

const Postagens = () => {

   const [posts, setPosts] = useState([]);
   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=20")
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
      <section className="itensContainer">
         <div className="boxContainer">
            {posts.map((post) => {
               return (
                  <div className="item">
                     <h2 className="postsTitle">{post.title}</h2>
                     <p className="postsBody">{post.body}</p>
                  </div>
               )
            })}
         </div>
      </section>
   );
}

export default Postagens;