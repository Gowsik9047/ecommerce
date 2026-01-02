import './App.css'
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

import Auth from './auth/auth'
import Dashboard from './component/dashboard'

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

  return user ? <Dashboard /> : <Auth />;
}
export default App
