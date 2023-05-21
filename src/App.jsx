import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Creating from "./components/Creating";
import Science from "./components/Science";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";


const App = () => {
  const contentHeading = "Creating content For";
  const secondHeading = "NUMBER THAT SPEAK LOUDER THAN WORDS";

  return (
    <main>
      <Navbar />
      <Hero />
      <Creating contentHeading={contentHeading} showImageContent={true} />
      <Science />
      <Creating contentHeading={secondHeading} />
      <Business/>
      <Card/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
