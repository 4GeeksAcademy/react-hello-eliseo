import React from "react";

const Jumbotron = ({ link }) => {
    return (
      <div className="card m-2 bg-secondary" style={{ width: "auto" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "3rem" }}>A warm Welcome!</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia. Vel quia qui, reiciendis totam, blanditiis quasi quod similique suscipit illum corrupti animi iusto, ab dicta omnis inventore pariatur unde.</p>
          <a href={link} className="btn btn-primary">Call to action!</a>
        </div>
      </div>
    );
  };
  
  export default Jumbotron;