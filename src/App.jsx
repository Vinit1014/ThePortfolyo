import "./App.css";
import "../css/plugins.css";
import "../css/colors.css";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader"; // Import the Preloader component
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";

export const API_URL =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
    // getUserData(API_URL);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // const getUserData = async(url)=>{
  //   console.log("I git");
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // }

  return (
    <div>
      {loading ? (
        <Preloader /> // Render the Preloader component if loading is true
      ) : (
        <div className="">
          <Topbar />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Video />
          <Testimonials />
          <News />
          <Contact />
          <Copyright />
        </div>
      )}
    </div>
  );
}

export default App;

// return (
//   <div className="w-full h-auto clear-both float-left relative box-border">
//     <h1 className="text-3xl font-bold underline">Hello world</h1>
//   </div>
// );
