import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Import Link
import './styles.css'; // Import the CSS file

const AddProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState('');
  const [propertyPrice, setPropertyPrice] = useState('');

  const handleAddProperty = () => {
    // Implement logic to add a property to the community using a POST request to the API
    fetch(`https://65bd8dd8b51f9b29e9338ba8.mockapi.io/api/v1/communities/${id}/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: propertyType,
        price: propertyPrice,
        communityId: id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Property added:', data);
        // Navigate to the properties page after adding the property
        navigate(`/community/${id}/properties`);
      })
      .catch(error => console.error('Error adding property:', error));
  };

  return (
    <div>
      <h2>Add Property</h2>
      <label>Type:</label>
      <input
        type="text"
        value={propertyType}
        onChange={e => setPropertyType(e.target.value)}
      />
      <br />
      <label>Price:</label>
      <input
        type="number"
        value={propertyPrice}
        onChange={e => setPropertyPrice(e.target.value)}
      />
      <br />
      <button onClick={handleAddProperty}>Add Property</button>
      {/* Back button using Link */}
      <Link to={`/community/${id}/properties`}>Back</Link>
    </div>
  );
};

export default AddProperty;
