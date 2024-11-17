import Hero from "./component/Hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skill from "./component/Skill";


export default function Home(){
  return(
    <div>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Skill />
    </div>
  )
}