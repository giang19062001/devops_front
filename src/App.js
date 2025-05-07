import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(`${process.env.REACT_APP_BACKEND}/products`)
         .then((response) => setData(response.data))
         .catch((error) => console.error(error));
   }, []);

   return (
      <div>
         <h1>Product List</h1>
         <ul style={{display:"flex", flexDirection:"column", gap:5}}>
            {data.map((product) => (
               <li key={product.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={`${process.env.REACT_APP_BACKEND}/${product.image}`} alt="" style={{ width: 150 }} />
                  <b>{product.name}</b>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;
