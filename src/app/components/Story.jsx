"use client";
import Image from "next/image";

const Story = () => {
  return (
    <section id="sec">
      <style>{`
        body {
          scrollbar-width: none;
        }

        ::-webkit-scrollbar {
          display: none;
        }
        


        @media (max-width: 768px) {
          #img {
            display: none;
          }
        }
        
      `}</style>
      <div className="h-screen flex items-center bg-scroll bg-sabya md:bg-im5 bg-cover overflow-y-auto overflow-x-hidden z-10 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            id="img"
            src="/sabya.png"
            width={600}
            height={300}
            alt="photo"
          />
        </div>
        <div
          style={{ marginTop: "300px" }}
          className="flex flex-col justify-center items-start text-white p-8"
        >
          <h1 className="text-4xl mb-4">Story</h1>
          <div className="max-w-xl">
            <p>
              Sabyasachi Mohanty is a visionary Innovator and a trailblazer in
              integrating data science with healthcare. Having dedicated his
              academic and professional journey to Healthcare, Sabyasachi spent
              several years at prominent research institutions, where he focused
              on healthcare data analysis and machine learning applications in
              systems biology. His remarkable contributions include developing
              Python pipelines for pharmacometric prediction. Sabyasachi is
              recognized for his inventive use of machine learning to analyze
              vast datasets, leading to innovations in drug repurposing for
              immune system-related diseases and advancing our understanding of
              diseases.Sabyasachi laid the foundation for his career by engaging
              deeply in research on machine learning and big data analytics for
              health conditions like COVID-19 and ovarian cancer. His extensive
              work is documented in numerous peer-reviewed publications,
              establishing him as a key inventor in the burgeoning field of
              healthcare. Driven by a passion for enhancing healthcare through
              technology, Sabyasachi founded MedChain. This groundbreaking
              initiative is aimed at revolutionizing medical data management
              using blockchain technology. MedChain facilitates a secure,
              transparent, and efficient platform where individuals can manage
              their medical data and contribute anonymously to medical research,
              ensuring their privacy while providing invaluable data for
              advancements in medical science. Sabyasachi and his team envision
              a future where medical data becomes more accessible yet secure
              through advanced blockchain solutions, redefining how personal
              health is managed and accelerated through technological
              innovation. At MedChain, Sabyasachi's leadership is not just about
              advancing technology but also about fostering a culture of
              innovation and integrity, ensuring that the solutions developed
              serve to enhance patient care and global health outcomes. By
              prioritizing human-centric design and ethical standards, MedChain
              is not just adapting to the healthcare landscape as it exists
              today but is actively shaping it for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
