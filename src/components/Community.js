import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Community = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    // Fetch community details from the API
    fetch(`https://65bd8dd8b51f9b29e9338ba8.mockapi.io/api/v1/communities/${id}`)
      .then(response => response.json())
      .then(data => setCommunity(data))
      .catch(error => console.error('Error fetching community details:', error));
  }, [id]);

  return (
    <div>
      <h2>Community Details</h2>
      {community ? (
        <div>
          <p>Name: {community.name}</p>
          <p>County: {community.county}</p>
          <Link to={`/community/${id}/properties`}>View Properties</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Community;
