import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Fetch all communities from the API
    fetch('https://65bd8dd8b51f9b29e9338ba8.mockapi.io/api/v1/communities')
      .then(response => response.json())
      .then(data => setCommunities(data))
      .catch(error => console.error('Error fetching communities:', error));
  }, []);

  return (
    <div>
      <h2>Communities</h2>
      <ul>
        {communities.map(community => (
          <li key={community.id}>
            <Link to={`/community/${community.id}`}>{community.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communities;
