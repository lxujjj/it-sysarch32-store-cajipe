import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css'
import Header from "../components/Header.jsx";
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
    <div className="container">
          <Header/>
      {tshirtDetails ? (
        <div className="product-details">
          {tshirtDetails.image && (
            <img
              className="product-image"
              src={tshirtDetails.image}
              alt={tshirtDetails.name}
            />
          )}
          <div className="product-info">
            <h1 className="name">{tshirtDetails.name}</h1>
            <br></br>
            <p className="price">Price: ₱{tshirtDetails.price}</p>
            <p className="stocks">Stocks: {tshirtDetails.stocks}</p>
            <button className="size-button">
              S
            </button>
            <button className="size-button">
              M
            </button>
            <button className="size-button">
              L
            </button>
            <button className="size-button">
              XL
            </button>
            <br></br>
            <button className="add-to-cart">
              Add to Cart
            </button>
            <p className="earn">Earn up to 2 ABS Points calculated at checkout.</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default Details;