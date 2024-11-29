import { useState , useEffect } from "react";
import Footer from "./components/Footer"
import Contact from "./components/Contact";

// Links
import { FaGithub , FaLinkedin , FaInstagramSquare , FaCode } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";

// Projects images
import Iotsolutins1 from "./assets/iotsolutions1 (1).jpg"
import Iotsolutins2 from "./assets/iotsolutions1 (2).jpg"
// Images
import ProfilePic from "./assets/jaggu-logo.png" 
import SkillReact from './assets/skill-react.svg'
import SkillHTML from './assets/skill-html.svg'
import Skillcss from './assets/skill-css.svg'
import Skilljs from './assets/skill-js.svg'
import Skillnode from './assets/skill-nodejs.svg'
import Skillsql from './assets/skill-postgresql.svg'
import Skillmdb from './assets/skill-mongodb.svg'
import Skillexpress from './assets/skill-express-js.svg'
import Skilljava from './assets/skill-java.svg'
// My CV
import Cv from "./assets/Cv.pdf"
const images = [Iotsolutins1,Iotsolutins2];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <div className="bg-white flex flex-col ">
      {/* Navbar */}
      <div className="w-screen h-20 fixed flex flex-shrink items-center opacity-85 bg-black text-white">
        <div className="flex gap-4 pl-8 items-center w-full md:w-auto">
          <img src={ProfilePic} alt="Profilepic" className="w-12 h-12  rounded" />
          <a href="#home">
            <p className="text-3xl sm:w-[24rem] flex-grow lg:w-[52rem] max-[490px]:text-xl font-bold  font-f2">Jagadeesh Chakali</p>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 pr-14 text-xl">
          <a className="hover:underline rounded-full text-center px-1" href="#home">Home</a>
          <a className="hover:underline rounded-full text-center px-1" href="#about">About</a>
          <a className="hover:underline rounded-full text-center px-1" href="#projects">Projects</a>
          <a className="hover:underline rounded-full text-center px-1" href="#contact">Contact</a>
        </div>
        <button className="text-white text-4xl mr-8 md:hidden max-[490px]:p-1 max-[490px]:mr-2 p-6" onClick={() => setMenuOpen(!menuOpen)}>
          <BsList />
        </button>
        {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white opacity-75 text-opacity-100 flex flex-col items-center text-xl gap-4 py-4">
          <a className="hover:underline rounded-full text-center px-1" href="#home">Home</a>
          <a className="hover:underline rounded-full text-center px-1" href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="hover:underline rounded-full text-center px-1" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a className="hover:underline rounded-full text-center px-1" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
      </div>
      {/* Side bar */}
      <div className="w-14 max-[490px]:w-10 max-[490px]:p-2 p-4 text-white opacity-85 bg-[#7843E9] flex flex-col gap-8 rounded-lg  fixed left-1 top-1/4 ">
        <a href="https://github.com/JagguJagadeesh"  target='_blank'><FaGithub className='text-3xl max-[490px]:text-xl '/></a>
        <a href='https://www.linkedin.com/in/jagadeesh15/' target='_blank'><FaLinkedin className='text-3xl max-[490px]:text-xl'/></a>
        <a href='https://x.com/JagguJagadieesh' target='_blank'><FaSquareXTwitter className='text-3xl max-[490px]:text-xl'/></a>
        <a href='https://leetcode.com/u/Jagadeesh02/' target='_blank'><SiLeetcode className='text-3xl max-[490px]:text-xl'/></a>
        <a href='https://www.instagram.com/j.a.g.a.d.e.e.s.h_15/' target='_blank'><FaInstagramSquare className='text-3xl max-[490px]:text-xl'/></a>
        <a href='mailto:jaggujagadeesh447@gmail.com' ><CiMail className='text-3xl max-[490px]:text-xl'/></a>
      </div>
      {/* Scroll UP */}
      <div className="w-14 h-14  flex rounded-full opacity-85 bg-[#7843E9] text-white text-2xl max-[460px]:w-8  items-center justify-center fixed right-10 bottom-10">
        <a href="#home" className="ease-out p-4"><IoIosArrowUp/></a>
      </div>
      {/* Home */}
      <section className=" pb-20 pt-20  flex flex-col bg-white bg-current  justify-center items-center  " id="home" >
        <div className="text-center container text-wrap  ">
          <p className="text-6xl font-extrabold font-f3 text-center  mb-10">HEY, I'M <span className="text-[#7843E9]">JAGADEESH CHAKALI</span></p>
          <p className="text-2xl text-center font-f3 px-18 mt-4 ">I'm a computer enginering student and a MERN developer.</p>
        </div>
        <a className=" mt-20 px-24 max-[490px]:px-10 py-3 text-xl rounded-lg border-solid text-white border-2 border-black bg-[#7843E9] hover:bg-[#8653f2]" href={Cv} download="Jagadeesh_CV" role="button">Download CV</a>
      </section>
      {/* My Skills */}
      <section className=" p-10 ">
        <div className="text-center  mb-4 container font-f3 font-bold text-6xl"><p>My Skills</p><p className="font-f3 text-4xl font-normal text-[#7843E9]">---</p></div>
        <br />
        <div className=" flex flex-wrap justify-center  gap-14 ">
        <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skilljava} alt="Skill" className='w-36 h-20' />
            <p>Java</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={SkillHTML} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>Html</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skillcss} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>CSS</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skilljs} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>JavaScript</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={SkillReact} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>React js</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skillnode} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>Node js</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skillexpress} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>Express js</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skillmdb} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>MongoDB</p>
          </div>
          <div className='flex flex-col items-center p-2 gap-1  '>
            <img src={Skillsql} alt="Skill" className='w-36 max-[490px]:w-16 h-20' />
            <p>PostgreSQL</p>
          </div>
        </div>
      </section>
      {/* About */}
      <section className=" py-20 flex flex-col justify-center items-center pb-20 " id="about">
        <div className="text-center container text-wrap w-[56rem] max-[490px]:w-40">
          <p className="font-f3 font-bold text-6xl">ABOUT ME</p>
          <p className="font-f3 text-4xl text-[#7843E9]">---</p>
          <p className="font-f3 text-2xl max-[490px]:text-lg ">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div><br />
        <div className="container px-20 pt-10  ">
          <p className="font-semibold text-4xl">Get to know me!</p><br />
          <p className="font-f3 text-2xl">I'm a <span className="font-semibold">MERN Stack Developer</span> building and managing the Front-end and Back-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="underline text-[#6810ff]"><a href="#projects">Projects</a></span> section.</p><br />
          <p className="font-f3 text-2xl">I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className="underline text-[#6810ff]"><a href="https://www.linkedin.com/in/jagadeesh15/">Linkedin</a></span> and <span className="underline text-[#6810ff]"><a href="https://x.com/JagguJagadieesh">X</a></span> where I post useful content related to Web Development and Programming</p><br />
          <p className="font-f3 text-2xl">I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to Contact me.</p>
        </div>
        <a href="#contact" className="bg-[#7843E9] text-white mt-20 px-24 max-[490px]:px-10 py-3 border-black border-2 border-solid text-xl rounded-lg hover:bg-[#ae7eff]">Contact</a>
      </section>
      {/* Projects */}
      <section className="p-10 px-14 py-20 " id="projects">
        <div className="text-center  container font-f3 font-bold text-6xl"><p>Projects</p><p className="font-f3 text-4xl font-normal text-[#7843E9]">---</p></div>
        <br /><br />
        <div className="flex flex-col">
          <div className="  flex p-2 max-[490px]:flex-col  ">
            <div className="  px-4">
              <img src={images[imageIndex]}  className="w-[790px]  rounded-lg h-96" alt="kjnx" />
            </div>
            <div className=" container text-wrap p-4  px-4">
              <p className="text-4xl font-extrabold font-f3">IotSolutions</p><br />
              <p className=" text-xl font-medium font-f3">IoT Solutions, your one-stop online store for cutting-edge Internet of Things (IoT) devices! Discover a wide range of smart gadgets, from home automation systems and wearable tech to industrial IoT solutions, all designed to simplify and enhance your life. Our curated collection features the latest innovations, ensuring top quality, reliability, and seamless connectivity. Enjoy hassle-free shopping with detailed product guides, secure checkout, and fast delivery!</p>
              <a href="https://github.com/JagguJagadeesh/IOT_Solutions" target="_blank"  ><FaCode className="text-4xl w-20 mt-4 shadow-xl border-black rounded-lg border-s-2 border-b-2    " /></a>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className=" pt-20 pb-20 bg-opacity-90 flex flex-col justify-center items-center bg-background  easy-linear delay-200" id="contact">
        <div className="text-center mb-10 container text-wrap w-[56rem] max-[490px]:w-[20rem]">
          <p className="font-f3 font-bold text-6xl">Contact</p>
          <p className="font-f3 text-4xl text-[#7843E9]">---</p>
          <p className="font-f3 text-2xl ">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <Contact/>
      </section>
      <Footer />
      
    </div>
  )
}

export default App
