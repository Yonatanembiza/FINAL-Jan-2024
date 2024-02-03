import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const Property = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property details from the API
    fetch(`https://65bd8dd8b51f9b29e9338ba8.mockapi.io/api/v1/properties/${id}`)
      .then(response => response.json())
      .then(data => setProperty(data))
      .catch(error => console.error('Error fetching property details:', error));
  }, [id]);

  return (
    <div>
      <h2>Property Details</h2>
      {property ? (
        <div>
          <p>Type: {property.type}</p>
          <p>Price: {property.price}</p>
          <p>Community ID: {property.communityId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Property;
