import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import '../App.css'
import {db} from "../config/firebase";
import {getDocs, collection} from 'firebase/firestore';


function Home() {
  const [tshirts, setTShirts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const tshirtsCollectionRef = collection(db, "tshirts");

useEffect(() => {
  const getTShirts = async () => {

    try {
    const data = await getDocs(tshirtsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id,
    }));

    setTShirts(filteredData);
    } catch (err) {
        console.error(err);
    }
    };

    getTShirts();
  }, []);

  const handleDetailsClick = (id) => {
    setSelectedId(id);
  };
  return (
    <div className="App">
      <h1 className="main-heading">ALL BRANDS SHOP</h1>
      <h2 className="list">Products List</h2>
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <div key={tshirt.id} className="tshirt-card">
            {tshirt.image && (
              <img
                className="tshirt-image"
                src={tshirt.image}
                alt={tshirt.name}
              />
            )}
            <div className="tshirt-details">
              <h2 className="brand">{tshirt.brand}</h2>
              <p className="name">{tshirt.name}</p>
              <Link to={`/product/${tshirt.id}`} className="buy-button" onClick={() => handleDetailsClick(tshirt.id)}>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Display Details component based on selectedId */}
      {selectedId && <Details selectedId={selectedId} />}
    </div>
  );
}

export default Home;