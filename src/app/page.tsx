import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Blogs/>
      <Footer/>
    </div>
  );
}
