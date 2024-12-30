import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import Intro from "./components/Intro";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import StackingCard from "./components/StackingCard";
import Header from "./components/Header";



function App() {
  return (
   <>
   <Header/>
   <Intro />
   <Canvas>
    <Experience />
   </Canvas>
   
   <Featured />
   <Cards />
   <StackingCard />
   <Footer />
   </>  
  );
}

export default App;
