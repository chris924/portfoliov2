import RevealOnScroll from "./animations/revealonscroll";
import "../styles/globals.css";
import { Link } from "@nextui-org/link";

export default function AboutText() {
  return (
    <>
     
        <section className="flex flex-col items-center justify-center gap-2 mt-16 md:mt-20 md:py-10">
          <div className="inline-block max-w-5xl justify-center mt-16 py-10">
            <RevealOnScroll revealThreshold={0.5}>
            <span className="font-medium font-unisansheavy text-6xl block mb-20 mt-40 lg:mt-10 flex flex-col items-center justify-center
              transform translate-y-10 transition-all duration-700 ease-out reveal-in-view pb-10">
              About Me
            </span>
            </RevealOnScroll>

  

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
              {/* Left side - Image */}
              <div className="md:w-1/2 lg:mt-20">
                <img
                  src="/images/self.jpg"
                  alt="Portrait picture"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

             
              {/* Right side - Text */}
              <div className="md:w-1/2 flex flex-col self-start text-justify gap-10 mt-20">
              <RevealOnScroll>
                <div className="text-5xl font-medium">A Brief intro, who am I</div>
                </RevealOnScroll>
                <div className="flex flex-col text-base space-y-8 text-3xl">
                  <RevealOnScroll revealThreshold={0.7}>
                    <span className="text-2xl">
                      I am a fullstack developer based in Budapest, Hungary, with a
                      passion for creating digital experiences that empower businesses to inspire, connect, and make an impact.
                    </span>
                  </RevealOnScroll>

                  <RevealOnScroll revealThreshold={0.7}>
                    <span className="text-2xl">
                      I am currently working at Info-M Zrt., where I focus on both backend and frontend development using technologies like C++ and TypeScript.
                    </span>
                  </RevealOnScroll>

                  <RevealOnScroll>
                    <span className="text-2xl">
                      Outside of development, I love spending time in nature, tending to my garden, staying active at the gym, catching up with friends, and cooking delicious meals.
                    </span>
                  </RevealOnScroll>

                  <RevealOnScroll>
                    <span className="text-2xl">
                      You can check out my resume <Link href="/about"><a className="text-blue-500 text-2xl underline">here</a></Link>.
                    </span>
                  </RevealOnScroll>
                </div>
              </div>
            </div>
          </div>
        </section>
     
    </>
  );
}
