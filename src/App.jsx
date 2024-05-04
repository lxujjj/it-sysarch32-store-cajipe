// import React, { useEffect, useState } from 'react';
// import './App.css'
// import {db} from "./config/firebase";
// import {getDocs, collection} from 'firebase/firestore';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import Details from "./components/Details";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Details/>}/>
      </Routes>
    </Router>
  );
}


// function App() {
//   const [tshirts, setTShirts] = useState([]);

//   const tshirtsCollectionRef = collection(db, "tshirts");

// useEffect(() => {
//   const getTShirts = async () => {

//     try {
//     const data = await getDocs(tshirtsCollectionRef);
//     const filteredData = data.docs.map((doc) => ({
//       ...doc.data(), 
//       id: doc.id,
//     }));

//     setTShirts(filteredData);
//     } catch (err) {
//         console.error(err);
//     }
//     };

//     getTShirts();
//   }, []);

//   const handleBuyNow = (itemId) => {
//     // Redirect to the specific item details screen based on itemId
//     window.location.href = `/components/details`;
//   };

//   return (
//     <div className="App">
//       <h1 className="main-heading">ALL BRANDS SHOP</h1>
//       <h2 className="list">Products List</h2>
//       <div className="tshirts-container">
//         {tshirts.map((tshirt) => (
//           <div key={tshirt.id} className="tshirt-card">
//             {tshirt.image && (
//               <img
//                 className="tshirt-image"
//                 src={tshirt.image}
//                 alt={tshirt.name}
//               />
//             )}
//             <div className="tshirt-details">
//               <h2 className="brand">{tshirt.brand}</h2>
//               <p className="name">{tshirt.name}</p>
//               <h3 className="price">Price: ₱{tshirt.price}</h3>
//               <p className="stocks">Stocks: {tshirt.stocks}</p>
//               <button className="buy-button" onClick={handleBuyNow}>Details</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default App;