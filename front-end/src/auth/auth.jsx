import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import googleLogo from "../assets/googleimg.png";
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // 🔐 Email & Password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (!isLogin && !name)) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('check Login', isLogin);
        console.log(auth, email, password);
        alert("Login successful");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('check Account Created', isLogin);
        console.log(auth, email, password);
        alert("Account created");
      }
    } catch (err) {
      console.log('login & acc created error', err.message);
      setError(err.message);
    }
  };

  // 🔵 Google Login
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log('Google login', auth, provider);
    alert("Google login success");
  };

  // ✉️ Email Link Login
  const emailLinkLogin = async () => {
    const actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true,
    };

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    localStorage.setItem("emailForSignIn", email);
    console.log('Mail Link send', auth, email, actionCodeSettings);
    alert("Magic link sent to email");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT BRAND PANEL */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Welcome to Your App
          </h1>
          <p className="text-lg opacity-90">
            Secure authentication system with modern UI, responsive design,
            and dark mode support.
          </p>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isLogin ? "Sign In" : "Create Account"}
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {isLogin
              ? "Enter your credentials to access your dashboard"
              : "Fill in the details below to get started"}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none
                dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none
              dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none
              dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700
              text-white font-semibold transition cursor-pointer"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* GOOGLE BUTTON (NO ICON) */}
          <button
            onClick={googleLogin}
            className="w-full py-3 border rounded-lg text-gray-700 dark:text-gray-300
            hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            <img src={googleLogo} alt="Google Icon" className="w-7 h-7 mr-2 inline-block" />
            Continue with Google
          </button>

          {/* Email Link
          <button
            onClick={emailLinkLogin}
            className="mt-2 w-full text-sm text-indigo-600"
          >
            Login with Email Link
          </button> */}

          {/* SWITCH */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-indigo-600 font-semibold hover:underline cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}