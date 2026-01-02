import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import Navbar from "./navbar";
import CardList from "./card";

export default function Dashboard() {
  return (
    <div >
      <Navbar />
      <Header />
      <CardList />
      <Home />
      <Footer />
    </div>
  );
}