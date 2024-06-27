"use client";
const Content = () => {
  return (
    <main className="overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
      <div>
        <div className="flex items-center justify-center h-screen bg-fixed bg-background_1 bg-auto md:bg-cover h-screen bg-fixed flex items-center justify-center">
          <div className="text-center text-white max-w-xl">
            <h1 className="text-5xl">Medchain</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start h-screen bg-fixed bg-im2 bg-cover">
          <div className=" text-white max-w-xl bottom-0 left-0">
            <h1 className="text-2xl">Medchain</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start h-screen bg-fixed bg-im3 bg-cover">
          <div className=" text-white max-w-xl">
            <h1 className="text-2xl">Medchain</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start h-screen bg-fixed bg-im4 bg-cover">
          <div className="text-white max-w-xl">
            <h1 className="text-2xl ">Medchain</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <style jsx global>
          {`
            body::-webkit-scrollbar {
              width: 8px; /* width of the entire scrollbar */
            }

            body::-webkit-scrollbar-track {
              background: grey; /* color of the tracking area */
            }

            body::-webkit-scrollbar-thumb {
              background-color: black; /* color of the scroll thumb */
              border-radius: 20px; /* roundness of the scroll thumb */
              border: 3px solid orange; /* creates padding around scroll thumb */
            }
          `}
        </style>
      </div>
    </main>
  );
};

export default Content;
