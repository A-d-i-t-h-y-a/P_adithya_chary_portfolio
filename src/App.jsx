import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import emailjs from 'emailjs-com';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button, Divider, notification, Space } from 'antd';

gsap.registerPlugin(ScrollTrigger);
function App() {
  const projTrig = useRef();
  const skillSec = useRef();
  const aboutSec = useRef();
  const contactSec = useRef();
  const skillTrig = useRef();
  const [visible, setvisible] = useState((screen.width > 1138) ? true : false);
  const form = useRef();
  const [api, contextHolder] = notification.useNotification();

  const downloadResume = () => {
    // Replace 'resume.pdf' with the path to your PDF file
    const pdfUrl = '/Adithya_Chary_Periketi_Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Adithya_Chary_Periketi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xmdozrl', 'template_w4u0vgh', form.current, 'x36ElhzIBi4K3JpsE')
      .then(
        () => {
          api.success({
            message: `Success`,
            description:
              'Message Sent Successfully',
            placement: 'top',
            style: {
              backgroundColor: '#ccffcc',
              border: '1px solid #00ff00',
              borderRadius: '10px'
            },
          })
          e.target.reset();
        },
        (error) => {
          api.error({
            message: 'Error',
            description: 'Failed to send message. Please try again later.',
            placement: 'top',
            style: {
              backgroundColor: '#ffcccc',
              border: '1px solid #ff0000',
              borderRadius: '10px',
            },
          });
        },
      );
  };

  useEffect(() => {

  }, [visible])

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

    gsap.fromTo("#abtimg", {
      opacity: 0,
      x: 10,
    }, {
      scrollTrigger: {
        trigger: "#abtimg",
        start: `top ${screen.width < 1138 ? "100%" : "60%"}`,
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
          start: `top ${screen.width < 1138 ? "140%" : "70%"}`,
          end: `bottom ${screen.width < 1138 ? "140%" : "70%"}`,
          // toggleActions: 'restart pause resume none',
          scrub: true
        },
        ease: "power1.in"
      })
      i++;
    })
  }, { scope: projTrig })

  useGSAP(() => {
    const skills = gsap.utils.toArray(skillTrig.current.children);
    skills.forEach((skill) => {
      gsap.fromTo(skill, {
        opacity: 0,
        y: 20,
        scale: 1.1
      }, {
        scrollTrigger: {
          trigger: skill,
          start: `top ${screen.width < 1138 ? "130%" : "70%"}`,
          toggleActions: 'restart pause resume reset',
          // markers: true
        },
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: {
          each: 0.2
        },
        ease: "elastic.out"
      })
    })
  }, { scope: skillTrig })

  return (
    <>
      <header>
        <nav>
          {visible && <ul>
            <li><a href='#' onClick={() => aboutSec.current?.scrollIntoView({
              behavior: 'smooth'
            })}>About Me</a></li>
            <li><a href='#' onClick={() => skillSec.current?.scrollIntoView({
              behavior: 'smooth'
            })}>Skills</a></li>
            <li><a href='#' onClick={() => projTrig.current?.scrollIntoView({
              behavior: 'smooth'
            })}>Project</a></li>
            <li><a href='#' onClick={() => contactSec.current?.scrollIntoView({
              behavior: 'smooth'
            })}>Contact Me</a></li>
          </ul>}
          <div id='navbtns'>
            <button id='resume' onClick={downloadResume}>Resume<i className="fa-solid fa-download"></i></button>
            <button id='hireme' onClick={() => window.location.href = "mailto: periketi.adithyachary@gmail.com"}>Hire Me</button>
            <i onClick={() => setvisible(!visible)} className="menu fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
      <hr />
      <main>
        <section id='hero'>
          <div id='herohead'>
            <p className='herotitle'>
              Hello I’am <span className='herobold'>Adithya.</span><br /><span className='herobold'>FullStack</span> <span className='herohollow'>Developer</span><br />Based In <span className='herobold'>India.</span>
            </p>
            <p className='desc'>I am a passionate and driven Computer Science and Engineering student at Keshav Memorial Institute of Technology. With a keen interest in software engineering and data analysis, I thrive on tackling complex problems and developing innovative solutions. My academic journey has equipped me with a strong foundation in programming languages like Java, Python, and JavaScript, along with practical experience in using tools such as Git, GitHub, and Docker. I am dedicated to continuous learning and growth in the tech industry, and I am excited to contribute my skills and enthusiasm to impactful projects that push boundaries and make a difference.</p>
            <div id='herobtn'>
              <a className='blackbtn' target='__blank' href='https://www.linkedin.com/in/adithya-chary-periketi-07121b23b/'><i className="fa-brands fa-linkedin"></i></a>
              <a className='blackbtn' target='__blank' href='https://github.com/A-d-i-t-h-y-a'><i className="fa-brands fa-github"></i></a>
              <a className='blackbtn' target='__blank' href='https://www.hackerrank.com/profile/periketi_adithy1'><i className="fa-brands fa-hackerrank"></i></a>
              <a className='blackbtn' target='__blank' href='https://leetcode.com/u/adithya_2022/'><i><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode"><path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path><path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path></svg></i></a>
            </div>
          </div>
          <div id='heroimg'>
            <img src="/hero.svg" alt="" />
          </div>
        </section>
        <section id="skills" ref={skillSec}>
          <p className='herotitle'>My <span className="herobold">Skills</span></p>
          <div id="skillcont" ref={skillTrig}>
            <div className='whitebtn'><div><i className="fa-brands fa-react"></i><p>React</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-node-js"></i><p>Node JS</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-js"></i><p>Javascript</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-bootstrap"></i><p>Bootstrap</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-html5"></i><p>HTML5</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-css3-alt"></i><p>CSS</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-git-alt"></i><p>Git</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-docker"></i><p>Docker</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-java"></i><p>Java</p></div></div>
            <div className='whitebtn'><div><i className="fa-brands fa-python"></i><p>Python</p></div></div>
          </div>
        </section>
        <section id="about" ref={aboutSec}>
          <div id='abthead'>
            <div id='abtimg'>
              <img src="/about.svg" alt="" />
            </div>
            <div id='aboutme'>
              <p className='herotitle'>About <span className="herobold">Me</span></p>
              <p className='desc'>I'm Adithya Chary Periketi, a dedicated and enthusiastic Computer Science and Engineering student at Keshav Memorial Institute of Technology. I specialize in full stack development, with a strong proficiency in technologies like React.js, Node.js, and Python. I am passionate about bringing both the technical and visual aspects of digital products to life, ensuring an excellent user experience, precise design, and writing clear, efficient code.</p>
              <p className='desc'>Throughout my journey in software development, I've had the opportunity to work on a variety of impactful projects. These experiences have enriched my skills in full stack development, particularly in technologies like React.js, Node.js, and Python. I've tackled diverse challenges, from enhancing user interfaces and optimizing backend performance to implementing robust data analysis solutions. </p>
              <p className='desc'>When I'm not coding, I enjoy playing sports to stay active and unwind. Additionally, I am constantly exploring and learning new technologies to expand my skill set and stay ahead of industry trends. Whether it's diving into the intricacies of machine learning algorithms or experimenting with emerging frameworks, I find joy in continuously enhancing my knowledge and staying curious about the ever-evolving tech landscape.</p>
            </div>
          </div>
        </section>
        <section id="projects" ref={projTrig}>
          <p className='herotitle'>My <span className="herobold"> Projects</span></p>
          <div className="project">
            <div className="pjtimg"><img src="/img-2.jpg" alt="" /></div>
            <div className="pdetails">
              <p className="sno">01</p>
              <p className="pname">University Event Management System<br />| MERN</p>
              <p className="desc">Simplified the organization and participation in university events.
                KeyFeatures: Implemented a streamlined booking process for meeting rooms,
                reducing scheduling conflicts by 40% and enhancing team productivity by 25%</p>
              <a href="https://mernuems.vercel.app/" target='__blank' className='plink'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="project">
            <div className="pjtimg"><img src="/proj2.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">02</p>
              <p className="pname">Gujarat Mangrove Analysis<br />|DataCube</p>
              <p className="desc">Simplified the organization and participation in university events.
                KeyFeatures: Implemented a streamlined booking process for meeting rooms,
                reducing scheduling conflicts by 40% and enhancing team productivity by 25%</p>
              <a href="https://github.com/A-d-i-t-h-y-a/gujarat_mangrove_analysis" target='__blank' className='plink'><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
          <div className="project">
            <div className="pjtimg"><img src="/proj3.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">03</p>
              <p className="pname">Document Verification | Deep Learning</p>
              <p className="desc"> Led the development of an online document verification system,
                facilitating seamless document uploads in multiple formats such as PDF and
                JPEG.Utilized machine learning algorithms to assess document authenticity,
                focusing on key features including logos, names, and signatures. Enhanced user
                confidence by ensuring accurate verification processes</p>
              <a href="https://github.com/A-d-i-t-h-y-a/PS3" target='__blank' className='plink'><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
          <div className="project">
            <div className="pjtimg"><img src="/proj4.png" alt="" /></div>
            <div className="pdetails">
              <p className="sno">04</p>
              <p className="pname">INotebook | MERN</p>
              <p className="desc">Developed a digital notebook application to streamline note
                management tasks. The project aimed to provide users with a secure and
                intuitive platform for organizing and accessing their notes conveniently</p>
              <a href="https://inbook.vercel.app/login" target='__blank' className='plink'><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

        </section>
        <section id="contact" ref={contactSec}>
          <div id="contactcont">
            {contextHolder}
            <form id="inputarea" onSubmit={handleSubmit} ref={form}>
              <input type="text" name="name" id="name" placeholder='name' required />
              <input type="email" name='email' id='email' placeholder='email' required />
              <input type="url" name='url' id='website' placeholder='Your Website (if exists)' />
              <textarea name="message" id="help" rows={10} placeholder='How can i help?' required ></textarea>
              <button type='submit'>Get In Touch</button>
            </form>
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
