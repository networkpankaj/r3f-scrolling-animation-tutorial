
import Intro from "./components/Intro";
// import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import StackingCard from "./components/StackingCard";
import Header from "./components/Header";

import Marquee from "./components/Marque";
import About from "./components/About";
import Pricing from "./components/Pricing";
import  Workflow  from "./components/Workflow";


function App() {
  return (
    <>
      <Header />
      <Intro />
      <Marquee />
      <About />
      <Pricing />
      <Workflow />
      {/* <Featured /> */}
      <Cards />
      <StackingCard />
      <Footer />
    </>
  );
}

export default App;
