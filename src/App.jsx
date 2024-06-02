import React from "react";
import {
  Background,
  Navbar,
  Welcome,
  Features,
  Advantages,
  Testimonials,
  FrequentlyAskedQuestions,
  Highlights,
  Footer,
} from "./coponents";

function App() {
  return (
    <div className="relative h-screen w-full overflow-y-auto  m-0 p-0 overflow-x-hidden ">
      <Background />
      <div className="relative z-10  w-full backdrop-blur-xl dark:bg-[#181a20] dark:text-white ">
        <Navbar />
        <Welcome />
        <Features />
        <Advantages />
        <Testimonials />
        <FrequentlyAskedQuestions />
        <Highlights />
        <Footer />
      </div>
    </div>
  );
}

export default App;
