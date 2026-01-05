import './App.css'
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

import Auth from './auth/auth'
import Home from './component/home'
import Header from './component/header';
import Footer from './component/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // important

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // stop loading
    });

    return () => unsubscribe(); // cleanup
  }, []);

  // show loader while checking auth
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return user ?
    <div className='App'>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div> : <Auth />;
}
export default App
