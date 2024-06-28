"use client";
import Image from "next/image";
const Team = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        marginLeft: "10px",
        marginRight: "10px",
        fontSize: "40px",
      }}
    >
      <h1 className="flex justify-center items-center">
        <b>News</b>
      </h1>
      <br />
      <section
        id="News"
        className="flex flex-row align-items-center"
        style={{ alignItems: "center", position: "relative" }}
      >
        <div
          style={{ flex: "1 0 50%", maxWidth: "50%", backgroundColor: "white" }}
        >
          <Image
            src="/dramin.png"
            width={500}
            height={300}
            objectFit="cover"
            className="flex-none"
          />
        </div>
        <p
          className="max-w-xl"
          style={{
            flex: "1 0 50%",
            maxWidth: "50%",
            fontSize: "18px",
            padding: "20px",
          }}
        >
          lorem ipsum lorem ipsum lorem
        </p>

        <style jsx global>{`
          #News {
            flex-direction: column;
            align-items: stretch;
            position: relative;
            margin: 0;
            padding: 0;
            height: 100vh; // Makes the section take the full height of the viewport
          }
        `}</style>
      </section>
      {/* //make another section like above but image in right and text in left rest same */}
      <section
        id="News"
        className="flex flex-row align-items-center "
        style={{ alignItems: "center", position: "relative" }}
      >
        <div
          style={{ flex: "1 0 50%", maxWidth: "50%", backgroundColor: "white" }}
          className="z-10 "
        >
          <Image
            src="/sabya.png"
            width={500}
            height={300}
            objectFit="cover"
            className="flex-none"
          />
        </div>
        <p
          className="max-w-xl z-20"
          style={{
            flex: "1 0 50%",
            maxWidth: "50%",
            fontSize: "18px",
            padding: "20px",
          }}
        >
          lorem ipsum lorem
        </p>

        <style jsx global>{`
          #News {
            flex-direction: column;
            align-items: stretch;
            position: relative;
            margin: 0;
            padding: 0;
            height: 100vh; // Makes the section take the full height of the viewport
          }
        `}</style>
      </section>
    </div>
  );
};
export default Team;
