import React from 'react';

function App() {
  // Heading element using JSX
  const heading = <h1>Office Space Rental</h1>;

  // Image attribute using JSX
  const imageUrl = "https://via.placeholder.com/400x200?text=Office+Space";

  // Single object for one office
  const singleOffice = {
    name: "Prestige Tech Park",
    rent: 55000,
    address: "Whitefield, Bangalore"
  };

  // List of office objects
  const officeList = [
    { name: "Mindspace", rent: 75000, address: "Hyderabad" },
    { name: "Tidel Park", rent: 60000, address: "Chennai" },
    { name: "WTC", rent: 95000, address: "Pune" },
    { name: "Startup Hub", rent: 40000, address: "Kochi" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img src={imageUrl} alt="Office" style={{ width: '400px', height: '200px' }} />

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {singleOffice.name}</p>
      <p><strong>Rent:</strong> <span style={{ color: singleOffice.rent < 60000 ? 'red' : 'green' }}>{singleOffice.rent}</span></p>
      <p><strong>Address:</strong> {singleOffice.address}</p>

      <h2>All Office Listings</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {office.name}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
                {office.rent}
              </span>
            </p>
            <p><strong>Address:</strong> {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;