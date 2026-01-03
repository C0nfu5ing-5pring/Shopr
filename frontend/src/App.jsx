import axios from "./api/axiosconfig";
import { useEffect } from "react";

const App = () => {
  const getProduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return <div></div>;
};

export default App;
