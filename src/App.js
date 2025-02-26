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
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
