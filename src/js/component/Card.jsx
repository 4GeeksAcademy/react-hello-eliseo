import React from "react";

const Card = ({ link }) => {
    return (
      <div className="card text-center m-2" style={{ width: "15rem" }}>
        <img src="https://img.freepik.com/free-photo/gray-background-with-dark-blue-background_1340-42968.jpg" className="card-img-top" alt="img" />
        <div className="card-body p-0">
          <h5 className="card-title text-center">Card title</h5>
          <p className="text-center mx-2" style={{ fontSize: "0.70rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia. Vel quia qui, reiciendis totam, blanditiis quasi quod similique suscipit illum corrupti animi iusto, ab dicta omnis inventore pariatur unde.</p>
          <div className="card-footer">
          <a href={link} className="btn btn-primary text-center">Find out more!</a>
          </div>
        </div>
      </div>
    );
};

export default Card;