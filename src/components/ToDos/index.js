import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../global.css';

const Tasks = () => {

   const [tasks, setTasks] = useState([]);
   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
         .then((response) => {
            setTasks(response.data)
         })
         .catch((err) => {
            console.log(err)
         })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <section className="itensContainer">
         <div className="boxContainer">
            {tasks.map((task) => {
               return (
                  <div className="item" >
                     <div className="card">
                        <p className="itemDescription">{task.title}</p>
                     </div>
                  </div>
               )
            })}
         </div>
      </section >
   );
}

export default Tasks;