import React, { useEffect, useState } from "react";
import axios from "axios";
import "../global.css";

const Albuns = () => {
  const [albuns, setAlbuns] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(albuns.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentAlbuns = albuns.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?_limit=100")
      .then((response) => {
        setAlbuns(response.data);
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

        {Array.from(Array(pages), (task, index) => {
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
        {currentAlbuns.map((album, id) => {
          return (
            <div key={id} className="item">
              <div className="card">
                <p className="itemDescription">{album.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Albuns;
