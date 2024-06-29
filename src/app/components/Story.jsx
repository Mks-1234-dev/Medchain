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
              systems biology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
