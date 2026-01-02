import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import Navbar from "./navbar";
import CardList from "./card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {

  const [mobile, setMobile] = useState([]);
  const [petfood, setPetfood] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetchCategory("mobile", setMobile);
    fetchCategory("petfood", setPetfood);
    fetchCategory("accessories", setAccessories);
  }, []);

  const fetchCategory = async (category, setState) => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/products/category/${category}`
    );
    setState(res.data.products);
  };
  return (
    <div >
      <Navbar />
      <Header />
      {/* <ProductGrid products={mobile} />
      <ProductGrid products={petfood} />
      <ProductGrid products={accessories} /> */}
      <Home />
      <Footer />
    </div>
  );
}