import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="row">
      <div className="col-md-3">
        <ul className="list-group mb-4">
          {posts.map((post) => (
            <li id="name" key={post.id} className="list-group-item">
              <img
                src={post.img}
                style={{
                  height: 150,
                  width: 150,
                }}
              />
              <br />
              Name: {post.name}
              <br />
              CP:{post.CP}
              <br />
              HP:{post.HP}
              <br />
              Defense:{post.Defense}
              <br />
              Attack:{post.Attack}
              <br />
              Type:{post.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
