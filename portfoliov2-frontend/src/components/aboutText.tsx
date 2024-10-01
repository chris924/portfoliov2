import RevealOnScroll from "./animations/revealonscroll";
import "../styles/globals.css"


export default function AboutText() {

    return (
        <>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-40">
            <div className="inline-block max-w-5xl justify-center mt-20">
                {/* Container for image and text */}
                <RevealOnScroll>
                <span className="tracking-widest font-unisansheavy text-5xl block mb-4 flex flex-col items-center justify-center">ABOUT ME</span>
                </RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-20">
                  
                  {/* Left side - Image */}
                  <div className="md:w-1/2">
                    <img 
                      src="/images/self.jpg" 
                      alt="Portrait picture" 
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Right side - Text */}

                   {/* Right side - Text */}
                   
            {/* Right side - Text */}
            <div className="md:w-1/2 flex flex-col items-center text-center gap-20">
            <RevealOnScroll>
              <div className="text-5xl font-medium">          
                A Brief Intro Who I Am
              </div>
              </RevealOnScroll>
              
              <RevealOnScroll>
              <div className="flex flex-col text-base space-y-8 text-3xl">
             <span className="text-2xl"> I am a fullstack developer based in Budapest, Hungary, with a passion for creating digital experiences that empower businesses to inspire, connect, and make an impact.</span>
             <span className="text-2xl">Outside of development, I love spending time in nature, tending to my garden, staying active at the gym, catching up with friends, and cooking delicious meals.</span>
              </div>
              </RevealOnScroll>
            </div>
          </div>
             
            </div>
          </section>
        </>
      );
}