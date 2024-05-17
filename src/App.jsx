import { useRef } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
function App() {
  const projTrig = useRef();
  const skillSec = useRef();
  const aboutSec = useRef();
  const contactSec = useRef();
  useGSAP(() => {
    gsap.fromTo("#hero #herohead p, #hero #heroimg, #herobtn button", {
      opacity: 0,
      y: 20,
      scale: 1.1
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      delay: 0.3,
      stagger: {
        each: 0.1
      },
      ease: "elastic.out"
    })

    gsap.fromTo("li", {
      opacity: 0,
      y: 20,
      scale: 1.1
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      delay: 0.3,
      stagger: {
        each: 0.2
      },
      ease: "elastic.out"
    })

    gsap.fromTo(".whitebtn", {
      opacity: 0,
      y: 20,
      scale: 1.1
    }, {
      scrollTrigger: {
        trigger: ".whitebtn",
        start: "top 80%",
        toggleActions: 'restart pause resume reset'
      },
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: {
        each: 0.1
      },
      ease: "elastic.out"
    })

    gsap.fromTo("#abtimg", {
      opacity: 0,
      x: 100,
    }, {
      scrollTrigger: {
        trigger: "#abtimg",
        start: "top 60%",
        toggleActions: "restart pause resume reset",
      },
      opacity: 1,
      x: 0,
      ease: "power1.in"
    })
  }, [])

  useGSAP(() => {
    const pjts = gsap.utils.toArray(projTrig.current.children);
    pjts.splice(0, 1);
    let i = 0;
    pjts.forEach((proj) => {
      gsap.fromTo(proj, {
        x: (i % 2 == 0) ? 10 : -10,
        opacity: 0
      }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: proj,
          end: "bottom bottom",
          // toggleActions: 'restart pause resume none',
          scrub: true
        },
        ease: "power1.in"
      })
      i++;
    })
  }, { scope: projTrig })

  return (
    <>
      <header>
        <nav>
          <img src="" alt="" />
          <ul>
            <li><a href='#' onClick={() => aboutSec.current?.scrollIntoView({
  behavior: 'smooth'
}) }>About Me</a></li>
            <li><a href='#' onClick={() => skillSec.current?.scrollIntoView({
  behavior: 'smooth'
}) }>Skills</a></li>
            <li><a href='#' onClick={() => projTrig.current?.scrollIntoView({
  behavior: 'smooth'
}) }>Project</a></li>
            <li><a href='#' onClick={() => contactSec.current?.scrollIntoView({
  behavior: 'smooth'
}) }>Contact Me</a></li>
          </ul>
          <button id='resume'>Resume<i className="fa-solid fa-download"></i></button>
        </nav>
      </header>
      <main>
        <section id='hero'>
          <div id='herohead'>
            <p className='herotitle'>
              Hello I’am <span className='herobold'>Adithya.</span><br /><span className='herobold'>FullStack</span> <span className='herohollow'>Developer</span><br />Based In <span className='herobold'>India.</span>
            </p>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa debitis officiis ea laudantium. Aliquid nemo qui eum rerum, earum eligendi sit eos repellat quaerat inventore odio dolorum velit laborum autem a nobis at consequatur consectetur, quam odit facilis alias ea expedita magni! Est reprehenderit possimus itaque facere, tempore provident!</p>
            <div id='herobtn'>
              <button className='blackbtn'><i className="fa-brands fa-discord"></i></button>
              <button className='blackbtn'><i className="fa-brands fa-discord"></i></button>
              <button className='blackbtn'><i className="fa-brands fa-discord"></i></button>
              <button className='blackbtn'><i className="fa-brands fa-discord"></i></button>
            </div>
          </div>
          <div id='heroimg'>
            <img src="/hero.svg" alt="" />
          </div>
        </section>
        <section id="skills" ref={skillSec}>
          <p className='herotitle'>My <span className="herobold">Skills</span></p>
          <div id="skillcont">
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-discord"></i><p>Lorem</p></div></div>
          </div>
        </section>
        <section id="about" ref={aboutSec}>
          <div id='abthead'>
            <div id='abtimg'>
              <img src="/about.svg" alt="" />
            </div>
            <div id='aboutme'>
              <p className='herotitle'>About <span className="herobold">Me</span></p>
              <p className='desc'>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
              <p className='desc'>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
              <p className='desc'>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
            </div>
          </div>
        </section>
        <section id="projects" ref={projTrig}>
          <p className='herotitle'>My <span className="herobold"> Projects</span></p>
          <div className="project">
            <div className="pjtimg"><img src="/proj1.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">01</p>
              <p className="pname">University Event Management System<br />| MERN</p>
              <p className="desc">Simplified the organization and participation in university events.
                KeyFeatures: Implemented a streamlined booking process for meeting rooms,
                reducing scheduling conflicts by 40% and enhancing team productivity by 25%</p>
              <i className="plink fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div className="project">
            <div className="pjtimg"><img src="/proj1.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">02</p>
              <p className="pname">Gujarat Mangrove Analysis<br />|DataCube</p>
              <p className="desc">Simplified the organization and participation in university events.
                KeyFeatures: Implemented a streamlined booking process for meeting rooms,
                reducing scheduling conflicts by 40% and enhancing team productivity by 25%</p>
              <i className="plink fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div className="project">
            <div className="pjtimg"><img src="/proj1.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">01</p>
              <p className="pname">University Event Management System | MERN</p>
              <p className="desc">Simplified the organization and participation in university events.
                KeyFeatures: Implemented a streamlined booking process for meeting rooms,
                reducing scheduling conflicts by 40% and enhancing team productivity by 25%</p>
              <i className="plink fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
          <div className="project">
            <div className="pjtimg"><img src="/proj1.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">01</p>
              <p className="pname">University Event Management System | MERN</p>
              <p className="desc">Simplified the organization and participation in university events.
                KeyFeatures: Implemented a streamlined booking process for meeting rooms,
                reducing scheduling conflicts by 40% and enhancing team productivity by 25%</p>
              <i className="plink fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>

        </section>
        <section id="contact" ref={contactSec}>
          <div id="contactcont">
            <div id="inputarea">
              <input type="text" name="name" id="name" placeholder='name'/>
              <input type="email" id='email' placeholder='email'/>
              <input type="url" id='website' placeholder='Your Website (if exists)'/>
              <textarea name="help" id="help" rows={10} placeholder='How can i help?'></textarea>
              <button type='button'>Get In Touch</button>
            </div>
            <div id="textArea">
              <p className='herotitle'><span className='herobold'>Let’s</span> <span className="herohollow">talk</span> <span className="herobold">for Something Special</span></p>
              <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsam doloribus porro omnis eos odio dolorum voluptas consectetur delectus eligendi?</p>
              <p>periketi.adithyachary@gmail.com</p>
              <p>7993261332</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
