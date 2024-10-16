import RevealOnScroll from "./animations/revealonscroll";
import ContactForm from "./contactForm";

export default function ContactText() {
    return (
      <RevealOnScroll>
      <section className="flex flex-col md:flex-row w-full max-w-8xl mx-auto gap-16 py-12 mt-40">
        {/* Left Side */}
        <div className="flex-[2.6] flex flex-col justify-start md:justify-center space-y-6 lg:mr-10 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold mb-5">Contact me here</h1>
          <ContactForm/>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col space-y-4 ml-auto">
     
          <div>
            <h2 className="font-bold text-4xl">Contact Details</h2>
            <p className="text-gray-700 text-2xl">kriszb924@gmail.com</p>
            <p className="text-gray-700 text-2xl">+36 30 506 8486</p>
          </div>
  
       
          <div>
            <h2 className="font-bold text-4xl">My Digital Spaces</h2>
            <ul className="space-y-2">
              <li><a href="https://github.com/chris924" className="text-gray-700 text-2xl">Github</a></li>
              <li><a href="https://www.linkedin.com/in/krisztofer-burka-756658232/" className="text-gray-700 text-2xl">LinkedIn</a></li>
            </ul>
          </div>
  
          <div>
            <h2 className="font-bold text-4xl">Location</h2>
            <p className="text-gray-700 text-2xl">Budapest, Hungary</p>
          </div>
        </div>
      </section>
      </RevealOnScroll>
    );
  }