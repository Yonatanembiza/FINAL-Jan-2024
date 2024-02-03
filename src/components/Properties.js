import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const Properties = () => {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties for a specific community from the API
    fetch(`https://65bd8dd8b51f9b29e9338ba8.mockapi.io/api/v1/communities/${id}/properties`)
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, [id]);

  return (
    <div>
      <h2>Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <Link to={`/property/${property.id}`}>{property.type} - Price: {property.price}</Link>
          </li>
        ))}
      </ul>
      <Link to={`/community/${id}/add-property`}>Add Property</Link>
    </div>
  );
};

export default Properties;
