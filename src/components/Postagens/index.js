import React, { useEffect, useState } from "react";
import axios from "axios";
import "../global.css";

const Postagens = () => {
  const [posts, setPosts] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(posts.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=100")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  return (
    <section className="itensContainer">
      <div className="pagesBtn">
        <select
          onChange={(event) => setItensPerPage(Number(event.target.value))}
          className="opt"
          value={itensPerPage}
        >
          <option className="opt" value={10}>
            10
          </option>
          <option className="opt" value={15}>
            15
          </option>
          <option className="opt" value={20}>
            20
          </option>
        </select>
        {Array.from(Array(pages), (page, index) => {
          return (
            <button
              value={index}
              style={index === currentPage ? { color: "#fafafa" } : {}}
              disabled={index === currentPage}
              onClick={(event) => setCurrentPage(Number(event.target.value))}
              className="pageBtn"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="boxContainer">
        {currentPosts.map((post, id) => {
          return (
            <div key={id} className="item">
              <h2 className="postsTitle">{post.title}</h2>
              <p className="postsBody">{post.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Postagens;
