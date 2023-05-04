import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./mystyle.css";

const ScreenTwo = () => {
  const [show, setShow] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="screen-two">
    <div className="cardd">
      {show.image && (
        <div className="cardd-image">
          <img src={show.image.medium} alt={show.name} />
        </div>
      )}
      <div className="cardd-content">
        <h1>{show.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        <div className="cardd-button">
          <Link to={`/apply/${id}`} className="buttonn">
            Book Movie Ticket
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ScreenTwo;
