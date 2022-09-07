import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/products.json?key=f4d18fd0")
      .then((result) => setData(result.data));
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Product Screen</h1>
    </div>
  );
};

export default ProductScreen;
