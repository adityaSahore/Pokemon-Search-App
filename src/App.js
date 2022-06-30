import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/pokemon");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //GET CURRENT POST
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 id="header">
        POKÉMON APP <small> by: ADITYA SAHORE</small>
      </h1>
      <div className="searchBar">
        <h4>Search Pokémon</h4>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        currentPosts
          .filter((post) => {
            if (searchName === "") {
              return post;
            } else if (
              post.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <ul className="list-group mb-4">
              <li key={post.id} className="list-group-item">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src={post.img}
                      style={{
                        height: 150,
                        width: 150,
                        marginLeft: 150,
                      }}
                    />
                  </div>
                  <div
                    className="col-sm-6"
                    style={{
                      height: 150,
                      width: 150,
                      fontSize: 15,
                      paddingTop: 5,
                      paddingRight: 0,
                    }}
                  >
                    <span id="name">
                      <b>Name</b>: {post.name}
                    </span>
                    <br />
                    <span>
                      <b>CP</b>: {post.CP}
                    </span>
                    <br />
                    <span>
                      <b>HP</b>: {post.HP}
                    </span>
                    <br />
                    <span>
                      <b>Defense</b>: {post.Defense}
                    </span>
                    <br />
                    <span>
                      <b>Attack</b>: {post.Attack}
                    </span>
                    <br />
                    <span>
                      <b>Type</b>: {post.type}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          ))
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
