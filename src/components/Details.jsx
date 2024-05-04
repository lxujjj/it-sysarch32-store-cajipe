import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import {db} from "../config/firebase";
import { doc, getDoc } from 'firebase/firestore';


function Details() {
  const { id } = useParams(); // Use useParams to get the id from the URL
  const [tshirtDetails, setTshirtDetails] = useState(null);

  useEffect(() => {
    const getTShirtDetails = async () => {
      const tshirtRef = doc(db, 'tshirts', id); // Create Firestore document reference using the id
      try {
        const docSnap = await getDoc(tshirtRef); // Fetch the document snapshot
        if (docSnap.exists()) {
          setTshirtDetails(docSnap.data()); // Set the state with the document data
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    getTShirtDetails(); // Call the function to fetch document details
  }, [id]); // Trigger effect when id changes

  return (
    <div>
      <h2>Product Details</h2>
      {tshirtDetails ? (
        <div className="tshirts-container">
          <div key={tshirtDetails.id} className="tshirt-card">
            {tshirtDetails.image && (
              <img
                className="tshirt-image"
                src={tshirtDetails.image}
                alt={tshirtDetails.name}
              />
            )}
            <div className="tshirt-details">
              <h2 className="brand">{tshirtDetails.brand}</h2>
              <p className="name">{tshirtDetails.name}</p>
              <p className="price">Price: ₱{tshirtDetails.price}</p>
              <p className="stocks">Stocks: {tshirtDetails.stocks}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;