export default function ContactText() {
    return (
      <section className="flex flex-col md:flex-row w-full max-w-8xl mx-auto gap-16 py-12 mt-40">
        {/* Left Side */}
        <div className="flex-[2.6] flex flex-col justify-start space-y-6 mr-10">
          <h1 className="text-8xl font-bold mb-5">Contact me here</h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="Your name"
              className="border-b border-gray-400 focus:outline-none focus:border-black p-2"
            />
            <input
              type="email"
              placeholder="Your email"
              className="border-b border-gray-400 focus:outline-none focus:border-black p-2"
            />
            <textarea
              placeholder="Your message"
              className="border-b border-gray-400 focus:outline-none focus:border-black p-2 md:col-span-2"
            />
            <button className="mt-4 bg-black text-white py-2 px-4 rounded-md md:col-span-2">
              Send Message
            </button>
          </form>
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
              <li><a href="#" className="text-gray-700 text-2xl">Github</a></li>
              <li><a href="#" className="text-gray-700 text-2xl">LinkedIn</a></li>
            </ul>
          </div>
  
          <div>
            <h2 className="font-bold text-4xl">Location</h2>
            <p className="text-gray-700 text-2xl">Budapest, Hungary</p>
          </div>
        </div>
      </section>
    );
  }