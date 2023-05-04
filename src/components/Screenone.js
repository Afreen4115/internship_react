
import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import './style.css';

const ScreenOne = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate(); // declare useNavigate

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setShows(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleClick = (id) => {
    navigate(`/show/${id}`); // use navigate to redirect to the show page
  }

  return (
    <div className="screen-one">
      <h1>TV Shows</h1><br/><br/><br/><br/>
      <div className="card-container">
        {shows.map(show => (
          <div className="card" key={show.show.id} onClick={() => handleClick(show.show.id)}>
            <img src={show.show.image?.medium} alt={show.show.name} />
           <br/><br/> <button className='button'><h2>{show.show.name}</h2></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenOne;
